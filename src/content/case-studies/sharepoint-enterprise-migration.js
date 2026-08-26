/**
 * Case study: SharePoint Enterprise Migration
 *
 * Every case study is told in the same beats, so the eyebrows and headings that
 * introduce them live in `_detail.js`; only what happened is authored here.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "sharepoint-enterprise-migration",
  title: "SharePoint Enterprise Migration",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/sharepoint-migration.webp",
  sectorLabel: "Enterprise",
  industrySlug: null,
  order: 4,
  client: "Confidential enterprise client",
  summary: "A large-scale migration of enterprise content to SharePoint Online, executed in staged waves with content restructuring, verification, and no business disruption.",
  status: "published",

  challenge: "An aging content estate (legacy SharePoint and file shares accumulated over years) carried growing security and support risk. The organization needed to move to SharePoint Online, but content sprawl, complex permissions, and business continuity requirements made a naive migration dangerous.",

  approach: [
    {
      step: "01",
      description: "Ran automated inventory and analysis of the full source estate.",
    },
    {
      step: "02",
      description: "Designed a modern target architecture rather than replicating legacy structure.",
    },
    {
      step: "03",
      description: "Cleaned content: duplicates, stale material, and broken permissions resolved.",
    },
    {
      step: "04",
      description: "Piloted migrations with representative content to validate fidelity and timing.",
    },
    {
      step: "05",
      description: "Executed staged waves with delta syncs, verification reports, and user communication.",
    },
  ],

  solution: "A complete, verified migration to SharePoint Online with restructured sites, mapped permissions, and applied metadata, delivered wave by wave while the business kept working.",

  outcomes: [
    "Full estate migrated with item-level verification and no data loss",
    "Legacy infrastructure and its risk retired",
    "A restructured, governed content architecture rather than migrated sprawl",
    "Users transitioned with communication and support at each wave",
  ],

  metricsNote: "Verified scale and timeline figures to be added upon client approval",

  technologies: [
    "sharepoint-online",
    "microsoft-365",
    "migration-tooling",
    "powershell",
  ],

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-cloud-solutions",
  ],

  relatedSolutions: [],

  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session",
  ],

  seo: {
    title: "SharePoint Enterprise Migration Case Study",
    description: "A large-scale migration of enterprise content to SharePoint Online, executed in staged waves with content restructuring, verification, and no business disruption.",
  },
};

export default caseStudy;
