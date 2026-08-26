/**
 * Solution: AI-Enabled Document Management System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "ai-document-management",
  title: "AI-Enabled Document Management System",
  tagline: "A document platform that reads what it stores",
  /** Glyph id; the component owns the actual icon. */
  icon: "file-search",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/ai-document-management.webp",
  summary: "Enterprise document management on SharePoint with AI that classifies, extracts, tags, and routes content automatically, and answers questions from it.",
  categoryId: "ai",
  order: 1,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Enterprises store millions of documents but can rarely find, trust, or act on them. Filing depends on human discipline, metadata is incomplete, and knowledge stays locked inside PDFs.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Documents filed inconsistently, or not at all, across sites and shares.",
      "Metadata too incomplete to power search, workflows, or retention.",
      "Staff hours consumed reading and re-keying document content.",
      "Compliance policies impossible to enforce on unclassified content.",
    ],
  },

  overview: [
    "The AI-Enabled Document Management System combines SharePoint's enterprise content platform with AI processing at the point of entry. Every document that arrives is read, classified, and enriched: type identified, key fields extracted, taxonomy tags applied, and the right workflow triggered, with no manual filing.",
    "On top of the organized estate sits AI retrieval: users ask questions in natural language and get answers with citations to the underlying documents, trimmed to their permissions. The result is a document platform that behaves like institutional memory.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Ingest",
        description: "Documents arrive from upload, email, scan, or system integration into monitored SharePoint libraries.",
      },
      {
        step: "02",
        title: "Understand",
        description: "AI models classify the document, extract key fields, and apply taxonomy and sensitivity labels automatically.",
      },
      {
        step: "03",
        title: "Act",
        description: "Extraction results trigger workflows: approvals, notifications, records declaration, or line-of-business updates.",
      },
      {
        step: "04",
        title: "Answer",
        description: "Permission-aware AI search and Q&A lets users find and interrogate content in natural language, with citations.",
      },
    ],
  },

  capabilities: [
    "Automatic classification and metadata enrichment on upload",
    "Field-level extraction from contracts, invoices, and forms",
    "Full-text and semantic search across the estate",
    "Version control, retention, and audit trails",
    "Workflow triggers from document events and extracted data",
    "Role-based, permission-trimmed access throughout",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Document classification and taxonomy tagging models",
      "Key-field extraction with confidence thresholds and human review",
      "Natural-language Q&A with retrieval-augmented generation and citations",
      "OCR and enrichment of scanned legacy archives",
    ],
  },

  architecture: {
    eyebrow: "Architecture",
    heading: "How the system is composed",
    body: "A layered view from user experience down to identity and infrastructure.",
    layers: [
      { title: "EXPERIENCE", nodes: [
        "SharePoint UI",
        "Teams",
        "AI Q&A interface",
        "Mobile",
      ] },
      { title: "INTELLIGENCE", nodes: [
        "Syntex models",
        "Azure OpenAI",
        "Azure AI Search",
        "RAG pipeline",
      ] },
      { title: "PROCESS", nodes: [
        "Power Automate workflows",
        "Approval routing",
        "Notifications",
      ] },
      { title: "CONTENT & GOVERNANCE", nodes: [
        "SharePoint libraries",
        "Metadata & taxonomy",
        "Purview policies",
        "Audit",
      ] },
      { title: "IDENTITY & SECURITY", nodes: [
        "Microsoft Entra",
        "Permission trimming",
        "Sensitivity labels",
      ] },
    ],
  },

  benefits: [
    "Filing effort near zero: consistency near total",
    "Minutes-to-answers instead of hours-to-documents",
    "Compliance policies enforced automatically on classified content",
    "Legacy archives unlocked and searchable",
    "A governed content foundation for Copilot and AI agents",
  ],

  useCases: [
    "Contract repositories with extracted terms and renewal alerts",
    "Invoice and statement processing with system handoff",
    "Policy and procedure libraries with AI Q&A",
    "Digitization of scanned archives into searchable knowledge",
  ],

  technologies: [
    "sharepoint-online",
    "microsoft-syntex",
    "azure-openai",
    "azure-ai-search",
    "power-automate",
    "microsoft-purview",
  ],

  industries: [
    "financial-services",
    "real-estate",
    "healthcare",
  ],

  relatedServices: [
    "microsoft-syntex",
    "sharepoint-solutions",
    "generative-ai",
  ],

  relatedSolutions: [
    "document-management-system",
    "records-management-system",
    "ai-document-generator",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "AI-Enabled Document Management System",
    description: "Enterprise document management on SharePoint with AI that classifies, extracts, tags, and routes content automatically, and answers questions from it.",
  },
};

export default solution;
