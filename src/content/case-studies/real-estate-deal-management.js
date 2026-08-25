/**
 * Case study: Real Estate Deal Management
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "real-estate-deal-management",
  title: "Real Estate Deal Management",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/deal-management.webp",
  sectorLabel: "Real Estate",
  industrySlug: "real-estate",
  order: 6,
  client: "Confidential real estate investment organization",
  summary: "A structured deal management system replacing inbox-driven transaction work: pipeline, documents, and approvals in one governed workspace.",
  status: "outline",
  challenge: null,
  approach: [],
  solution: null,
  outcomes: [],
  metricsNote: null,
  technologies: [],
  relatedServices: [],
  relatedSolutions: [],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"
  ],
  seo: {
    title: "Real Estate Deal Management Case Study",
    description: "A structured deal management system replacing inbox-driven transaction work: pipeline, documents, and approvals in one governed workspace."
  }
};

export default caseStudy;
