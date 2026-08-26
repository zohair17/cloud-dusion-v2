/**
 * Solution: AI Chatbot Solutions
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "ai-chatbot-solutions",
  title: "AI Chatbot Solutions",
  tagline: "Conversational AI that knows your business",
  /** Glyph id; the component owns the actual icon. */
  icon: "message-square-text",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/ai-chatbot-solutions.webp",
  summary: "Enterprise chatbots and copilots grounded in your knowledge, serving employees and customers with accurate, cited, permission-aware answers.",
  categoryId: "ai",
  order: 3,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Employees and customers ask the same questions thousands of times, and wait on queues, tickets, and searches for answers that already exist somewhere in the organization.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Support and HR teams buried in repetitive questions.",
      "Knowledge scattered across intranets, documents, and inboxes.",
      "Generic chatbots that frustrate users with scripted dead-ends.",
      "Risk of AI answering from the wrong data, or another user's data.",
    ],
  },

  overview: [
    "CFG chatbot solutions are grounded, not generic: retrieval-augmented generation connects the conversation to your policies, product documentation, and knowledge bases, so answers are accurate, current, and cited.",
    "Built on Copilot Studio and Azure OpenAI, bots meet users where they work, Teams, intranet, website, or mobile, respect each user's permissions, and hand off gracefully to humans with full conversation context when needed.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Ground",
        description: "Your knowledge sources are indexed with permissions preserved: SharePoint, websites, databases, and files.",
      },
      {
        step: "02",
        title: "Converse",
        description: "Users ask naturally in Teams, web, or mobile; the bot retrieves relevant content and answers with citations.",
      },
      {
        step: "03",
        title: "Act",
        description: "Beyond answers, the bot executes tasks, raising tickets, booking requests, updating records, through governed connectors.",
      },
      {
        step: "04",
        title: "Escalate & learn",
        description: "Unresolved conversations route to humans with context; analytics reveal gaps to improve knowledge and flows.",
      },
    ],
  },

  capabilities: [
    "Multi-channel deployment: Teams, web, intranet, mobile",
    "Grounded answers with source citations",
    "Task execution through secure connectors",
    "Human handoff with conversation context",
    "Conversation analytics and gap reporting",
    "Multilingual support",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Retrieval-augmented generation over enterprise knowledge",
      "Permission-aware retrieval per user",
      "Intent understanding and multi-turn context",
      "Continuous evaluation against answer-quality benchmarks",
    ],
  },

  architecture: null,

  benefits: [
    "Instant, accurate answers around the clock",
    "Support and HR queues reduced to genuinely complex cases",
    "One consistent voice across channels",
    "Answers users can verify through citations",
    "Insight into what your people and customers actually ask",
  ],

  useCases: [
    "Employee HR and IT self-service in Teams",
    "Customer support on web and mobile",
    "Policy and compliance Q&A",
    "Sales enablement and product knowledge assistants",
  ],

  technologies: [
    "copilot-studio",
    "azure-openai",
    "azure-ai-search",
    "microsoft-teams",
    "power-automate",
    "microsoft-entra",
  ],

  industries: [
    "technology",
    "financial-services",
    "healthcare",
  ],

  relatedServices: [
    "generative-ai",
    "agentic-ai-automation",
    "power-platform-solutions",
  ],

  relatedSolutions: [
    "ai-document-management",
    "self-hosted-enterprise-ai",
    "intranet-portal",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "AI Chatbot Solutions",
    description: "Enterprise chatbots and copilots grounded in your knowledge, serving employees and customers with accurate, cited, permission-aware answers.",
  },
};

export default solution;
