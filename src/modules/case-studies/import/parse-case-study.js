/**
 * Sorting extracted blocks into the sections a case study is made of.
 *
 * The document is the authority: a section exists on the page only if its
 * heading was in the file. Nothing is invented to fill a gap, because a case
 * study with a fabricated Business Challenge is worse than one without it.
 *
 * Matching is on the heading's words rather than an exact string, so "Business
 * Challenges", "The Business Challenge" and "Business Challenge:" all land in
 * the same place.
 */
const SECTIONS = [
  { id: "summary", label: "Summary", match: /^(summary|overview|executive summary)\b/i },
  { id: "industry", label: "Industry", match: /^industr/i, inline: true },
  { id: "technologies", label: "Technologies", match: /^(technolog|tech stack|tools)/i, inline: true },
  {
    id: "outcomes",
    label: "Business Outcomes",
    match: /^(business (outcomes?|gains?|impact|results?)|outcomes? (achieved|delivered))/i,
    inline: true,
  },
  { id: "customer", label: "About Our Customer", match: /^(about (our )?(the )?(customer|client)|the customer|client profile)/i },
  { id: "challenge", label: "Business Challenge", match: /^((the )?business challenge|challenges?|the problem|problem statement)/i },
  { id: "solution", label: "Solution Provided", match: /^((the )?solution( provided| delivered)?|what we (built|did)|our approach)/i },
  { id: "techFeatures", label: "Tech Page Features", match: /^(tech(nical)? (page )?features?|platform features?)/i },
  { id: "keyFeatures", label: "Key Outcomes Features", match: /^key outcomes?\s*(features?|highlights?)/i },
  { id: "keyOutcomes", label: "Key Outcomes", match: /^(key outcomes?|results?|the results?|impact)\b/i },
  { id: "review", label: "Review", match: /^(review|testimonial|what the client said|feedback|conclusion)/i },
];

/** True when a block reads as a bullet rather than a sentence. */
function isBullet(text) {
  return /^([-•*•▪●]|\d+[.)])\s+/.test(text);
}

function stripBullet(text) {
  return text.replace(/^([-•*•▪●]|\d+[.)])\s+/, "");
}

/**
 * A heading's own section, if it names one.
 *
 * Long lines are never headings whatever they were styled as: a paragraph set
 * in bold is still a paragraph.
 */
function sectionFor(text) {
  if (text.length > 70) return null;
  const clean = text.replace(/[:–—-]\s*$/, "").trim();

  return SECTIONS.find((section) => section.match.test(clean)) ?? null;
}

/**
 * The document title, and the part of it that carries the client's name.
 *
 * Case study titles read "X Implementation for Y", and the reference sets the
 * "for Y" in the brand colour, so the split is worth keeping.
 */
function splitTitle(text) {
  const match = /^(.*?)(\s+(?:for|at|with)\s+.+)$/i.exec(text);
  if (!match) return { title: text, titleAccent: null };

  return { title: match[1].trim(), titleAccent: match[2].trim() };
}

/**
 * Blocks in, one case study out.
 *
 * The first heading that names no section is taken as the title; everything
 * after a section's heading belongs to it until the next heading arrives.
 */
export function parseCaseStudy(blocks) {
  const sections = new Map();
  let current = null;
  let title = null;

  for (const entry of blocks) {
    if (!entry.text) continue;

    if (entry.heading) {
      const section = sectionFor(entry.text);

      if (section) {
        current = section.id;
        if (!sections.has(current)) sections.set(current, { ...section, blocks: [] });
        continue;
      }

      /* A heading we do not know: the first is the title, the rest are
         sub-heads inside whichever section is open. */
      if (!title) {
        title = entry.text;
        current = null;
        continue;
      }
    }

    if (!current) continue;
    sections.get(current).blocks.push(entry);
  }

  /* Inline facts are single values, not prose: they are joined into one line. */
  const value = (id) => {
    const section = sections.get(id);
    if (!section?.blocks.length) return null;

    return section.blocks.map((entry) => stripBullet(entry.text)).join(", ");
  };

  const prose = (id) => {
    const section = sections.get(id);
    if (!section?.blocks.length) return null;

    return {
      label: section.label,
      paragraphs: section.blocks.filter((entry) => !isBullet(entry.text)),
      bullets: section.blocks.filter((entry) => isBullet(entry.text)).map((entry) => ({
        ...entry,
        text: stripBullet(entry.text),
        runs: entry.runs.map((run, index) =>
          index === 0 ? { ...run, text: stripBullet(run.text) } : run,
        ),
      })),
    };
  };

  const summary = sections.get("summary");

  return {
    ...splitTitle(title ?? "Case study"),
    summary: summary?.blocks ?? [],
    industry: value("industry"),
    technologies: value("technologies"),
    outcomes: sections.get("outcomes")?.blocks.map((entry) => stripBullet(entry.text)) ?? [],
    customer: prose("customer"),
    challenge: prose("challenge"),
    solution: prose("solution"),
    techFeatures: prose("techFeatures"),
    keyFeatures: prose("keyFeatures"),
    keyOutcomes: prose("keyOutcomes"),
    review: prose("review"),
  };
}

export default parseCaseStudy;
