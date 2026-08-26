/**
 * Solution: Self-Hosted SharePoint Public-Facing Sites
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "self-hosted-sharepoint-sites",
  title: "Self-Hosted SharePoint Public-Facing Sites",
  tagline: "Public web presence, fully under your control",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/self-hosted-sharepoint-sites.webp",
  summary: "Public websites built on self-hosted SharePoint for organizations with strict sovereignty, residency, and control requirements.",
  categoryId: "sharepoint-microsoft",
  order: 9,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Some organizations, government, defense-adjacent, regulated enterprises, must run public web presence on infrastructure they fully control, where mainstream cloud publishing platforms are not an option.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Data sovereignty and residency rules excluding shared cloud platforms.",
      "Security review requirements over the full hosting stack.",
      "Content teams needing modern publishing on constrained infrastructure.",
      "Legacy self-hosted web platforms aging without a successor plan.",
    ],
  },

  overview: [
    "CFG builds public-facing websites on self-hosted SharePoint, giving content teams a governed publishing experience while the entire stack, from servers to certificates, remains inside your controlled environment.",
    "We harden the platform for internet exposure: security architecture, performance optimization, caching, and monitoring engineered specifically for public traffic on SharePoint infrastructure.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Architect for exposure",
        description: "Topology, network zones, and hardening designed for internet-facing operation within your boundary.",
      },
      {
        step: "02",
        title: "Build the experience",
        description: "Branded, responsive public site with structured publishing templates for content teams.",
      },
      {
        step: "03",
        title: "Harden & optimize",
        description: "Security configuration, caching, and performance tuning validated against public load.",
      },
      {
        step: "04",
        title: "Operate",
        description: "Monitoring, patching, and support keep the public platform secure and available.",
      },
    ],
  },

  capabilities: [
    "Fully self-hosted publishing platform",
    "Branded, responsive public design",
    "Structured authoring and approval workflows",
    "Internet-exposure hardening and WAF integration",
    "Caching and performance optimization",
    "Complete infrastructure ownership",
  ],

  aiCapabilities: null,

  architecture: null,

  benefits: [
    "Public presence meeting the strictest sovereignty requirements",
    "Every layer of the stack under your inspection and control",
    "Modern publishing for content teams despite constraints",
    "Security posture demonstrable to auditors",
    "One platform skillset across intranet and public web",
  ],

  useCases: [
    "Government and public-sector websites",
    "Regulated enterprises with residency mandates",
    "Organizations in restricted network environments",
    "Legacy public SharePoint sites needing modernization",
  ],

  technologies: [
    "sharepoint-server",
  ],

  industries: [
    "energy",
    "financial-services",
    "healthcare",
  ],

  relatedServices: [
    "sharepoint-solutions",
    "data-security-governance",
    "microsoft-cloud-solutions",
  ],

  relatedSolutions: [
    "self-hosted-enterprise-ai",
    "sharepoint-version-upgrade",
    "intranet-portal",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "Self-Hosted SharePoint Public-Facing Sites",
    description: "Public websites built on self-hosted SharePoint for organizations with strict sovereignty, residency, and control requirements.",
  },
};

export default solution;
