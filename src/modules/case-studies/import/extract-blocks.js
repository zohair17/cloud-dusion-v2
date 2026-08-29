import { inflateRawSync, inflateSync } from "node:zlib";

/**
 * Turning an uploaded case study into blocks of text.
 *
 * The site's own case studies are authored records. This is for the other kind:
 * a Word or PDF write-up that already exists and needs to be read onto the page
 * without anyone retyping it. What comes back is a flat list of blocks, each
 * knowing whether it was a heading and which of its runs were bold, because
 * those two facts are the whole of what the layout needs: headings decide which
 * section a paragraph belongs to, and bold has to survive the trip.
 *
 * Both readers are written here rather than pulled in as dependencies. A .docx
 * is a zip of XML, and a PDF's text operators are plain once its streams are
 * inflated, so the two formats cost about a hundred lines between them and no
 * supply chain at all.
 */

/* ------------------------------------------------------------------- shared */

/** One paragraph: its runs, whether it was set as a heading, its plain text. */
function block(runs, heading = false) {
  const parts = runs.filter((run) => run.text.trim().length > 0);
  const text = runs
    .map((run) => run.text)
    .join("")
    .replace(/\s+/g, " ")
    .trim();

  return { runs: parts, heading, text };
}

/* ---------------------------------------------------------------- zip / docx */

/**
 * Reads one named file out of a zip, by walking the central directory.
 *
 * Only the two storage methods a Word file actually uses are handled: stored
 * and deflate. Anything else is a document we were not given.
 */
function readZipEntry(buffer, name) {
  const end = buffer.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  if (end < 0) throw new Error("Not a zip archive.");

  const count = buffer.readUInt16LE(end + 10);
  let offset = buffer.readUInt32LE(end + 16);

  for (let index = 0; index < count; index += 1) {
    const nameLength = buffer.readUInt16LE(offset + 28);
    const extraLength = buffer.readUInt16LE(offset + 30);
    const commentLength = buffer.readUInt16LE(offset + 32);
    const entryName = buffer.toString("utf8", offset + 46, offset + 46 + nameLength);

    if (entryName === name) {
      const local = buffer.readUInt32LE(offset + 42);
      const method = buffer.readUInt16LE(local + 8);
      const size = buffer.readUInt32LE(offset + 20);
      const localName = buffer.readUInt16LE(local + 26);
      const localExtra = buffer.readUInt16LE(local + 28);
      const start = local + 30 + localName + localExtra;
      const raw = buffer.subarray(start, start + size);

      return method === 0 ? raw : inflateRawSync(raw);
    }

    offset += 46 + nameLength + extraLength + commentLength;
  }

  throw new Error(`${name} is missing from the archive.`);
}

const XML_ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };

function decodeXml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&(amp|lt|gt|quot|apos);/g, (_, name) => XML_ENTITIES[name]);
}

/** Word: one block per `w:p`, one run per `w:r`, bold off `w:b` or a heading style. */
function blocksFromDocx(buffer) {
  const xml = readZipEntry(buffer, "word/document.xml").toString("utf8");
  const blocks = [];

  for (const [, paragraph] of xml.matchAll(/<w:p[ >][\s\S]*?<\/w:p>/g).map((m) => [null, m[0]])) {
    const style = /<w:pStyle[^>]*w:val="([^"]+)"/.exec(paragraph)?.[1] ?? "";
    const heading = /^(Heading|Title|Subtitle)/i.test(style);
    const runs = [];

    for (const run of paragraph.matchAll(/<w:r[ >][\s\S]*?<\/w:r>/g)) {
      const source = run[0];
      const text = [...source.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)]
        .map((match) => decodeXml(match[1]))
        .join("");
      if (!text) continue;

      const bold = /<w:b\s*\/>|<w:b [^>]*w:val="(1|true|on)"/.test(source);
      runs.push({ text, bold });
    }

    if (runs.length) blocks.push(block(runs, heading));
  }

  return blocks;
}

/* --------------------------------------------------------------------- pdf */

