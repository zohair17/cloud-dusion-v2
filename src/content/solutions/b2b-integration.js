/**
 * Solution: B2B Integration Solutions
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "b2b-integration",
  title: "B2B Integration Solutions",
  tagline: "Your systems and your partners', speaking fluently",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/b2b-integration.webp",
  summary: "Automated integration with trading partners: EDI, APIs, and file exchange unified on Azure Integration Services with monitoring and resilience built in.",
  categoryId: "automation",
  order: 4,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Orders, invoices, and shipment data still move between trading partners by email and manual re-entry: slow, error-prone, and impossible to scale as partners multiply.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Partner documents re-keyed manually into internal systems.",
      "Every new trading partner an expensive one-off project.",
      "Integration failures discovered by angry phone calls.",
      "A mix of EDI, APIs, and files with no unified management.",
    ],
  },

  overview: [
    "CFG builds B2B integration on Azure Integration Services: a managed platform where partner connections, EDI, API, or file-based, are onboarded as configurations, transformed to your canonical formats, and monitored centrally.",
    "Documents flow automatically between partner systems and your ERP with validation, acknowledgment, and retry logic, and dashboards show every transaction's status before anyone has to call.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Connect partners",
        description: "Partners onboard through configuration: EDI standards, APIs, or secure file exchange.",
      },
      {
        step: "02",
        title: "Transform & validate",
        description: "Documents map to canonical formats with validation and enrichment rules.",
      },
      {
        step: "03",
        title: "Process",
        description: "Orders, invoices, and confirmations flow into ERP workflows automatically with acknowledgments.",
      },
      {
        step: "04",
        title: "Monitor",
        description: "Central dashboards track every transaction with alerting and replay for exceptions.",
      },
    ],
  },

  capabilities: [
    "EDI standards support (X12, EDIFACT)",
    "API and file-based partner exchange",
    "Canonical mapping and validation",
    "ERP and line-of-business integration",
    "Transaction monitoring with alerting and replay",
    "Configuration-driven partner onboarding",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "AI-assisted mapping for new partner formats",
      "Anomaly detection on transaction volumes and failures",
    ],
  },

  architecture: null,

  benefits: [
    "Partner documents flowing without re-entry",
    "New partners onboarded in days, not months",
    "Failures caught by monitoring, not phone calls",
    "One platform across EDI, API, and file exchange",
    "Scales with trading volume, not headcount",
  ],

  useCases: [
    "Supplier and customer EDI automation",
    "3PL and logistics data exchange",
    "Marketplace and e-commerce integration",
    "Financial and payment file exchange",
  ],

  technologies: [
    "azure-logic-apps",
    "azure-integration-services",
    "azure-service-bus",
    "azure-functions",
    "api-management",
  ],

  industries: [
    "transportation",
    "technology",
    "energy",
  ],

  relatedServices: [
    "custom-software-development",
    "microsoft-cloud-solutions",
    "power-platform-solutions",
  ],

  relatedSolutions: [
    "erp-wholesale-distribution",
    "workflow-automation-platform",
    "erp-manufacturing",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "B2B Integration Solutions",
    description: "Automated integration with trading partners: EDI, APIs, and file exchange unified on Azure Integration Services with monitoring and resilience built in.",
  },
};

export default solution;
