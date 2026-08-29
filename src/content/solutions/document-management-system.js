/**
 * Solution: Document Management System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "document-management-system",
  title: "Document Management System",
  tagline: "Every document governed, versioned, and findable",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/document-management-system.webp",
  summary: "A structured SharePoint document management platform: libraries, metadata, versioning, permissions, and retention engineered for the enterprise.",
  categoryId: "sharepoint-microsoft",
  order: 1,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Documents scattered across file shares, inboxes, and personal drives mean lost versions, duplicated work, and content no one can find or govern.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Multiple conflicting versions of critical documents in circulation.",
      "No consistent structure, naming, or metadata across departments.",
      "Permissions granted ad hoc, with no visibility into who can see what.",
      "Retention and disposal obligations impossible to demonstrate."],
  },

  overview: [
    "CFG's Document Management System brings enterprise discipline to content: a designed information architecture, metadata-driven libraries, controlled versioning, and permission models aligned to how your organization actually works.",
    "Built on SharePoint Online, it integrates naturally with Microsoft 365, co-authoring in Office, sharing in Teams, and governance through Purview, so structure never comes at the cost of usability."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Design",
        description: "Information architecture, content types, and metadata are designed around your departments, processes, and compliance needs.",
      },
      {
        step: "02",
        title: "Migrate",
        description: "Existing content is cleaned, mapped, and migrated with metadata applied and duplicates resolved.",
      },
      {
        step: "03",
        title: "Govern",
        description: "Permissions, versioning, retention, and audit policies are applied automatically by structure.",
      },
      {
        step: "04",
        title: "Adopt",
        description: "Training and adoption support make the new structure the path of least resistance.",
      }],
  },

  capabilities: [
    "Metadata-driven libraries and content types",
    "Major/minor versioning with approval flows",
    "Granular, auditable permission models",
    "Retention schedules and disposition reviews",
    "Office co-authoring and Teams integration",
    "Powerful search scoped by metadata"],

  aiCapabilities: null,

  architecture: null,

  benefits: [
    "One authoritative version of every document",
    "Content findable in seconds by anyone authorized",
    "Demonstrable compliance with retention obligations",
    "Reduced storage waste from duplicates and sprawl",
    "A foundation ready for AI enrichment with Syntex"],

  useCases: [
    "Departmental and project document repositories",
    "Controlled document processes for quality management",
    "Client and matter file management",
    "Board and governance document control"],

  technologies: [
    "sharepoint-online",
    "microsoft-365",
    "microsoft-purview",
    "power-automate",
    "microsoft-teams"],

  industries: [
    "financial-services",
    
    "energy"],

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-syntex",
    "data-security-governance"],

  relatedSolutions: [
    "ai-document-management",
    "enterprise-content-management",
    "records-management-system"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "Document Management System",
    description: "A structured SharePoint document management platform: libraries, metadata, versioning, permissions, and retention engineered for the enterprise.",
  },
};

export default solution;
