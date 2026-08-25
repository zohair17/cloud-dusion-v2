/**
 * Industry: Non-Profit
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "non-profit",
  title: "Non-Profit",
  tagline: null,
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/non-profit.webp",
  summary: "Affordable automation, governed collaboration, and donor transparency for organizations where every hour and dollar must serve the mission.",
  order: 9,
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
    title: "Non-Profit Industry Solutions",
    description: "Affordable automation, governed collaboration, and donor transparency for organizations where every hour and dollar must serve the mission."
  }
};

export default industry;
