/**
 * Service: Mobile Application Development
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "mobile-app-development",
  title: "Mobile Application Development",
  navLabel: "Mobile Development",
  tagline: "Mobile experiences engineered for the enterprise",
  summary: "Native, cross-platform, wearable, and AI-powered mobile applications: designed, built, and evolved with enterprise-grade engineering.",
  groupId: "product-engineering",
  order: 9,
  status: "published",


  heroSlides: [
    { image: "/asset/services/mobile-1.webp", label: "Experiences customers and field teams adopt" },
    { image: "/asset/services/mobile-2.webp", label: "Native performance or cross-platform reach" },
    { image: "/asset/services/mobile-3.webp", label: "AI features built in where they remove friction" }],

  intro: [
    "Mobile is where customers, field teams, and operations meet your business. The difference between an app that gets used and one that gets deleted is engineering: performance, reliability, offline behaviour, security, and an experience that feels effortless.",
    "Cloud Fusion Global builds mobile applications across native and cross-platform stacks, integrates them deeply with enterprise systems and Azure services, and increasingly embeds AI, from intelligent capture and recommendations to conversational interfaces, directly into the mobile experience."],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Customer and field experiences limited to desktop tools and paper processes.",
      "Legacy mobile apps that are slow, dated, and expensive to maintain.",
      "Choosing between native performance and cross-platform economics without clear guidance.",
      "Mobile apps disconnected from enterprise data, identity, and workflows.",
      "Devices and wearables generating data no application acts on."],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Choose the right stack, deliberately",
        description:
          "Native (Swift, Kotlin) or cross-platform (.NET MAUI, React Native, Flutter), recommended from your requirements for performance, reach, and cost.",
      },
      {
        title: "Design experiences people keep",
        description:
          "Product design grounded in real user journeys: fast, accessible, offline-capable, and platform-native in feel.",
      },
      {
        title: "Integrate with the enterprise",
        description:
          "Secure connections to identity, APIs, and data through Microsoft Entra and Azure: mobile as a first-class enterprise citizen.",
      },
      {
        title: "Embed intelligence",
        description:
          "AI features (capture, vision, personalization, chat) built into the app where they remove friction.",
      }],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "Native Mobile App Development", description: "iOS and Android applications built for maximum performance and platform fidelity." },
      { title: "Cross-Platform App Development", description: "Single-codebase applications with .NET MAUI, React Native, or Flutter for faster reach across platforms." },
      { title: "Wearable App Development", description: "Applications for watches and wearables that extend workflows to the wrist." },
      { title: "Gaming App Development", description: "Engaging interactive and gamified experiences with polished performance." },
      { title: "AI-Powered Mobile App Development", description: "Mobile experiences with embedded AI: vision, language, prediction, and assistants." },
      { title: "Mobile App Enhancements and Customization", description: "Modernization, feature development, and performance work on existing applications." }],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "We connect mobile applications to Azure AI services: OpenAI models for conversational features, AI Vision for capture and recognition, and Azure ML for personalization, with Microsoft Entra securing every call. The result is mobile software that doesn't just display information, it understands and assists.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "Mobile experiences customers and field teams actually adopt",
      "One accountable team from design through app store release and beyond",
      "The right platform economics for your reach and performance needs",
      "Deep, secure integration with enterprise systems and identity",
      "AI-powered features that differentiate the experience",
      "Maintainable codebases with automated testing and CI/CD"],
  },

  technologies: [
    "dotnet-maui",
    "react-native",
    "flutter",
    "swift",
    "kotlin",
    "azure-app-services",
    "azure-ai-vision",
    "azure-openai",
    "microsoft-entra"],

  relatedSolutions: [
    "property-listing-app",
    "smart-device-mobile-app",
    "ai-powered-mobile-apps",
    "tenant-portal"],
  relatedIndustries: ["real-estate",   "technology", "education"],
  relatedCaseStudies: [],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Mobile Development?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Mobile Application Development",
    description: "Native, cross-platform, wearable, and AI-powered mobile applications: designed, built, and evolved with enterprise-grade engineering."
  }
};

export default service;
