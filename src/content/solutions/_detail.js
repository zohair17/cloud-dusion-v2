/**
 * Shared furniture for every solution detail page.
 *
 * The headings that introduce the cross-links, and the invitation the page
 * closes on, are the same on all twenty-seven solutions, so they are authored
 * once here rather than repeated in twenty-seven records. Only the solution's
 * own name varies, which the template substitutes.
 */
export const solutionDetailSections = {
  technologies: {
    eyebrow: "Microsoft Technologies",
    heading: "Built on the Microsoft stack",
  },

  benefits: {
    eyebrow: "Benefits",
    heading: "What changes",
  },

  useCases: {
    eyebrow: "Use Cases",
    heading: "Where it fits",
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "Key capabilities",
  },

  industries: {
    eyebrow: "Industries",
    heading: "Industries this serves",
  },

  related: {
    eyebrow: "Related",
    heading: "Related services and solutions",
    servicesLabel: "Services",
    solutionsLabel: "Solutions",
  },

  closing: {
    /** `{title}` is replaced with the solution's own name. */
    heading: "See {title} in your context",
    body: "Bring us your documents, workflows, or portfolio, and we'll walk through exactly how this solution would work in your environment.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },
};

export default solutionDetailSections;
