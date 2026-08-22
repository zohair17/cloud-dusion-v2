/**
 * Industry — Healthcare
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "healthcare",
  title: "Healthcare",
  tagline: "More time for care, less time for paperwork",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/healthcare.webp",
  summary: "Intelligent document processing, compliant collaboration, and automation that give clinical and administrative teams their time back.",
  order: 1,
  inFooter: true,
  status: "outline",
  intro: [],
  challenges: [],
  aiImpact: [],
  microsoftEnablement: [],
  solutions: [],
  relatedServices: [],
  relatedCaseStudies: [],
  ctas: [
    "talk-to-expert"
  ],
  seo: {
    title: "Healthcare Industry Solutions",
    description: "Intelligent document processing, compliant collaboration, and automation that give clinical and administrative teams their time back."
  }
};

export default industry;
