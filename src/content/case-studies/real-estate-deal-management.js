/**
 * Case study: Real Estate Deal Management
 *
 * Every case study is told in the same beats, so the eyebrows and headings that
 * introduce them live in `_detail.js`; only what happened is authored here.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "real-estate-deal-management",
  title: "Real Estate Deal Management",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/deal-management.webp",
  sectorLabel: "Real Estate",
  industrySlug: "real-estate",
  order: 6,
  client: "Confidential real estate investment organization",
  summary: "A structured deal management system replacing inbox-driven transaction work: pipeline, documents, and approvals in one governed workspace.",
  status: "published",

  challenge: "Deals progressed through email threads and personal folders. Leadership lacked a reliable pipeline view, diligence documents were scattered, approval decisions were hard to trace, and knowledge left with each transaction's completion.",

  approach: [
    {
      step: "01",
      description: "Mapped the organization's deal stages, gates, and approval requirements.",
    },
    {
      step: "02",
      description: "Designed structured deal workspaces holding pipeline data, documents, and tasks.",
    },
    {
      step: "03",
      description: "Implemented stage-gate workflows with required checklists and approvals.",
    },
    {
      step: "04",
      description: "Built pipeline dashboards rolling deals up for leadership visibility.",
    },
    {
      step: "05",
      description: "Rolled out with the deal teams, refining against live transactions.",
    }],

  solution: "A deal management system where every transaction has a governed workspace (stage, team, documents, checklist, and approvals) and leadership sees the whole pipeline in live dashboards.",

  outcomes: [
    "Complete pipeline visibility for leadership at any moment",
    "Diligence documents organized and audit-ready per deal",
    "Approvals traceable with full decision history",
    "Deal knowledge retained in the system across transactions"],

  metricsNote: "Verified cycle-time improvements to be added upon client approval",

  technologies: [
    "power-apps",
    "dataverse",
    "sharepoint-online",
    "power-automate",
    "power-bi"],

  relatedServices: [
    "power-platform-solutions",
    "custom-software-development"],

  relatedSolutions: [],

  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],

  seo: {
    title: "Real Estate Deal Management Case Study",
    description: "A structured deal management system replacing inbox-driven transaction work: pipeline, documents, and approvals in one governed workspace.",
  },
};

export default caseStudy;
