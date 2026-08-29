/**
 * Service: Microsoft & Cloud Solutions
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/services/domain/service.schema").ServiceRecord} */
export const service = {
  slug: "microsoft-cloud-solutions",
  title: "Microsoft & Cloud Solutions",
  navLabel: "Microsoft & Cloud",
  tagline: "A modern, resilient Microsoft cloud foundation",
  summary: "Microsoft 365, Azure, and disaster recovery: implemented, migrated, and operated as a secure, intelligent foundation for the AI-powered enterprise.",
  groupId: "microsoft-platform",
  order: 4,
  status: "published",


  heroSlides: [
    { image: "/asset/services/microsoft-cloud-1.webp", label: "Migrations delivered without business disruption" },
    { image: "/asset/services/microsoft-cloud-2.webp", label: "Azure landing zones ready for AI workloads" },
    { image: "/asset/services/microsoft-cloud-3.webp", label: "Recovery objectives tested, not assumed" }],

  intro: [
    "AI initiatives succeed or fail on the foundation beneath them. Identity, collaboration, cloud infrastructure, data platforms, and business continuity determine whether intelligent solutions can be deployed safely and scaled reliably.",
    "Cloud Fusion Global implements and modernizes the Microsoft cloud end-to-end: Microsoft 365 for the digital workplace, Azure for infrastructure, data, and AI workloads, and disaster recovery for the platforms your business cannot afford to lose. We treat the cloud not as a destination but as the operating platform for intelligent business."],

  challenges: {
    eyebrow: "The Challenge",
    heading: "Business challenges we solve",
    items: [
      "Aging on-premises infrastructure that blocks AI adoption and modern collaboration.",
      "Complex migrations (tenants, mailboxes, file shares, and legacy workloads) with no room for business disruption.",
      "Hybrid identity sprawl and inconsistent security posture across cloud and on-premises.",
      "Rising infrastructure costs without a clear cloud optimization strategy.",
      "Critical workloads (SharePoint, SQL Server, Exchange) without tested recovery plans."],
  },

  approach: {
    eyebrow: "Our Approach",
    heading: "How CFG helps",
    items: [
      {
        title: "Migrate without disruption",
        description:
          "Proven migration playbooks for Microsoft 365, Azure, and hybrid estates: planned, rehearsed, and executed with rollback paths and clear communication.",
      },
      {
        title: "Build an AI-ready cloud",
        description:
          "Azure landing zones, networking, identity, and data platforms designed so AI workloads (Azure OpenAI, AI Foundry) deploy securely from day one.",
      },
      {
        title: "Engineer for resilience",
        description:
          "High availability, backup, and disaster recovery designed and tested against real recovery objectives, not assumed.",
      },
      {
        title: "Optimize continuously",
        description:
          "Cost management, right-sizing, and governance so the cloud stays efficient as it grows.",
      }],
  },

  capabilities: {
    eyebrow: "Capabilities",
    heading: "What this service includes",
    items: [
      { group: "Microsoft 365", title: "Microsoft 365 Implementation", description: "Tenant design, security baselines, and workload rollout for a well-governed digital workplace." },
      { group: "Microsoft 365", title: "Microsoft 365 Migration", description: "Migration from legacy platforms or between tenants with minimal user disruption." },
      { group: "Microsoft 365", title: "Exchange Online", description: "Mail migration, hybrid coexistence, and secure messaging configuration." },
      { group: "Microsoft 365", title: "Microsoft Teams", description: "Teams architecture, governance, and voice: collaboration designed for how your organization works." },
      { group: "Microsoft 365", title: "OneDrive", description: "Managed rollout of personal file storage with sync, sharing, and data protection policies." },
      { group: "Microsoft 365", title: "Microsoft Viva", description: "Employee experience (engagement, learning, and insights) built into Microsoft 365." },
      { group: "Microsoft 365", title: "Microsoft Graph", description: "Custom integrations and automation across Microsoft 365 through the Graph API." },
      { group: "Microsoft 365", title: "Identity Management", description: "Identity lifecycle, conditional access, and MFA: the security perimeter of the modern enterprise." },
      { group: "Microsoft 365", title: "Azure AD Connect", description: "Hybrid identity synchronization between on-premises Active Directory and Microsoft Entra ID." },
      { group: "Azure", title: "Azure Consulting", description: "Strategy, architecture, and governance guidance from certified Azure architects." },
      { group: "Azure", title: "Azure Cloud Infrastructure", description: "Landing zones, networking, and compute designed for security and scale." },
      { group: "Azure", title: "Cloud Migration", description: "Assessment, planning, and execution of workload migrations to Azure." },
      { group: "Azure", title: "Hybrid Cloud", description: "Architectures that span on-premises and Azure with consistent identity, networking, and management." },
      { group: "Azure", title: "Azure AI Foundry", description: "The platform for building, evaluating, and operating enterprise AI applications and agents." },
      { group: "Azure", title: "Azure OpenAI", description: "Enterprise-grade access to frontier language models with private networking and data controls." },
      { group: "Azure", title: "Azure Virtual Machines", description: "Right-sized, resilient VM estates for workloads that need infrastructure control." },
      { group: "Azure", title: "Azure Virtual Desktop", description: "Secure virtual desktops delivered from Azure for remote and contractor workforces." },
      { group: "Azure", title: "Azure App Services", description: "Managed hosting for web applications and APIs with built-in scaling and deployment slots." },
      { group: "Azure", title: "Azure Storage", description: "Blob, file, and archive storage designed for durability, performance, and cost." },
      { group: "Azure", title: "Azure Networking", description: "Virtual networks, private endpoints, firewalls, and connectivity architected for zero-trust." },
      { group: "Disaster Recovery & Business Continuity", title: "SharePoint Disaster Recovery", description: "Recovery architecture and runbooks for SharePoint farms and SharePoint Online content." },
      { group: "Disaster Recovery & Business Continuity", title: "SQL Server Disaster Recovery", description: "Always On availability groups, log shipping, and cloud failover for critical databases." },
      { group: "Disaster Recovery & Business Continuity", title: "Exchange Disaster Recovery", description: "Messaging continuity through database availability groups and recovery planning." },
      { group: "Disaster Recovery & Business Continuity", title: "Cloud Disaster Recovery", description: "Azure Site Recovery and cloud-native DR for on-premises and cloud workloads." },
      { group: "Disaster Recovery & Business Continuity", title: "Business Continuity", description: "Continuity strategy that aligns recovery investment with actual business impact." },
      { group: "Disaster Recovery & Business Continuity", title: "Backup and Recovery", description: "Backup architecture with tested restores, because a backup is only real once it has been recovered." },
      { group: "Disaster Recovery & Business Continuity", title: "High Availability", description: "Redundancy and failover design that keeps critical platforms running through component failure." },
      { group: "Disaster Recovery & Business Continuity", title: "Disaster Recovery Planning and Testing", description: "Documented recovery plans, defined RTO/RPO objectives, and scheduled failover rehearsals." }],
  },

  stack: {
    eyebrow: "AI + Microsoft",
    heading: "Where AI meets the Microsoft stack",
    body: "The Microsoft cloud is where AI becomes operational. We design Azure environments so Azure OpenAI and AI Foundry workloads run inside your network boundary, Microsoft 365 data becomes safely available to AI through Microsoft Graph, and Entra identity governs every automated action. A well-architected cloud is the difference between AI experiments and AI in production.",
  },

  outcomes: {
    eyebrow: "Outcomes",
    heading: "What you gain",
    items: [
      "A secure, well-governed Microsoft cloud foundation ready for AI workloads",
      "Migrations delivered without business disruption",
      "Consistent identity and security posture across hybrid environments",
      "Tested disaster recovery with defined RTO/RPO objectives",
      "Optimized cloud spend through right-sizing and governance",
      "One partner across Microsoft 365, Azure, and business continuity"],
  },

  technologies: [
    "microsoft-365",
    "azure",
    "microsoft-entra",
    "exchange-online",
    "microsoft-teams",
    "azure-site-recovery",
    "azure-openai",
    "azure-ai-foundry"],

  relatedSolutions: [
    "sharepoint-migration",
    "tenant-to-tenant-migration",
    "self-hosted-enterprise-ai",
    "intranet-portal"],
  relatedIndustries: ["financial-services",  "energy",  "education"],
  relatedCaseStudies: ["sharepoint-enterprise-migration"],

  ctas: ["talk-to-expert", "request-proposal"],

  closing: {
    heading: "Ready to talk about Microsoft & Cloud?",
    body: "Tell us where you are and where you want to be: we'll bring the architecture, the delivery plan, and the team.",
    ctas: ["talk-to-expert", "request-proposal", "discovery-session"],
  },

  seo: {
    title: "Microsoft & Cloud Solutions",
    description: "Microsoft 365, Azure, and disaster recovery: implemented, migrated, and operated as a secure, intelligent foundation for the AI-powered enterprise."
  }
};

export default service;
