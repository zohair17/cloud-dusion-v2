/**
 * Solution: REIT Analytics Dashboard
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "reit-analytics-dashboard",
  title: "REIT Analytics Dashboard",
  tagline: "Portfolio performance, current and in one place",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/reit-analytics-dashboard.webp",
  summary: "Power BI analytics for real estate investors: occupancy, rent rolls, NOI, and portfolio KPIs unified from property systems into decision-ready dashboards.",
  categoryId: "real-estate",
  order: 4,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "REIT and portfolio reporting assembles slowly from property manager exports and spreadsheets, arriving late, disagreeing across sources, and answering last month's questions.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "KPIs assembled manually from many property management exports.",
      "Reports outdated before they circulate.",
      "Inconsistent definitions of occupancy, NOI, and yields across sources.",
      "Board and investor reporting consuming analyst weeks each cycle."],
  },

  overview: [
    "CFG's REIT Analytics Dashboard automates the pipeline from property systems to insight: data flows from management platforms and finance systems into a governed model where portfolio metrics are defined once, then serves dashboards for asset managers, executives, and board reporting.",
    "Drill from portfolio, to fund, to asset, to lease, with occupancy, rent roll, arrears, NOI, and valuation trends current as of the latest sync, not the last quarter-end scramble."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Connect sources",
        description: "Automated pipelines pull from property management, finance, and valuation systems.",
      },
      {
        step: "02",
        title: "Model once",
        description: "A governed semantic model defines every metric, occupancy, WAULT, NOI, one way, portfolio-wide.",
      },
      {
        step: "03",
        title: "Serve dashboards",
        description: "Role-appropriate dashboards for asset managers, executives, and investor reporting.",
      },
      {
        step: "04",
        title: "Drill & export",
        description: "From portfolio KPIs down to individual leases, with board-pack and investor exports on demand.",
      }],
  },

  capabilities: [
    "Automated ingestion from property and finance systems",
    "Governed portfolio metric definitions",
    "Occupancy, rent roll, arrears, and NOI dashboards",
    "Fund and asset-level drill-down",
    "Variance and trend analysis",
    "Board and investor reporting exports"],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Natural-language questions over portfolio data",
      "Anomaly flagging on arrears and occupancy shifts"],
  },

  architecture: null,

  benefits: [
    "One agreed version of portfolio truth",
    "Reporting cycles cut from weeks to hours",
    "Early sight of occupancy and arrears movements",
    "Analyst time shifted from assembly to analysis",
    "Investor-grade reporting on demand"],

  useCases: [
    "REIT portfolio performance reporting",
    "Fund and investor reporting automation",
    "Asset management KPI monitoring",
    "Acquisition performance tracking"],

  technologies: [
    "power-bi",
    "azure-data-factory",
    "azure-sql",
    "azure-synapse",
    "microsoft-fabric"],

  industries: [
    "real-estate",
    "financial-services"],

  relatedServices: [
    "data-business-intelligence",
    "custom-software-development"],

  relatedSolutions: [
    "lease-management-system",
    "deal-management-system",
    "erp-manufacturing"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "REIT Analytics Dashboard",
    description: "Power BI analytics for real estate investors: occupancy, rent rolls, NOI, and portfolio KPIs unified from property systems into decision-ready dashboards.",
  },
};

export default solution;
