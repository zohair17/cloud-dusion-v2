/**
 * Case study: Hybrid Document Management & Intranet Implementation (Malath Insurance)
 *
 * Project status: In Progress (POC delivered, development underway).
 * Every heading/sub-heading from the source PDF is mapped 1:1 below.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "hybrid-document-management-intranet-malath-insurance",
  title: "Hybrid Document Management & Intranet Implementation (In Progress)",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1400&q=80",

  // --- Header strip ---
  sectorLabel: "Insurance", // "Industry"
  industrySlug: "insurance",
  client: "Malath Insurance",
  order: 1,
  status: "in-progress", // "Project Status" heading: POC delivered, development underway

  // "Project Status" block
  projectStatus: {
    label: "In Progress",
    note: "POC Delivered, Development Underway",
  },

  // "Technologies" (as listed in the PDF, in order)
  technologies: [
    "sharepoint-server",
    "sharepoint-online",
    "custom-api",
    "powershell",
    "timer-jobs",
    "external-disk-storage",
    "sharepoint-framework",
    "dotnet"],


  // "Expected Business gains" (top strip, exact PDF order)
  businessGains: [
    "Reduction in Manual Processing",
    "Faster Document Retrieval",
    "Improved Resource Accessibility",
    "Reduction in Operational Overhead",
    "Compliance Accuracy"],

  businessGainsNote: "Expected: project in progress", // these are projected, not yet verified, gains

  // "Summary"
  summary: "Cloud Fusion Global is currently partnering with Malath Insurance to implement a custom hybrid Document Management System (DMS) integrated with a modern intranet portal. The solution combines the power of SharePoint 2019 On-Premises for secure internal storage with SharePoint Online to deliver modern UI and real-time access via a custom-built connector. With the proof of concept (POC successfully delivered), the full solution is now in the development phase, focusing on enhancing document control, compliance, and collaboration for Malath's internal teams.",

  // "About Our Customer"
  aboutCustomer: "Malath Insurance is a reputable Saudi insurance firm with a strong emphasis on regulatory compliance, data privacy, and operational excellence. To address increasing documentation and collaboration demands, Malath engaged Cloud Fusion Global to build a reliable, scalable, and secure document management platform that leverages their existing on-premises infrastructure alongside modern intranet tools.",

  // "Business Challenge"
  challenge: "Malath Insurance faced several critical challenges with its previous document management and intranet setup, spanning fragmented on-premises storage, strict National Cyber Security Regulatory Compliance (NCR) restrictions on cloud storage, labour-intensive manual content management, static and outdated interfaces, complex manual compliance requirements, and inefficient manual archival processes.",
  challengePoints: [
    { title: "Fragmented Storage and Access", description: "Essential documents were securely stored on-premises but difficult to access quickly via a unified interface." },
    { title: "NCR Compliance", description: "Adhering to National Cyber Security Regulatory Compliance, which restricts the use of cloud storage for documents storage." },
    { title: "Manual Content Management", description: "Updating document libraries, departmental portals, and intranet content was labour-intensive and error prone." },
    { title: "Static and Outdated Interfaces", description: "Existing pages lacked dynamic, interactive features needed for modern collaboration." },
    { title: "Complex Compliance Requirements", description: "Maintaining version control, access permissions, and audit trails manually led to inconsistencies." },
    { title: "Inefficient Archival Processes", description: "Older documents required manual archival, hindering searchability and workflow efficiency." }],


  // "Solution Provided ( In Progress )"


  solutionHeading: "Solution Provided (In Progress)",
  solution: "Cloud Fusion Global designed a comprehensive hybrid solution combining a departmental Document Management System, a secure custom access layer for SharePoint Online, automated archival workflows, a modern intranet portal, and advanced document operations.",
  approach: [
    {
      step: "01",
      title: "Hybrid DMS Setup",
            bullets: [
        "Departmental DMS Sites: Custom SharePoint sites created for each department, reflecting Malath Insurance's branding.",
        "Document Libraries & Folder Structures: Centralized repositories with structured folder hierarchies and role-based access controls.",
        "Metadata Tagging & Term Store Management: Implementation of managed metadata for enhanced document classification and search precision.",
        "Version Control & Content Approval: Automated workflows track document updates and enforce approval processes.",
        "Audit Logs & Security: Integrated auditing and user access monitoring ensure compliance with regulatory standards."],

    },
    {
      step: "02",
      title: "Custom Access Layer for SharePoint Online",
      description: "A secure, real-time connection between on-premises SharePoint and SharePoint Online.",
      bullets: [
        "Secure API Connector: Establishes a secure, real-time connection between on-premises SharePoint and SharePoint Online.",
        "Unified Search Interface: Enables users to perform title-based searches across both active and archived documents without migrating data.",
        "Dynamic Document Access: Provides direct links for viewing or downloading documents stored on-premises."],

    },
    {
      step: "03",
      title: "Automated Archival Workflow",
      description: "A scheduled process periodically archives documents while preserving searchability.",
      bullets: [
        "Scheduled Archival Process: A Timer Job or PowerShell script periodically identifies documents that meet archival criteria and moves them to external disk storage.",
        "Metadata Preservation: Archived documents retain key metadata in a dedicated SharePoint Archive List, ensuring ongoing searchability.",
        "Custom Interface for Archives: A dedicated view in SharePoint Online allows users to easily access and retrieve archived documents."],

    },
    {
      step: "04",
      title: "Intranet Portal Implementation",
      description: "A modern, branded intranet with departmental portals and enhanced content management.",
      bullets: [
        "Homepage & Navigation: A modern, branded homepage that organizes content by department with dynamic menus and quick links.",
        "Departmental Portals: Custom web parts provide quick access to department-specific folders, calendars, news, and team directories.",
        "Content and News Management: Features for dynamic banners, leadership profiles, photo galleries, and announcements enhance internal communication.",
        "Enhanced User Experience: Interactive elements such as customizable search, responsive design, and role-based content delivery significantly improve usability."],

    },
    {
      step: "05",
      title: "Advanced Document Operations",
      description: "Additional security, compliance, and value-added services layered on top of the core platform.",
      bullets: [
        "Electronic Signature Integration: Facilitates secure, in-SharePoint document signing using third-party or custom solutions.",
        "Document Watermarking: Automated watermarking options for added security and compliance.",
        "Additional Value-Added Services: Complementary offerings including HR bots, workflow automation for specific processes, and end-user training ensure a comprehensive solution."],

    }],


  outcomesHeading: "Expected Key Outcomes",


  // "Expected Key Outcomes"
  outcomes: [
    "70% Reduction in Manual Processing: Automated workflows dramatically cut down on manual document handling and content updates.",
    "80% Faster Document Retrieval: Enhanced search functionalities reduce the time required to locate documents.",
    "50% Reduction in Operational Overhead: Streamlined processes and automated archival significantly lower administrative costs.",
    "95% Compliance Accuracy: Automated version control and auditing ensure secure, compliant document management."],


  metricsNote: "Expected outcomes: project in progress; figures to be verified upon completion",

  // "Conclusion"
  conclusion: "Cloud Fusion Global's hybrid Document Management and Intranet Implementation is currently transforming document storage and access at Malath Insurance. Following a successful Proof of Concept, the project is now in active development. Once completed, it will enhance security, compliance, and user experience by integrating SharePoint 2019 On-Premises with a modern SharePoint Online interface through a secure custom access layer. This solution is expected to deliver measurable operational gains, significantly improving internal efficiency and setting a new benchmark for document management in the insurance sector.",

  // No testimonial yet: project in progress
  testimonial: null,
  testimonialNote: "The testimonial and feedback included in this case study will be collected and updated after the project's successful completion.",

  relatedServices: [],
  relatedSolutions: [],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "Hybrid Document Management & Intranet Implementation Case Study: Malath Insurance",
    description: "Cloud Fusion Global is building a hybrid Document Management System combining SharePoint 2019 On-Premises with SharePoint Online for Malath Insurance, currently in active development following a successful POC.",
  },
};

export default caseStudy;