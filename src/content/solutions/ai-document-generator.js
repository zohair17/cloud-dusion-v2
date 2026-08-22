/**
 * Solution — AI-Enabled Document Generator
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "ai-document-generator",
  title: "AI-Enabled Document Generator",
  tagline: null,
  /** Glyph id; the component owns the actual icon. */
  icon: "file-output",
  summary: "Automated generation of contracts, proposals, reports, and letters — assembled from templates, your data, and AI drafting, with human review built in.",
  categoryId: "ai",
  order: 2,
  status: "outline",
  problem: null,
  businessChallenges: [],
  overview: [],
  howItWorks: [],
  capabilities: [],
  aiCapabilities: [],
  benefits: [],
  useCases: [],
  technologies: [],
  industries: [],
  relatedServices: [],
  relatedSolutions: [],
  relatedCaseStudies: [],
  ctas: [
    "request-demo",
    "talk-to-expert"
  ],
  seo: {
    title: "AI-Enabled Document Generator",
    description: "Automated generation of contracts, proposals, reports, and letters — assembled from templates, your data, and AI drafting, with human review built in."
  }
};

export default solution;
