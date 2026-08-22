/**
 * Company profile — the /about page content.
 *
 * The company context has no slugs and no catalogue: it is a single aggregate
 * describing who CFG is, what it believes, and how it delivers.
 */

/** @type {import("@/modules/company/domain/company-profile.schema").CompanyProfileRecord} */
export const companyProfile = {
  title: "About Cloud Fusion Global",
  tagline: "We build intelligent enterprises",
  summary: "Cloud Fusion Global helps enterprises transform their operations through AI-powered Microsoft solutions.",
  status: "published",

  intro: [
    "Cloud Fusion Global is an AI-powered Microsoft solutions and digital transformation company. We work at the intersection of four forces reshaping the enterprise: artificial intelligence, the Microsoft technology ecosystem, enterprise software engineering, and the operational transformation they make possible together.",
    "We are not a reseller, and we are not a generic IT services firm. We are architects and engineers who design and deliver working systems — AI agents that process real documents, platforms that run real portfolios, migrations that move real enterprises — and stay to operate and evolve them.",
    "Our clients span healthcare, financial services, energy, real estate, and beyond, served through a global delivery model that combines senior architecture, disciplined engineering, and long-term partnership.",
  ],

  beliefs: {
    eyebrow: "What We Believe",
    heading: "The convictions behind the work",
    items: [
      {
        title: "AI-first, not AI-added",
        description:
          "We don't bolt intelligence onto finished systems. Every engagement starts by asking where AI can remove work, risk, or delay — and the architecture follows.",
      },
      {
        title: "Microsoft as an ecosystem, not a product list",
        description:
          "Azure, Microsoft 365, SharePoint, and Power Platform matter most when they're connected. We build them as one intelligent platform.",
      },
      {
        title: "Business problems before technology problems",
        description:
          "Cycle times, error rates, missed deadlines, blind spots — we design for the metric that matters, then choose the technology that moves it.",
      },
      {
        title: "Architecture is a promise about the future",
        description:
          "Systems built well today should welcome next year's requirements. We architect for evolution — security, integration, and scale from day one.",
      },
      {
        title: "Delivery is a discipline",
        description:
          "Working software in short cycles, honest status, and no surprises at cutover. Delivery excellence is a practiced skill, and we practice it.",
      },
      {
        title: "Partnerships outlast projects",
        description:
          "The best outcomes come from long-term relationships where we know your business deeply — and keep improving it release after release.",
      },
    ],
  },

  engagementModel: {
    eyebrow: "How We Work",
    heading: "From discovery to continuous evolution",
    intro: "Every engagement follows a disciplined arc — and none of them end at go-live.",
    phases: [
      {
        step: "01",
        title: "Discover",
        description:
          "We map your business goals, current systems, data landscape, and constraints — and identify where AI and automation create the most value.",
      },
      {
        step: "02",
        title: "Architect",
        description:
          "We design the target solution: architecture, security model, integration points, data flows, and a realistic delivery roadmap.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Iterative delivery in short cycles with working software at every step — reviewed against enterprise standards for security and quality.",
      },
      {
        step: "04",
        title: "Deploy & Adopt",
        description:
          "Controlled rollout with change management, training, and adoption support so the solution is actually used, not just shipped.",
      },
      {
        step: "05",
        title: "Operate & Evolve",
        description:
          "Monitoring, support, and continuous improvement — expanding capabilities as your business and the technology evolve.",
      },
    ],
  },

  /** "Why CFG" differentiators — shared with the homepage. */
  differentiators: {
    eyebrow: "Why CFG",
    heading: "What makes the difference",
    items: [],
  },

  ctas: ["talk-to-expert"],

  seo: {
    title: "About Us",
    description: "Cloud Fusion Global helps enterprises transform their operations through AI-powered Microsoft solutions.",
  },
};

export default companyProfile;
