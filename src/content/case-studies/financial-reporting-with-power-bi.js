/**
 * Case study: Automating Financial Reporting with Power BI for Alpha Bank
 *
 * Every heading/sub-heading from the source PDF is mapped 1:1 below.
 * Fields not present in the original shared schema (technologies list,
 * business gains, summary, about-customer, conclusion, testimonial)
 * are included as extra fields: drop or rename any your UI doesn't need.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "automating-financial-reporting-power-bi-alpha-bank",
  title: "Automating Financial Reporting with Power BI for Alpha Bank",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",

  // --- Header strip ---
  sectorLabel: "Banking, Financial Services", // "Industry"
  industrySlug: "banking-financial-services",
  client: "Alpha Bank",
  order: 1,
  status: "published",

  // "Technologies" (as listed in the PDF, in order)
  technologies: [
    "power-bi",
    "bloomberg-integration",
    "excel"],


  // "Business gains" (top strip, exact PDF order)
  businessGains: [
    "90%+ reduction in Manual Effort",
    "80% Faster Reporting Generation",
    "100% Accuracy Improvement"],


  // "Summary"
  summary: "Cloud Fusion Global implemented a customized Power BI solution for Alpha Bank, completely transforming their financial reporting process. The solution automated data extraction from Bloomberg and Excel, reduced manual reporting effort, and provided real-time, interactive financial insights. This implementation allowed Eleni Syraki, Asset & Liability Manager, to deliver dynamic and accurate reports to decision-makers with minimal effort.",

  // "About Our Customer"
  aboutCustomer: "Alpha Bank is a leading financial institution providing a range of banking and investment services. Eleni Syraki, Asset & Liability Manager at Alpha Bank, was responsible for preparing and presenting financial reports for upper management on a daily and weekly basis. Her reports were manually created in Excel and PowerPoint, requiring time-intensive data extraction from Bloomberg and manual formatting. Eleni partnered with Cloud Fusion Global to modernize this process with an automated Power BI reporting system that reduced inefficiencies and improved decision-making.",

  // "Business Challenge"
  challenge: "Eleni faced significant challenges in financial reporting: manual compilation of financial data in Excel and PowerPoint before sharing it with upper management, hours spent daily extracting, formatting, and updating reports, increased risk of errors from manual handling, static snapshots instead of real-time insights, and reports that had to be manually emailed to decision-makers, delaying access to critical financial information. To eliminate these inefficiencies, Eleni partnered with Cloud Fusion Global to implement an automated Power BI solution.",
  challengePoints: [
    { title: "Manual Report Creation", description: "She manually compiled financial data in Excel and PowerPoint before sharing it with upper management." },
    { title: "Time-Consuming Process", description: "Hours were spent daily extracting, formatting, and updating reports." },
    { title: "Data Inaccuracy Risks", description: "Manual handling increased the likelihood of errors in calculations and data representation." },
    { title: "Lack of Real-Time Insights", description: "Reports provided static snapshots of financial data rather than real-time updates." },
    { title: "Manual Report Distribution", description: "Reports had to be manually emailed to decision-makers, delaying access to critical financial information." }],


  // "Solution Provided" (intro line + the 5 sub-headed groups, each with its bullets)
  solution: "Cloud Fusion Global developed a fully automated, interactive financial reporting system using Power BI, integrated with Bloomberg and Excel.",
  approach: [
    {
      step: "01",
      title: "Online Power BI Dashboards",
      description: "Transformed static Excel/PowerPoint reports into interactive, real-time dashboards. Provided centralized access for decision-makers across Alpha Bank.",
    },
    {
      step: "02",
      title: "Automated Data Integration",
      description: "Seamlessly connected Power BI with Bloomberg and Excel for live data updates. Eliminated the need for manual data extraction and entry. Configured automatic refresh schedules, ensuring reports always reflect the latest financial metrics.",
    },
    {
      step: "03",
      title: "Dynamic & Visual Reporting",
      description: "Created customized financial dashboards with bar charts, trend graphs, KPIs, and interactive filtering. Enabled drill-down analysis for detailed financial performance tracking. Provided user-friendly navigation, enabling Eleni to customize reports effortlessly.",
    },
    {
      step: "04",
      title: "Instant Report Sharing & Distribution",
      description: "Eliminated manual email distribution by providing secure online access to reports. Decision-makers could access reports anytime from desktop, tablet, or mobile devices.",
    },
    {
      step: "05",
      title: "Custom Filtering & Advanced Analytics",
      description: "Allowed users to filter data by period, financial metrics, and risk categories. Integrated forecasting tools and variance analysis for improved financial planning.",
    }],


  // "Key Outcomes"
  outcomes: [
    "80% Faster Report Generation - Data analysis time reduced from hours to minutes.",
    "90% Reduction in Manual Effort - Eliminated the need for manual report preparation.",
    "Real-Time Reporting - Financial reports update instantly, eliminating data lag.",
    "100% Accuracy Improvement - Automated data handling removed human errors.",
    "Enhanced Report Accessibility - Upper management receives reports instantly via an online Power BI dashboard.",
    "Scalability & Future Expansion - The solution can be extended to other financial reporting needs."],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "With Cloud Fusion Global's Power BI solution, Eleni successfully automated its financial reporting process. Eleni Syraki can now focus on financial analysis and decision-making instead of spending hours on manual report creation. The transition to real-time, automated reporting has enhanced transparency, accuracy, and operational efficiency, ensuring a more streamlined and impactful financial reporting process.",

  // Testimonial block (photo + quote)
  testimonial: {
    quote: "I had the pleasure of working with Cloud Fusion Global on several projects, including Power BI dashboards and other IT-related tasks, and I couldn't be more satisfied with their services. Their team demonstrated exceptional technical expertise, professionalism, and a keen understanding of our requirements. They delivered high-quality solutions on time and were always responsive to our needs. The Power BI dashboards they developed provided us with valuable insights and significantly improved our data visualization and decision-making processes. I highly recommend Cloud Fusion Global for their outstanding IT services and look forward to collaborating with them again in the future.",
    author: "Eleni Syraki",
    role: "Asset & Liability Manager at Alpha Bank",
  },

  relatedServices: [],
  relatedSolutions: [],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "Automating Financial Reporting with Power BI Case Study: Alpha Bank",
    description: "Cloud Fusion Global built a Power BI solution integrated with Bloomberg and Excel to automate real-time financial reporting for Alpha Bank.",
  },
};

export default caseStudy;