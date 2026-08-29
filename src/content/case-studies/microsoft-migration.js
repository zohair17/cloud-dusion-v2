/**
 * Case study: Digital Transformation & Microsoft 365 Modernization (Stonegate Commercial Capital)
 *
 * This doc includes an "Industry" and "Location" field (unlike the other
 * Word-doc case studies) plus a subtitle line, but still no Technologies /
 * Business-gains strip or testimonial. Its "Business Challenge" and
 * "Key Outcomes" sections are each a set of named sub-headings with their
 * own paragraph (not flat bullet lists), so both are captured as
 * title+description arrays rather than plain strings.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "stonegate-commercial-capital-digital-transformation-m365",
  title: "Digital Transformation & Microsoft 365 Modernization",
  subtitle: "Transforming a Fragmented Commercial Real Estate Operation into a Connected Digital Workplace",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",

  // --- Header info block ---
  client: "Stonegate Commercial Capital", // "Customer"
  sectorLabel: "Commercial Real Estate", // "Industry"
  industrySlug: "commercial-real-estate",
  location: "United States",
  engagement: "Digital Transformation, Microsoft 365, SharePoint, Power Platform & Business Intelligence", // "Engagement"
  deliveryPartner: "Cloud Fusion Global",
  order: 1,
  status: "published",

  // "Summary"
  summary: "Stonegate Commercial Capital, a US-based commercial real estate firm, was operating across a fragmented technology environment that was limiting productivity, collaboration, and business visibility. Email was managed through Google Workspace, communication and deal discussions were heavily dependent on Slack, business documents were scattered across different locations, and leadership lacked centralized visibility into employee performance, deal pipelines, and business activities. Cloud Fusion Global helped transform this fragmented environment into a connected Microsoft-based digital workplace, bringing communication, document management, employee collaboration, business intelligence, deal management, and process automation together within a unified ecosystem. The transformation established a structured technology foundation that enabled Stonegate Commercial Capital to operate with greater visibility, accountability, and efficiency.",

  // "About Our Customer"
  aboutCustomer: "Stonegate Commercial Capital is a US-based commercial real estate firm focused on commercial property and deal activities. As the organization grew, its technology environment needed to evolve alongside the business. Existing tools and processes were no longer providing the structure, visibility, and scalability required to support a growing team and an increasingly active deal pipeline. Cloud Fusion Global was engaged to assess the organization's technology landscape and implement a practical, scalable digital transformation strategy using the Microsoft ecosystem.",

  // "Business Challenge": intro + 8 named challenges (each with its own paragraph) + closing framing
  challenge: "Stonegate's growth was being constrained by disconnected tools, manual processes, and limited operational visibility. Stonegate needed a single, integrated technology ecosystem capable of bringing these capabilities together while remaining cost-effective and scalable.",
  challengePoints: [
    { title: "Fragmented Technology Environment", description: "The organization relied on multiple platforms for email, communication, documents, and business activities, creating a disconnected employee experience." },
    { title: "Unstructured Business Data", description: "Important information was distributed across different platforms without consistent structures, naming conventions, or centralized management." },
    { title: "Over-Reliance on Slack", description: "Communication, task coordination, deal discussions, and follow-ups were heavily dependent on Slack, making it difficult to maintain accountability and maintain a structured record of business activities." },
    { title: "No Centralized Document Management", description: "Business documents were stored across different locations and personal storage areas, making information difficult to organize, find, share, and manage securely." },
    { title: "No Employee Digital Workplace", description: "Employees lacked a centralized portal for accessing company information, resources, announcements, documents, and organizational content." },
    { title: "Limited Performance Visibility", description: "Leadership had limited real-time visibility into employee activity, sales performance, calling activity, and key business KPIs." },
    { title: "No Structured Deal Management", description: "Deal information, contacts, activities, tasks, and follow-ups were managed informally, making pipeline visibility and opportunity tracking difficult." },
    { title: "Manual Outreach & Follow-Up", description: "Email and messaging campaigns were being managed manually, with limited automation, tracking, and structured follow-up processes." }],


  // "Solution Provided": intro line + the 8 sub-headed sections
  solution: "Cloud Fusion Global designed and delivered an integrated Microsoft 365 digital workplace and business management ecosystem, replacing fragmented tools with connected Microsoft technologies.",
  approach: [
    {
      step: "01",
      title: "Microsoft 365 Transformation",
      description: "The existing technology environment was assessed and transitioned toward a Microsoft 365-based ecosystem, establishing a common technology foundation across the organization.",
      bullets: [
        "Email and productivity",
        "Communication and collaboration",
        "Document management",
        "Intranet and employee engagement",
        "Business applications",
        "Analytics and reporting",
        "Process automation"],

    },
    {
      step: "02",
      title: "Microsoft Teams",
      description: "Microsoft Teams was introduced as the central collaboration platform for the organization, reducing dependency on disconnected communication channels and creating a more structured collaboration environment.",
      bullets: [
        "Internal communication",
        "Team collaboration",
        "Meetings",
        "Calendar management",
        "External meetings",
        "Task coordination",
        "Centralized team conversations"],

    },
    {
      step: "03",
      title: "SharePoint Document Management",
      description: "A centralized SharePoint-based Document Management System was implemented to provide a structured environment for business documents.",
      bullets: [
        "Centralized document storage",
        "Structured document organization",
        "Permission management",
        "Version control",
        "Controlled document sharing",
        "Improved document discoverability"],

    },
    {
      step: "04",
      title: "SharePoint Employee Intranet",
      description: "A company-wide SharePoint Intranet was implemented as the organization's digital employee portal, creating a single digital home for employees.",
      bullets: [
        "Company information",
        "Employee resources",
        "Announcements",
        "Policies and procedures",
        "Documents",
        "Internal links",
        "Team information",
        "Organizational communication"],

    },
    {
      step: "05",
      title: "Power Apps Deal Management System",
      description: "A custom Power Apps-based Deal Management System was developed to bring structure to the commercial real estate deal lifecycle, replacing informal deal tracking with a structured business application.",
      bullets: [
        "Deal pipeline management",
        "Kanban-based deal tracking",
        "Contact management",
        "Activity tracking",
        "Task management",
        "Deal-related document handling",
        "Pipeline visibility"],

    },
    {
      step: "06",
      title: "Power BI Business Intelligence",
      description: "A Power BI dashboard was implemented to provide leadership with centralized visibility into business performance. Integration with calling/dialer data further enhanced management visibility into operational activity.",
      bullets: [
        "Key performance indicators",
        "Agent activity",
        "Sales performance",
        "Calling/dialer activity",
        "Business performance trends"],

    },
    {
      step: "07",
      title: "Structured Processes & SOPs",
      description: "Alongside the technology transformation, business processes were reviewed and structured. Standard Operating Procedures were developed to establish greater consistency around how employees use systems, manage information, handle activities, and perform recurring business processes.",
    },
    {
      step: "08",
      title: "Outreach & Campaign Automation",
      description: "Email and messaging workflows were structured to improve the consistency of business outreach and follow-up, reducing reliance on manual follow-up and providing greater consistency across outreach activities.",
      bullets: [
        "Structured campaign workflows",
        "Automated outreach",
        "Follow-up sequences",
        "Response tracking",
        "Improved activity visibility"],

    }],


  // "Key Outcomes": 9 named outcomes, each with its own paragraph
  outcomes: [
    { title: "Unified Digital Workplace", description: "The organization moved toward a centralized Microsoft 365 ecosystem connecting communication, documents, business applications, analytics, and collaboration." },
    { title: "Centralized Information", description: "SharePoint provided a structured environment for managing and accessing organizational documents and resources." },
    { title: "Improved Collaboration", description: "Microsoft Teams provided a unified environment for communication, meetings, collaboration, and task coordination." },
    { title: "Employee Digital Hub", description: "The SharePoint Intranet established a central destination for employees to access company information, resources, and organizational content." },
    { title: "Better Deal Visibility", description: "The Power Apps Deal Management System introduced structured pipeline management and improved visibility into deals, contacts, activities, and tasks." },
    { title: "Real-Time Business Insights", description: "Power BI provided leadership with centralized dashboards and KPI visibility, enabling more informed, data-driven decision making." },
    { title: "More Structured Outreach", description: "Automated campaign and follow-up workflows reduced manual effort and introduced greater consistency into business development activities." },
    { title: "Improved Operational Efficiency", description: "By connecting previously fragmented systems and processes, the transformation reduced operational friction and allowed leadership and employees to spend more time focusing on business development and growth." },
    { title: "Cost-Efficient Technology Strategy", description: "The transformation demonstrated how an integrated Microsoft ecosystem can deliver enterprise-grade collaboration, document management, business applications, analytics, and automation without requiring a large collection of disconnected technology platforms." }],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "Stonegate Commercial Capital's transformation demonstrates how the right technology strategy can turn a fragmented business environment into a connected, data-driven digital workplace. Cloud Fusion Global brought together Microsoft 365, Teams, SharePoint, Power Apps, and Power BI to create an integrated ecosystem covering communication, document management, employee collaboration, deal management, business intelligence, and process automation. Rather than simply implementing individual technologies, the engagement focused on connecting technology with business processes: creating a foundation that supports greater visibility, accountability, productivity, and scalability. The result is a modern digital workplace that enables Stonegate Commercial Capital to spend less time managing operational complexity and more time focusing on its core business and continued growth.",

  // No testimonial in this document
  testimonial: null,

  relatedServices: [],
  relatedSolutions: [],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "Digital Transformation & Microsoft 365 Modernization Case Study: Stonegate Commercial Capital",
    description: "Cloud Fusion Global helped Stonegate Commercial Capital transform a fragmented technology environment into a connected Microsoft 365 digital workplace with Teams, SharePoint, Power Apps, and Power BI.",
  },
};

export default caseStudy;