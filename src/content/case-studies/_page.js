/**
 * Index page copy for this bounded context.
 *
 * The heading, standfirst and page-level CTA of a listing page are content, not
 * template. Route segments read this record; they never inline copy.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").IndexPageRecord} */
export const caseStudiesPage = {
  title: "Case Studies",
  tagline: "Work that changed how clients operate",
  intro: "A selection of CFG delivery experience across AI, analytics, document management, and platform modernization. Client identities are anonymized where publication clearance is pending.",
  ctas: [
    "discuss-requirements"
  ],
  seo: {
    title: "Case Studies",
    description: "A selection of CFG delivery experience across AI, analytics, document management, and platform modernization."
  }
};

export default caseStudiesPage;
