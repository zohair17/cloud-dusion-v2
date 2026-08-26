/**
 * Solution: Intranet Portal
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "intranet-portal",
  title: "Intranet Portal",
  tagline: "The front door of your digital workplace",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/intranet-portal.webp",
  summary: "A modern SharePoint intranet: news, search, self-service, and culture in one branded experience employees actually open.",
  categoryId: "sharepoint-microsoft",
  order: 5,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Legacy intranets become digital notice boards nobody reads: hard to search, painful to update, disconnected from the tools where work happens.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Company news and policies that never reach the people they affect.",
      "Employees unable to find forms, contacts, or answers.",
      "Content publishing bottlenecked on IT.",
      "No connection between the intranet and daily tools like Teams.",
    ],
  },

  overview: [
    "CFG builds intranets as products, not projects: designed around employee tasks and journeys, branded to your identity, and structured so communications teams publish without IT involvement.",
    "Built on SharePoint Online and surfaced in Microsoft Teams and Viva Connections, the intranet meets employees where they already work, with personalized news, powerful search, and self-service that actually serves.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Research & design",
        description: "Employee tasks, journeys, and communication needs shape the information architecture and visual design.",
      },
      {
        step: "02",
        title: "Build & brand",
        description: "Modern SharePoint sites, custom web parts where needed, and your brand applied throughout.",
      },
      {
        step: "03",
        title: "Connect",
        description: "The intranet surfaces in Teams and mobile through Viva Connections, with search across the workplace.",
      },
      {
        step: "04",
        title: "Publish & measure",
        description: "Communications teams own publishing with governance guardrails; analytics show what lands.",
      },
    ],
  },

  capabilities: [
    "Personalized, audience-targeted news and announcements",
    "Enterprise search across intranet and workplace content",
    "Employee self-service hub: forms, requests, policies",
    "People directory and organizational browsing",
    "Teams and mobile delivery via Viva Connections",
    "Publishing governance with distributed authorship",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "AI-assisted content drafting for communicators",
      "Intranet Q&A assistant answering from policies and pages",
    ],
  },

  architecture: null,

  benefits: [
    "Communications that demonstrably reach employees",
    "Self-service that deflects routine requests",
    "Publishing decentralized without losing control",
    "A culture and identity anchor for distributed teams",
    "Adoption measured, not assumed",
  ],

  useCases: [
    "Global company intranets with regional targeting",
    "HR and employee services hubs",
    "Frontline communication via mobile",
    "Onboarding and knowledge centers",
  ],

  technologies: [
    "sharepoint-online",
    "microsoft-viva",
    "microsoft-teams",
    "sharepoint-framework",
    "microsoft-graph",
  ],

  industries: [
    "healthcare",
    "financial-services",
    "energy",
  ],

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-cloud-solutions",
    "power-platform-solutions",
  ],

  relatedSolutions: [
    "document-management-system",
    "request-approval-system",
    "ai-chatbot-solutions",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "Intranet Portal",
    description: "A modern SharePoint intranet: news, search, self-service, and culture in one branded experience employees actually open.",
  },
};

export default solution;
