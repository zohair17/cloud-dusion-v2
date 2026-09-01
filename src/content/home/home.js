/**
 * Homepage composition.
 *
 * The homepage owns almost no content of its own: it is a *composition* of
 * other bounded contexts. Sections that show services, solutions, industries or
 * technologies declare which records to pull and in what order; the page read
 * model resolves them through the repositories at build time. Editing the
 * catalogue therefore updates the homepage, with no duplicated copy to drift.
 */

/**
 * Partner marks, each named once.
 *
 * Every one of these is drawn in two places: on its own card in the partners
 * run, and again inside the "client of" note on each client the partner brought
 * us. Holding the file and its intrinsic size here keeps the two from drifting
 * apart the day a partner sends new artwork.
 */
const partnerMark = {
  nisum: { name: "Nisum", file: "nisum.png", width: 2297, height: 617 },
  chickFilA: { name: "Chick-fil-A", file: "chickfila.png", width: 343, height: 147 },
  gic: { name: "GIC", file: "gic-logo-new-2.png", width: 337, height: 102 },
  novizant: { name: "Novizant", file: "novizant-removebg-preview.png", width: 680, height: 226 },
  grandStudio: { name: "Grand Studio", file: "Grandstudio-1.png", width: 220, height: 50 },
  briggrTech: { name: "Briggr Tech", file: "briggrtech-1.jpeg", width: 1080, height: 433 },
  digicop: { name: "DigiCop", file: "digicop.png", width: 641, height: 207 },
  /* Drawn from the SVG on tafsol.com, so it is sharp at any card size. */
  tafsol: { name: "Tafsol Technologies", file: "tafsol.png", width: 1050, height: 258 },
  /*
    The 200x200 LinkedIn crop this used to run on is gone: the company supplied
    its own landscape artwork, so both the card and the note it appears in now
    draw a mark that holds up at full size.
  */
  eclipse: { name: "Eclipse Technologies", file: "eclipse-technologies.png", width: 1197, height: 353 },
  /*
    No artwork on file for these three, so they carry no `file` and whatever
    draws them sets the name as a wordmark instead. That is a partner whose logo
    has not arrived rather than a broken image, and it swaps over the moment a
    file lands: drop the artwork in public/asset/clients and add `file` with its
    intrinsic width and height.
  */
  pccIt: { name: "Pcc&IT" },
  nomonexus: { name: "NomoNexus" },
  browsefytech: { name: "BrowsefyTech" },
};

