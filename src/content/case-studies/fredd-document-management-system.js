/**
 * Case study: FREDD Document Management System
 *
 * Every case study is told in the same beats, so the eyebrows and headings that
 * introduce them live in `_detail.js`; only what happened is authored here.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "fredd-document-management-system",
  title: "FREDD Document Management System",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/document-management-system.webp",
  sectorLabel: "Real Estate",
  industrySlug: "real-estate",
  order: 2,
  client: "Confidential real estate organization",
  summary: "An enterprise document management system bringing structure, governance, and searchability to a high-volume real estate document estate.",
  status: "published",

  challenge: "Critical documents (agreements, correspondence, property records) were spread across shared drives and inboxes with inconsistent naming and no metadata. Finding the authoritative version of a document was slow and uncertain, and governance obligations were difficult to demonstrate.",

  approach: [
    {
      step: "01",
      description: "Designed an information architecture around properties, transactions, and document types.",
    },
    {
      step: "02",
      description: "Established content types, metadata, and naming standards with business stakeholders.",
    },
    {
      step: "03",
      description: "Migrated existing content with cleanup, deduplication, and metadata application.",
    },
    {
      step: "04",
      description: "Implemented permissions, versioning, and retention aligned to governance needs.",
    },
    {
      step: "05",
      description: "Trained teams and established ownership for ongoing content governance.",
    },
  ],

  solution: "FREDD provides a structured SharePoint-based document platform where documents are filed by metadata, versioned automatically, secured by role, and found in seconds through scoped search.",

  outcomes: [
    "Authoritative documents locatable in seconds rather than searches across drives",
    "Version confusion eliminated through controlled versioning",
    "Permissions and retention applied consistently by structure",
    "A governed foundation prepared for AI document capabilities",
  ],

  metricsNote: "Verified adoption and volume metrics to be added upon client approval",

  technologies: [
    "sharepoint-online",
    "microsoft-365",
    "power-automate",
    "microsoft-purview",
  ],

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-syntex",
  ],

  relatedSolutions: [],

  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session",
  ],

  seo: {
    title: "FREDD Document Management System Case Study",
    description: "An enterprise document management system bringing structure, governance, and searchability to a high-volume real estate document estate.",
  },
};

export default caseStudy;
