/**
 * Case study: Custom SharePoint Intranet for Progressive Leasing (via Nisum Technologies)
 *
 * Every heading/sub-heading from the source PDF is mapped 1:1 below.
 * This PDF's "Solution Provided" section is structured differently from
 * the earlier case studies (two page groups: People Page & Tech Page -
 * each containing several named features), so it uses a `pageFeatures`
 * field instead of the flat `approach` steps used elsewhere.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "custom-sharepoint-intranet-progressive-leasing",
  title: "Custom SharePoint Intranet for Progressive Leasing",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/custom-sharepoint-intranet-progressive-leasing.webp",

  // --- Header strip ---
  sectorLabel: "IT Services and IT Consulting, Software Products", // "Industry"
  industrySlug: "it-services-software-products",
  /* The mark the source document itself carries, lifted out of it rather
     than sourced elsewhere, so the page shows the logo the client signed off. */
  logo: { src: "/asset/case-studies/logos/nisum.png", alt: "Nisum Technologies", width: 635, height: 137 },
  client: "Progressive Leasing", // end client
  partner: "Nisum Technologies", // engaging partner named throughout the PDF
  order: 1,
  status: "published",

  // "Technologies"
  technologies: [
    "sharepoint-online",
    "sharepoint-framework"],


  // "Business gains" (top strip, exact PDF order)
  businessGains: [
    "Reduction in Manual Administration",
    "Enhanced Employee Engagement",
    "Improved Resource Accessibility",
    "Operational Efficiency"],


  // "Summary"
  summary: "Cloud Fusion Global partnered with Nisum Technologies to develop a custom SharePoint intranet solution for their client, Progressive Leasing. The project involved designing two key pages, a People Page and a Tech Page, that transformed manual content management into an automated, user friendly, and interactive digital workplace. By integrating dynamic web parts, custom navigation, and automated workflows, the solution significantly enhanced internal collaboration and streamlined IT operations.",

  // "About Our Customer"
  aboutCustomer: "Nisum Technologies is a leading IT services provider that partners with clients to deliver innovative digital solutions. For their client, Progressive Leasing, Nisum required a modern intranet platform to improve internal communication and resource accessibility. Cloud Fusion Global was engaged to develop custom SharePoint pages that met Progressive Leasing's unique requirements and reflected their brand identity.",

  // "Business Challenge"
  challenge: "Progressive Leasing faced several challenges with their previous intranet setup:",
  challengeNote: "Nisum sought a robust SharePoint solution that could deliver a seamless, integrated digital experience for Progressive Leasing's workforce.",
  challengePoints: [
    { title: "Fragmented Information Access", description: "Information was scattered, making it difficult for employees to quickly find people or tech resources." },
    { title: "Manual Content Management", description: "Updating employee directories, technical updates, and event calendars was labour-intensive and error prone." },
    { title: "Static, Outdated Interfaces", description: "Existing pages lacked interactive features and dynamic content, reducing user engagement." },
    { title: "Inefficient Communication", description: "Lack of centralized tools led to inconsistent dissemination of company news, benefits, and IT policies." },
    { title: "Need for Role-Based Access", description: "Ensuring secure access to sensitive information was critical." }],


  // "Solution Provided": intro + the two custom pages, each with its named features
  solution: "Cloud Fusion Global developed two custom SharePoint pages, a People Page and a Tech Page, with a suite of advanced features.",
  pageFeatures: [
    {
      page: "People Page Features",
      features: [
        { title: "Carousel", bullets: ["Interactive image slider linking to key resources", "Easy image uploads and metadata management via SharePoint library"] },
        { title: "Piper Bot", bullets: ["Integration of an AI bot for quick employee support", "Streamlined bot access through a dedicated web part"] },
        { title: "Calendar", bullets: ["Display of events based on user location and company-wide calendars", "Simple interface to add, update, and view events"] },
        { title: "Frequently Visited", bullets: ["Auto-populated section showing the most accessed sites", "Enhances navigation by highlighting popular resources"] },
        { title: "Perks and Benefits", bullets: ["Showcases links to employee benefits and perks", "Dynamic update via SharePoint list integration"] },
        { title: "Prog People", bullets: ["Custom directory featuring employee profiles with photos, roles, and LinkedIn links", "Supports search and filter functionalities"] },
        { title: "Meet Your People Team", bullets: ["Interactive display of the People Team with drag-and-drop ordering", "Facilitates team introductions and collaboration"] },
        { title: "People Voice", bullets: ["Polls and feedback section to capture employee opinions", "Easy to manage and update through the admin centre"] },
        { title: "Latest News", bullets: ["Aggregates company news with options for news posts and external links", "Automated updates ensure content freshness"] },
        { title: "Image Gallery Management & Video Updates", bullets: ["Displays a gallery of images and videos capturing company events and milestones", "Simplified interface for updating multimedia content"] },
        { title: "Footer & Viva Engage Integration", bullets: ["Custom footer with key navigational links", "Option to reintegrate Viva Engage for enhanced community interaction"] }],

    },
    {
      page: "Tech Page Features",
      features: [
        { title: "Welcome Message", bullets: ["Customizable welcome section to greet visitors", "Easy editing of text and background imagery"] },
        { title: "Our Tech Vision & Mission", bullets: ["Sections to highlight the company's technology goals and strategic direction", "Editable via SharePoint lists for seamless updates"] },
        { title: "Projects We Deliver", bullets: ["Dynamic showcase of ongoing and completed IT projects", "Ability to feature a top story for maximum impact"] },
        { title: "Blogs", bullets: ["Slider format to display blog posts, including dates, titles, and summaries", "User-friendly content creation and update process"] },
        { title: "Policy iFrame Update", bullets: ["Embeds policy documents directly within the page for quick reference", "Ensures regulatory information is readily accessible"] },
        { title: "Testimonials", bullets: ["Section dedicated to employee and client testimonials", "Configurable via SharePoint lists to capture and display feedback"] }],

    }],


  // "Key Outcomes"
  outcomes: [
    "Enhanced Engagement: A centralized, interactive intranet boosted employee connectivity and resource discovery.",
    "Operational Efficiency: Automated workflows reduced manual content updates, cutting administrative overhead.",
    "Real-Time Updates: Integrated with SharePoint libraries and lists, the pages now reflect live data and news.",
    "Scalable Design: The custom pages are adaptable to future needs, supporting additional features and integrations.",
    "Improved User Experience: Dynamic navigation and interactive elements significantly improved overall usability."],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "By partnering with Cloud Fusion Global, Nisum Technologies successfully delivered a custom SharePoint intranet for Progressive Leasing. The new People and Tech Pages have revolutionized internal communication and resource management by providing a centralized, automated, and engaging digital platform. This project not only streamlined administrative tasks but also enhanced overall employee engagement and operational efficiency, setting a new standard for intranet solutions in the financial services sector.",

  // Testimonial block (photo + quote)
  testimonial: {
    quote: "We are very pleased with the operational and technical skills of Cloud Fusion Global. Their team made our projects run smoothly with careful attention to detail. We are satisfied with their work and look forward to working with them again on future projects. Cloud Fusion Global has been a reliable partner, and we trust them to handle any future needs with the same high quality.",
    avatar: "/asset/case-studies/people/abeer-saeed.jpg",
    author: "Abeer Saeed",
    role: "Head of People & Culture at Nisum",
  },

  relatedServices: [
    "sharepoint-solutions",
    "power-platform-solutions",
  ],
  relatedSolutions: [
    "intranet-portal",
  ],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "Custom SharePoint Intranet Case Study: Progressive Leasing (via Nisum Technologies)",
    description: "Cloud Fusion Global built a custom SharePoint intranet, People Page and Tech Page, for Progressive Leasing in partnership with Nisum Technologies.",
  },
};

export default caseStudy;