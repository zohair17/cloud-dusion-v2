/**
 * Solution: Deal Management System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "deal-management-system",
  title: "Deal Management System",
  tagline: "The deal pipeline, out of inboxes and into one system",
  /** Glyph id; the component owns the actual icon. */
  icon: "handshake",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/deal-management-system.webp",
  summary: "Pipeline, documents, approvals, and analytics for real estate deals: from sourcing through diligence to close, in one governed workspace.",
  categoryId: "real-estate",
  order: 2,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Deals run on email threads, personal spreadsheets, and folder chaos. Leadership lacks pipeline visibility, diligence documents scatter, and institutional knowledge leaves with each deal lead.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "No single view of the deal pipeline and its stages.",
      "Diligence documents scattered across drives and inboxes.",
      "Approvals bottlenecked and untracked.",
      "Deal knowledge lost between transactions and teams.",
    ],
  },

  overview: [
    "CFG's Deal Management System gives every deal a structured workspace: pipeline stage, team, checklist, documents, and approvals in one place, with dashboards rolling the whole pipeline up for leadership.",
    "Stage gates enforce your investment process, document rooms keep diligence organized and shareable, and every decision leaves an audit trail. AI assists with document summarization and deal comparisons.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Capture",
        description: "Opportunities enter the pipeline with standardized profiles, sources, and screening data.",
      },
      {
        step: "02",
        title: "Progress through gates",
        description: "Deals advance through your defined stages with checklists, required documents, and approvals per gate.",
      },
      {
        step: "03",
        title: "Run diligence",
        description: "Structured document rooms, task tracking, and external sharing manage diligence to close.",
      },
      {
        step: "04",
        title: "Analyze",
        description: "Pipeline dashboards show volume, velocity, conversion, and exposure by market and type.",
      },
    ],
  },

  capabilities: [
    "Configurable pipeline stages and gate criteria",
    "Deal workspaces with documents, tasks, and teams",
    "Approval workflows with audit trails",
    "Secure external sharing for diligence",
    "Pipeline analytics and leadership dashboards",
    "Post-close handoff to asset management",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "AI summarization of offering memoranda and diligence documents",
      "Deal comparison against portfolio and history",
      "Automated extraction from broker packages",
    ],
  },

  architecture: null,

  benefits: [
    "Full pipeline visibility for leadership",
    "Faster deal cycles through structured process",
    "Diligence organized and audit-ready",
    "Institutional memory retained across deals",
    "Investment process enforced, not hoped for",
  ],

  useCases: [
    "Acquisition pipelines for investors and REITs",
    "Disposition and portfolio sale management",
    "Development project pipelines",
    "Debt and financing transaction tracking",
  ],

  technologies: [
    "power-apps",
    "dataverse",
    "sharepoint-online",
    "power-automate",
    "power-bi",
    "azure-openai",
  ],

  industries: [
    "real-estate",
    "financial-services",
  ],

  relatedServices: [
    "custom-software-development",
    "power-platform-solutions",
    "data-business-intelligence",
  ],

  relatedSolutions: [
    "lease-management-system",
    "reit-analytics-dashboard",
    "request-approval-system",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "Deal Management System",
    description: "Pipeline, documents, approvals, and analytics for real estate deals: from sourcing through diligence to close, in one governed workspace.",
  },
};

export default solution;
