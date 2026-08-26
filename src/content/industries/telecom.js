/**
 * Industry: Telecom
 *
 * Section eyebrows and headings are the same on all nine industries, so they
 * live in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "telecom",
  title: "Telecom",
  tagline: "Automation at the scale networks demand",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/telecom.webp",
  summary: "Process automation, B2B integration, and AI service operations for telecom providers managing massive scale on thin margins.",
  order: 4,
  inFooter: true,
  status: "published",

  intro: [
    "Telecom operators manage enormous customer bases, complex partner ecosystems, and relentless price pressure. Margin lives in operational efficiency: every manual order, ticket, and reconciliation multiplied by telecom scale becomes a significant cost (and a significant automation opportunity).",
  ],

  challenges: [
    "High-volume service and order processes with manual steps that don't scale.",
    "Partner and wholesale data exchange still handled by files and email.",
    "Customer support costs rising with expectations.",
    "Data fragmented across OSS/BSS generations.",
    "Field workforce coordination across huge territories.",
  ],

  aiImpact: [
    "AI triage classifies and routes tickets and orders before humans touch them.",
    "Grounded assistants resolve routine customer and agent queries instantly.",
    "Document AI processes interconnect agreements, site leases, and partner contracts.",
    "Anomaly detection flags revenue leakage and process failures at scale.",
  ],

  microsoftEnablement: [
    "Azure Integration Services automates partner and wholesale B2B exchange.",
    "Power Platform digitizes order, provisioning, and field workflows quickly.",
    "Teams and SharePoint coordinate distributed operations with governance.",
    "Azure data services unify OSS/BSS data for analytics and AI.",
  ],

  outcomes: [
    "Cost-to-serve reduced across service operations",
    "Partner transactions flowing without manual exchange",
    "Support deflection through grounded AI assistance",
    "Field operations coordinated digitally at territory scale",
    "Revenue leakage surfaced and stopped",
  ],

  solutions: [
    "workflow-automation-platform",
    "b2b-integration",
    "ai-chatbot-solutions",
    "job-management-system",
    "contract-management-system",
  ],

  relatedServices: [
    "agentic-ai-automation",
    "custom-software-development",
    "data-business-intelligence",
    "it-staff-augmentation",
  ],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Telecom Industry Solutions",
    description: "Process automation, B2B integration, and AI service operations for telecom providers managing massive scale on thin margins.",
  },
};

export default industry;
