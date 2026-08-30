/**
 * Case study: SharePoint Server Modernization & Migration for Ajil Financial Services
 *
 * Same doc-based layout as the Hut24 / JE Portal case studies: no
 * "Industry" / "Technologies" / "Business gains" header strip and no
 * testimonial. This doc has no explicit "Customer" / "Engagement Partner" /
 * "Delivery & Technology Partner" label fields (unlike the other two docs) -
 * those roles are only named in prose, so they're captured from there.
 * "Solution Provided" here is a single flat list rather than sub-headed
 * groups, so it's captured as `solutionPoints` rather than `approach`.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "sharepoint-2019-to-subscription-edition-migration-ajil",
  title: "SharePoint Server Modernization & Migration for Ajil Financial Services",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",

  // --- Header info (no Industry/Technologies/Business-gains strip in this doc) ---
  client: "Ajil Financial Services Company", // named in "About Our Customer"
  engagementPartner: "PC Communication and IT Co.", // named throughout as the partner CFG delivered alongside
  deliveryPartner: "Cloud Fusion Global",
  order: 1,
  status: "published",

  // "Summary"
  summary: "Cloud Fusion Global, serving as a Delivery & Technology Partner to PC Communication and IT Co., helped modernize the SharePoint environment of Ajil Financial Services Company, a leading financial services organization in Saudi Arabia. The engagement involved transitioning Ajil's business-critical SharePoint environment from SharePoint Server 2019 to SharePoint Server Subscription Edition, including environment assessment, migration planning, pilot migration, third-party solution validation, UAT, and production migration.",

  // "About Our Customer"
  aboutCustomer: "Ajil Financial Services Company is a financial services organization in Saudi Arabia that relies on SharePoint to support business-critical document management, collaboration, forms, workflows, and compliance-related processes. The engagement was delivered by Cloud Fusion Global in partnership with PC Communication and IT Co., with CFG providing the SharePoint modernization and technical delivery expertise required for the project.",

  // "Business Challenge"
  challenge: "Ajil needed to modernize its existing SharePoint Server 2019 environment and transition to a more current and supportable SharePoint platform. The challenge extended beyond migrating SharePoint content. The existing environment supported critical business processes and included third-party solutions such as Spark Forms, Spark Workflows, DocRead, and SwissGRC. The modernization therefore required a carefully controlled approach to ensure that existing content, configurations, workflows, forms, integrations, and business functionality continued to operate effectively in the new environment.",

  // "Solution Provided": intro line + flat list of engagement activities (no sub-headed groups in this doc)
  solution: "Cloud Fusion Global, as the Delivery & Technology Partner to PC Communication and IT Co., designed and delivered a structured SharePoint modernization and migration approach for Ajil Financial Services. A pilot-first approach enabled potential migration and compatibility issues to be identified and addressed before production cutover.",
  solutionPoints: [
    "Assessment of the existing SharePoint environment and dependencies",
    "SharePoint Subscription Edition environment preparation",
    "Database Attach migration strategy",
    "Pilot migration and validation",
    "SharePoint configuration and service application setup",
    "Deployment and validation of custom and third-party solutions",
    "Spark Forms and Spark Workflows validation",
    "DocRead validation",
    "SwissGRC upgrade and compatibility validation",
    "UAT support",
    "Production environment preparation",
    "Production migration and cutover",
    "Post-migration technical and business validation"],


  // "Key Outcomes"
  outcomes: [
    "Successfully transitioned Ajil's SharePoint platform from SharePoint Server 2019 to SharePoint Subscription Edition",
    "Established a structured and controlled migration approach",
    "Successfully migrated business-critical SharePoint content",
    "Validated critical forms, workflows, and third-party applications",
    "Upgraded and validated SwissGRC within the target environment",
    "Identified and addressed migration issues during pilot and UAT",
    "Established a more current and supportable SharePoint platform",
    "Preserved critical business processes and integrations"],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "The engagement demonstrated the value of combining strong delivery partnership with deep SharePoint expertise. Working alongside PC Communication and IT Co., Cloud Fusion Global helped Ajil Financial Services Company modernize its business-critical SharePoint environment through a structured, validated, and controlled migration to SharePoint Subscription Edition. The project reflects CFG's ability to support enterprise SharePoint modernization initiatives as a specialist technology and delivery partner, working collaboratively with established IT service providers to deliver complex Microsoft solutions.",

  // No testimonial in this document
  testimonial: null,

  relatedServices: [
    "sharepoint-solutions",
    "microsoft-cloud-solutions",
  ],
  relatedSolutions: [
    "sharepoint-version-upgrade",
    "sharepoint-migration",
  ],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "SharePoint Server Modernization & Migration Case Study: Ajil Financial Services",
    description: "Cloud Fusion Global, in partnership with PC Communication and IT Co., migrated Ajil Financial Services Company's business-critical SharePoint environment from SharePoint Server 2019 to Subscription Edition.",
  },
};

export default caseStudy;