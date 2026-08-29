/**
 * Service: Power Platform Solutions
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "power-platform-solutions",
  title: "Power Platform Solutions",
  navLabel: "Power Platform",
  tagline: "Low-code speed with enterprise-grade discipline",
  summary: "Power Apps, Power Automate, Power BI, Copilot Studio, and Dataverse: business applications and automation delivered in weeks, governed for the enterprise.",
  groupId: "microsoft-platform",
  order: 6,
  status: "published",


  heroSlides: [
    { image: "/asset/services/power-platform-1.webp", label: "Working applications delivered in weeks" },
    { image: "/asset/services/power-platform-2.webp", label: "Manual processes replaced with auditable automation" },
    { image: "/asset/services/power-platform-3.webp", label: "A governed low-code estate, not shadow IT" }],

  intro: [
    "Business teams need applications and automation faster than traditional development can deliver them, but ungoverned low-code creates its own sprawl. The Power Platform, engineered with discipline, gives enterprises both: rapid delivery and a managed, secure application estate.",
    "Cloud Fusion Global builds Power Platform solutions the way we build enterprise software, with architecture, ALM, security models, and governance, and infuses them with AI through Copilot Studio and AI Builder so applications don't just capture data, they act on it."],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Business-critical processes running on spreadsheets, email, and tribal knowledge.",
      "IT backlogs that leave departmental needs unmet for quarters at a time.",
      "Citizen-developed apps growing without security, ALM, or governance.",
      "Data captured in forms but never turned into insight or action.",
      "Repetitive manual work across Microsoft 365 and line-of-business systems."],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Deliver business apps in weeks",
        description:
          "Power Apps built on well-modelled Dataverse foundations: fast to ship, safe to extend, ready to integrate.",
      },
      {
        title: "Automate across every system",
        description:
          "Power Automate and UiPath flows that connect Microsoft 365, legacy applications, and external services into end-to-end automation.",
      },
      {
        title: "Add intelligence to every step",
        description:
          "Copilot Studio agents and AI Builder models embedded directly in apps and flows: extraction, classification, and conversational interfaces.",
      },
      {
        title: "Govern the platform",
        description:
          "Environment strategy, DLP policies, ALM pipelines, and a center of excellence that make low-code sustainable at scale.",
      }],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "Power Apps Development", description: "Canvas and model-driven applications that digitize business processes with enterprise UX and security." },
      { title: "Power Automate Development", description: "Cloud and desktop flows that automate approvals, integrations, and repetitive work." },
      { title: "Power BI Development", description: "Data models, dashboards, and reports that turn operational data into decisions." },
      { title: "Power Pages Development", description: "Secure external-facing portals for customers, partners, and communities." },
      { title: "Microsoft Copilot Studio", description: "Custom copilots and conversational agents connected to your data and workflows." },
      { title: "Microsoft Dataverse", description: "The secure, governed data backbone for the entire Power Platform estate." },
      { title: "AI Builder", description: "Prebuilt and custom AI models (document processing, prediction, classification) inside apps and flows." },
      { title: "UiPath", description: "Robotic process automation for legacy systems and interfaces without APIs." },
      { title: "Low-Code Automation", description: "Rapid automation of departmental processes with governed low-code patterns." },
      { title: "Enterprise Workflow Automation", description: "Cross-departmental workflow platforms (requests, approvals, case management) at organizational scale." }],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "The Power Platform is Microsoft's fastest route from AI to end users. We combine Copilot Studio for conversational agents, AI Builder for document and prediction models, and Azure OpenAI for advanced language capabilities, delivered through apps and flows people already use, secured by Dataverse and Microsoft Entra.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "Working applications delivered in weeks, not quarters",
      "Manual processes replaced with auditable automation",
      "AI embedded where work happens: forms, flows, and chat",
      "A governed low-code estate instead of shadow IT",
      "Reduced development cost for departmental applications",
      "Real-time operational visibility through Power BI"],
  },

  technologies: [
    "power-apps",
    "power-automate",
    "power-bi",
    "power-pages",
    "copilot-studio",
    "dataverse",
    "ai-builder",
    "uipath"],

  relatedSolutions: [
    "workflow-automation-platform",
    "request-approval-system",
    "electronic-contract-generator",
    "job-management-system"],
  relatedIndustries: ["financial-services",  "real-estate", "energy"],
  relatedCaseStudies: [],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Power Platform?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Power Platform Solutions",
    description: "Power Apps, Power Automate, Power BI, Copilot Studio, and Dataverse: business applications and automation delivered in weeks, governed for the enterprise."
  }
};

export default service;
