/**
 * Index page copy for this bounded context.
 *
 * The heading, standfirst and page-level CTA of a listing page are content, not
 * template. Route segments read this record; they never inline copy.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").IndexPageRecord} */
export const caseStudiesPage = {
  title: "Case Studies",
  /* Split where the line breaks: the second half is the half set in brand. */
  tagline: "Work that changed",
  taglineAccent: "how clients operate",
  intro: "A selection of CFG delivery experience across AI, analytics, document management, and platform modernization. Client identities are anonymized where publication clearance is pending.",
  /* The intent is the standard one; only the wording is specific to this page. */
  ctas: [
    { intent: "discuss-requirements", label: "Discuss a Similar Project" }
  ],
  seo: {
    title: "Case Studies",
    description: "A selection of CFG delivery experience across AI, analytics, document management, and platform modernization."
  }
};

export default caseStudiesPage;
