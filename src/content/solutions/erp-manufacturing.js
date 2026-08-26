/**
 * Solution: ERP for Manufacturing
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "erp-manufacturing",
  title: "ERP for Manufacturing",
  tagline: "Production, inventory, and cost in one connected system",
  /** Glyph id; the component owns the actual icon. */
  icon: "factory",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/erp-manufacturing.webp",
  summary: "An ERP implementation for manufacturers: production planning, inventory, procurement, quality, and costing unified with real-time shop-floor visibility.",
  categoryId: "erp",
  order: 1,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Manufacturers running on disconnected systems and spreadsheets can't answer the basics in real time: what to make next, what materials are where, and what anything actually costs.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Production planned in spreadsheets against stale inventory data.",
      "Material shortages discovered on the shop floor, not before.",
      "True product costs unknown until long after the period closes.",
      "Quality and traceability records scattered across paper and files.",
    ],
  },

  overview: [
    "CFG implements manufacturing ERP that connects the chain from order to shipment: demand drives planning, planning drives procurement and production schedules, and shop-floor execution feeds back inventory and cost in real time.",
    "We configure around your actual operations, make-to-stock, make-to-order, or mixed, integrate with your machines and systems where valuable, and layer Power BI analytics over everything so operations and finance finally share one set of numbers.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Plan from demand",
        description: "Orders and forecasts drive material requirements and production schedules automatically.",
      },
      {
        step: "02",
        title: "Execute & track",
        description: "Work orders, material consumption, and progress are captured at the point of work.",
      },
      {
        step: "03",
        title: "Control inventory",
        description: "Real-time stock across locations with reorder automation and lot/serial traceability.",
      },
      {
        step: "04",
        title: "Cost & analyze",
        description: "Actual costs roll up continuously; dashboards show margin, efficiency, and exceptions.",
      },
    ],
  },

  capabilities: [
    "Production planning and scheduling",
    "Bill of materials and routing management",
    "Real-time, multi-location inventory",
    "Procurement and supplier management",
    "Quality management and lot traceability",
    "Actual costing and margin analysis",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Demand forecasting from history and seasonality",
      "Anomaly detection on scrap, cost, and cycle times",
    ],
  },

  architecture: null,

  benefits: [
    "Production planned against reality, not stale data",
    "Shortages prevented instead of discovered",
    "True product costs visible continuously",
    "Full traceability for audits and recalls",
    "Operations and finance on one set of numbers",
  ],

  useCases: [
    "Discrete manufacturing order-to-ship management",
    "Process manufacturing with lot control",
    "Multi-site production and inventory",
    "Contract manufacturing job costing",
  ],

  technologies: [
    "power-bi",
    "power-automate",
    "dataverse",
  ],

  industries: [
    "transportation",
    "energy",
    "technology",
  ],

  relatedServices: [
    "custom-software-development",
    "data-business-intelligence",
    "power-platform-solutions",
  ],

  relatedSolutions: [
    "erp-wholesale-distribution",
    "job-management-system",
    "workflow-automation-platform",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "ERP for Manufacturing",
    description: "An ERP implementation for manufacturers: production planning, inventory, procurement, quality, and costing unified with real-time shop-floor visibility.",
  },
};

export default solution;
