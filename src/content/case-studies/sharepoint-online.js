/**
 * Case study: Transforming Knowledge Management with SharePoint Online & AI (NSDC Nigeria)
 *
 * Same doc-based layout as the Ajil case studies: no "Industry" /
 * "Technologies" / "Business gains" header strip and no testimonial, and
 * no labelled "Customer" / "Engagement Partner" fields (client/partner are
 * named in prose). "Solution Provided" here is 7 sub-headed sections, most
 * with their own bullet list, mapped via `approach`.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "nsdc-nigeria-knowledge-management-sharepoint-ai",
  title: "Transforming Knowledge Management with SharePoint Online & AI",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",

  // --- Header info (no Industry/Technologies/Business-gains strip in this doc) ---
  client: "National Sugar Development Council of Nigeria (NSDC)", // named in "About Our Customer"
  engagementPartner: "Eclipse Techsoft", // named throughout as the partner CFG delivered alongside
  deliveryPartner: "Cloud Fusion Global",
  order: 1,
  status: "published",

  // "Summary"
  summary: "Cloud Fusion Global, in collaboration with Eclipse Techsoft, helped the National Sugar Development Council of Nigeria (NSDC) establish a modern, centralized knowledge management environment built on Microsoft SharePoint Online and Microsoft 365. The solution brings organizational knowledge, departmental information, document management, collaboration, security, and AI-enabled knowledge capabilities together within a unified digital workplace. A centralized SharePoint Hub Site connects dedicated departmental portals, structured document libraries, organizational taxonomy, role-based access controls, collaboration features, and an evolving AI enablement layer. The architecture provides NSDC with a scalable foundation for moving from traditional document management toward a more intelligent, secure, and connected digital workplace.",

  // "About Our Customer"
  aboutCustomer: "The National Sugar Development Council (NSDC) is a Nigerian government organization responsible for supporting and developing the country's sugar industry. As a multi-department organization, NSDC manages a significant volume of organizational information, documents, policies, reports, resources, and departmental knowledge. The organization sought to modernize how employees access, manage, share, and discover this information through a centralized digital knowledge management platform. The engagement was delivered by Cloud Fusion Global in partnership with Eclipse Techsoft, with CFG providing SharePoint, Microsoft 365, information architecture, customization, and AI technology expertise.",

  // "Business Challenge": intro + capability requirements + closing framing
  challenge: "NSDC needed to move beyond traditional document repositories and create a structured digital environment where employees could easily find and use organizational knowledge. A key challenge was balancing information accessibility with appropriate security boundaries, ensuring employees could easily find the information they needed while protecting sensitive and restricted content.",
  challengePoints: [
    "Centralized access to organizational knowledge",
    "Dedicated digital workspaces for departments",
    "Structured document and information management",
    "Consistent taxonomy and metadata",
    "Secure access to confidential and restricted information",
    "Improved document discoverability",
    "Department-specific collaboration capabilities",
    "AI-assisted access to organizational knowledge",
    "A scalable architecture aligned with Microsoft 365"],


  // "Solution Provided": intro line + the 7 sub-headed sections
  solution: "Cloud Fusion Global designed and implemented a SharePoint Online-based Knowledge Management System (KMS) around a centralized organizational Hub and connected departmental portals.",
  approach: [
    {
      step: "01",
      title: "Centralized Knowledge Hub",
      description: "A SharePoint Hub Site was established as the primary entry point for employees, providing a consistent experience while allowing individual departments to manage their own content and resources.",
      bullets: [
        "Organizational announcements",
        "Events",
        "Quick links",
        "Common resources",
        "Templates",
        "Documents",
        "Departmental information",
        "Knowledge resources"],

    },
    {
      step: "02",
      title: "Departmental Knowledge Portals",
      description: "Dedicated SharePoint sites were created for departments, providing each business function with its own digital workspace.",
      bullets: [
        "Department information",
        "Document libraries",
        "Structured content",
        "Resources and templates",
        "Quick links",
        "Events",
        "Task tracking",
        "Department-specific navigation",
        "AI-enabled knowledge capabilities"],

    },
    {
      step: "03",
      title: "Structured Information Architecture",
      description: "CFG established a structured information architecture using organizational taxonomy, metadata, content types, site columns, and purpose-built document libraries. This approach transformed the environment from an unstructured file repository into a more organized, searchable, and manageable knowledge ecosystem.",
    },
    {
      step: "04",
      title: "Security & Access Control",
      description: "The solution incorporated role- and department-based access controls aligned with NSDC's organizational structure, helping ensure employees can access the information relevant to their responsibilities while maintaining appropriate protection for sensitive content.",
      bullets: [
        "Director-level access",
        "Senior and mid-level staff access",
        "Junior staff access",
        "Sub-unit level access",
        "Restricted document libraries",
        "Confidential information controls"],

    },
    {
      step: "05",
      title: "Collaboration & Productivity",
      description: "The departmental portals bring commonly used resources and activities closer to employees through Microsoft 365 capabilities.",
      bullets: [
        "Quick links",
        "Events",
        "Resources and templates",
        "Microsoft Lists",
        "Task tracking",
        "Department-specific content"],

    },
    {
      step: "06",
      title: "Custom SharePoint Experience",
      description: "While the solution primarily uses Microsoft 365 capabilities, SharePoint Framework (SPFx) components were incorporated where custom functionality, branding, or user experience requirements called for it, providing NSDC with a tailored experience while retaining the flexibility and scalability of SharePoint Online.",
    },
    {
      step: "07",
      title: "AI Enablement",
      description: "AI was incorporated into the solution roadmap to make organizational knowledge easier to discover, understand, and use. The AI architecture was evaluated with particular attention to security, SharePoint permissions, data access, model selection, scalability, licensing, cost, and maintainability: providing NSDC with a foundation for progressively introducing AI capabilities as business requirements and governance mature.",
      bullets: [
        "AI Knowledge Assistants for conversational access to approved organizational information",
        "Knowledge Retrieval using enterprise content and approved knowledge sources",
        "Document Summarization for reports, policies, and other lengthy documents",
        "Policy Assistance for locating and understanding approved policies and procedures",
        "AI-powered departmental assistants for areas such as HR, Finance, Procurement, and organizational knowledge"],

    }],


  // "Key Outcomes"
  outcomes: [
    "Established a centralized SharePoint Online Knowledge Management System",
    "Created a unified organizational knowledge hub",
    "Connected departmental digital workspaces through SharePoint Hub architecture",
    "Introduced structured taxonomy, metadata, and content organization",
    "Improved discoverability of organizational information and documents",
    "Implemented role- and department-based access controls",
    "Provided departments with dedicated collaboration and resource portals",
    "Introduced task tracking and productivity capabilities through Microsoft 365",
    "Enhanced the SharePoint experience through targeted SPFx customization",
    "Established a foundation for AI-powered knowledge retrieval and productivity",
    "Created an extensible architecture capable of supporting future automation, AI assistants, integrations, and digital workplace capabilities"],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "The NSDC Knowledge Management System represents a shift from traditional document storage toward a centralized, structured, secure, and intelligent digital workplace. Through the collaboration of NSDC, Eclipse Techsoft, and Cloud Fusion Global, the organization now has a Microsoft 365-based foundation for connecting people, information, departments, and knowledge in one environment. By combining SharePoint Online, structured information architecture, security, collaboration, custom experiences, and AI enablement, the platform is positioned to evolve beyond knowledge management into a broader intelligent workplace: where employees can not only find information, but understand it, interact with it, and ultimately use AI to turn organizational knowledge into action.",

  // No testimonial in this document
  testimonial: null,

  relatedServices: [],
  relatedSolutions: [],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "Transforming Knowledge Management with SharePoint Online & AI Case Study: NSDC Nigeria",
    description: "Cloud Fusion Global, in partnership with Eclipse Techsoft, built a centralized SharePoint Online Knowledge Management System with AI enablement for the National Sugar Development Council of Nigeria.",
  },
};

export default caseStudy;