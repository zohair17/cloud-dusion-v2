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

  for (const match of xml.matchAll(/<w:p[ >][\s\S]*?<\/w:p>/g)) {
    const paragraph = match[0];
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

/**
 * Every indirect object in the file, by number.
 *
 * The xref table is skipped: scanning for `N 0 obj` finds the same objects and
 * survives the files whose xref is itself compressed. Each entry keeps its
 * dictionary text and, if it has one, the byte range of its stream.
 */
function pdfObjects(buffer) {
  const raw = buffer.toString("latin1");
  const objects = new Map();

  for (const match of raw.matchAll(/(\d+)\s+\d+\s+obj\b/g)) {
    const start = match.index + match[0].length;
    const end = raw.indexOf("endobj", start);
    if (end < 0) continue;

    const body = raw.slice(start, end);
    const stream = /\bstream\r?\n?/.exec(body);
    let from = null;
    let to = null;

    if (stream) {
      from = start + stream.index + stream[0].length;
      const close = raw.indexOf("endstream", from);
      if (close > 0) to = close;
    }

    objects.set(Number(match[1]), { dict: stream ? body.slice(0, stream.index) : body, from, to });
  }

  return { raw, objects };
}

/** The inflated bytes of one object's stream, or null. */
function objectStream(buffer, object) {
  if (!object || object.from === null || object.to === null) return null;
  if (!/FlateDecode/.test(object.dict)) return buffer.toString("latin1", object.from, object.to);

  try {
    return inflateSync(buffer.subarray(object.from, object.to)).toString("latin1");
  } catch {
    return null;
  }
}

/**
 * A font's `ToUnicode` CMap, as a lookup from character code to text.
 *
 * Text in these files is written as hex codes into a subset font, so without
 * the CMap the content stream reads as gibberish. `bfchar` maps single codes,
 * `bfrange` maps runs of them, and the codespace says whether codes are one
 * byte or two.
 */
function parseCMap(source) {
  const map = new Map();
  const width = /begincodespacerange[\s\S]*?<([0-9A-Fa-f]+)>/.exec(source)?.[1]?.length === 4 ? 2 : 1;

  const text = (hex) =>
    hex
      .match(/.{4}/g)
      ?.map((unit) => String.fromCharCode(parseInt(unit, 16)))
      .join("") ?? "";

  for (const section of source.matchAll(/beginbfchar([\s\S]*?)endbfchar/g)) {
    for (const pair of section[1].matchAll(/<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>/g)) {
      map.set(parseInt(pair[1], 16), text(pair[2]));
    }
  }

  for (const section of source.matchAll(/beginbfrange([\s\S]*?)endbfrange/g)) {
    for (const entry of section[1].matchAll(/<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*(?:<([0-9A-Fa-f]+)>|\[([\s\S]*?)\])/g)) {
      const low = parseInt(entry[1], 16);
      const high = parseInt(entry[2], 16);

      if (entry[3]) {
        const base = parseInt(entry[3], 16);
        for (let code = low; code <= high; code += 1) {
          map.set(code, String.fromCharCode(base + (code - low)));
        }
        continue;
      }

      const values = [...entry[4].matchAll(/<([0-9A-Fa-f]+)>/g)];
      values.forEach((value, index) => map.set(low + index, text(value[1])));
    }
  }

  return { map, width };
}

/** Every font resource in the file, by the name a content stream calls it. */
function pdfFonts(buffer) {
  const { raw, objects } = pdfObjects(buffer);
  const fonts = new Map();

  for (const resource of raw.matchAll(/\/Font\s*<<([^>]*)>>/g)) {
    for (const entry of resource[1].matchAll(/\/([^\s/]+)\s+(\d+)\s+\d+\s+R/g)) {
      const font = objects.get(Number(entry[2]));
      const reference = font && /\/ToUnicode\s+(\d+)\s+\d+\s+R/.exec(font.dict);
      if (!reference) continue;

      const cmap = objectStream(buffer, objects.get(Number(reference[1])));
      if (cmap) fonts.set(entry[1], parseCMap(cmap));
    }
  }

  return fonts;
}

/** Every content stream in the file, inflated. */
function pdfStreams(buffer) {
  const { objects } = pdfObjects(buffer);
  const streams = [];

  for (const object of objects.values()) {
    if (object.from === null) continue;
    const text = objectStream(buffer, object);
    if (text && /\bTJ\b|\bTj\b/.test(text)) streams.push(text);
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
 * `Tf` names the font and its size, `Tj` and `TJ` show text, and `Tm`/`Td`/`T*`
 * move the pen. There is no such thing as a paragraph in a content stream, so a
 * vertical move of more than the running type size starts a new block, and a
 * font whose name says Bold marks its runs bold. A run set markedly larger than
 * the body is treated as a heading, which is what lets the sections find
 * themselves further down.
 */
function blocksFromPdf(buffer) {
  const fonts = pdfFonts(buffer);
  const runs = [];

  for (const content of pdfStreams(buffer)) {
    let size = 12;
    let bold = false;
    let font = null;
    let y = null;

    const tokens = content.matchAll(
      /\/([^\s/]+)\s+([\d.]+)\s+Tf|(?:-?[\d.]+\s+){4}(-?[\d.]+)\s+(-?[\d.]+)\s+Tm|(-?[\d.]+)\s+(-?[\d.]+)\s+T[dD]|(T\*)|((?:<[0-9A-Fa-f\s]*>|\((?:[^()\\]|\\.)*\))\s*Tj)|(\[[\s\S]*?\]\s*TJ)/g,
    );

    for (const token of tokens) {
      const [, name, fontSize, , ty, , tdY, star, show, array] = token;

      if (name) {
        size = Number(fontSize) || size;
        bold = /bold|black|heavy|semib/i.test(name);
        font = fonts.get(name) ?? null;
        continue;
      }

      /* Both ways a PDF moves the pen down the page: `Tm` sets an absolute
         position, so the gap is the change in it; `Td` is already a delta. */
      if (ty !== undefined) {
        const next = Number(ty);
        if (y !== null) runs.push({ break: Math.abs(y - next) });
        y = next;
        continue;
      }
      if (tdY !== undefined) {
        runs.push({ break: Math.abs(Number(tdY)) });
        continue;
      }
      if (star) {
        runs.push({ break: size });
        continue;
      }

      const source = show ?? array;
      let text = "";

      for (const piece of source.matchAll(/<([0-9A-Fa-f\s]*)>|\(((?:[^()\\]|\\.)*)\)/g)) {
        if (piece[2] !== undefined) {
          text += pdfString(piece[2]);
          continue;
        }

        /* Hex is written in the font's own codes, so it is only text once the
           font's CMap has been through it. */
        const hex = piece[1].replace(/\s+/g, "");
        const width = (font?.width ?? 1) * 2;

        for (let index = 0; index + width <= hex.length; index += width) {
          const code = parseInt(hex.slice(index, index + width), 16);
          text += font?.map.get(code) ?? "";
        }
      }

      if (text) runs.push({ text, bold, size });
    }
  }

  /* Runs into paragraphs: a gap taller than the type starts a new one. */
  const blocks = [];
  let current = [];
  let maxSize = 0;

  const flush = () => {
    const body = current.map((run) => ({ text: run.text, bold: run.bold }));
    current = [];
    const entry = { ...block(body), size: maxSize };
    maxSize = 0;
    if (entry.text) blocks.push(entry);
  };

  for (const run of runs) {
    if (run.break !== undefined) {
      if (run.break > (maxSize || 12) * 1.4) flush();
      else if (current.length && !/\s$/.test(current[current.length - 1].text)) {
        current.push({ text: " ", bold: current[current.length - 1].bold });
      }
      continue;
    }
    current.push(run);
    maxSize = Math.max(maxSize, run.size);
  }
  flush();

  /* Anything set above the body size, or short and entirely bold, is a heading. */
  const sizes = blocks
    .map((entry) => entry.size)
    .filter(Boolean)
    .sort((a, b) => a - b);
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
