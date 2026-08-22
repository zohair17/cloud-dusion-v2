/**
 * Service — Generative AI
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "generative-ai",
  title: "Generative AI",
  navLabel: "Generative AI",
  tagline: null,
  summary: "LLM implementation, RAG solutions, fine-tuning, and semantic search — generative AI engineered into enterprise workflows with your data, safely.",
  groupId: "ai-intelligent-automation",
  order: 2,
  status: "outline",
  intro: [],
  challenges: [],
  approach: [],
  capabilities: [],
  technologies: [],
  relatedSolutions: [],
  relatedIndustries: [],
  relatedCaseStudies: [],
  ctas: [
    "talk-to-expert",
    "request-proposal"
  ],
  seo: {
    title: "Generative AI",
    description: "LLM implementation, RAG solutions, fine-tuning, and semantic search — generative AI engineered into enterprise workflows with your data, safely."
  }
};

export default service;
