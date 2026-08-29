/**
 * Industry: Retail
 *
 * Section eyebrows and headings are the same on every industry, so they live
 * in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "retail",
  title: "Retail",
  tagline: "One view of the customer, the order, and the stock",
  image: "/asset/industries/retail.webp",
  summary: "Commerce integration, inventory intelligence, and customer experience work for retailers and distributors selling across every channel.",
  order: 12,
  inFooter: true,
  status: "published",

  intro: [
    "Retail runs on margins too thin to absorb bad data. Stores, marketplaces, and the web each hold a partial view of the same customer and the same stock, and the gaps show up as oversells, markdowns, and abandoned carts. The work is integration: one order record, one inventory position, one customer."],

  challenges: [
    "Channels holding separate, conflicting inventory positions.",
    "Orders reconciled between commerce, ERP, and the warehouse by hand.",
    "Product data entered repeatedly for every marketplace.",
    "Customer history fragmented across store, web, and support.",
    "Promotions planned without reliable demand signal."],

  aiImpact: [
    "Demand forecasting sizes buys and allocations to what actually sells.",
    "AI enrichment writes and normalizes product copy and attributes across channels.",
    "Recommendation and search models lift basket size and conversion.",
    "Assistants give store and support staff instant answers on stock, orders, and returns."],

  microsoftEnablement: [
    "Azure Integration Services keep commerce, ERP, and the warehouse in step.",
    "Dynamics 365 Business Central runs inventory, purchasing, and finance on one ledger.",
    "Power Apps put clienteling, counts, and returns in the hands of store staff.",
    "Power BI reports sell-through, margin, and channel performance daily."],

  outcomes: [
    "One inventory position across every channel",
    "Orders reconciled automatically, not chased",
    "Product data published once and everywhere",
    "A single customer record behind every interaction",
    "Buying decisions made on real demand"],

  solutions: [
    "b2b-integration",
    "erp-wholesale-distribution",
    "ai-powered-mobile-apps",
    "workflow-automation-platform",
    "ai-chatbot-solutions"],

  relatedServices: [
    "custom-software-development",
    "data-business-intelligence",
    "microsoft-cloud-solutions",
    "generative-ai"],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Retail Industry Solutions",
    description: "Commerce integration, inventory intelligence, and customer experience work for retailers and distributors selling across every channel.",
  },
};

export default industry;
