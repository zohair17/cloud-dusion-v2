/**
 * Industry: Energy
 *
 * Section eyebrows and headings are the same on all nine industries, so they
 * live in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "energy",
  title: "Energy",
  tagline: "Operational intelligence for critical infrastructure",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/energy.webp",
  summary: "Document control, field automation, and analytics for energy operators: built to the security standards critical infrastructure demands.",
  order: 3,
  inFooter: true,
  status: "published",

  intro: [
    "Energy companies operate long-lived assets, distributed field teams, and heavy compliance obligations, often on aging systems and paper-driven processes. Digital transformation here must respect operational reality: security first, offline-capable field tools, and documentation that stands up to regulators."],

  challenges: [
    "Asset and compliance documentation scattered across decades of formats.",
    "Field operations running on paper, phone calls, and disconnected tools.",
    "Critical infrastructure security requirements constraining cloud choices.",
    "Aging workforce carrying undocumented operational knowledge.",
    "Regulatory reporting consuming engineering time."],

  aiImpact: [
    "AI document processing organizes decades of asset records, permits, and inspections into searchable, governed archives.",
    "Field capture with AI reads meters, forms, and equipment tags from photos.",
    "Knowledge assistants preserve and share retiring experts' operational knowledge.",
    "Predictive analytics on telemetry surfaces maintenance needs before failures."],

  microsoftEnablement: [
    "Azure hybrid and sovereign options meet critical infrastructure security requirements.",
    "SharePoint and Purview provide controlled documents and defensible records.",
    "Power Apps deliver offline-capable field tools for inspections and work orders.",
    "Power BI unifies operational and financial reporting across assets."],

  outcomes: [
    "Asset documentation findable and audit-ready",
    "Field data captured once, at the source",
    "Institutional knowledge preserved past retirements",
    "Compliance reporting produced from live data",
    "Security posture appropriate to critical infrastructure"],

  solutions: [
    "ai-document-management",
    "job-management-system",
    "self-hosted-enterprise-ai",
    "records-management-system",
    "self-hosted-sharepoint-sites"],

  relatedServices: [
    "microsoft-cloud-solutions",
    "data-security-governance",
    "power-platform-solutions",
    "data-business-intelligence"],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Energy Industry Solutions",
    description: "Document control, field automation, and analytics for energy operators: built to the security standards critical infrastructure demands.",
  },
};

export default industry;