/** Every FlateDecode stream in the file, inflated. Others are skipped. */
function pdfStreams(buffer) {
  const streams = [];
  let cursor = 0;

  for (;;) {
    const start = buffer.indexOf("stream", cursor);
    if (start < 0) break;
    const end = buffer.indexOf("endstream", start);
    if (end < 0) break;

    const header = buffer.toString("latin1", Math.max(0, start - 400), start);
    let from = start + 6;
    if (buffer[from] === 0x0d) from += 1;
    if (buffer[from] === 0x0a) from += 1;

    if (/FlateDecode/.test(header)) {
      const raw = buffer.subarray(from, end);
      try {
        streams.push(inflateSync(raw).toString("latin1"));
      } catch {
        /* A stream we cannot read is a stream with nothing in it for us. */
      }
    }

    cursor = end + 9;
  }

  return streams;
}

/** Unescapes one PDF literal string. */
function pdfString(value) {
  return value
    .replace(/\\([nrtbf()\\])/g, (_, code) => ({ n: "\n", r: "", t: "\t", b: "", f: "" })[code] ?? code)
    .replace(/\\([0-7]{1,3})/g, (_, code) => String.fromCharCode(parseInt(code, 8)));
}

/**
 * PDF: text is read off the content operators.
 *
 * `Tf` names the font and its size, `Tj` and `TJ` show text, and `Td`/`TD`/`T*`
 * move to a new line. There is no such thing as a paragraph in a content
 * stream, so a line break of more than the running font size starts a new
 * block, and a font whose name says Bold marks its runs bold. A run set
 * markedly larger than the body is treated as a heading, which is what lets the
 * sections below find themselves.
 */
function blocksFromPdf(buffer) {
  const runs = [];

  for (const content of pdfStreams(buffer)) {
    let size = 12;
    let bold = false;
    let line = 0;

    const tokens = content.matchAll(
      /\/([^\s/]+)\s+([\d.]+)\s+Tf|(-?[\d.]+)\s+(-?[\d.]+)\s+T[dD]|(T\*)|\(((?:[^()\\]|\\.)*)\)\s*Tj|\[((?:[^[\]\\]|\\.)*)\]\s*TJ/g,
    );

    for (const token of tokens) {
      const [, font, fontSize, , ty, star, literal, array] = token;

      if (font) {
        size = Number(fontSize) || size;
        bold = /bold|black|heavy|semib/i.test(font);
        continue;
      }
      if (ty !== undefined) {
        line = Math.abs(Number(ty));
        runs.push({ break: line });
        continue;
      }
      if (star) {
        runs.push({ break: line || size });
        continue;
      }

      const text = literal
        ? pdfString(literal)
        : [...array.matchAll(/\((?:[^()\\]|\\.)*\)/g)].map((part) => pdfString(part[0].slice(1, -1))).join("");

      if (text.trim()) runs.push({ text, bold, size });
    }
  }

  /* Runs into paragraphs: a gap taller than the type starts a new one. */
  const blocks = [];
  let current = [];
  let maxSize = 0;

  const flush = () => {
    if (!current.length) return;
    const body = current.map((run) => ({ text: run.text, bold: run.bold }));
    blocks.push({ ...block(body), size: maxSize });
    current = [];
    maxSize = 0;
  };

  for (const run of runs) {
    if (run.break !== undefined) {
      if (run.break > (maxSize || 12) * 1.45) flush();
      else if (current.length) current.push({ text: " ", bold: current[current.length - 1].bold });
      continue;
    }
    current.push(run);
    maxSize = Math.max(maxSize, run.size);
  }
  flush();

  /* Anything set above the body size, or short and entirely bold, is a heading. */
  const sizes = blocks.map((entry) => entry.size).filter(Boolean).sort((a, b) => a - b);
  const body = sizes[Math.floor(sizes.length / 2)] ?? 12;

  return blocks.map(({ size, ...entry }) => ({
    ...entry,
    heading:
      size > body * 1.15 ||
      (entry.text.length < 60 && entry.runs.length > 0 && entry.runs.every((run) => run.bold)),
  }));
}

/* ------------------------------------------------------------------- entry */

/** Blocks from whichever of the two formats this file is. */
export function extractBlocks(buffer, filename = "") {
  const isDocx = buffer[0] === 0x50 && buffer[1] === 0x4b;
  const isPdf = buffer.toString("latin1", 0, 5) === "%PDF-";

  if (isDocx) return blocksFromDocx(buffer);
  if (isPdf) return blocksFromPdf(buffer);

  throw new Error(`${filename || "That file"} is neither a PDF nor a .docx.`);
}

export default extractBlocks;
