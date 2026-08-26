/**
 * Industry: Transportation
 *
 * Section eyebrows and headings are the same on all nine industries, so they
 * live in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "transportation",
  title: "Transportation",
  tagline: "Every shipment, document, and handoff, connected",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/transportation.webp",
  summary: "Document automation, partner integration, and operational visibility for logistics and transportation operators.",
  order: 8,
  inFooter: false,
  status: "published",

  intro: [
    "Transportation runs on handoffs (between shippers, carriers, drivers, customs, and customers) and every handoff generates documents and data that today move by email, paper, and re-keying. Connecting those flows is where margin, speed, and service all improve at once.",
  ],

  challenges: [
    "PODs, bills of lading, and customs documents processed by hand.",
    "Partner data exchange stuck in emails and spreadsheets.",
    "No real-time operational picture across the network.",
    "Driver and field workflows still paper-based.",
    "Margin pressure demanding efficiency at every step.",
  ],

  aiImpact: [
    "Document AI reads PODs, invoices, and customs paperwork automatically.",
    "AI triage routes exceptions (delays, damages, disputes) to the right teams.",
    "Predictive analytics improve ETA accuracy and capacity planning.",
    "Assistants answer shipment status queries without human lookup.",
  ],

  microsoftEnablement: [
    "Azure Integration Services automates EDI and API exchange with partners.",
    "Power Apps give drivers and depots mobile, offline-capable workflows.",
    "Power BI provides live operational dashboards across the network.",
    "Dynamics and Azure data services unify orders, costs, and margins.",
  ],

  outcomes: [
    "Document processing hours removed from every shipment",
    "Partner onboarding in days instead of months",
    "Live visibility across the operational network",
    "Exceptions handled before customers call",
    "Margin recovered through connected operations",
  ],

  solutions: [
    "b2b-integration",
    "workflow-automation-platform",
    "erp-wholesale-distribution",
    "job-management-system",
    "ai-document-management",
  ],

  relatedServices: [
    "agentic-ai-automation",
    "custom-software-development",
    "power-platform-solutions",
    "data-business-intelligence",
  ],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Transportation Industry Solutions",
    description: "Document automation, partner integration, and operational visibility for logistics and transportation operators.",
  },
};

export default industry;
