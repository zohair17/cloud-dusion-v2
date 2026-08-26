/**
 * Shared furniture for every industry detail page.
 *
 * The eyebrows, the section headings and the invitation the page closes on are
 * the same shape on all nine industries; only the industry's own name varies,
 * which the read model substitutes for `{name}`. Authoring them once here keeps
 * nine records free of nine copies of the same sentence.
 */
export const industryDetailSections = {
  challenges: {
    eyebrow: "Industry Challenges",
    heading: "What {name} organizations are up against",
  },

  aiImpact: {
    eyebrow: "How AI Helps",
    heading: "How AI changes the picture",
  },

  microsoftEnablement: {
    eyebrow: "How Microsoft Helps",
    heading: "How Microsoft technologies deliver it",
  },

  solutions: {
    eyebrow: "CFG Solutions",
    heading: "Solutions we bring to {name}",
  },

  services: {
    eyebrow: "CFG Services",
    heading: "Services behind the solutions",
  },

  outcomes: {
    eyebrow: "Business Outcomes",
    heading: "What changes for the business",
  },

  closing: {
    /** `{name}` is replaced with the industry's own name, lower case. */
    heading: "Transforming {name}? Let's talk.",
    body: "Bring us your industry's hardest operational problem: we'll show you what AI and Microsoft technologies can do with it.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },
};

export default industryDetailSections;
