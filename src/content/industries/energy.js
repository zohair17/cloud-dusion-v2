/**
 * Industry: Energy
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "energy",
  title: "Energy",
  tagline: null,
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/energy.webp",
  summary: "Document control, field automation, and analytics for energy operators: built to the security standards critical infrastructure demands.",
  order: 3,
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
    title: "Energy Industry Solutions",
    description: "Document control, field automation, and analytics for energy operators: built to the security standards critical infrastructure demands."
  }
};

export default industry;
