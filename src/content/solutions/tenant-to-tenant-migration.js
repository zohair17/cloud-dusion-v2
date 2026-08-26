/**
 * Solution: SharePoint Online Tenant-to-Tenant Migration
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "tenant-to-tenant-migration",
  title: "SharePoint Online Tenant-to-Tenant Migration",
  tagline: "Two tenants become one: cleanly",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/tenant-to-tenant-migration.webp",
  summary: "Merger, acquisition, and divestiture migrations between Microsoft 365 tenants: SharePoint, OneDrive, and Teams content moved with identity and sharing intact.",
  categoryId: "sharepoint-microsoft",
  order: 8,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Mergers, acquisitions, divestitures, and rebrands force content between Microsoft 365 tenants: a migration with no native path, where identity mapping, sharing links, and Teams complexity break naive attempts.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "No native Microsoft path for cross-tenant SharePoint migration at scale.",
      "User identities that must be mapped and remapped across tenants.",
      "Sharing links and permissions that silently break in transit.",
      "Deal timelines that fix the deadline before the plan exists.",
    ],
  },

  overview: [
    "CFG has industrialized tenant-to-tenant migration: automated discovery across both tenants, identity mapping between directories, and staged migration of SharePoint sites, OneDrive accounts, and Teams content with permissions and metadata preserved.",
    "We sequence waves around the deal timeline and business calendars, run delta syncs until cutover, and verify at item level, so day one on the new tenant is an ordinary working day.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Discover both estates",
        description: "Automated inventory of source content, users, permissions, and Teams structures across both tenants.",
      },
      {
        step: "02",
        title: "Map identities & targets",
        description: "Users, groups, and permissions mapped between directories; target architecture agreed.",
      },
      {
        step: "03",
        title: "Migrate in waves",
        description: "Staged migration with delta syncs keeps source and target aligned until each wave's cutover.",
      },
      {
        step: "04",
        title: "Cut over & verify",
        description: "Coordinated cutover with item-level verification, link remediation, and hypercare support.",
      },
    ],
  },

  capabilities: [
    "Cross-tenant discovery and planning",
    "Identity and permission mapping",
    "SharePoint, OneDrive, and Teams content migration",
    "Delta synchronization to cutover",
    "Sharing link remediation",
    "Item-level verification and reporting",
  ],

  aiCapabilities: null,

  architecture: null,

  benefits: [
    "Deal timelines met with a rehearsed, staged plan",
    "Users productive on day one post-cutover",
    "Permissions and sharing preserved, not rebuilt",
    "Full audit trail for deal governance",
    "Source tenant retired cleanly",
  ],

  useCases: [
    "Merger and acquisition tenant consolidation",
    "Divestiture carve-outs to new tenants",
    "Rebrand-driven tenant moves",
    "Multi-tenant cleanup into a single estate",
  ],

  technologies: [
    "sharepoint-online",
    "microsoft-365",
    "microsoft-entra",
  ],

  industries: [
    "financial-services",
    "technology",
    "healthcare",
  ],

  relatedServices: [
    "microsoft-cloud-solutions",
    "sharepoint-solutions",
    "data-security-governance",
  ],

  relatedSolutions: [
    "sharepoint-migration",
    "sharepoint-version-upgrade",
    "enterprise-content-management",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "SharePoint Online Tenant-to-Tenant Migration",
    description: "Merger, acquisition, and divestiture migrations between Microsoft 365 tenants: SharePoint, OneDrive, and Teams content moved with identity and sharing intact.",
  },
};

export default solution;
