/**
 * Industry: Manufacturing
 *
 * Section eyebrows and headings are the same on every industry, so they live
 * in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "manufacturing",
  title: "Manufacturing",
  tagline: "Connected production, from the shop floor to the ledger",
  image: "/asset/industries/manufacturing.webp",
  summary: "ERP, quality documentation, and production analytics for manufacturers: one record of the order from quote to shipment.",
  order: 10,
  inFooter: true,
  status: "published",

  intro: [
    "Manufacturers run on precision, yet the systems around production rarely match it. Orders arrive in email, quality records live in binders, and the plant's real performance is reconstructed in spreadsheets days after the fact. Modernization here means connecting production, inventory, and finance so the numbers are the same everywhere."],

  challenges: [
    "Production, inventory, and finance living in disconnected systems.",
    "Quality and compliance records kept on paper or in isolated folders.",
    "Supplier documents rekeyed by hand into the ERP.",
    "Shop-floor data captured too late to act on.",
    "Maintenance run to a calendar rather than to condition."],

  aiImpact: [
    "AI document processing reads supplier invoices, packing lists, and certificates straight into the ERP.",
    "Vision models flag defects on the line and file the evidence with the batch.",
    "Demand and inventory forecasting reduce both stockouts and carrying cost.",
    "Knowledge assistants put work instructions and machine history in the operator's hands."],

  microsoftEnablement: [
    "Dynamics 365 Business Central runs orders, inventory, production, and finance on one ledger.",
    "Power Apps deliver offline-capable shop-floor tools for counts, checks, and work orders.",
    "SharePoint and Purview hold controlled quality documents with a defensible audit trail.",
    "Power BI reports OEE, yield, and margin from live production data."],

  outcomes: [
    "One record of the order from quote to shipment",
    "Quality evidence filed with the batch, not chased later",
    "Supplier paperwork captured once, at the source",
    "Plant performance visible the same day",
    "Inventory sized to real demand"],

  solutions: [
    "erp-manufacturing",
    "job-management-system",
    "workflow-automation-platform",
    "ai-document-management",
    "b2b-integration"],

  relatedServices: [
    "microsoft-cloud-solutions",
    "power-platform-solutions",
    "data-business-intelligence",
    "custom-software-development"],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Manufacturing Industry Solutions",
    description: "ERP, quality documentation, and production analytics for manufacturers: one record of the order from quote to shipment.",
  },
};

export default industry;
