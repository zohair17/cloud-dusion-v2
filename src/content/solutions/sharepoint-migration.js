/**
 * Solution: SharePoint Migration
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "sharepoint-migration",
  title: "SharePoint Migration",
  tagline: "Content moved, structure improved, nothing lost",
  /** Glyph id; the component owns the actual icon. */
  icon: "arrow-right-left",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/sharepoint-migration.webp",
  summary: "Planned, rehearsed migration from file shares, legacy platforms, or older SharePoint versions to SharePoint Online, with restructuring, not just relocation.",
  categoryId: "sharepoint-microsoft",
  order: 6,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Content stuck on aging file servers and legacy SharePoint farms carries risk, unsupported software, no modern security, and structures that fight against modern work, but migration attempts without method lose content, break links, and burn user trust.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Legacy farms and file servers past or approaching end of support.",
      "Years of sprawl: duplicates, dead content, and broken permissions.",
      "Business operations that cannot pause for a migration.",
      "Fear of losing content, metadata, or access mid-move."],
  },

  overview: [
    "CFG migrations are engineering projects with rehearsals: automated inventory and analysis of the source estate, a target architecture designed rather than copied, mapped permissions and metadata, and pilot migrations that validate every assumption before the real move.",
    "Cutover is staged by business unit with clear communication, verification reports, and rollback paths: users arrive at a cleaner, better-organized workplace, not a lifted-and-shifted mess."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Inventory & analyze",
        description: "Automated scans map content, permissions, customizations, and usage, surfacing what to move, restructure, or retire.",
      },
      {
        step: "02",
        title: "Design the target",
        description: "A modern architecture, sites, metadata, permissions, designed for how teams work now.",
      },
      {
        step: "03",
        title: "Pilot & rehearse",
        description: "Representative migrations validate fidelity, performance, and edge cases before full waves.",
      },
      {
        step: "04",
        title: "Migrate & verify",
        description: "Staged waves with delta syncs, item-level verification, and user communication through cutover.",
      }],
  },

  capabilities: [
    "Automated source inventory and content analysis",
    "Metadata and permission mapping",
    "Content cleanup: duplicates, stale content, broken links",
    "Staged waves with delta synchronization",
    "Item-level verification reporting",
    "Customization and workflow remediation"],

  aiCapabilities: null,

  architecture: null,

  benefits: [
    "Zero-surprise cutover with verified content fidelity",
    "A restructured, governed target, not migrated sprawl",
    "Retired infrastructure and licensing costs",
    "Modern security and compliance from day one",
    "User confidence preserved through communication"],

  useCases: [
    "File server to SharePoint Online moves",
    "SharePoint 2013/2016/2019 farm retirement",
    "Consolidation of multiple farms into one tenant",
    "Legacy ECM platform replacement"],

  technologies: [
    "sharepoint-online",
    "sharepoint-server",
    "microsoft-365",
    "migration-tooling",
    "powershell"],

  industries: [
    "financial-services",
    
    "energy"],

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-cloud-solutions"],

  relatedSolutions: [
    "sharepoint-version-upgrade",
    "tenant-to-tenant-migration",
    "document-management-system"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "SharePoint Migration",
    description: "Planned, rehearsed migration from file shares, legacy platforms, or older SharePoint versions to SharePoint Online, with restructuring, not just relocation.",
  },
};

export default solution;
