/**
 * Industry: Government
 *
 * Section eyebrows and headings are the same on every industry, so they live
 * in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "government",
  title: "Government",
  tagline: "Public services that citizens can actually use",
  image: "/asset/industries/government.webp",
  summary: "Records management, case workflow, and citizen-facing services for public sector bodies, built to the sovereignty and accessibility standards they answer to.",
  order: 13,
  inFooter: true,
  status: "published",

  intro: [
    "Public sector bodies carry obligations no commercial buyer has: records that must survive decades, services that must be accessible to everyone, and data that often cannot leave the jurisdiction. Modernization has to meet those obligations rather than work around them, which is why architecture matters more here than features."],

  challenges: [
    "Statutory records held in formats and systems past end of life.",
    "Case work moving between departments on paper and email.",
    "Citizen requests answered manually, at unpredictable speed.",
    "Data residency and sovereignty limiting cloud options.",
    "Accessibility and transparency requirements retrofitted late."],

  aiImpact: [
    "AI classification organizes legacy archives into searchable, retention-governed records.",
    "Assistants answer routine citizen questions in plain language, around the clock.",
    "Document intelligence reads applications and forms into case systems on arrival.",
    "Translation and summarization make services reachable in more languages."],

  microsoftEnablement: [
    "Azure sovereign, hybrid, and self-hosted options keep data inside the jurisdiction.",
    "SharePoint and Purview provide statutory retention, disposition, and legal hold.",
    "Power Platform delivers case and approval workflows without long build cycles.",
    "Power BI publishes performance and transparency reporting from live data."],

  outcomes: [
    "Statutory records governed and findable",
    "Case work tracked end to end, with a clear owner",
    "Citizen requests answered faster and more consistently",
    "Data held where policy requires it to be held",
    "Accessible services built in from the start"],

  solutions: [
    "records-management-system",
    "self-hosted-enterprise-ai",
    "self-hosted-sharepoint-sites",
    "request-approval-system",
    "intranet-portal"],

  relatedServices: [
    "data-security-governance",
    "microsoft-cloud-solutions",
    "power-platform-solutions",
    "sharepoint-solutions"],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Government Industry Solutions",
    description: "Records management, case workflow, and citizen-facing services for public sector bodies, built to the sovereignty and accessibility standards they answer to.",
  },
};

export default industry;
