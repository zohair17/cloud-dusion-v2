/**
 * Case study: SharePoint Disaster Recovery & Business Continuity for Ajil Financial Services
 *
 * Same doc-based layout as the SharePoint migration case study for the
 * same client: no "Industry" / "Technologies" / "Business gains" header
 * strip and no testimonial. Client/partner roles are named in prose
 * rather than as separate labelled fields. "Solution Provided" is a
 * single flat list, captured as `solutionPoints` rather than `approach`.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "sharepoint-disaster-recovery-business-continuity-ajil",
  title: "SharePoint Disaster Recovery & Business Continuity for Ajil Financial Services",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/sharepoint-disaster-recovery-business-continuity-ajil.webp",

  // --- Header info (no Industry/Technologies/Business-gains strip in this doc) ---
  client: "Ajil Financial Services Company", // named in "About Our Customer"
  engagementPartner: "PC Communication and IT Co.", // named throughout as the partner CFG delivered alongside
  deliveryPartner: "Cloud Fusion Global",
  order: 1,
  status: "published",

  // "Summary"
  summary: "Cloud Fusion Global, serving as a Delivery & Technology Partner to PC Communication and IT Co., helped establish a dedicated SharePoint Disaster Recovery (DR) environment for Ajil Financial Services Company, a leading financial services organization in Saudi Arabia. The engagement focused on strengthening the resilience and recovery readiness of Ajil's business-critical SharePoint platform through an Active-Passive DR architecture, production-aligned SharePoint deployment, SQL High Availability integration, failover and failback planning, controlled DR testing, and operational documentation.",

  // "About Our Customer"
  aboutCustomer: "Ajil Financial Services Company is a financial services organization in Saudi Arabia that relies on SharePoint to support important business processes, document management, collaboration, workflows, forms, and compliance-related activities. The engagement was delivered by Cloud Fusion Global in partnership with PC Communication and IT Co., with CFG providing specialist SharePoint, infrastructure, and disaster recovery expertise as part of the delivery team.",

  // "Business Challenge"
  challenge: "Ajil required a dedicated Disaster Recovery capability for its business-critical SharePoint environment to strengthen business continuity and reduce the operational risk associated with a major infrastructure or site-level failure. The requirement extended beyond simply establishing a secondary environment. The DR solution needed to provide a practical and repeatable recovery capability covering SharePoint services, business content, user access, authentication, workflows, forms, and integrated applications. Ajil also needed clearly defined and tested failover and failback procedures, supported by documentation and knowledge transfer, so that the technical team could confidently execute the recovery process when required.",

  // "Solution Provided": intro line + flat list of engagement activities (no sub-headed groups in this doc)
  solution: "Cloud Fusion Global, as the Delivery & Technology Partner to PC Communication and IT Co., designed and implemented an Active-Passive SharePoint Disaster Recovery architecture for Ajil Financial Services. The DR environment was validated through controlled recovery scenarios to confirm the availability of SharePoint services, content, authentication, user access, and critical business functionality.",
  solutionPoints: [
    "Design of the SharePoint DR architecture",
    "Dedicated DR environment preparation",
    "SharePoint Subscription Edition deployment",
    "Production-aligned SharePoint configuration",
    "Integration with the existing SQL High Availability infrastructure",
    "SharePoint service and application configuration",
    "DR environment validation",
    "Failover procedure design",
    "Failback procedure design",
    "Controlled DR activation testing",
    "Failover and failback validation",
    "SharePoint availability and business functionality testing",
    "DR activation and testing runbook",
    "Operational documentation",
    "Knowledge transfer to the client's technical team"],


  // "Key Outcomes"
  outcomes: [
    "Established a dedicated SharePoint Disaster Recovery environment for Ajil Financial Services",
    "Implemented an Active-Passive DR architecture",
    "Established a production-aligned SharePoint Subscription Edition environment",
    "Integrated SharePoint with the existing SQL High Availability infrastructure",
    "Defined structured failover and failback procedures",
    "Conducted controlled DR testing and validation",
    "Validated SharePoint availability, access, content, and business functionality during recovery scenarios",
    "Developed a structured DR activation and testing runbook",
    "Improved operational recovery readiness and business continuity",
    "Provided knowledge transfer to the technical team"],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "A Disaster Recovery environment is only effective when the organization knows that it can actually recover when needed. Working alongside PC Communication and IT Co., Cloud Fusion Global helped Ajil Financial Services Company establish and validate a structured SharePoint Disaster Recovery capability. Through production-aligned infrastructure, SQL High Availability integration, defined recovery procedures, controlled testing, and operational documentation, the engagement strengthened Ajil's ability to respond to a major SharePoint service disruption and maintain business continuity.",

  // No testimonial in this document
  testimonial: null,

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-cloud-solutions",
    "data-security-governance",
  ],
  relatedSolutions: [
    "self-hosted-sharepoint-sites",
  ],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "SharePoint Disaster Recovery & Business Continuity Case Study: Ajil Financial Services",
    description: "Cloud Fusion Global, in partnership with PC Communication and IT Co., designed and implemented an Active-Passive SharePoint Disaster Recovery architecture for Ajil Financial Services Company.",
  },
};

export default caseStudy;