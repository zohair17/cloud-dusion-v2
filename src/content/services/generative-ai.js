/**
 * Service: Generative AI
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "generative-ai",
  title: "Generative AI",
  navLabel: "Generative AI",
  tagline: "Language intelligence, grounded in your enterprise",
  summary: "LLM implementation, RAG solutions, fine-tuning, and semantic search: generative AI engineered into enterprise workflows with your data, safely.",
  groupId: "ai-intelligent-automation",
  order: 2,
  status: "published",


  heroSlides: [
    { image: "/asset/services/generative-ai-1.webp", label: "Answers with sources, not hallucinations" },
    { image: "/asset/services/generative-ai-2.webp", label: "Meaning-based search across your content" },
    { image: "/asset/services/generative-ai-3.webp", label: "Enterprise data boundaries preserved end to end" },
  ],

  intro: [
    "Generative AI has moved from novelty to expectation. The question for enterprises is no longer whether large language models are useful, but how to apply them to your documents, your data, and your workflows: accurately, securely, and at production quality.",
    "Cloud Fusion Global builds generative AI solutions end-to-end: retrieval-augmented generation grounded in your knowledge, fine-tuned and integrated models, vector semantic search, and the data pipelines (collection, annotation, classification, extraction) that make it all trustworthy. Delivered on Azure OpenAI and Azure AI Foundry with enterprise controls throughout.",
  ],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Generic AI tools that don't know your business, your documents, or your terminology.",
      "Hallucination risk that makes ungrounded AI unusable for serious work.",
      "Sensitive data that cannot be sent to consumer AI services.",
      "Knowledge locked in thousands of documents no one can search semantically.",
      "Proofs-of-concept that never became reliable production systems.",
    ],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Ground AI in your knowledge",
        description:
          "RAG architectures that retrieve from your documents and data before generating: answers with sources, not hallucinations.",
      },
      {
        title: "Engineer the data layer",
        description:
          "Collection, annotation, classification, and extraction pipelines that turn raw content into AI-quality knowledge.",
      },
      {
        title: "Deploy with enterprise controls",
        description:
          "Azure OpenAI inside your network boundary, content filtering, evaluation, and monitoring: production AI, not a demo.",
      },
      {
        title: "Integrate into real workflows",
        description:
          "Generation, summarization, and search embedded into the applications and processes where work already happens.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      {
        title: "Generative AI Development",
        description: "Custom generative applications for drafting, summarization, and transformation, built for your use cases.",
      },
      {
        title: "LLM Implementation",
        description: "Selection, integration, and orchestration of large language models for enterprise scenarios.",
      },
      {
        title: "AI Model Integration",
        description: "Models wired into your applications, workflows, and Microsoft 365 environment.",
      },
      {
        title: "AI Model Deployment",
        description: "Secure, monitored model serving on Azure with cost and performance management.",
      },
      {
        title: "AI Model Fine-Tuning",
        description: "Models adapted to your domain language, formats, and tasks.",
      },
      {
        title: "Data Classification",
        description: "Automated categorization of content and records at scale.",
      },
      {
        title: "Data Extraction",
        description: "Structured data pulled from unstructured documents and text.",
      },
      {
        title: "Vector Semantic Search",
        description: "Meaning-based search across your content using embeddings and vector stores.",
      },
      {
        title: "Data Collection",
        description: "Pipelines that gather and prepare the content your AI systems learn from.",
      },
      {
        title: "Data Annotation",
        description: "High-quality labelled datasets for training and evaluation.",
      },
      {
        title: "RAG Solutions",
        description: "Retrieval-augmented generation systems that answer from your knowledge with citations.",
      },
    ],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "We deliver generative AI on the Microsoft stack: Azure OpenAI for models with enterprise data boundaries, Azure AI Search for hybrid vector retrieval, Azure AI Foundry for orchestration and evaluation, and Microsoft Entra for permission-aware access, so the AI answers only from what each user is allowed to see.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "AI answers grounded in your documents, with citations",
      "Institutional knowledge made instantly searchable by meaning",
      "Drafting and summarization hours returned to skilled teams",
      "Enterprise data boundaries preserved end-to-end",
      "Production-grade reliability through evaluation and monitoring",
      "A reusable AI platform across many use cases",
    ],
  },

  technologies: [
    "azure-openai",
    "azure-ai-foundry",
    "azure-ai-search",
    "semantic-kernel",
    "azure-ai-document-intelligence",
    "cosmos-db",
    "microsoft-entra",
  ],

  relatedSolutions: [
    "ai-chatbot-solutions",
    "ai-document-generator",
    "ai-document-management",
    "self-hosted-enterprise-ai",
  ],
  relatedIndustries: ["financial-services", "healthcare", "real-estate", "technology", "education"],
  relatedCaseStudies: ["rel-ai-lease-abstractor"],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Generative AI?",
    body: "Tell us where you are and where you want to be, and we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Generative AI",
    description: "LLM implementation, RAG solutions, fine-tuning, and semantic search: generative AI engineered into enterprise workflows with your data, safely."
  }
};

export default service;
