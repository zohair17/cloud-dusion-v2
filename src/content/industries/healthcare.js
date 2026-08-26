/**
 * Industry: Healthcare
 *
 * Section eyebrows and headings are the same on all nine industries, so they
 * live in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "healthcare",
  title: "Healthcare",
  tagline: "More time for care, less time for paperwork",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/healthcare.webp",
  summary: "Intelligent document processing, compliant collaboration, and automation that give clinical and administrative teams their time back.",
  order: 1,
  inFooter: true,
  status: "published",

  intro: [
    "Healthcare organizations carry a double burden: rising demand for care and rising administrative weight (documentation, referrals, compliance, and coordination across fragmented systems). The opportunity is not replacing clinical judgment with technology; it is removing the clerical load around it, safely and compliantly.",
  ],

  challenges: [
    "Clinical and administrative staff consumed by documentation and re-keying.",
    "Patient and referral documents arriving as faxes, scans, and PDFs.",
    "Strict privacy and compliance obligations constraining technology choices.",
    "Legacy systems and data silos blocking coordination across care settings.",
    "Workforce shortages making every recovered hour count.",
  ],

  aiImpact: [
    "AI document processing reads referrals, results, and correspondence, extracting and routing what clinicians need without manual triage.",
    "Grounded AI assistants answer policy, procedure, and administrative questions instantly for staff.",
    "Ambient and automated documentation reduces after-hours administrative work.",
    "Self-hosted and private AI deployment keeps protected health information inside the compliance boundary.",
  ],

  microsoftEnablement: [
    "Microsoft 365 and Teams provide compliant collaboration across clinical and administrative teams.",
    "SharePoint with Purview governs clinical documents, policies, and records with retention and audit built in.",
    "Power Platform digitizes intake, referral, and approval workflows without heavy custom builds.",
    "Azure provides HIPAA-eligible, auditable infrastructure for health workloads and AI.",
  ],

  outcomes: [
    "Administrative hours returned to patient-facing work",
    "Referrals and documents processed in minutes, not days",
    "Demonstrable compliance with privacy and retention obligations",
    "Staff questions answered instantly instead of escalating",
    "A governed data foundation for future clinical AI",
  ],

  solutions: [
    "ai-document-management",
    "records-management-system",
    "workflow-automation-platform",
    "ai-chatbot-solutions",
    "intranet-portal",
  ],

  relatedServices: [
    "agentic-ai-automation",
    "microsoft-syntex",
    "data-security-governance",
    "power-platform-solutions",
  ],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Healthcare Industry Solutions",
    description: "Intelligent document processing, compliant collaboration, and automation that give clinical and administrative teams their time back.",
  },
};

export default industry;
