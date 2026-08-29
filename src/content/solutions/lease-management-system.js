/**
 * Solution: Lease Management System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "lease-management-system",
  title: "Lease Management System",
  tagline: "Every lease, every clause, every date, managed",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/lease-management-system.webp",
  summary: "A centralized lease platform with AI abstraction: critical dates, obligations, and financials extracted from lease documents and turned into alerts and reporting.",
  categoryId: "real-estate",
  order: 1,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Lease portfolios live in filing cabinets and PDFs. Critical dates get missed, obligations go untracked, and answering a simple portfolio question means reading hundreds of documents.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Renewal, notice, and escalation dates tracked in spreadsheets, or memories.",
      "Lease abstracts produced manually at high cost and inconsistent quality.",
      "No portfolio-wide view of obligations, options, and exposure.",
      "Audit and diligence requests requiring weeks of document review."],
  },

  overview: [
    "CFG's Lease Management System creates a single source of truth for the lease portfolio: documents in a governed repository, key terms abstracted into structured data, and critical dates driving automated alerts to the right owners.",
    "AI abstraction reads leases and amendments, parties, terms, rents, escalations, options, obligations, with human verification workflows, cutting abstraction time dramatically while raising consistency."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Centralize",
        description: "Leases, amendments, and correspondence come into one governed repository linked by property and party.",
      },
      {
        step: "02",
        title: "Abstract with AI",
        description: "AI extracts key terms into structured records; analysts verify through a review interface.",
      },
      {
        step: "03",
        title: "Monitor",
        description: "Critical dates and obligations generate alerts and tasks ahead of every deadline.",
      },
      {
        step: "04",
        title: "Report",
        description: "Portfolio dashboards show exposure, expirations, escalations, and obligations in real time.",
      }],
  },

  capabilities: [
    "Central lease repository with document linking",
    "Structured lease records: terms, rents, options, obligations",
    "Critical date alerting and task assignment",
    "Escalation and rent schedule tracking",
    "Portfolio dashboards and reporting",
    "Audit-ready document trails"],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "AI lease abstraction with human verification",
      "Amendment detection and record updating",
      "Natural-language queries across the portfolio"],
  },

  architecture: null,

  benefits: [
    "No missed renewals, notices, or escalations",
    "Abstraction cost and turnaround cut sharply",
    "Portfolio questions answered in seconds",
    "Diligence and audit readiness at all times",
    "Consistent data quality across the portfolio"],

  useCases: [
    "Corporate occupier lease portfolios",
    "Landlord and REIT lease administration",
    "Acquisition diligence abstraction",
    "Lease accounting data feeds"],

  technologies: [
    "sharepoint-online",
    "azure-openai",
    "microsoft-syntex",
    "power-apps",
    "power-automate",
    "power-bi"],

  industries: [
    "real-estate",
    "financial-services"],

  relatedServices: [
    "agentic-ai-automation",
    "microsoft-syntex",
    "power-platform-solutions"],

  relatedSolutions: [
    "deal-management-system",
    "contract-management-system",
    "reit-analytics-dashboard"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "Lease Management System",
    description: "A centralized lease platform with AI abstraction: critical dates, obligations, and financials extracted from lease documents and turned into alerts and reporting.",
  },
};

export default solution;
