/**
 * Service: IT Staff Augmentation
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "it-staff-augmentation",
  title: "IT Staff Augmentation",
  navLabel: "Staff Augmentation",
  tagline: "Enterprise-grade engineers, exactly when you need them",
  summary: "Nearshore and offshore engineers, dedicated teams, and on-demand scaling: vetted specialists in AI, Microsoft, and enterprise software who integrate into your delivery.",
  groupId: "modernization-operations",
  order: 12,
  status: "published",


  heroSlides: [
    { image: "/asset/services/staffing-1.webp", label: "Specialist capacity in weeks instead of months" },
    { image: "/asset/services/staffing-2.webp", label: "Our people in your tools and standards" },
    { image: "/asset/services/staffing-3.webp", label: "Every placement backed by an engineering bench" },
  ],

  intro: [
    "Hiring for AI, Azure, SharePoint, and modern engineering skills is slow and competitive, while roadmaps won't wait. Staff augmentation done well gives you the specialists you need at the pace you need them, without the overhead and risk of permanent hiring cycles.",
    "Cloud Fusion Global provides engineers and teams from the same talent bench that delivers our own projects: architects, AI engineers, Microsoft specialists, full-stack developers, and QA, with delivery discipline, overlap-friendly time zones, and the flexibility to scale up or down as your needs change.",
  ],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Critical roles open for months while roadmap commitments slip.",
      "Specialist skills (Agentic AI, Azure, SPFx, Power Platform) too scarce or costly to hire locally.",
      "Project peaks that don't justify permanent headcount.",
      "Vendor engagements that deliver bodies, not accountable engineering.",
      "Ramp-up friction that burns months before new people contribute.",
    ],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Match specialists to your stack",
        description:
          "Engineers vetted for real proficiency in the technologies you run, from Azure AI to SharePoint to full-stack, not keyword résumés.",
      },
      {
        title: "Integrate into your delivery",
        description:
          "Our people work in your tools, ceremonies, and standards, with overlap hours that make collaboration natural.",
      },
      {
        title: "Scale with the roadmap",
        description:
          "Add capacity for peaks, reduce after releases: commercial models built for change.",
      },
      {
        title: "Back individuals with a bench",
        description:
          "Every placement is supported by CFG's architects and practices: knowledge continuity, cover, and escalation built in.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "Nearshore Staff Augmentation", description: "Engineers in adjacent time zones for maximum real-time collaboration." },
      { title: "Offshore Staff Augmentation", description: "Cost-efficient scale with structured overlap and delivery discipline." },
      { title: "Dedicated Development Teams", description: "Complete, stable teams (engineering, QA, and leadership) owning a workstream end-to-end." },
      { title: "Project-Based Resource Augmentation", description: "Specialists embedded for the duration of a defined project or initiative." },
      { title: "On-Demand Resource Scaling", description: "Rapid capacity changes as priorities and workloads shift." },
    ],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "The scarcest skills today sit at the intersection of AI and Microsoft technologies. CFG's bench is built there (engineers fluent in Azure OpenAI, AI Foundry, Copilot Studio, and the Microsoft stack) so augmentation brings not just capacity, but the capabilities your AI roadmap depends on.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "Specialist capacity in weeks instead of months",
      "Flexible scaling aligned to roadmap and budget",
      "Access to scarce AI and Microsoft expertise",
      "Reduced hiring risk and overhead",
      "Delivery discipline, not just résumés",
      "Continuity backed by an entire engineering organization",
    ],
  },

  technologies: [
    "azure",
    "azure-openai",
    "microsoft-365",
    "sharepoint-online",
    "power-apps",
    "dotnet",
    "react",
    "nextjs",
  ],

  relatedSolutions: [
    "sharepoint-migration",
    "workflow-automation-platform",
    "deal-management-system",
  ],
  relatedIndustries: ["technology", "financial-services", "healthcare", "real-estate", "telecom"],
  relatedCaseStudies: [],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Staff Augmentation?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "IT Staff Augmentation",
    description: "Nearshore and offshore engineers, dedicated teams, and on-demand scaling: vetted specialists in AI, Microsoft, and enterprise software who integrate into your delivery."
  }
};

export default service;
