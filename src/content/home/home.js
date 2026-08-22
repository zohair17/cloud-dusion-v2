/**
 * Homepage composition.
 *
 * The homepage owns almost no content of its own — it is a *composition* of
 * other bounded contexts. Sections that show services, solutions, industries or
 * technologies declare which records to pull and in what order; the page read
 * model resolves them through the repositories at build time. Editing the
 * catalogue therefore updates the homepage, with no duplicated copy to drift.
 */

/** @type {import("@/modules/company/domain/home-page.schema").HomePageRecord} */
export const homePage = {
  status: "published",

  hero: {
    eyebrow: "AI-Powered Enterprise Solutions · Built on Microsoft",
    headline: "Transforming Enterprises with",
    /** Rendered in the brand colour — the one accent the headline gets. */
    headlineAccent: "AI-Powered Microsoft Solutions",
    subheadline:
      "Cloud Fusion Global helps organizations modernize operations, automate complex workflows, unlock the power of their data, and build intelligent business applications through Artificial Intelligence, Microsoft technologies, and enterprise-grade software solutions.",
    ctas: ["book-consultation", "explore-solutions"],
    /** Constellation beside the copy: the agent hub and the stack around it. */
    constellation: {
      hub: "AI Agents",
      nodes: [
        { id: "data", label: "Data", icon: "database", x: 22, y: 16, depth: 24 },
        { id: "automation", label: "Automation", icon: "workflow", x: 78, y: 16, depth: 24 },
        { id: "azure", label: "Azure", icon: "cloud", x: 13, y: 50, depth: 8 },
        { id: "microsoft-365", label: "Microsoft 365", icon: "grid", x: 87, y: 50, depth: 8 },
        { id: "sharepoint", label: "SharePoint", icon: "files", x: 22, y: 84, depth: 32 },
        { id: "power-platform", label: "Power Platform", icon: "blocks", x: 78, y: 84, depth: 32 },
      ],
      /** What the agents ultimately drive, stacked beneath the plane. */
      outcomes: [
        { id: "enterprise-applications", label: "Enterprise Applications", icon: "app-window" },
        { id: "business-outcomes", label: "Business Outcomes", icon: "trending-up" },
      ],
    },

  },

  /** Traditional enterprise vs. AI-powered enterprise comparison. */
  transformationFramework: {
    eyebrow: "The Transformation",
    heading: "AI is changing how enterprises operate",
    intro:
      "The journey from manual operations to the intelligent enterprise runs through AI, automation, and the Microsoft ecosystem — and ends in measurable business outcomes.",
    /** Four stages of one journey; the last is the destination. */
    stages: [
      {
        id: "traditional",
        title: "Traditional Enterprise",
        tone: "past",
        items: ["Static documents", "Manual approvals", "Data silos", "Repetitive workflows"],
      },
      {
        id: "ai-powered",
        title: "AI-Powered Enterprise",
        tone: "present",
        items: ["Intelligent documents", "Autonomous workflows", "AI agents", "Predictive insights"],
      },
      {
        id: "microsoft-powered",
        title: "Microsoft-Powered Enterprise",
        tone: "present",
        items: ["Azure", "SharePoint", "Microsoft 365", "Power Platform", "Copilot Studio", "Azure AI Foundry"],
      },
      {
        id: "business-outcomes",
        title: "Business Outcomes",
        tone: "destination",
        items: [
          "Faster decisions",
          "Reduced operational costs",
          "Improved productivity",
          "Better customer experiences",
          "Scalable operations",
        ],
      },
    ],
  },

  /** Four service pillars — each links into the services catalogue. */
  servicePillars: {
    eyebrow: "What We Do",
    heading: "An",
    /** Rendered in the brand colour, mid-heading. */
    headingAccent: "AI-first",
    headingRest: "service ecosystem",
    intro: "End-to-end solutions powered by AI, Microsoft technology, and expert engineering.",
    items: [
      {
        id: "agentic-ai",
        title: "Agentic AI & AI Automation",
        description:
          "AI agents, multi-agent orchestration, and human-in-the-loop systems that take real work off your teams — governed, secure, and built to scale.",
        icon: "bot",
        art: "ai-cube",
        serviceSlug: "agentic-ai-automation",
      },
      {
        id: "microsoft",
        title: "Intelligent Microsoft Solutions",
        description:
          "Azure, Microsoft 365, SharePoint, and Power Platform — implemented as an intelligent, connected ecosystem rather than isolated tools.",
        icon: "cloud",
        art: "cloud",
        serviceSlug: "microsoft-cloud-solutions",
      },
      {
        id: "product",
        title: "Custom Applications & Product Engineering",
        description:
          "Web, mobile, and SaaS products engineered for the enterprise — from architecture and APIs to AI-powered user experiences.",
        icon: "code",
        art: "code",
        serviceSlug: "custom-software-development",
      },
      {
        id: "modernization",
        title: "Enterprise Modernization & Managed Services",
        description:
          "Migrations, upgrades, disaster recovery, managed services, and staff augmentation that keep critical platforms healthy and evolving.",
        icon: "refresh",
        art: "shield",
        serviceSlug: "it-staff-augmentation",
      },
    ],
  },

  /** Featured solutions, referenced by slug from the solutions catalogue. */
  featuredSolutions: {
    eyebrow: "What We Build",
    heading: "AI-powered solutions for the enterprise",
    intro:
      "Purpose-built platforms and systems — from intelligent document management to ERP — engineered on AI and Microsoft technologies.",
    solutionSlugs: [
      "ai-document-management",
      "ai-document-generator",
      "self-hosted-enterprise-ai",
      "deal-management-system",
      "erp-manufacturing",
      "erp-wholesale-distribution",
      "smart-device-mobile-app",
      "sharepoint-migration",
    ],
  },

  /** Microsoft stack, resolved from the technology registry by layer. */
  technologyStack: {
    eyebrow: "Technology Ecosystem",
    heading: "The Microsoft stack, connected by AI",
    intro:
      "CFG builds on the full Microsoft ecosystem — AI capabilities flowing through cloud, workplace, and application layers into working business solutions.",
    layerIds: ["ai", "cloud", "workplace", "applications"],
    /** Where the four layers arrive: the outcome the stack exists to produce. */
    destination: {
      id: "intelligent-business-solutions",
      title: "Intelligent Business Solutions",
      tagline: "AI solutions, automation platforms, and business applications delivering measurable outcomes",
    },
  },

  /** All nine industries, resolved from the industries repository. */
  industryFocus: {
    eyebrow: "Who We Serve",
    heading: "Industry-focused transformation",
    intro:
      "Every industry has its own challenges, systems, and regulations. CFG builds solutions shaped to each — not generic templates.",
    industrySlugs: [],
  },

  /** Eight differentiators — the "why CFG" grid. */
  differentiators: {
    eyebrow: "Why CFG",
    heading: "Why enterprises choose Cloud Fusion Global",
    items: [
      {
        title: "AI-First Approach",
        description:
          "Every engagement starts with the question: where can intelligence remove work, risk, or delay? AI is our default lens, not an add-on.",
        icon: "sparkles",
      },
      {
        title: "Microsoft-Centric Expertise",
        description:
          "Deep, hands-on expertise across Azure, Microsoft 365, SharePoint, Power Platform, and the Microsoft AI stack.",
        icon: "cloud",
      },
      {
        title: "Enterprise Architecture",
        description:
          "Solutions designed by architects who think in systems — security, integration, data, and scale from day one.",
        icon: "blocks",
      },
      {
        title: "End-to-End Delivery",
        description:
          "Strategy, architecture, build, rollout, adoption, and support — one accountable team across the full lifecycle.",
        icon: "route",
      },
      {
        title: "Industry-Focused Solutions",
        description:
          "Purpose-built solutions for real estate, healthcare, financial services, and other industries — not generic templates.",
        icon: "building",
      },
      {
        title: "Flexible Engagement Models",
        description:
          "Fixed-scope projects, dedicated teams, managed services, or staff augmentation — engagement shaped to how you work.",
        icon: "handshake",
      },
      {
        title: "Enterprise Security",
        description:
          "Identity, information protection, compliance, and governance treated as first-class requirements in every solution.",
        icon: "shield",
      },
      {
        title: "Global Delivery Capability",
        description:
          "Distributed delivery teams that combine nearshore collaboration with offshore scale across time zones.",
        icon: "globe",
      },
    ],
  },

  closingCta: {
    eyebrow: "Let's Build the Future Together",
    heading: "Ready when you are",
    body: "Whether you're planning an AI initiative, modernizing SharePoint, migrating to the cloud, building a custom application, or scaling your technology team, Cloud Fusion Global is ready to help.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: null,
    description: null,
  },
};

export default homePage;
