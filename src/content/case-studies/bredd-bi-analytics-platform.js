/**
 * Case study: BREDD BI Analytics Platform
 *
 * Every case study is told in the same beats, so the eyebrows and headings that
 * introduce them live in `_detail.js`; only what happened is authored here.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "bredd-bi-analytics-platform",
  title: "BREDD BI Analytics Platform",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/bi-analytics-platform.webp",
  sectorLabel: "Real Estate",
  industrySlug: "real-estate",
  order: 1,
  client: "Confidential real estate investment organization",
  summary: "A business intelligence platform unifying real estate portfolio data into governed Power BI analytics, replacing manual, spreadsheet-driven reporting cycles.",
  status: "published",

  challenge: "Portfolio reporting depended on manually assembled spreadsheets drawn from multiple property and finance systems. Reports took significant effort to produce, arrived late, and key metrics were defined differently across teams, leaving leadership without a current, consistent view of performance.",

  approach: [
    {
      step: "01",
      description: "Inventoried reporting needs and data sources across asset management and finance teams.",
    },
    {
      step: "02",
      description: "Designed automated data pipelines from source systems into a governed analytical model.",
    },
    {
      step: "03",
      description: "Defined portfolio metrics once, centrally, in a semantic model shared by all reports.",
    },
    {
      step: "04",
      description: "Built role-based Power BI dashboards for executives, asset managers, and analysts.",
    },
    {
      step: "05",
      description: "Rolled out with training and a governed publishing process for new reports.",
    }],

  solution: "The BREDD platform delivers automated data ingestion, a single governed metric layer, and interactive dashboards with drill-down from portfolio level to individual assets, refreshed on schedule rather than assembled by hand.",

  outcomes: [
    "Reporting cycles reduced from manual multi-day assembly to scheduled automated refresh",
    "One agreed definition for every portfolio metric across teams",
    "Leadership access to current performance without waiting on report packs",
    "Analyst effort shifted from data assembly to analysis"],

  metricsNote: "Verified performance metrics to be added upon client approval",

  technologies: [
    "power-bi",
    "azure-data-factory",
    "azure-sql",
    "microsoft-365"],

  relatedServices: [
    "data-business-intelligence",
    "microsoft-cloud-solutions"],

  relatedSolutions: [],

  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],

  seo: {
    title: "BREDD BI Analytics Platform Case Study",
    description: "A business intelligence platform unifying real estate portfolio data into governed Power BI analytics, replacing manual, spreadsheet-driven reporting cycles.",
  },
};

export default caseStudy;
