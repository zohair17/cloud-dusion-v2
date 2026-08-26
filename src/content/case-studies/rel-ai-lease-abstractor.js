/**
 * Case study: REL AI Lease Abstractor
 *
 * Every case study is told in the same beats, so the eyebrows and headings that
 * introduce them live in `_detail.js`; only what happened is authored here.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "rel-ai-lease-abstractor",
  title: "REL AI Lease Abstractor",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/ai-lease-abstractor.webp",
  sectorLabel: "Real Estate",
  industrySlug: "real-estate",
  order: 3,
  client: "Confidential real estate organization",
  summary: "An AI-powered lease abstraction solution extracting key terms, dates, and obligations from lease documents, with human verification built into the workflow.",
  status: "published",

  challenge: "Lease abstraction was performed entirely manually: analysts read each lease and amendment, re-keying terms into spreadsheets. The process was slow and costly, quality varied by reader, and the resulting data was hard to keep current as amendments arrived.",

  approach: [
    {
      step: "01",
      description: "Analyzed lease document types, formats, and the fields the business depends on.",
    },
    {
      step: "02",
      description: "Implemented AI extraction models to read leases and propose structured abstracts.",
    },
    {
      step: "03",
      description: "Built a verification workflow where analysts review, correct, and approve AI output.",
    },
    {
      step: "04",
      description: "Structured approved abstracts into queryable records linked to source documents.",
    },
    {
      step: "05",
      description: "Tuned extraction quality iteratively against verified results.",
    },
  ],

  solution: "REL reads lease documents with AI, proposes structured abstracts (parties, dates, rents, options, obligations) and routes them through analyst verification, producing consistent, source-linked lease data at a fraction of manual effort.",

  outcomes: [
    "Abstraction effort per lease reduced substantially, with analysts verifying rather than transcribing",
    "Consistent abstract quality independent of individual readers",
    "Lease data linked to source documents for instant validation",
    "Foundation established for portfolio-wide lease intelligence",
  ],

  metricsNote: "Verified accuracy and throughput metrics to be added upon client approval",

  technologies: [
    "azure-openai",
    "azure-ai-document-intelligence",
    "sharepoint-online",
    "power-automate",
  ],

  relatedServices: [
    "agentic-ai-automation",
    "generative-ai",
    "microsoft-syntex",
  ],

  relatedSolutions: [],

  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session",
  ],

  seo: {
    title: "REL AI Lease Abstractor Case Study",
    description: "An AI-powered lease abstraction solution extracting key terms, dates, and obligations from lease documents, with human verification built into the workflow.",
  },
};

export default caseStudy;
