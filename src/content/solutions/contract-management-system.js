/**
 * Solution: Contract Management System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "contract-management-system",
  title: "Contract Management System",
  tagline: "Every contract, every obligation, in one system",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/contract-management-system.webp",
  summary: "End-to-end contract lifecycle management on SharePoint with AI-extracted terms: authoring, negotiation, approval, signature, obligations, and renewals.",
  categoryId: "sharepoint-microsoft",
  order: 4,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Contracts live in inboxes and folders; obligations and renewal dates live in people's memories. Value leaks through missed renewals, unenforced terms, and slow cycles.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "No single repository of executed contracts and amendments.",
      "Renewal and notice deadlines missed for lack of visibility.",
      "Negotiation cycles dragging through email attachments.",
      "Key terms and obligations invisible without reading every contract.",
    ],
  },

  overview: [
    "CFG's Contract Management System manages the full lifecycle: contracts are authored from approved templates, negotiated with tracked versions, approved through defined workflows, signed electronically, and filed automatically into a governed repository.",
    "AI extraction reads every executed contract, parties, dates, values, renewal terms, obligations, turning the repository into a queryable database that drives alerts, reporting, and renewals.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Author & negotiate",
        description: "Contracts start from approved templates and clause libraries; versions and redlines stay tracked in one place.",
      },
      {
        step: "02",
        title: "Approve & sign",
        description: "Routing rules drive approvals by value and risk; execution happens through integrated eSignature.",
      },
      {
        step: "03",
        title: "Extract & register",
        description: "AI extracts key terms into a searchable contract register with linked source documents.",
      },
      {
        step: "04",
        title: "Manage obligations",
        description: "Renewals, notices, and obligations generate alerts and tasks to the right owners, on time.",
      },
    ],
  },

  capabilities: [
    "Central contract repository with full-text search",
    "Template and clause library management",
    "Version-controlled negotiation and redlining",
    "Configurable approval workflows",
    "Integrated electronic signature",
    "Renewal, notice, and obligation alerting",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Automatic extraction of parties, dates, values, and terms",
      "Clause and risk flagging against your playbook",
      "Portfolio-wide contract querying in natural language",
    ],
  },

  architecture: null,

  benefits: [
    "Zero missed renewals and notice deadlines",
    "Contract cycles cut from weeks to days",
    "Portfolio-wide visibility of terms and exposure",
    "Reduced legal review load through templates and AI flags",
    "A complete, defensible contract record",
  ],

  useCases: [
    "Procurement and vendor contract lifecycles",
    "Client engagement and sales contracts",
    "Lease and real estate agreements",
    "NDA and routine agreement automation",
  ],

  technologies: [
    "sharepoint-online",
    "microsoft-syntex",
    "azure-openai",
    "power-automate",
    "power-bi",
  ],

  industries: [
    "financial-services",
    "real-estate",
    "energy",
  ],

  relatedServices: [
    "microsoft-syntex",
    "power-platform-solutions",
    "generative-ai",
  ],

  relatedSolutions: [
    "electronic-contract-generator",
    "ai-document-generator",
    "lease-management-system",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "Contract Management System",
    description: "End-to-end contract lifecycle management on SharePoint with AI-extracted terms: authoring, negotiation, approval, signature, obligations, and renewals.",
  },
};

export default solution;
