/**
 * Homepage composition.
 *
 * The homepage owns almost no content of its own: it is a *composition* of
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
    /** Rendered in the brand colour, the one accent the headline gets. */
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
      "The journey from manual operations to the intelligent enterprise runs through AI, automation, and the Microsoft ecosystem, and ends in measurable business outcomes.",
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

  /** Four service pillars, each links into the services catalogue. */
  servicePillars: {
    eyebrow: "What We Do",
    heading: "An",
    /** Rendered in the brand colour, mid-heading. */
    headingAccent: "AI-first",
    headingRest: "service ecosystem",
    intro: "Four pillars, one thread: intelligence applied to the Microsoft platform to change how your enterprise operates.",
    items: [
      {
        id: "agentic-ai",
        title: "Agentic AI & AI Automation",
        description:
          "AI agents, multi-agent orchestration, and human-in-the-loop systems that take real work off your teams: governed, secure, and built to scale.",
        icon: "bot",
        art: "ai-cube",
        serviceSlug: "agentic-ai-automation",
      },
      {
        id: "microsoft",
        title: "Intelligent Microsoft Solutions",
        description:
          "Azure, Microsoft 365, SharePoint, and Power Platform: implemented as an intelligent, connected ecosystem rather than isolated tools.",
        icon: "cloud",
        art: "cloud",
        serviceSlug: "microsoft-cloud-solutions",
      },
      {
        id: "product",
        title: "Custom Applications & Product Engineering",
        description:
          "Web, mobile, and SaaS products engineered for the enterprise, from architecture and APIs to AI-powered user experiences.",
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
      "Purpose-built platforms and systems, from intelligent document management to ERP, engineered on AI and Microsoft technologies.",
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
      "CFG builds on the full Microsoft ecosystem: AI capabilities flowing through cloud, workplace, and application layers into working business solutions.",
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
      "Every industry has its own challenges, systems, and regulations. CFG builds solutions shaped to each, not generic templates.",
    industrySlugs: [],
  },

  /**
   * Logo proof. Two registers of the same claim: the partners whose platforms
   * CFG builds on, shown one at a time and large; and the clients who bought
   * the work, shown all at once and small.
   *
   * Each entry carries its file's intrinsic size so the images can be served
   * responsively without the layout waiting to measure them.
   */
  clients: {
    partners: {
      heading: "Our",
      headingAccent: "Partners",
      items: [
        { id: "progressive-leasing", name: "Progressive Leasing", file: "progressive-leasing.webp", width: 300, height: 171, country: { code: "us", name: "United States" } },
        { id: "nisum", name: "Nisum", file: "nisum.png", width: 2297, height: 617, country: { code: "us", name: "United States" } },
        { id: "chick-fil-a", name: "Chick-fil-A", file: "chickfila.png", width: 343, height: 147, country: { code: "us", name: "United States" } },
        { id: "gic", name: "GIC", file: "gic-logo-new-2.png", width: 337, height: 102, country: { code: "in", name: "India" } },
        { id: "novizant", name: "Novizant", file: "novizant-removebg-preview.png", width: 680, height: 226, country: { code: "us", name: "United States" } },
        { id: "malath", name: "Malath Insurance", file: "malath.png", width: 850, height: 600, country: { code: "sa", name: "Saudi Arabia" } },
      ],
    },
    roster: {
      eyebrow: "Trusted by leaders",
      heading: "Clients we've partnered",
      headingAccent: "with",
      intro:
        "The teams who handed us their cloud, their data and their day to day, and stayed.",
      /** The wall repeats the roster until it fills; the reference sets 50 tiles. */
      tiles: 50,
      items: [
        { id: "grand-studio", name: "Grand Studio", file: "Grandstudio-1.png", width: 220, height: 50 },
        { id: "briggr-tech", name: "Briggr Tech", file: "briggrtech-1.jpeg", width: 1080, height: 433 },
        { id: "hut24", name: "Hut24", file: "Hut24.jpeg", width: 501, height: 328 },
        { id: "jessies", name: "Jessies", file: "Jessies.webp", width: 397, height: 254 },
        { id: "urida", name: "Urida", file: "Urida.jpeg", width: 603, height: 243 },
        { id: "da-boss", name: "Da Boss", file: "dabossicon.png", width: 301, height: 278 },
        { id: "digicop", name: "Digicop", file: "digicop.png", width: 641, height: 207 },
        { id: "good-n-guys", name: "Good N Guys", file: "goodnguys.png", width: 1222, height: 961 },
        { id: "le-bleu", name: "Le Bleu", file: "lebleu.png", width: 250, height: 103 },
        { id: "magic", name: "Magic", file: "magic-logo.png", width: 200, height: 82 },
        { id: "texas-wholesale", name: "Texas Wholesale", file: "texaswholesale.png", width: 2396, height: 1088 },
      ],
    },
  },

  /**
   * What clients said, in their own words.
   *
   * Quotes, names, roles and portraits are transcribed from cloudfusionglobal.com
   * exactly as given. Nothing here is written for the site, a testimonial that
   * was not said is not a testimonial.
   */
  testimonials: {
    eyebrow: "In their words",
    heading: "Testimonial from",
    headingAccent: "Clients",
    items: [
      {
        id: "abeer-saeed",
        quote:
          "We are very pleased with the operational and technical skills of Cloud Fusion Global. Their team made our projects run smoothly with careful attention to detail. We are satisfied with their work and look forward to working with them again on future projects. Cloud Fusion Global has been a reliable partner, and we trust them to handle any future needs with the same high quality.",
        name: "Abeer Saeed",
        role: "Head of People & Culture",
        company: "Nisum",
        /** The source site shows five stars against each quote. */
        rating: 5,
        avatar: "abeer-saeed.webp",
        /** Company mark, from the clients library. Omit it and the card sets the
            company name as a wordmark instead. */
        logo: "nisum.png",
      },
      {
        id: "johnathan-mediamystix",
        quote:
          "Working with Cloud Fusion Global on our web application has been a fantastic experience. The CFG team took the time to understand MediaMystix's vision and transformed it into a sleek, user-friendly platform that our customers love. The application performs seamlessly across devices, and Cloud Fusion Global's dedication to quality and responsive support made the entire process smooth and enjoyable.",
        name: "Johnathan",
        role: "Founder",
        company: "Mediamystix",
        rating: 5,
        avatar: "johnathan.webp",
      },
    ],
  },

  /** Eight differentiators, the "why CFG" grid. */
  differentiators: {
    eyebrow: "Why CFG",
    heading: "Why enterprises choose Cloud Fusion Global",
    intro: "The combination that matters: AI-first thinking, deep Microsoft expertise, and enterprise delivery discipline.",
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
          "Solutions designed by architects who think in systems: security, integration, data, and scale from day one.",
        icon: "blocks",
      },
      {
        title: "End-to-End Delivery",
        description:
          "Strategy, architecture, build, rollout, adoption, and support: one accountable team across the full lifecycle.",
        icon: "route",
      },
      {
        title: "Industry-Focused Solutions",
        description:
          "Purpose-built solutions for real estate, healthcare, financial services, and other industries, not generic templates.",
        icon: "building",
      },
      {
        title: "Flexible Engagement Models",
        description:
          "Fixed-scope projects, dedicated teams, managed services, or staff augmentation: engagement shaped to how you work.",
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
