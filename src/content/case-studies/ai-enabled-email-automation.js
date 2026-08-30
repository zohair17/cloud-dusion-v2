/**
 * Case study: AI-Enabled Email Automation (Credit Union of Texas)
 *
 * Every heading/sub-heading from the source PDF is mapped 1:1 below.
 * Fields not present in the original shared schema (technologies list,
 * business gains, summary, about-customer, conclusion, testimonial)
 * are included as extra fields: drop or rename any your UI doesn't need.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "ai-enabled-email-automation-credit-union-of-texas",
  title: "AI-Enabled Email Automation",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1400&q=80",

  // --- Header strip ---
  sectorLabel: "Financial Services", // "Industry"
  industrySlug: "financial-services",
  client: "Credit Union of Texas",
  order: 1,
  status: "published",

  // "Technologies" (as listed in the PDF, in order)
  technologies: [
    "power-automate",
    "microsoft-graph",
    "microsoft-outlook-calendar",
    "ai-builder",
    "json",
    "http-actions",
    "dataverse"],


  // "Business gains" (top strip, exact PDF order)
  businessGains: [
    "Reduction in Manual Oversight",
    "Real-Time Scheduling",
    "Workflow Efficiency",
    "Cost Savings"],


  // "Summary"
  summary: "Cloud Fusion Global developed a robust Power Automate solution for Charles Penn, Project Manager at Credit Union of Texas. By integrating Microsoft Graph API, Microsoft Outlook Calendar, AI Builder, and Dataverse, CFG created an automated workflow that retrieves real-time calendar data and sends timely email auto-responses. This solution dramatically improved scheduling accuracy and streamlined communication for Charles' operations.",

  // "About Our Customer"
  aboutCustomer: "Charles Penn is a Project Manager at Credit Union of Texas and the primary decision-maker for this initiative. Recognizing the inefficiencies in his manual email response process, Charles partnered with Cloud Fusion Global to design a solution that automates data retrieval and email replies, thereby reducing manual effort and ensuring real-time communication.",

  // "Business Challenge"
  challenge: "Charles faced several challenges with his manual email response system:",
  challengePoints: [
    { title: "Manual Oversight", description: "The previous process required constant manual intervention, leading to inefficiencies." },
    { title: "Delayed Auto-Replies", description: "The reliance on manual data extraction from Microsoft Outlook Calendar caused delays in sending responses." },
    { title: "Inefficient Data Parsing", description: "Issues with JSON parsing and HTTP actions resulted in inconsistent data integration." },
    { title: "Complex Integration Needs", description: "Combining real-time data from Microsoft Graph API with Microsoft Outlook Calendar, AI Builder, and Dataverse was cumbersome, affecting overall workflow performance." }],


  // "Solution Provided" (intro line + the 4 sub-headed groups, each with its bullets)
  solution: "Cloud Fusion Global developed a comprehensive Power Automate workflow that seamlessly integrates key Microsoft technologies to automate email responses.",
  approach: [
    {
      step: "01",
      title: "Automated Data Integration",
      description: "Connected Power Automate with Microsoft Graph API, Microsoft Outlook Calendar, AI Builder, and Dataverse to retrieve live calendar data automatically. Configured automatic data refresh schedules to ensure up-to-date reporting.",
    },
    {
      step: "02",
      title: "Automated Email Response Setup",
      description: "Developed a workflow that sends timely auto-replies based on real-time calendar availability, eliminating the need for manual report creation in Excel and PowerPoint. Established robust error-handling and logging mechanisms for reliable operation.",
    },
    {
      step: "03",
      title: "Workflow Optimization",
      description: "Refined the process to reduce redundancy and enhance overall efficiency, ensuring that auto-replies are generated promptly.",
    },
    {
      step: "04",
      title: "Collaboration & Feedback",
      description: "Worked closely with Charles to align the solution with his specific requirements, ensuring the system meets operational needs and provides actionable insights.",
    }],


  // "Key Outcomes"
  outcomes: [
    "90% Reduction in Manual Oversight – Automated workflow minimizes manual intervention.",
    "Rapid Auto-Reply Generation – Auto-responses are now sent in real time, reducing delays.",
    "Enhanced Data Accuracy – Improved integration ensures reliable calendar data retrieval.",
    "Streamlined Workflow – The optimized process is scalable and efficient for future enhancements."],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "By developing a robust Power Automate solution, Cloud Fusion Global enabled Charles Penn to transform his email response process into a fully automated, real-time system. The integration of Microsoft Graph API, Microsoft Outlook Calendar, AI Builder, and Dataverse not only improved scheduling and data accuracy but also significantly enhanced overall operational efficiency. This personalized solution has empowered Charles to focus on strategic initiatives while maintaining seamless and automated communication.",

  // Testimonial block (photo + quote)
  testimonial: {
    quote: "Cloud Fusion Global did an outstanding job troubleshooting and optimizing my automation workflow. Their expertise with Microsoft integrations was evident from the start. They quickly identified and resolved the issues, offering valuable insights to improve the overall efficiency. Highly recommended for any automation and workflow solutions.",
    avatar: "/asset/case-studies/people/charles-penn.jpg",
    author: "Charles Penn",
    role: "Project Manager at Credit Union of Texas",
  },

  relatedServices: [
    "power-platform-solutions",
    "agentic-ai-automation",
  ],
  relatedSolutions: [
    "workflow-automation-platform",
  ],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "AI-Enabled Email Automation Case Study: Credit Union of Texas",
    description: "Cloud Fusion Global built a Power Automate workflow integrating Microsoft Graph API, Outlook Calendar, AI Builder, and Dataverse to automate real-time email responses for Credit Union of Texas.",
  },
};

export default caseStudy;