/**
 * Industry — Financial Services
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "financial-services",
  title: "Financial Services",
  tagline: null,
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/financial-services.webp",
  summary: "Document intelligence, governed AI, and process automation for institutions where accuracy, auditability, and compliance are non-negotiable.",
  order: 2,
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
    title: "Financial Services Industry Solutions",
    description: "Document intelligence, governed AI, and process automation for institutions where accuracy, auditability, and compliance are non-negotiable."
  }
};

export default industry;
