/**
 * Index page copy for this bounded context.
 *
 * The heading, standfirst and page-level CTA of a listing page are content, not
 * template. Route segments read this record; they never inline copy.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").IndexPageRecord} */
export const solutionsPage = {
  title: "Solutions",
  tagline: "What we build for enterprises",
  intro: "Services are what we do. Solutions are what we build: platforms, systems, and applications engineered on AI and Microsoft technologies to solve specific business problems.",
  ctas: [
    "discuss-requirements"
  ],
  seo: {
    title: "Solutions",
    description: "Platforms, systems, and applications engineered on AI and Microsoft technologies to solve specific business problems."
  }
};

export default solutionsPage;
