/**
 * Case study: Power BI Implementation for Evide (via Foylesoft)
 *
 * Every heading/sub-heading from the source PDF is mapped 1:1 below.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "power-bi-implementation-evide-foylesoft",
  title: "Power BI Implementation for Evide",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",

  // --- Header strip ---
  sectorLabel: "Information Technology & Services, Software Products", // "Industry"
  industrySlug: "it-services-software-products",
  client: "Evide", // end client whose data is being reported on
  partner: "Foylesoft", // engaging partner named throughout the PDF
  order: 1,
  status: "published",

  // "Technologies"
  technologies: [
    "power-bi",
    "api-integration",
    "other"],


  // "Business gains" (top strip, exact PDF order)
  businessGains: [
    "10%+ reduction in IT support expenses",
    "80% Faster Reporting",
    "25% Increase in Engagement",
    "20% Cost Savings"],


  // "Summary"
  summary: "Cloud Fusion Global implemented a custom Power BI solution for FoyleSoft, transforming their reporting and analytics. The solution automated data integration, enhanced visualization, and provided real-time insights into program effectiveness. By reducing manual efforts and improving decision-making, Foylesoft has significantly optimized its data management and program reporting for its client, Evide.",

  // "About Our Customer"
  aboutCustomer: "Foylesoft is a leading technology services provider specializing in delivering tailored digital solutions for its clients. One of its key clients, Evide, is a data-driven organization focused on enabling social impact through advanced analytics and reporting solutions. Evide works with various stakeholders to track program effectiveness, measure engagement, and improve decision-making. To enhance Evide's analytics capabilities, Foylesoft partnered with Cloud Fusion Global to implement a scalable and interactive Power BI solution. This collaboration resulted in a customized reporting system that automated analytics, improved operational efficiency, and provided real-time insights into program performance.",

  // "Business Challenge"
  challenge: "Foylesoft faced several challenges in providing an efficient reporting solution for Evide:",
  challengeNote: "To address these challenges, Foylesoft partnered with Cloud Fusion Global to develop a custom Power BI implementation that could automate reporting, provide interactive visualizations, and enhance decision-making.",
  challengePoints: [
    { title: "Manual Data Processing", description: "Their reporting relied on time-consuming, manual data extraction and spreadsheets." },
    { title: "Lack of Real-time Insights", description: "They needed live dashboards to monitor participant data, program completion, and activity engagement." },
    { title: "Inconsistent Reporting Structure", description: "Different programs had fragmented reporting mechanisms, making it difficult to derive unified insights." },
    { title: "Limited Customization", description: "Reports did not allow dynamic filtering for program managers to analyze data based on specific needs." }],


  // "Solution Provided": intro line + the 6 sub-headed groups, each with its own bullets
  solution: "Cloud Fusion Global, through its collaboration with Foylesoft, developed a tailored Power BI dashboard to streamline Evide's reporting needs.",
  approach: [
    {
      step: "01",
      title: "Automated Data Integration",
      bullets: [
        "Connected Power BI to existing datasets and third-Party APIs, eliminating manual data exports.",
        "Enabled real-time synchronization for up-to-date reporting.",
        "Integrated multiple sources of participant and program data into a single structured view."],

    },
    {
      step: "02",
      title: "Advanced Filtering & Customization",
      bullets: [
        "Provided users with the ability to filter reports based on timeframes (weekly, monthly, yearly reports), specific programs or groups, participant demographics (age, gender, ethnicity, etc.), and activity completion status.",
        "Allowed drill-down capabilities for in-depth analysis."],

    },
    {
      step: "03",
      title: "Participant & Program Performance Analytics",
      bullets: [
        "Unique Participant Count: Distinguishing unique participants from multiple registrations.",
        "Program Starters & Completers: Tracking participants who started and completed programs within a given timeframe.",
        "Time-to-Engagement Metrics: Analyzing how long participants take to join activities after registration.",
        "Program Duration Analysis: Average time participants remain engaged in programs."],

    },
    {
      step: "04",
      title: "Attendance & Engagement Tracking",
      bullets: [
        "Activity Attendance Reports: Number of participants attending one-to-one and group sessions.",
        "Session Count & Duration Tracking: Recording the frequency and length of attended sessions.",
        "Engagement Trends: Identifying peak participation periods and drop-off points."],

    },
    {
      step: "05",
      title: "Pre & Post Questionnaire Analysis",
      bullets: [
        "Implemented Pre & Post Questionnaire (Change-Tracking Assessment) to measure program impact.",
        "Visualized improvement trends in participant feedback.",
        "Created comparative analytics between baseline and final survey responses.",
        "Displayed response distributions using bar charts, pie charts, and heatmaps."],

    },
    {
      step: "06",
      title: "Interactive Power BI Dashboards",
      bullets: [
        "Designed visually engaging Power BI dashboards with real-time updates.",
        "Interactive charts and graphs (bar, pie, line charts, heatmaps).",
        "KPI tiles for quick performance snapshots.",
        "Custom reports for different stakeholders."],

    }],


  // "Key Outcomes"
  outcomes: [
    "70% Reduction in Manual Effort - Automated reports eliminated the need for manual data processing.",
    "80% Faster Report Generation - Data analysis time reduced from hours to minutes.",
    "25% Increase in Program Engagement - Data-driven insights helped optimize participation rates.",
    "Improved Decision-Making - Real-time analytics empowered program managers with actionable insights.",
    "Scalability for Future Programs - The Power BI solution is adaptable for additional reporting needs."],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "With Cloud Fusion Global's Power BI solution, Foylesoft now benefits from automated, data-driven reporting that enhances transparency, efficiency, and impact measurement for Evide. By streamlining program analytics, Foylesoft is empowered to provide a scalable, strategic reporting solution to its client, ensuring greater social impact and operational excellence.",

  // Testimonial block (photo + quote)
  testimonial: {
    quote: "At Foylesoft, we were looking for a robust reporting solution to streamline data tracking and enhance program analytics for our client, Evide. Cloud Fusion Global delivered exactly that. Their Power BI implementation automated our reporting, eliminated manual effort, and provided interactive dashboards that enable real-time insights. The team's expertise went beyond implementation: they truly understood our needs and developed a solution that improved our efficiency and decision making. With their help, we have significantly optimized our data management and program reporting. We now have a system that scales with our needs and provides the transparency we always aimed for. A big thank you to Cloud Fusion Global for their dedication and professionalism. They have been an outstanding technology partner in this journey.",
    avatar: "/asset/case-studies/people/yilmaz-saridemir.jpg",
    author: "Yilmaz Saridemir",
    role: "Director at Foylesoft",
  },

  relatedServices: [
    "data-business-intelligence",
  ],
  relatedSolutions: [],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "Power BI Implementation Case Study: Evide (via Foylesoft)",
    description: "Cloud Fusion Global built a custom Power BI reporting and analytics solution for Evide in partnership with Foylesoft, automating data integration and real-time program insights.",
  },
};

export default caseStudy;