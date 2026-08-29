/**
 * Industry: Technology
 *
 * Section eyebrows and headings are the same on all nine industries, so they
 * live in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "technology",
  title: "Technology",
  tagline: "Engineering capacity and AI capability, on demand",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/technology.webp",
  summary: "Product engineering, AI feature development, and scale-up capacity for software companies and technology-driven businesses.",
  order: 5,
  inFooter: true,
  status: "published",

  intro: [
    "Technology companies live and die by shipping. Roadmaps outpace hiring, AI capabilities have become table stakes overnight, and enterprise customers demand security postures that startups rarely staff for. CFG partners with technology businesses as an engineering multiplier, building products, adding AI capabilities, and providing senior capacity exactly where it's needed."],

  challenges: [
    "Roadmap ambitions exceeding engineering capacity.",
    "Customer expectations for AI features arriving faster than expertise.",
    "Enterprise deals stalled on security and compliance requirements.",
    "Multi-tenant architecture decisions with long-term consequences.",
    "Scaling operations (support, reliability, cost) alongside growth."],

  aiImpact: [
    "AI-native product features (copilots, semantic search, document intelligence) built by teams who ship them repeatedly.",
    "RAG and agent architectures designed for accuracy, cost, and scale.",
    "AI evaluation pipelines that keep quality measurable release after release.",
    "Internal AI automation for support, operations, and engineering productivity."],

  microsoftEnablement: [
    "Azure OpenAI and AI Foundry provide enterprise-grade AI infrastructure customers trust.",
    "Azure architecture and Entra identity satisfy enterprise security reviews.",
    "Multi-tenant SaaS patterns on Azure balance isolation and economics.",
    "Microsoft 365 integration opens product distribution into the enterprise workplace."],

  outcomes: [
    "Roadmap velocity restored with senior capacity",
    "AI features shipped at production quality",
    "Enterprise security reviews passed",
    "Tenancy economics that scale with customers",
    "Engineering focus preserved for core differentiation"],

  solutions: [
    "ai-powered-mobile-apps",
    "ai-chatbot-solutions",
    "smart-device-mobile-app",
    "b2b-integration",
    "workflow-automation-platform"],

  relatedServices: [
    "saas-product-development",
    "custom-software-development",
    "generative-ai",
    "it-staff-augmentation"],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Technology Industry Solutions",
    description: "Product engineering, AI feature development, and scale-up capacity for software companies and technology-driven businesses.",
  },
};

export default industry;
