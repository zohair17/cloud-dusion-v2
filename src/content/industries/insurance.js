/**
 * Industry: Insurance
 *
 * Section eyebrows and headings are the same on every industry, so they live
 * in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "insurance",
  title: "Insurance",
  tagline: "Faster underwriting, cleaner claims, provable compliance",
  image: "/asset/industries/insurance.webp",
  summary: "Document intelligence and workflow automation for insurers: policies, claims, and submissions handled in hours instead of days.",
  order: 11,
  inFooter: true,
  status: "published",

  intro: [
    "Insurance is a document business wearing a financial services badge. Submissions, policies, endorsements, and claims arrive as PDFs and email attachments, and every day spent moving them between people is a day of exposure. The work is to read those documents once, route them automatically, and keep an auditable trail behind every decision."],

  challenges: [
    "Submissions and claims arriving as unstructured email and PDF.",
    "Underwriting decisions waiting on manual data entry.",
    "Policy documents versioned inconsistently across teams and brokers.",
    "Regulatory and audit requests reconstructed by hand.",
    "Fraud signals spotted late, after payment."],

  aiImpact: [
    "AI extraction pulls insured values, coverages, and loss history from submissions into the core system.",
    "Claims triage classifies and routes intake automatically, with evidence attached.",
    "Semantic search puts policy wordings and precedent in front of the adjuster instantly.",
    "Anomaly detection surfaces suspicious patterns before settlement."],

  microsoftEnablement: [
    "Azure AI Document Intelligence turns submissions and claims packets into structured data.",
    "SharePoint and Purview govern policy documents with retention and legal hold.",
    "Power Automate moves work through underwriting, approval, and settlement without email chains.",
    "Power BI reports loss ratio, cycle time, and portfolio exposure from live data."],

  outcomes: [
    "Submissions read in minutes, not days",
    "Claims routed the moment they arrive",
    "One governed version of every policy document",
    "Audit and regulatory requests answered from the system",
    "Exposure and loss ratio visible in near real time"],

  solutions: [
    "ai-document-management",
    "contract-management-system",
    "request-approval-system",
    "workflow-automation-platform",
    "records-management-system"],

  relatedServices: [
    "agentic-ai-automation",
    "data-security-governance",
    "power-platform-solutions",
    "data-business-intelligence"],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Insurance Industry Solutions",
    description: "Document intelligence and workflow automation for insurers: policies, claims, and submissions handled in hours instead of days.",
  },
};

export default industry;
