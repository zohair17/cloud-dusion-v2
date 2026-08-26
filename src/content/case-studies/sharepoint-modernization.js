/**
 * Case study: SharePoint Modernization
 *
 * Every case study is told in the same beats, so the eyebrows and headings that
 * introduce them live in `_detail.js`; only what happened is authored here.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "sharepoint-modernization",
  title: "SharePoint Modernization",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/sharepoint-modernization.webp",
  sectorLabel: "Enterprise",
  industrySlug: null,
  order: 5,
  client: "Confidential enterprise client",
  summary: "Modernization of a legacy SharePoint environment: classic sites, aging customizations, and workflows rebuilt on the modern platform.",
  status: "published",

  challenge: "Years of classic SharePoint (custom master pages, farm solutions, and legacy workflows) left the organization stuck: unable to adopt modern capabilities, at risk with every update, and delivering a dated experience users increasingly avoided.",

  approach: [
    {
      step: "01",
      description: "Cataloged customizations, workflows, and integrations with modernization impact ratings.",
    },
    {
      step: "02",
      description: "Prioritized by business value: retire, replace with out-of-box, or rebuild modern.",
    },
    {
      step: "03",
      description: "Rebuilt necessary customizations on SharePoint Framework (SPFx).",
    },
    {
      step: "04",
      description: "Migrated legacy workflows to Power Automate.",
    },
    {
      step: "05",
      description: "Modernized site experiences with current templates and navigation.",
    },
  ],

  solution: "A modernized SharePoint environment on supportable foundations (modern sites, SPFx components, and Power Automate workflows) ready for current and future platform capabilities.",

  outcomes: [
    "Unsupportable customizations retired or rebuilt on modern frameworks",
    "Workflows moved to a supported automation platform",
    "A current user experience that restored user confidence",
    "Platform readiness for modern and AI capabilities",
  ],

  metricsNote: "Verified adoption metrics to be added upon client approval",

  technologies: [
    "sharepoint-online",
    "sharepoint-framework",
    "power-automate",
    "microsoft-365",
  ],

  relatedServices: [
    "sharepoint-solutions",
    "power-platform-solutions",
  ],

  relatedSolutions: [],

  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session",
  ],

  seo: {
    title: "SharePoint Modernization Case Study",
    description: "Modernization of a legacy SharePoint environment: classic sites, aging customizations, and workflows rebuilt on the modern platform.",
  },
};

export default caseStudy;
