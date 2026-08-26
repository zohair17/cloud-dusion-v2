/**
 * Solution: AI-Enabled Document Generator
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "ai-document-generator",
  title: "AI-Enabled Document Generator",
  tagline: "First drafts in seconds, in your house style",
  /** Glyph id; the component owns the actual icon. */
  icon: "file-output",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/ai-document-generator.webp",
  summary: "Automated generation of contracts, proposals, reports, and letters: assembled from templates, your data, and AI drafting, with human review built in.",
  categoryId: "ai",
  order: 2,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Skilled professionals spend hours assembling documents that follow known patterns, copying clauses, re-keying data, and fixing formatting, work that is essential yet almost entirely mechanical.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Document assembly consuming expensive professional hours.",
      "Copy-paste errors and outdated clauses creating real risk.",
      "Inconsistent formatting and tone across teams.",
      "Slow turnaround on proposals, contracts, and client documents.",
    ],
  },

  overview: [
    "The AI-Enabled Document Generator turns document creation into a governed pipeline: structured templates define what a document must contain, live data flows in from your systems, and AI drafts the narrative sections in your organization's tone and terminology.",
    "Every generated document routes through review and approval before release, with full traceability of sources, versions, and sign-off, speed without surrendering control.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Select & source",
        description: "A user picks the document type; the system pulls the relevant data from CRM, ERP, or SharePoint automatically.",
      },
      {
        step: "02",
        title: "Generate",
        description: "Approved templates and clause libraries combine with AI-drafted sections grounded in the sourced data.",
      },
      {
        step: "03",
        title: "Review",
        description: "Reviewers see drafts with sources highlighted, edit inline, and approve through a controlled workflow.",
      },
      {
        step: "04",
        title: "Deliver & file",
        description: "Final documents are formatted, distributed, signed where needed, and filed with complete metadata.",
      },
    ],
  },

  capabilities: [
    "Template and clause library management with versioning",
    "Data merge from enterprise systems",
    "AI narrative drafting in organizational tone",
    "Review, redline, and approval workflow",
    "eSignature integration",
    "Automatic filing with metadata and audit trail",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Context-aware drafting grounded in sourced data",
      "Clause suggestion and consistency checking",
      "Tone and terminology alignment to house style",
      "Summarization of long inputs into document sections",
    ],
  },

  architecture: null,

  benefits: [
    "Document turnaround cut from days to minutes",
    "Current, approved clauses in every document",
    "Consistent formatting and voice organization-wide",
    "Professional hours redirected to judgment, not assembly",
    "Complete traceability from data to signed document",
  ],

  useCases: [
    "Sales proposals and statements of work",
    "Contracts and engagement letters",
    "Periodic client and management reports",
    "Regulatory and compliance correspondence",
  ],

  technologies: [
    "azure-openai",
    "sharepoint-online",
    "power-automate",
    "microsoft-graph",
  ],

  industries: [
    "financial-services",
    "real-estate",
    "healthcare",
  ],

  relatedServices: [
    "generative-ai",
    "agentic-ai-automation",
    "power-platform-solutions",
  ],

  relatedSolutions: [
    "electronic-contract-generator",
    "contract-management-system",
    "ai-document-management",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "AI-Enabled Document Generator",
    description: "Automated generation of contracts, proposals, reports, and letters: assembled from templates, your data, and AI drafting, with human review built in.",
  },
};

export default solution;
