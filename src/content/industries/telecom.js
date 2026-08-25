/**
 * Industry: Telecom
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "telecom",
  title: "Telecom",
  tagline: null,
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/telecom.webp",
  summary: "Process automation, B2B integration, and AI service operations for telecom providers managing massive scale on thin margins.",
  order: 4,
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
    title: "Telecom Industry Solutions",
    description: "Process automation, B2B integration, and AI service operations for telecom providers managing massive scale on thin margins."
  }
};

export default industry;
