/**
 * Service: SaaS Product Development
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "saas-product-development",
  title: "SaaS Product Development",
  navLabel: "SaaS Products",
  tagline: "From product vision to a scalable SaaS platform",
  summary: "Multi-tenant SaaS platforms engineered on Azure: secure data isolation, subscription readiness, API ecosystems, and the operations to run them.",
  groupId: "product-engineering",
  order: 10,
  status: "published",


  heroSlides: [
    { image: "/asset/services/saas-1.webp", label: "A tenancy architecture that scales economically" },
    { image: "/asset/services/saas-2.webp", label: "Security posture that passes enterprise procurement" },
    { image: "/asset/services/saas-3.webp", label: "AI-native capabilities that differentiate the product" },
  ],

  intro: [
    "Building SaaS is different from building software. Multi-tenancy, data isolation, usage metering, upgrade paths, and operational excellence are product features: get them wrong early and every customer added multiplies the pain.",
    "Cloud Fusion Global builds SaaS products with the architecture decisions that matter made deliberately: tenancy models matched to your market, security and compliance designed in, cloud costs engineered per-tenant, and AI capabilities that differentiate the product. We stay through launch and beyond with support and continuous delivery.",
  ],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "A validated product idea but no engineering capability to build it right.",
      "Single-tenant codebases that can't scale economically to many customers.",
      "Enterprise buyers demanding security, isolation, and compliance answers.",
      "Cloud bills growing faster than revenue.",
      "No operational muscle for upgrades, monitoring, and incident response.",
    ],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Get tenancy architecture right",
        description:
          "Shared, siloed, or hybrid tenancy, chosen from your market, compliance needs, and unit economics, not by default.",
      },
      {
        title: "Engineer for enterprise buyers",
        description:
          "Identity, data isolation, audit logging, and compliance posture that survive enterprise security reviews.",
      },
      {
        title: "Build the product, fast",
        description:
          "Product engineering in rapid iterations, from MVP to feature-complete platform with CI/CD from day one.",
      },
      {
        title: "Operate and grow with you",
        description:
          "Monitoring, support, maintenance, and a roadmap partnership as the product and customer base scale.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "SaaS Platform Development", description: "End-to-end engineering of cloud-native SaaS products on Azure." },
      { title: "Multi-Tenant Architecture", description: "Tenancy models with secure isolation, per-tenant configuration, and efficient economics." },
      { title: "Secure Data Management", description: "Encryption, isolation, backup, and residency controls for customer data." },
      { title: "API Integration", description: "Public APIs and integration ecosystems that make your product extensible." },
      { title: "SaaS Support", description: "Responsive support operations for your customers and your platform." },
      { title: "SaaS Maintenance", description: "Continuous updates, security patching, and performance management." },
    ],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "AI is the fastest-moving differentiator in SaaS. We build AI-native product capabilities (copilots, document intelligence, semantic search, automated insights) on Azure OpenAI and Azure AI Foundry, with per-tenant data boundaries preserved so intelligence never compromises isolation.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "A tenancy architecture that scales economically",
      "Security posture that passes enterprise procurement",
      "Faster time-to-market with experienced product engineers",
      "AI-native capabilities that differentiate the product",
      "Predictable operations through managed support",
      "Cloud costs engineered against revenue per tenant",
    ],
  },

  technologies: [
    "azure-app-services",
    "azure-sql",
    "azure-functions",
    "dotnet",
    "react",
    "nextjs",
    "azure-openai",
    "microsoft-entra",
  ],

  relatedSolutions: [
    "ai-document-generator",
    "workflow-automation-platform",
    "b2b-integration",
    "reit-analytics-dashboard",
  ],
  relatedIndustries: ["technology", "real-estate", "financial-services", "healthcare"],
  relatedCaseStudies: [],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about SaaS Development?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "SaaS Product Development",
    description: "Multi-tenant SaaS platforms engineered on Azure: secure data isolation, subscription readiness, API ecosystems, and the operations to run them."
  }
};

export default service;
