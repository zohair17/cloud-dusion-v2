/**
 * Industry: Transportation
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "transportation",
  title: "Transportation",
  tagline: null,
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/transportation.webp",
  summary: "Document automation, partner integration, and operational visibility for logistics and transportation operators.",
  order: 8,
  inFooter: false,
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
    title: "Transportation Industry Solutions",
    description: "Document automation, partner integration, and operational visibility for logistics and transportation operators."
  }
};

export default industry;
