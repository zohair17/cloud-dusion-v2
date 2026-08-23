/**
 * Insight articles.
 *
 * Articles are announced before they are written: `status` drives whether the
 * card links to a detail route or renders the "Full article coming soon" state.
 * No `/insights/[slug]` route is generated while every record is `announced` —
 * see `src/modules/insights/application/get-published-articles.query.js`.
 */

/** @type {import("@/modules/insights/domain/article.schema").ArticleRecord[]} */
export const articleRecords = [
  {
    slug: "agentic-ai-enterprise-readiness",
    title: "Is Your Enterprise Ready for Agentic AI? A Practical Assessment",
    excerpt:
      "AI agents are moving from demos to production. The organizations succeeding share five readiness traits — and none of them are about model selection.",
    topicId: "agentic-ai",
    publishedAt: "2026-08-01",
    readingMinutes: 8,
    status: "announced",
    body: null,
  },
  {
    slug: "copilot-studio-vs-custom-agents",
    title: "Copilot Studio or Custom Agents? Choosing Your Path on the Microsoft AI Stack",
    excerpt:
      "Microsoft offers multiple routes to enterprise AI agents. Here's a decision framework grounded in real implementation trade-offs.",
    topicId: "artificial-intelligence",
    publishedAt: "2026-07-18",
    readingMinutes: 10,
    status: "announced",
    body: null,
  },
  {
    slug: "sharepoint-premium-document-ai",
    title: "SharePoint Premium: AI Document Processing Where Your Content Already Lives",
    excerpt:
      "Syntex brings extraction, classification, and compliance to the document library itself. What it does well — and where you still need more.",
    topicId: "sharepoint",
    publishedAt: "2026-07-02",
    readingMinutes: 7,
    status: "announced",
    body: null,
  },
  {
    slug: "rag-accuracy-enterprise",
    title: "Why RAG Accuracy Is a Data Problem, Not a Model Problem",
    excerpt:
      "Most retrieval-augmented generation failures trace back to content quality, chunking, and permissions — not the language model.",
    topicId: "artificial-intelligence",
    publishedAt: "2026-06-15",
    readingMinutes: 9,
    status: "announced",
    body: null,
  },
  {
    slug: "power-platform-governance",
    title: "Low-Code at Scale: A Governance Model That Doesn't Kill Speed",
    excerpt:
      "Environment strategy, DLP, and ALM for Power Platform — guardrails that enable citizen development instead of strangling it.",
    topicId: "power-platform",
    publishedAt: "2026-05-28",
    readingMinutes: 6,
    status: "announced",
    body: null,
  },
  {
    slug: "azure-landing-zones-ai",
    title: "Designing Azure Landing Zones for AI Workloads",
    excerpt:
      "Private endpoints, data boundaries, and identity for Azure OpenAI — the architecture decisions that make AI deployable in regulated environments.",
    topicId: "azure",
    publishedAt: "2026-05-10",
    readingMinutes: 11,
    status: "announced",
    body: null,
  },
  {
    slug: "sharepoint-migration-checklist",
    title: "The SharePoint Migration Decisions That Matter Most",
    excerpt:
      "Restructure or replicate? Big bang or waves? The choices that separate clean migrations from years of regret.",
    topicId: "sharepoint",
    publishedAt: "2026-04-22",
    readingMinutes: 8,
    status: "announced",
    body: null,
  },
  {
    slug: "automation-roi-measurement",
    title: "Measuring Automation ROI Beyond Hours Saved",
    excerpt:
      "Cycle time, error cost, and capacity release — a fuller framework for valuing enterprise automation initiatives.",
    topicId: "enterprise-automation",
    publishedAt: "2026-04-05",
    readingMinutes: 7,
    status: "announced",
    body: null,
  },
  {
    slug: "data-foundation-before-ai",
    title: "The Data Foundation Every AI Initiative Assumes You Have",
    excerpt:
      "Before the first model is selected, five data capabilities determine whether AI will work in your enterprise.",
    topicId: "data-analytics",
    publishedAt: "2026-03-19",
    readingMinutes: 9,
    status: "announced",
    body: null,
  },
];

export default articleRecords;
