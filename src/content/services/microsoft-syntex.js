/**
 * Service: Microsoft Syntex & SharePoint Premium
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "microsoft-syntex",
  title: "Microsoft Syntex & SharePoint Premium",
  navLabel: "Microsoft Syntex",
  tagline: "Documents that read, classify, and file themselves",
  summary: "AI document processing on SharePoint Premium: extraction, classification, translation, eSignature, and compliance applied automatically at the point of storage.",
  groupId: "ai-intelligent-automation",
  order: 3,
  status: "published",


  heroSlides: [
    { image: "/asset/services/syntex-1.webp", label: "AI applied the moment a document lands" },
    { image: "/asset/services/syntex-2.webp", label: "Key fields pulled from unstructured documents" },
    { image: "/asset/services/syntex-3.webp", label: "Governance applied without manual effort" }],

  intro: [
    "Enterprises receive thousands of documents a day: contracts, invoices, statements, forms, and armies of people read, rename, tag, route, and re-key them. Microsoft Syntex (SharePoint Premium) applies AI at the moment a document lands: reading it, extracting what matters, classifying it, and triggering the right process.",
    "Cloud Fusion Global designs and implements Syntex solutions end-to-end, from identifying high-volume document scenarios and building extraction models, to wiring processed content into workflows, compliance policies, and downstream systems."],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Teams spending hours manually reading, tagging, and filing incoming documents.",
      "Critical data trapped inside PDFs and scans, invisible to systems and search.",
      "Inconsistent metadata that undermines findability, automation, and compliance.",
      "Contract and form processes stalled on printing, signing, and re-scanning.",
      "Retention and compliance policies impossible to apply to unclassified content."],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Target high-volume document flows",
        description:
          "We identify the document types where AI processing saves the most hours (invoices, contracts, applications, statements) and prioritize by value.",
      },
      {
        title: "Build and tune extraction models",
        description:
          "Custom Syntex models trained on your documents, tested against real samples, and tuned until accuracy meets business thresholds.",
      },
      {
        title: "Connect content to process",
        description:
          "Extracted data flows into Power Automate workflows, line-of-business systems, and compliance policies: documents become process triggers.",
      },
      {
        title: "Govern at scale",
        description:
          "Processing rules, retention, and content compliance applied automatically across libraries: governance without manual effort.",
      }],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "AI Document Processing", description: "End-to-end intelligent processing pipelines for high-volume document types." },
      { title: "AI Document Extraction", description: "Trained models that pull key fields (dates, parties, amounts, terms) from unstructured documents." },
      { title: "Document Classification", description: "Automatic identification of document types on upload, driving metadata and routing." },
      { title: "Image Tagging", description: "AI-generated tags for images so visual content becomes searchable." },
      { title: "Taxonomy Tagging", description: "Automatic alignment of content to your managed metadata and term store." },
      { title: "Document Translation", description: "On-demand and rules-based translation of documents while preserving format." },
      { title: "SharePoint eSignature", description: "Native electronic signature requests without documents ever leaving SharePoint." },
      { title: "Autofill Columns", description: "AI-populated library columns that keep metadata complete without manual entry." },
      { title: "Document OCR", description: "Text extraction from scans and images, making legacy archives searchable." },
      { title: "Content Query", description: "Precise, metadata-driven search across processed content." },
      { title: "PDF Merge and Extraction", description: "Automated assembly and splitting of PDF content within SharePoint." },
      { title: "Processing Rules", description: "Automated actions triggered by content type, metadata, or extraction results." },
      { title: "Content Compliance", description: "Retention, sensitivity, and lifecycle policies applied automatically to classified content." }],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "Syntex is Microsoft's AI applied directly to your content layer. We pair it with Power Automate so extracted data triggers processes, with Microsoft Purview so classified content is governed, and with Azure OpenAI where scenarios need deeper reasoning: summarization, comparison, or generation grounded in processed documents.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "Hours of manual document handling eliminated per team, per week",
      "Consistent, complete metadata across your content estate",
      "Data trapped in PDFs and scans made searchable and actionable",
      "Signature and approval cycles completed inside SharePoint",
      "Compliance policies enforced automatically, not manually",
      "A content layer AI agents and Copilot can reliably reason over"],
  },

  technologies: [
    "microsoft-syntex",
    "sharepoint-premium",
    "sharepoint-online",
    "power-automate",
    "microsoft-purview",
    "azure-ai-document-intelligence",
    "azure-openai"],

  relatedSolutions: [
    "ai-document-management",
    "ai-document-generator",
    "records-management-system",
    "contract-management-system"],
  relatedIndustries: ["financial-services",  "real-estate", "energy"],
  relatedCaseStudies: [],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Syntex & SharePoint Premium?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Microsoft Syntex & SharePoint Premium",
    description: "AI document processing on SharePoint Premium: extraction, classification, translation, eSignature, and compliance applied automatically at the point of storage."
  }
};

export default service;
