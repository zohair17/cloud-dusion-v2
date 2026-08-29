/**
 * Copy shared by every service detail page.
 *
 * How we deliver, why enterprises pick us, and the two headings that introduce
 * the cross-links are the same sentences whichever service line a reader has
 * landed on. Holding them once means twelve pages cannot drift apart, and the
 * per-service records stay about that service.
 */

export const serviceDetailSections = {
  /** Introduces the solutions that draw on the service being read. */
  solutions: {
    eyebrow: "Solutions",
    heading: "Solutions built with this service",
    intro:
      "Services are what we do. Solutions are what we build. These platforms and systems draw on this service line.",
  },

  /** Introduces the verticals the service is practised in. */
  industries: {
    eyebrow: "Industries",
    heading: "Industries served",
  },

  delivery: {
    eyebrow: "Delivery",
    heading: "How we deliver",
    intro:
      "A disciplined process from discovery to continuous evolution, with working software and clear communication throughout.",
    steps: [
      {
        id: "discover",
        title: "Discover",
        description:
          "We map your business goals, current systems, data landscape, and constraints, and identify where AI and automation create the most value.",
      },
      {
        id: "architect",
        title: "Architect",
        description:
          "We design the target solution: architecture, security model, integration points, data flows, and a realistic delivery roadmap.",
      },
      {
        id: "build",
        title: "Build",
        description:
          "Iterative delivery in short cycles with working software at every step, reviewed against enterprise standards for security and quality.",
      },
      {
        id: "deploy-adopt",
        title: "Deploy & Adopt",
        description:
          "Controlled rollout with change management, training, and adoption support so the solution is actually used, not just shipped.",
      },
      {
        id: "operate-evolve",
        title: "Operate & Evolve",
        description:
          "Monitoring, support, and continuous improvement, expanding capabilities as your business and the technology evolve.",
      }],
  },

  whyCfg: {
    eyebrow: "Why CFG",
    heading: "Why Cloud Fusion Global",
    items: [
      { title: "AI-First Approach", icon: "sparkles" },
      { title: "Microsoft-Centric Expertise", icon: "cloud" },
      { title: "Enterprise Architecture", icon: "blocks" },
      { title: "End-to-End Delivery", icon: "route" },
      { title: "Industry-Focused Solutions", icon: "building" },
      { title: "Flexible Engagement Models", icon: "handshake" }],
  },
};

export default serviceDetailSections;
