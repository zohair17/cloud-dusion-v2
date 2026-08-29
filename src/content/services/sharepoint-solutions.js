/**
 * Service: SharePoint Solutions
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "sharepoint-solutions",
  title: "SharePoint Solutions",
  navLabel: "SharePoint Solutions",
  tagline: "SharePoint as an intelligent content platform",
  summary: "Document management, intranets, workflows, migrations, and managed services: SharePoint engineered as the intelligent content backbone of your enterprise.",
  groupId: "microsoft-platform",
  order: 5,
  status: "published",


  heroSlides: [
    { image: "/asset/services/sharepoint-1.webp", label: "Content that is organized, findable, and governed" },
    { image: "/asset/services/sharepoint-2.webp", label: "Processes that run as auditable workflows" },
    { image: "/asset/services/sharepoint-3.webp", label: "AI-ready content foundations for Copilot" }],

  intro: [
    "SharePoint holds the documents, knowledge, and processes your organization runs on, but in many enterprises it has grown into sprawling sites, outdated farms, and content nobody can find. Modernized and governed well, SharePoint becomes something different: the intelligent content platform that AI, automation, and collaboration are built on.",
    "Cloud Fusion Global has deep SharePoint engineering expertise across the full lifecycle: architecture, development, migration, integration, and managed services, and we pair it with AI capabilities like Microsoft Syntex so your content works for you, not the other way around."],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Critical documents scattered across file shares, legacy farms, and unmanaged sites.",
      "Outdated SharePoint versions approaching or past end of support.",
      "Manual, email-driven processes that should be workflows.",
      "Intranets employees avoid because they are slow, dated, and hard to search.",
      "No governance: sprawl, inconsistent permissions, and compliance risk."],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Architect for findability and governance",
        description:
          "Information architecture, metadata, and permission models designed so content is findable, secure, and compliant by default.",
      },
      {
        title: "Modernize legacy estates",
        description:
          "Migrations and version upgrades from any SharePoint version to SharePoint Online or modern on-premises, planned and executed with content integrity guaranteed.",
      },
      {
        title: "Extend with engineering",
        description:
          "SPFx development, workflow automation, and deep integrations that make SharePoint fit your processes precisely.",
      },
      {
        title: "Operate and support",
        description:
          "Health checks, managed services, and support that keep the platform fast, healthy, and continuously improving.",
      }],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "SharePoint Document Management", description: "Structured libraries, metadata, versioning, and retention that bring order to enterprise content." },
      { title: "SharePoint Intranet Development", description: "Modern, branded intranets that employees actually use: news, search, and self-service in one place." },
      { title: "SharePoint Extranet Development", description: "Secure portals for partners, vendors, and clients with governed external sharing." },
      { title: "SharePoint Workflow Development", description: "Approval, review, and routing workflows that replace email chains with auditable processes." },
      { title: "SharePoint SPFx Development", description: "Custom web parts and extensions built on the SharePoint Framework for modern, supportable customization." },
      { title: "SharePoint Integration", description: "Connections to ERP, CRM, and line-of-business systems so SharePoint is part of the process, not a silo." },
      { title: "SharePoint Migration", description: "Migration from file shares, legacy platforms, or older SharePoint versions with full content fidelity." },
      { title: "SharePoint Version Upgrades", description: "Structured upgrades that keep you supported, secure, and able to adopt modern capabilities." },
      { title: "SharePoint Health Check", description: "A deep technical assessment of performance, security, governance, and architecture with a prioritized action plan." },
      { title: "SharePoint Reporting", description: "Usage, adoption, storage, and compliance reporting for informed platform decisions." },
      { title: "SharePoint Support and Maintenance", description: "Responsive expert support for issues, changes, and platform questions." },
      { title: "SharePoint Managed Services", description: "Full operational ownership of your SharePoint estate with proactive monitoring and continuous improvement." },
      { title: "Self-Hosted SharePoint Public-Facing Sites", description: "Public websites on self-hosted SharePoint for organizations with strict data residency and control requirements." }],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "SharePoint is where enterprise AI meets enterprise content. We combine SharePoint with Microsoft Syntex for AI document processing, Azure OpenAI for intelligent search and summarization, and Power Automate for content-driven workflows, turning document libraries into structured, self-organizing knowledge that agents and Copilot can safely reason over.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "Content that is organized, findable, and governed",
      "Supported, secure platform versions with a clear upgrade path",
      "Processes that run as auditable workflows instead of email",
      "An intranet employees rely on daily",
      "AI-ready content foundations for Copilot, Syntex, and agents",
      "Predictable platform operations through managed services"],
  },

  technologies: [
    "sharepoint-online",
    "sharepoint-server",
    "microsoft-syntex",
    "sharepoint-framework",
    "power-automate",
    "microsoft-graph",
    "microsoft-purview"],

  relatedSolutions: [
    "document-management-system",
    "enterprise-content-management",
    "records-management-system",
    "intranet-portal",
    "sharepoint-migration",
    "sharepoint-version-upgrade"],
  relatedIndustries: ["financial-services",  "real-estate", "energy", "education"],
  relatedCaseStudies: [],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about SharePoint Solutions?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "SharePoint Solutions",
    description: "Document management, intranets, workflows, migrations, and managed services: SharePoint engineered as the intelligent content backbone of your enterprise."
  }
};

export default service;
