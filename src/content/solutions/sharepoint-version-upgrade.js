/**
 * Solution: SharePoint Version Upgrade
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "sharepoint-version-upgrade",
  title: "SharePoint Version Upgrade",
  tagline: "Off unsupported versions, onto a modern platform",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/sharepoint-version-upgrade.webp",
  summary: "Structured upgrades from legacy SharePoint versions to current platforms: customizations remediated, content preserved, downtime minimized.",
  categoryId: "sharepoint-microsoft",
  order: 7,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Every SharePoint version eventually leaves support, taking security patches with it. Farms running 2013, 2016, or 2019 accumulate risk daily, but upgrades stall on customizations and fear of breakage.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Security exposure on versions past end of support.",
      "Custom solutions and workflows that block straightforward upgrades.",
      "Multi-version gaps requiring stepped upgrade paths.",
      "Uncertainty about what will break and what it will cost."],
  },

  overview: [
    "CFG upgrades begin with a full assessment: farm health, customizations, workflows, and integrations are cataloged and rated for upgrade impact. From that evidence we design the path, direct upgrade, stepped migration, or move to SharePoint Online, with every customization given a remediation plan.",
    "Execution is rehearsed in a staging environment before production, so the real upgrade follows a script that has already succeeded."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Assess",
        description: "Automated and manual analysis of the farm: content, customizations, workflows, integrations, and health.",
      },
      {
        step: "02",
        title: "Plan the path",
        description: "The optimal route, stepped upgrade or online migration, with remediation plans for every blocker.",
      },
      {
        step: "03",
        title: "Rehearse",
        description: "Full trial upgrade in staging validates the plan, timings, and every remediated component.",
      },
      {
        step: "04",
        title: "Execute & validate",
        description: "Production upgrade in a controlled window with verification and immediate post-upgrade support.",
      }],
  },

  capabilities: [
    "Farm and customization assessment",
    "Upgrade path design across version gaps",
    "Custom solution remediation and modernization",
    "Workflow migration to modern platforms",
    "Rehearsed, scripted execution",
    "Post-upgrade health verification"],

  aiCapabilities: null,

  architecture: null,

  benefits: [
    "Supported, patched platform restoring security posture",
    "Customizations modernized instead of abandoned",
    "Minimal, planned downtime",
    "A platform ready for modern and AI capabilities",
    "Documented estate as a lasting asset"],

  useCases: [
    "SharePoint 2013/2016 end-of-support escapes",
    "2019 to Subscription Edition upgrades",
    "Hybrid modernization with online workloads",
    "Pre-migration farm consolidation"],

  technologies: [
    "sharepoint-server",
    "sharepoint-online",
    "sharepoint-framework",
    "power-automate",
    "powershell"],

  industries: [
    "financial-services",
    "energy"],

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-cloud-solutions"],

  relatedSolutions: [
    "sharepoint-migration",
    "self-hosted-sharepoint-sites",
    "document-management-system"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "SharePoint Version Upgrade",
    description: "Structured upgrades from legacy SharePoint versions to current platforms: customizations remediated, content preserved, downtime minimized.",
  },
};

export default solution;
