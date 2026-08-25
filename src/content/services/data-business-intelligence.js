/**
 * Service: Data & Business Intelligence
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "data-business-intelligence",
  title: "Data & Business Intelligence",
  navLabel: "Data & BI",
  tagline: "From scattered data to decisions you can trust",
  summary: "Data engineering, warehousing, and Power BI on the Azure data platform: pipelines, models, and dashboards that make your data decision-ready and AI-ready.",
  groupId: "microsoft-platform",
  order: 7,
  status: "published",


  heroSlides: [
    { image: "/asset/services/data-bi-1.webp", label: "One source of truth for enterprise metrics" },
    { image: "/asset/services/data-bi-2.webp", label: "Pipelines running continuously, with quality checks" },
    { image: "/asset/services/data-bi-3.webp", label: "A data foundation ready for AI" },
  ],

  intro: [
    "Every enterprise is rich in data and most are poor in answers. Numbers live in disconnected systems, reports contradict each other, and by the time analysis arrives, the decision has passed. Meanwhile, every AI ambition depends on the same missing foundation: clean, integrated, governed data.",
    "Cloud Fusion Global builds that foundation on the Azure data platform: engineering pipelines with Azure Data Factory, modelling warehouses on Azure Synapse and Databricks, and delivering insight through Power BI dashboards leadership actually uses. One data estate serving both human decisions and AI workloads.",
  ],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Data fragmented across ERP, CRM, spreadsheets, and departmental systems.",
      "Reports that take days to assemble and still disagree with each other.",
      "No single source of truth for core business metrics.",
      "Leadership decisions made on instinct because data arrives too late.",
      "AI initiatives blocked by data quality and accessibility.",
    ],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Engineer reliable pipelines",
        description:
          "Automated ETL/ELT with Azure Data Factory and Databricks: data flowing from source systems continuously, with quality checks built in.",
      },
      {
        title: "Model a single source of truth",
        description:
          "Warehouse and semantic models that encode business definitions once, so every report agrees.",
      },
      {
        title: "Deliver insight where decisions happen",
        description:
          "Power BI dashboards and reports designed around decisions, embedded in Teams and workflows, not buried in folders.",
      },
      {
        title: "Make the estate AI-ready",
        description:
          "The same governed data foundation powers machine learning, RAG systems, and AI agents.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "Data Engineering", description: "Robust, automated data pipelines from any source to your analytical estate." },
      { title: "Data Warehousing", description: "Modern warehouse architectures that unify enterprise data for analysis." },
      { title: "ETL Development", description: "Extract, transform, and load processes with monitoring and data quality gates." },
      { title: "Business Intelligence", description: "Analytics strategy, semantic models, and reporting standards for the enterprise." },
      { title: "Dashboard Development", description: "Decision-focused dashboards with drill-down, alerts, and mobile access." },
      { title: "Power BI", description: "Data models, reports, governance, and deployment pipelines across the organization." },
      { title: "Azure Data Factory", description: "Orchestrated data movement and transformation across cloud and on-premises sources." },
      { title: "Azure SQL", description: "Managed relational databases engineered for performance and resilience." },
      { title: "Azure Synapse", description: "Integrated analytics for warehousing and big data at enterprise scale." },
      { title: "Azure Databricks", description: "Lakehouse engineering and advanced analytics on unified data." },
      { title: "Advanced Reporting", description: "Paginated, regulatory, and operational reporting at production quality." },
    ],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "Data is where AI begins. The pipelines and models we build feed Power BI for human insight and simultaneously feed Azure AI, grounding RAG systems, training models, and giving agents accurate context. Copilot in Power BI then lets business users ask questions in plain language and get governed answers.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "One source of truth for enterprise metrics",
      "Reports delivered in seconds, not days",
      "Decisions grounded in current, trusted data",
      "Reduced manual reporting effort across teams",
      "A data foundation ready for AI and machine learning",
      "Governed self-service analytics for business users",
    ],
  },

  technologies: [
    "power-bi",
    "azure-data-factory",
    "azure-synapse",
    "azure-databricks",
    "azure-sql",
    "microsoft-fabric",
    "azure-openai",
  ],

  relatedSolutions: [
    "reit-analytics-dashboard",
    "erp-manufacturing",
    "erp-wholesale-distribution",
    "ai-document-management",
  ],
  relatedIndustries: ["financial-services", "real-estate", "energy", "healthcare", "transportation"],
  relatedCaseStudies: ["bredd-bi-analytics-platform"],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Data & Business Intelligence?",
    body: "Tell us where you are and where you want to be, and we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Data & Business Intelligence",
    description: "Data engineering, warehousing, and Power BI on the Azure data platform: pipelines, models, and dashboards that make your data decision-ready and AI-ready."
  }
};

export default service;
