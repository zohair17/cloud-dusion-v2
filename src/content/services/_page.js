/**
 * Index page copy for this bounded context.
 *
 * The heading, standfirst and page-level CTA of a listing page are content, not
 * template. Route segments read this record; they never inline copy.
 */

/** @type {import("@/modules/services/domain/service.schema").IndexPageRecord} */
export const servicesPage = {
  title: "Services",
  tagline: "What we do for the intelligent enterprise",
  intro: "Twelve service lines, one narrative: AI-first thinking applied through Microsoft technologies to deliver measurable business outcomes.",
  ctas: [
    "talk-to-expert"
  ],
  seo: {
    title: "Services",
    description: "Twelve service lines, one narrative: AI-first thinking applied through Microsoft technologies to deliver measurable business outcomes."
  }
};

export default servicesPage;
