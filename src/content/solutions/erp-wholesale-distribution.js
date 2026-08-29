/**
 * Solution: Wholesale Distribution ERP Solutions
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "erp-wholesale-distribution",
  title: "Wholesale Distribution ERP Solutions",
  tagline: "From purchase order to proof of delivery, connected",
  /** Glyph id; the component owns the actual icon. */
  icon: "package-search",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/erp-wholesale-distribution.webp",
  summary: "Distribution ERP covering inventory, purchasing, sales, warehouse, and delivery: with the margin visibility wholesale lives or dies on.",
  categoryId: "erp",
  order: 2,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Distributors juggle thousands of SKUs, thin margins, and demanding service levels, on systems that can't say what's in stock, what it costs, or which customers and lines actually make money.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Stock positions unreliable across warehouses and channels.",
      "Purchasing driven by instinct rather than demand and lead times.",
      "Pricing and margin eroding invisibly across thousands of SKUs.",
      "Order-to-delivery handoffs dropped between disconnected tools."],
  },

  overview: [
    "CFG implements distribution ERP that runs the full cycle, procurement, receiving, warehouse operations, sales orders, fulfillment, delivery, and invoicing, on live inventory and cost data.",
    "Margin intelligence sits at the center: landed costs, customer-specific pricing, and profitability by SKU, customer, and channel are visible continuously, so commercial decisions stop being guesses."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Buy smart",
        description: "Demand, lead times, and stock policies drive purchase suggestions and supplier orders.",
      },
      {
        step: "02",
        title: "Receive & store",
        description: "Goods receipt, put-away, and bin management keep warehouse reality and system in sync.",
      },
      {
        step: "03",
        title: "Sell & fulfill",
        description: "Orders from every channel allocate stock, drive picking, and flow to dispatch and invoicing.",
      },
      {
        step: "04",
        title: "See margin",
        description: "Landed cost and pricing engines expose true profitability by SKU, customer, and order.",
      }],
  },

  capabilities: [
    "Multi-warehouse inventory with bin management",
    "Demand-driven purchasing and replenishment",
    "Customer-specific pricing and promotions",
    "Order management across channels",
    "Picking, packing, and dispatch workflows",
    "Landed cost and margin analytics"],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Replenishment forecasting by SKU and season",
      "Margin anomaly alerts across customers and lines"],
  },

  architecture: null,

  benefits: [
    "Reliable stock promises to customers",
    "Working capital freed from excess inventory",
    "Margin leakage surfaced and stopped",
    "Faster, cleaner order-to-cash cycles",
    "One system from purchase order to proof of delivery"],

  useCases: [
    "Multi-warehouse wholesale operations",
    "B2B distribution with customer pricing tiers",
    "Import-driven distribution with landed costs",
    "E-commerce and trade counter hybrid sales"],

  technologies: [
    "dynamics-365-business-central",
    "power-bi",
    "power-automate",
    "azure",
    "edi-api-integrations"],

  industries: [
    
    "technology",
    "energy"],

  relatedServices: [
    "custom-software-development",
    "data-business-intelligence",
    "power-platform-solutions"],

  relatedSolutions: [
    "erp-manufacturing",
    "b2b-integration",
    "workflow-automation-platform"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "Wholesale Distribution ERP Solutions",
    description: "Distribution ERP covering inventory, purchasing, sales, warehouse, and delivery: with the margin visibility wholesale lives or dies on.",
  },
};

export default solution;
