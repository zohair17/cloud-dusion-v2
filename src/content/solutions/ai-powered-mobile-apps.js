/**
 * Solution: AI-Powered Mobile Applications
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "ai-powered-mobile-apps",
  title: "AI-Powered Mobile Applications",
  tagline: "Mobile apps that see, understand, and assist",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/ai-powered-mobile-apps.webp",
  summary: "Mobile experiences with AI at the core: vision capture, conversational assistants, personalization, and on-device intelligence built on Azure AI.",
  categoryId: "mobile-iot",
  order: 2,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Users now expect apps to understand them, to read documents through the camera, answer questions conversationally, and anticipate needs. Apps without intelligence feel a generation old.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Manual data entry where a camera and AI could do the work.",
      "Support and engagement limited by static, menu-driven interfaces.",
      "Personalization ambitions without the ML foundation to deliver.",
      "Privacy and latency concerns about cloud-only AI processing.",
    ],
  },

  overview: [
    "CFG builds mobile applications where AI is the experience, not a gimmick: cameras that capture and understand documents and objects, assistants that answer from your knowledge, and interfaces that adapt to each user.",
    "We balance on-device models for speed and privacy with Azure AI for depth, engineering the whole pipeline from capture to inference to a fluid user experience.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Capture",
        description: "Camera, voice, and sensor input become structured data through vision and speech models.",
      },
      {
        step: "02",
        title: "Understand",
        description: "On-device and Azure AI models classify, extract, and interpret in context.",
      },
      {
        step: "03",
        title: "Assist",
        description: "Conversational and proactive features act on understanding, answering, suggesting, automating.",
      },
      {
        step: "04",
        title: "Learn",
        description: "Feedback and behaviour refine personalization within privacy boundaries.",
      },
    ],
  },

  capabilities: [
    "Document and object capture with extraction",
    "In-app conversational assistants",
    "Personalized content and recommendations",
    "Voice interfaces and dictation",
    "On-device inference for speed and privacy",
    "AI feature analytics and evaluation",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Vision models for capture and recognition",
      "RAG-grounded assistants over app and enterprise content",
      "Behavioural personalization models",
      "Hybrid on-device / cloud inference",
    ],
  },

  architecture: null,

  benefits: [
    "Friction removed from capture and data entry",
    "Engagement lifted by genuinely useful assistance",
    "Differentiation competitors can't copy from a template",
    "Privacy-respecting intelligence architecture",
    "A measurable AI feature pipeline, not one-off tricks",
  ],

  useCases: [
    "Field capture apps that read documents and meters",
    "Customer service assistants in consumer apps",
    "Personalized commerce and content experiences",
    "Accessibility-first voice-driven interfaces",
  ],

  technologies: [
    "azure-openai",
    "azure-ai-vision",
    "dotnet-maui",
    "react-native",
  ],

  industries: [
    "technology",
    "financial-services",
    "healthcare",
  ],

  relatedServices: [
    "mobile-app-development",
    "generative-ai",
    "agentic-ai-automation",
  ],

  relatedSolutions: [
    "smart-device-mobile-app",
    "ai-chatbot-solutions",
    "property-listing-app",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "AI-Powered Mobile Applications",
    description: "Mobile experiences with AI at the core: vision capture, conversational assistants, personalization, and on-device intelligence built on Azure AI.",
  },
};

export default solution;
