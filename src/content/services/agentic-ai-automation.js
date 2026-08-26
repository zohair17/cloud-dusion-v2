/**
 * Service: Agentic AI & AI Automation
 *
 * REFERENCE RECORD. This file is fully authored and is the worked example of the
 * service content contract, copy its shape when filling in the other services.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "agentic-ai-automation",
  title: "Agentic AI & AI Automation",
  navLabel: "Agentic AI & Automation",
  tagline: "AI agents that do real work inside your enterprise",
  summary:
    "Design, build, and operate AI agents and multi-agent systems that automate complex enterprise workflows, with governance, security, and humans in the loop.",
  groupId: "ai-intelligent-automation",
  order: 1,
  status: "published",

  /**
   * The hero slideshow. Three pictures of the same claim: the workflow running,
   * the reasoning behind it, the engineering under it. Each caption is a phrase
   * already used elsewhere on this page, so the slideshow says nothing the page
   * does not.
   */
  heroSlides: [
    {
      image: "/asset/services/agentic-ai-1.webp",
      label: "Agents that read, reason, decide, and act",
    },
    {
      image: "/asset/services/agentic-ai-3.webp",
      label: "Grounded in your data, constrained by your rules",
    },
    {
      image: "/asset/services/agentic-ai-2.webp",
      label: "Engineered for production from day one",
    },
  ],

  intro: [
    "Most enterprises have automated the easy work. What remains is the complex, judgment-heavy work that flows across systems, documents, and people: approvals, reconciliations, document processing, service requests, and reporting. Agentic AI changes what is automatable: AI agents can read, reason, decide, and act across your systems, escalating to people only when it matters.",
    "Cloud Fusion Global designs and delivers agentic AI systems end-to-end: from identifying the right processes and preparing your data, to building and orchestrating agents on Azure AI Foundry, Azure OpenAI, and Copilot Studio, to running them in production with the observability, guardrails, and governance an enterprise demands.",
  ],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Complex workflows still depend on manual routing, copy-paste work, and swivel-chair integration between systems.",
      "AI pilots impress in demos but never reach production because governance, security, and operations were an afterthought.",
      "Enterprise data isn't ready for AI: fragmented, unlabelled, and locked in silos.",
      "Teams fear losing control: leadership wants automation with clear human oversight and audit trails.",
      "Regulated environments can't send sensitive data to public AI services.",
    ],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Start with the business process, not the model",
        description:
          "We map where agents create measurable value (cycle time, cost, error rates) and design automation around outcomes, not technology demos.",
      },
      {
        title: "Engineer for production from day one",
        description:
          "Identity, permissions, observability, evaluation, and rollback are designed in from the first sprint, so pilots graduate to production instead of stalling.",
      },
      {
        title: "Keep humans in control",
        description:
          "Approval checkpoints, confidence thresholds, and audit trails ensure agents act autonomously where safe and escalate where judgment is required.",
      },
      {
        title: "Build on your Microsoft investment",
        description:
          "Agents live where your work lives: Microsoft 365, SharePoint, Teams, Dynamics, and your line-of-business systems, secured by Microsoft Entra.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      {
        title: "Agent Design and Development",
        description:
          "Purpose-built AI agents that read, reason, and act on enterprise tasks, grounded in your data and constrained by your rules.",
      },
      {
        title: "Multi-Agent Orchestration",
        description:
          "Coordinated teams of specialized agents that decompose complex workflows, hand off work, and reconcile results.",
      },
      {
        title: "Human-in-the-Loop Systems",
        description:
          "Approval gates, confidence-based escalation, and review interfaces that keep people in control of consequential decisions.",
      },
      {
        title: "Architecture Assessment and Modernization",
        description:
          "Evaluation of your current landscape for agent-readiness, with a pragmatic modernization roadmap.",
      },
      {
        title: "AgentOps and AI Agent Infrastructure",
        description:
          "The operational backbone for agents in production: monitoring, evaluation, versioning, cost management, and incident response.",
      },
      {
        title: "AI-Ready Data Architecture",
        description:
          "Data pipelines, knowledge bases, and vector stores that give agents accurate, current, permission-aware context.",
      },
      {
        title: "Adoption and Change Management",
        description:
          "Structured rollout, training, and communication so teams trust and actually use agentic systems.",
      },
      {
        title: "Agentic AI Governance and Security",
        description:
          "Policies, guardrails, identity, and audit controls that make agent behaviour observable, constrained, and compliant.",
      },
      {
        title: "Agentic AI Scaling and Evolution",
        description:
          "From first agent to agent platform: patterns, reusable components, and operating models for scaling across the enterprise.",
      },
      {
        title: "Self-Hosted AI Solutions for Compliant Enterprises",
        description:
          "Private, self-hosted AI deployments for organizations whose data cannot leave their environment.",
      },
    ],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "We build agentic systems on the Microsoft AI stack, Azure AI Foundry for model orchestration and evaluation, Azure OpenAI for language intelligence, Copilot Studio for conversational agents inside Microsoft 365, and Microsoft Entra for identity-secured agent actions. Your agents inherit the security, compliance, and manageability of the platform your enterprise already trusts.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "Automation of complex, judgment-heavy workflows previously out of reach",
      "Faster cycle times for approvals, document processing, and service requests",
      "Reduced operational cost and error rates",
      "Full auditability and human oversight of AI-driven decisions",
      "A reusable agent platform, not a one-off pilot",
      "Compliance-friendly deployment options, including fully self-hosted AI",
    ],
  },

  technologies: [
    "azure-ai-foundry",
    "azure-openai",
    "copilot-studio",
    "semantic-kernel",
    "microsoft-entra",
    "azure-functions",
    "microsoft-graph",
    "dataverse",
  ],

  relatedSolutions: [
    "ai-document-management",
    "ai-document-generator",
    "ai-chatbot-solutions",
    "self-hosted-enterprise-ai",
    "workflow-automation-platform",
  ],
  relatedIndustries: ["financial-services", "healthcare", "real-estate", "energy", "technology"],
  relatedCaseStudies: ["rel-ai-lease-abstractor"],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Agentic AI & Automation?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Agentic AI & AI Automation",
    description:
      "Design, build, and operate AI agents and multi-agent systems that automate complex enterprise workflows, with governance, security, and humans in the loop.",
  },
};

export default service;
