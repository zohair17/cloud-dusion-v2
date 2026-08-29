/**
 * Solution: Self-Hosted Enterprise AI Solutions
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "self-hosted-enterprise-ai",
  title: "Self-Hosted Enterprise AI Solutions",
  tagline: "Frontier AI capability, entirely inside your boundary",
  /** Glyph id; the component owns the actual icon. */
  icon: "server-cog",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/self-hosted-enterprise-ai.webp",
  summary: "Private AI platforms (models, retrieval, and applications) deployed in your own environment for organizations whose data cannot leave.",
  categoryId: "ai",
  order: 4,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Regulated and security-conscious organizations see the value of generative AI but cannot send sensitive data to shared cloud AI services, so they either abstain or shadow-adopt uncontrolled tools.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Regulatory and residency rules prohibiting external AI processing.",
      "Confidential IP and client data that cannot cross the boundary.",
      "Employees quietly using consumer AI tools without controls.",
      "Uncertainty about cost, hardware, and models for private AI."],
  },

  overview: [
    "CFG deploys complete AI platforms inside your environment: your cloud tenancy, your data center, or sovereign infrastructure. Open-weight and privately hosted models, vector retrieval over your content, and end-user applications, all operating within your security perimeter.",
    "You get the capabilities your teams are asking for, chat over documents, drafting, summarization, extraction, with your identity provider governing access, your policies governing data, and nothing leaving your control."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Assess & size",
        description: "Use cases, sensitivity levels, and workloads determine model selection, hardware sizing, and deployment topology.",
      },
      {
        step: "02",
        title: "Deploy the platform",
        description: "Model serving, vector store, orchestration, and guardrails installed in your environment with your identity integration.",
      },
      {
        step: "03",
        title: "Ground on your data",
        description: "Ingestion pipelines index your documents and systems with permissions preserved.",
      },
      {
        step: "04",
        title: "Operate & evolve",
        description: "Monitoring, evaluation, model updates, and capacity management: run by your team, ours, or both.",
      }],
  },

  capabilities: [
    "Private model serving: open-weight or dedicated hosted models",
    "Vector retrieval and RAG over internal content",
    "Chat, drafting, summarization, and extraction applications",
    "Full identity integration and role-based access",
    "Complete audit of prompts, retrievals, and outputs",
    "Air-gapped deployment options"],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Grounded Q&A and drafting entirely on-premises",
      "Domain fine-tuning on private data",
      "Document intelligence within the boundary",
      "Evaluation pipelines for quality and safety"],
  },

  architecture: {
    eyebrow: "Architecture",
    heading: "How the system is composed",
    body: "A layered view from user experience down to identity and infrastructure.",
    layers: [
      { title: "APPLICATIONS", nodes: [
        "Chat & Q&A",
        "Drafting studio",
        "Extraction pipelines"] },
      { title: "AI PLATFORM", nodes: [
        "Model serving",
        "Orchestration & guardrails",
        "Evaluation"] },
      { title: "KNOWLEDGE", nodes: [
        "Ingestion pipelines",
        "Vector store",
        "Permission mapping"] },
      { title: "YOUR INFRASTRUCTURE", nodes: [
        "Private cloud / on-premises",
        "GPU compute",
        "Your network boundary"] },
      { title: "IDENTITY & AUDIT", nodes: [
        "Your identity provider"] },
      { title: "RBAC", nodes: [
        "Full interaction audit"] }],
  },

  benefits: [
    "Generative AI adopted without data leaving your control",
    "Regulatory and residency obligations met by architecture",
    "Shadow AI replaced with a governed alternative",
    "Predictable cost at sustained enterprise usage",
    "Full auditability of every AI interaction"],

  useCases: [
    "Confidential document analysis for legal and finance",
    "Internal knowledge assistants in classified environments",
    "AI drafting for regulated client communications",
    "Research over proprietary IP"],

  technologies: [
    "azure-ai-foundry",
    "open-weight-llms",
    "kubernetes",
    "vector-databases",
    "microsoft-entra",
    "azure-stack-private-cloud"],

  industries: [
    "financial-services",
    
    "energy"],

  relatedServices: [
    "agentic-ai-automation",
    "generative-ai",
    "data-security-governance"],

  relatedSolutions: [
    "ai-chatbot-solutions",
    "ai-document-management",
    "self-hosted-sharepoint-sites"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "Self-Hosted Enterprise AI Solutions",
    description: "Private AI platforms (models, retrieval, and applications) deployed in your own environment for organizations whose data cannot leave.",
  },
};

export default solution;
