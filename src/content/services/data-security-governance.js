/**
 * Service: Data Security & Governance
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "data-security-governance",
  title: "Data Security & Governance",
  navLabel: "Security & Governance",
  tagline: "Security and governance for the intelligent enterprise",
  summary: "Identity, information protection, compliance, and threat defense with Microsoft Entra and Purview: the control plane that makes AI adoption safe.",
  groupId: "modernization-operations",
  order: 11,
  status: "published",


  heroSlides: [
    { image: "/asset/services/security-1.webp", label: "A zero-trust identity foundation" },
    { image: "/asset/services/security-2.webp", label: "Protection that travels with the data" },
    { image: "/asset/services/security-3.webp", label: "Continuous visibility into threats and risk" },
  ],

  intro: [
    "AI raises the stakes on security. Agents act with delegated permissions, models consume enterprise content, and data moves faster than manual controls can follow. Organizations that get governance right adopt AI with confidence; those that don't either stall or take risks they can't see.",
    "Cloud Fusion Global implements security and governance on the Microsoft stack: Entra for identity, Purview for information protection and compliance, Defender for threat protection, and Intune for endpoints, designed as one coherent control plane across your cloud, content, and AI workloads.",
  ],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Identity sprawl and over-privileged access accumulated over years.",
      "Sensitive data unlabelled and unprotected across SharePoint, Teams, and email.",
      "Compliance obligations met with manual effort and hope.",
      "AI adoption blocked because no one can say what data models might expose.",
      "Threats evolving faster than in-house security capacity.",
    ],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Put identity at the center",
        description:
          "Microsoft Entra with conditional access, MFA, and least-privilege design: the zero-trust perimeter for users, apps, and AI agents.",
      },
      {
        title: "Protect information where it lives",
        description:
          "Purview sensitivity labels, DLP, and retention applied automatically: protection that travels with the data.",
      },
      {
        title: "Govern AI access to data",
        description:
          "Permission trimming, data boundaries, and audit for Copilot and custom AI, so intelligence never becomes exposure.",
      },
      {
        title: "Defend continuously",
        description:
          "Threat protection, endpoint management, and security monitoring across your Microsoft estate.",
      },
    ],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { title: "Identity and Access Management", description: "Identity lifecycle, access reviews, and least-privilege enforcement." },
      { title: "Microsoft Entra", description: "Conditional access, MFA, identity protection, and workload identities." },
      { title: "Information Protection", description: "Classification, labelling, and encryption of sensitive content with Microsoft Purview." },
      { title: "Privacy Management", description: "Controls and processes for personal data handling and subject requests." },
      { title: "Risk Management", description: "Insider risk and data risk visibility with actionable policies." },
      { title: "Endpoint Security", description: "Device protection with Microsoft Defender for Endpoint." },
      { title: "Endpoint Management", description: "Device configuration, compliance, and application management with Intune." },
      { title: "Threat Protection", description: "Detection and response across identity, email, endpoints, and cloud apps." },
      { title: "Compliance Management", description: "Regulatory compliance posture, assessments, and evidence with Purview." },
      { title: "Governance", description: "Policies, lifecycle, and controls for Microsoft 365, Power Platform, and AI workloads." },
      { title: "Cloud Security", description: "Secure Azure architecture across networking, encryption, and posture management." },
      { title: "Security Monitoring", description: "Continuous monitoring and alerting with Microsoft Sentinel." },
      { title: "Infrastructure Security", description: "Hardening and protection for hybrid infrastructure estates." },
    ],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "Security is what makes enterprise AI possible. We implement the controls that let you say yes to AI: Entra governing what agents can do, Purview governing what models can see, and Defender watching how everything behaves, turning governance from an AI blocker into the AI enabler.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "A zero-trust identity foundation across users, apps, and agents",
      "Sensitive data classified and protected automatically",
      "Compliance evidence produced by the platform, not by heroics",
      "AI adoption unblocked with governed data boundaries",
      "Reduced attack surface across endpoints and cloud",
      "Continuous visibility into threats and risk posture",
    ],
  },

  technologies: [
    "microsoft-entra",
    "microsoft-purview",
    "microsoft-defender",
    "microsoft-intune",
    "microsoft-sentinel",
    "azure-key-vault",
    "azure-policy",
  ],

  relatedSolutions: [
    "self-hosted-enterprise-ai",
    "records-management-system",
    "self-hosted-sharepoint-sites",
    "document-management-system",
  ],
  relatedIndustries: ["financial-services", "healthcare", "energy", "telecom", "education"],
  relatedCaseStudies: [],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Data Security & Governance?",
    body: "Tell us where you are and where you want to be, and we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Data Security & Governance",
    description: "Identity, information protection, compliance, and threat defense with Microsoft Entra and Purview: the control plane that makes AI adoption safe."
  }
};

export default service;
