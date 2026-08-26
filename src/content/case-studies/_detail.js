/**
 * Shared furniture for every case study detail page.
 *
 * A case study is always told in the same four beats, so the eyebrows and the
 * headings that introduce them are authored once here rather than repeated in
 * six records. Only what happened varies.
 */
export const caseStudyDetailSections = {
  challenge: {
    eyebrow: "The Challenge",
    heading: "Where it started",
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG delivered",
  },

  solution: {
    eyebrow: "The Solution",
    heading: "What was built",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What changed",
  },

  related: {
    eyebrow: "Related Services",
    heading: "The services behind this work",
  },

  closing: {
    heading: "Facing a similar challenge?",
    body: "Tell us about your project: we'll share how this experience applies to your situation.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },
};

export default caseStudyDetailSections;
