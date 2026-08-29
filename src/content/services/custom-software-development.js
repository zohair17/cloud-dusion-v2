/**
 * Service: Custom Software Development
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "custom-software-development",
  title: "Custom Software Development",
  navLabel: "Custom Software",
  tagline: "Software built precisely for how your business works",
  summary: "Web applications, enterprise systems, portals, e-commerce, and APIs: custom software engineered for security, scale, and long-term evolution.",
  groupId: "product-engineering",
  order: 8,
  status: "published",


  heroSlides: [
    { image: "/asset/services/custom-software-1.webp", label: "Systems shaped exactly to how you operate" },
    { image: "/asset/services/custom-software-2.webp", label: "Working software every sprint" },
    { image: "/asset/services/custom-software-3.webp", label: "Intelligence designed in, not bolted on" }],

  intro: [
    "Packaged software fits average businesses. When your processes, data, or customer experience are a competitive advantage, custom software is how you press it: systems shaped exactly to how you operate, integrated with everything you run, and able to evolve as you do.",
    "Cloud Fusion Global engineers custom software with enterprise discipline: clear architecture, secure-by-design implementation, automated testing, and cloud-native deployment on Azure. And because we are an AI-first company, intelligence (search, extraction, assistance, prediction) is designed into applications rather than bolted on."],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Off-the-shelf products that force workarounds instead of fitting the process.",
      "Aging line-of-business applications that are risky to change and costly to run.",
      "Disconnected systems requiring duplicate data entry and manual reconciliation.",
      "Customer-facing experiences that lag competitor expectations.",
      "In-house teams stretched too thin to deliver strategic builds."],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Architect before building",
        description:
          "Domain modelling, integration design, and technology selection before the first sprint, so the system scales with the business.",
      },
      {
        title: "Ship iteratively, with quality",
        description:
          "Short delivery cycles, automated tests, code review, and CI/CD: working software every sprint, production-ready at release.",
      },
      {
        title: "Integrate everything",
        description:
          "APIs and integration layers that connect your new software to ERP, CRM, Microsoft 365, and external services.",
      },
      {
        title: "Design intelligence in",
        description:
          "AI capabilities (semantic search, document understanding, copilots) architected into the product where they create value.",
      }],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "Web Application Development", description: "Modern, responsive web applications with React, Next.js, and .NET." },
      { title: "Enterprise Application Development", description: "Line-of-business systems with complex workflows, roles, and integrations." },
      { title: "Custom Portals", description: "Secure portals for customers, vendors, and employees with tailored self-service." },
      { title: "CMS Development", description: "Content-managed websites and platforms built for editors and performance." },
      { title: "E-Commerce Development", description: "Commerce experiences with catalogue, checkout, and back-office integration." },
      { title: "Front-End Development", description: "Fast, accessible interfaces built with modern JavaScript frameworks." },
      { title: "Back-End Development", description: "Robust services, business logic, and data layers on .NET and Node.js." },
      { title: "API Development", description: "Well-designed REST and GraphQL APIs with versioning, security, and documentation." },
      { title: "API Integration", description: "Reliable integrations with third-party platforms and internal systems." },
      { title: "Full-Stack Development", description: "End-to-end product engineering across interface, services, and data." }],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "Custom software is where AI becomes a product capability. We build on Azure OpenAI and Azure AI Foundry for language intelligence, add vector search for retrieval over your data, and deploy on Azure with Microsoft Entra securing users and services, so intelligent features ship with the same rigor as the rest of the system.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "Software shaped precisely to your processes and advantage",
      "Modern, maintainable systems replacing risky legacy applications",
      "Integrated data flows that eliminate duplicate entry",
      "Cloud-native deployment with security and scale built in",
      "AI capabilities embedded as product features",
      "A codebase your teams can own and evolve"],
  },

  technologies: [
    "dotnet",
    "react",
    "nextjs",
    "typescript",
    "nodejs",
    "azure-app-services",
    "azure-sql",
    "azure-openai"],

  relatedSolutions: [
    "deal-management-system",
    "lease-management-system",
    "tenant-portal",
    "b2b-integration",
    "electronic-contract-generator"],
  relatedIndustries: ["real-estate", "financial-services", "technology",  "energy"],
  relatedCaseStudies: ["real-estate-deal-management"],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Custom Software?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Custom Software Development",
    description: "Web applications, enterprise systems, portals, e-commerce, and APIs: custom software engineered for security, scale, and long-term evolution."
  }
};

export default service;