/** @type {import("@/modules/company/domain/home-page.schema").HomePageRecord} */
export const homePage = {
  status: "published",

  hero: {
    eyebrow: "AI-Powered Enterprise Solutions · Built on Microsoft",
    headline: "Transforming Organizations with",
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

  /** The nine industries the homepage leads with, in authored order. */
  industryFocus: {
    eyebrow: "Industries We Specialize In",
    heading: "Industry-focused transformation",
    intro:
      "Every industry has its own challenges, systems, and regulations. CFG builds solutions shaped to each, not generic templates.",
    industrySlugs: [
      "manufacturing",
      "financial-services",
      "insurance",
      "retail",
      "government",
      "energy",
      "technology",
      "education",
      "real-estate",
    ],
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
      heading: "Our Strategic",
      headingAccent: "Partnerships",
      /*
        Progressive Leasing and Malath used to run here. Both are named on the
        client list, and a name cannot be both the firm we build alongside and
        the firm we built for — so they moved down to the roster and this run
        is partners only.
      */
      items: [
        { id: "nisum", ...partnerMark.nisum, country: { code: "us", name: "United States" } },
        { id: "chick-fil-a", ...partnerMark.chickFilA, country: { code: "us", name: "United States" } },
        { id: "gic", ...partnerMark.gic, country: { code: "in", name: "India" } },
        { id: "novizant", ...partnerMark.novizant, country: { code: "us", name: "United States" } },
        { id: "grand-studio", ...partnerMark.grandStudio },
        { id: "briggr-tech", ...partnerMark.briggrTech, country: { code: "us", name: "United States" } },
        { id: "digicop", ...partnerMark.digicop, country: { code: "us", name: "United States" } },
        { id: "tafsol-technologies", ...partnerMark.tafsol },
        { id: "eclipse-technologies", ...partnerMark.eclipse, country: { code: "us", name: "United States" } },
        { id: "pcc-it", ...partnerMark.pccIt },
        { id: "nomonexus", ...partnerMark.nomonexus },
        { id: "browsefytech", ...partnerMark.browsefytech },
      ],
    },
    roster: {
      eyebrow: "Trusted by leaders",
      heading: "Trusted By Organizations",
      headingAccent: "Worldwide",
      intro:
        "Trusted by organizations to modernize their technology, data, and business operations.",
      /**
       * The wall repeats the roster until it fills. Forty is two clean passes
       * over the twenty names — the old fifty was two and a half, which left a
       * stub row of two tiles hanging under five full ones.
       */
      tiles: 40,
      /*
        Briggr Tech and DigiCop used to sit here as well as in the partners
        run above. One logo in two sections is not two proofs, it is the same
        proof twice — and the smaller, faster tile undercuts the card. They
        are partners, so they stay upstairs and come out of the wall.

        `via` says the work reached us through a partner rather than direct,
        and it is now recorded for every client the roster came to us that way:
        each route below is the one the client list itself names against the
        client. Direct engagements — Malath, Da Boss, KidsWish, Jadi and the
        rest — carry no `via`, and where a route was never recorded the field
        is left off rather than guessed at.
      */
      items: [
        /* --- with marks on file ------------------------------------------ */
        { id: "progressive-leasing", name: "Progressive Leasing", file: "progressive-leasing.webp", width: 300, height: 171, via: partnerMark.nisum, country: { code: "us", name: "United States" } },
        { id: "malath", name: "Malath Insurance", file: "malath.png", width: 850, height: 600, country: { code: "sa", name: "Saudi Arabia" } },
        { id: "hut24", name: "Hut24", file: "Hut24.jpeg", width: 501, height: 328, via: partnerMark.briggrTech, country: { code: "us", name: "United States" } },
        { id: "jessies", name: "Jessies", file: "Jessies.webp", width: 397, height: 254, via: partnerMark.grandStudio, country: { code: "us", name: "United States" } },
        { id: "urida", name: "Urida", file: "Urida.jpeg", width: 603, height: 243, country: { code: "us", name: "United States" } },
        { id: "da-boss", name: "Da Boss", file: "dabossicon.png", width: 301, height: 278, country: { code: "us", name: "United States" } },
        /* The mark itself reads "Good Guys Wash Club"; the old "Good N Guys" was neither that nor the name on the list. */
        { id: "good-guys", name: "Good Guys Wash Club", file: "goodnguys.png", width: 1222, height: 961, via: partnerMark.grandStudio, country: { code: "us", name: "United States" } },
        { id: "le-bleu", name: "Le Bleu", file: "lebleu.png", width: 250, height: 103, via: partnerMark.grandStudio, country: { code: "us", name: "United States" } },
        { id: "magic", name: "Magic", file: "magic-logo.png", width: 200, height: 82, country: { code: "us", name: "United States" } },
        { id: "texas-wholesale", name: "Texas Wholesale", file: "texaswholesale.png", width: 2396, height: 1088, country: { code: "us", name: "United States" } },
        /*
          Four marks that arrived since: NSDC's federal council crest, Definiti,
          and Ajil, whose supplied file carried a wide empty surround and is
          trimmed to the mark so it fills the tile like the rest.
        */
        { id: "nsdc", name: "NSDC", file: "nsdc.png", width: 1154, height: 216, via: partnerMark.eclipse, country: { code: "ng", name: "Nigeria" } },
        { id: "ajil", name: "Ajil Financial Services", file: "ajil.webp", width: 207, height: 45, via: partnerMark.pccIt, country: { code: "sa", name: "Saudi Arabia" } },
        { id: "definiti", name: "Definiti", file: "definiti.png", width: 414, height: 160, via: partnerMark.tafsol },

        /* --- named on the list, no mark supplied -------------------------- */
        { id: "jakes-electric", name: "Jakes Electric", file: null, via: partnerMark.novizant },
        { id: "olson-homes", name: "Olson Homes", file: null, via: partnerMark.novizant },
        { id: "innvio", name: "Innvio", file: null, via: partnerMark.novizant },
        { id: "kidswish", name: "KidsWish", file: null },
        { id: "jadi-enterprise", name: "Jadi Enterprise", file: null },
        { id: "airflow", name: "Airflow", file: null, via: partnerMark.briggrTech },
        { id: "ozgo", name: "OzGo", file: null, via: partnerMark.briggrTech },
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
    eyebrow: null,
    heading: "Let's Build the Future Together",
    body: "Whether you're planning an AI initiative, modernizing SharePoint, migrating to the cloud, building a custom application, or scaling your technology team, Cloud Fusion Global is ready to help.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: null,
    description: null,
  },
};

export default homePage;
