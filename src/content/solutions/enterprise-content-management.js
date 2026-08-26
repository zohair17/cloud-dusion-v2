/**
 * Solution: Enterprise Content Management System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "enterprise-content-management",
  title: "Enterprise Content Management System",
  tagline: "One content platform across the whole enterprise",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/enterprise-content-management.webp",
  summary: "Organization-wide content management on SharePoint, unifying documents, media, and knowledge under one architecture, one governance model, one search.",
  categoryId: "sharepoint-microsoft",
  order: 2,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Content strategy fragments as organizations grow: each department builds its own structures, tools multiply, and enterprise-wide search, governance, and knowledge reuse become impossible.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Content split across SharePoint sprawl, file servers, and third-party tools.",
      "No enterprise-wide search or single point of discovery.",
      "Inconsistent governance creating compliance blind spots.",
      "Knowledge lost when teams reorganize or people leave.",
    ],
  },

  overview: [
    "CFG's Enterprise Content Management solution establishes a single content architecture for the whole organization: a designed site topology, shared taxonomies, consistent content types, and governance applied uniformly from department level to enterprise level.",
    "The platform consolidates scattered repositories onto SharePoint Online, connects content to the processes that produce and consume it, and gives leadership genuine visibility into the organization's content estate.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Assess & architect",
        description: "A content inventory across all repositories informs an enterprise information architecture and governance model.",
      },
      {
        step: "02",
        title: "Consolidate",
        description: "Phased migration brings content from legacy systems and shares into the unified platform.",
      },
      {
        step: "03",
        title: "Standardize",
        description: "Shared taxonomies, templates, and lifecycle policies are rolled out with department-level flexibility.",
      },
      {
        step: "04",
        title: "Sustain",
        description: "A governance operating model, roles, reviews, reporting, keeps the estate healthy as it grows.",
      },
    ],
  },

  capabilities: [
    "Enterprise information architecture and site topology",
    "Shared taxonomy and managed metadata",
    "Unified enterprise search",
    "Content lifecycle management from creation to disposal",
    "Departmental autonomy within enterprise governance",
    "Analytics on content usage and health",
  ],

  aiCapabilities: null,

  architecture: null,

  benefits: [
    "One place to find any authorized content, enterprise-wide",
    "Uniform governance without blocking department agility",
    "Reduced licensing and infrastructure from consolidation",
    "Knowledge preserved through organizational change",
    "AI-ready content across the whole organization",
  ],

  useCases: [
    "Consolidation after mergers and acquisitions",
    "Replacing legacy ECM platforms",
    "Enterprise knowledge management programs",
    "Unifying multi-region content estates",
  ],

  technologies: [
    "sharepoint-online",
    "microsoft-365",
    "microsoft-purview",
    "microsoft-syntex",
    "microsoft-graph",
  ],

  industries: [
    "financial-services",
    "energy",
    "healthcare",
  ],

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-cloud-solutions",
    "microsoft-syntex",
  ],

  relatedSolutions: [
    "document-management-system",
    "records-management-system",
    "intranet-portal",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "Enterprise Content Management System",
    description: "Organization-wide content management on SharePoint, unifying documents, media, and knowledge under one architecture, one governance model, one search.",
  },
};

export default solution;
