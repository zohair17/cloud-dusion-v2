/**
 * Industry: Technology
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "technology",
  title: "Technology",
  tagline: null,
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/technology.webp",
  summary: "Product engineering, AI feature development, and scale-up capacity for software companies and technology-driven businesses.",
  order: 5,
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
    title: "Technology Industry Solutions",
    description: "Product engineering, AI feature development, and scale-up capacity for software companies and technology-driven businesses."
  }
};

export default industry;
