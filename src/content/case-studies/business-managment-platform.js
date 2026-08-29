/**
 * Case study: JE Portal: Business Management Platform (Jamal Enterprises)
 *
 * Same doc-based layout as the Hut24 case study: no "Industry" /
 * "Technologies" / "Business gains" header strip and no testimonial.
 * This one has an "Engagement" heading (the engagement type/description)
 * rather than a separate engagement-partner company.
 * Every heading/sub-heading present in the doc is mapped below.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "je-portal-business-management-platform-jamal-enterprises",
  title: "JE Portal: Business Management Platform",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",

  // --- Header info (no Industry/Technologies/Business-gains strip in this doc) ---
  client: "Jamal Enterprises", // "Customer"
  engagement: "Custom Business Management Platform", // "Engagement"
  deliveryPartner: "Cloud Fusion Global", // "Delivery & Technology Partner"
  order: 1,
  status: "published",

  // "Summary"
  summary: "Jamal Enterprises, a multi-location retail and distribution company in Los Angeles, needed a modern digital platform to bring its business operations together and replace fragmented, manual processes. Cloud Fusion Global designed and developed JE Portal, a comprehensive business management platform connecting sales, customers, inventory, purchasing, reporting, and operational management through a unified digital ecosystem. The platform combines mobile applications and a responsive web experience, giving office teams, management, and field sales staff access to the information and tools they need from wherever they work. JE Portal provides the business with real-time operational visibility, streamlined workflows, centralized data, and a scalable foundation for future growth.",

  // "About Our Customer"
  aboutCustomer: "Jamal Enterprises is a multi-location retail and distribution business serving both B2B and B2C customers. With operations spanning multiple locations and business functions, the organization needed a more connected approach to managing customers, sales, inventory, purchasing, and day-to-day operations. Cloud Fusion Global partnered with the organization to transform its operational processes into a centralized digital platform designed around its specific business requirements.",

  // "Business Challenge": intro + closing framing + the challenges list
  challenge: "As the business expanded across multiple locations, its operational processes became increasingly dependent on fragmented systems, manual data entry, spreadsheets, and paper-based processes. The organization needed an integrated platform that could connect its operations, automate repetitive processes, improve data accuracy, and provide real-time business visibility across desktop, tablet, and mobile devices.",
  challengePoints: [
    "Limited real-time visibility across locations",
    "Manual sales and order entry",
    "Inefficient inventory tracking",
    "Stock discrepancies and availability issues",
    "Lengthy order processing and fulfillment cycles",
    "Limited management visibility into business performance",
    "Difficulty accessing inventory and pricing information while working in the field",
    "Disconnected customer, sales, purchasing, and inventory information"],


  // "Solution Provided": intro line + the 7 sub-headed sections
  solution: "Cloud Fusion Global designed and developed JE Portal, a multi-platform business management solution tailored to the organization's retail and distribution operations.",
  approach: [
    {
      step: "01",
      title: "Unified Business Management Platform",
      description: "JE Portal brings key business functions together within one centralized platform, providing the organization with a single source of operational information across its locations.",
      bullets: [
        "Customer Management",
        "Inventory Management",
        "Sales Management",
        "Purchase Orders",
        "Vendor Management",
        "Reporting & Analytics",
        "User and Role Management"],

    },
    {
      step: "02",
      title: "Mobile-First Sales & Operations",
      description: "Mobile applications enable field and sales teams to access important business information while away from their desks, allowing them to interact with customers and process business activities without relying entirely on office-based systems.",
      bullets: [
        "Customer information",
        "Product and inventory lookup",
        "Pricing information",
        "Order creation",
        "Barcode scanning",
        "Operational data access",
        "Offline support for field operations"],

    },
    {
      step: "03",
      title: "Inventory Management",
      description: "The platform provides centralized visibility into inventory across multiple locations, helping the organization improve inventory accuracy while reducing the operational impact of stockouts and overstocking.",
      bullets: [
        "Real-time stock tracking",
        "Multi-location inventory visibility",
        "Stock availability",
        "Reorder point management",
        "Barcode-based inventory operations",
        "Inventory reporting"],

    },
    {
      step: "04",
      title: "Sales & Order Management",
      description: "JE Portal digitizes the sales lifecycle. By bringing these processes into a unified workflow, the platform reduces manual effort and improves order processing efficiency.",
      bullets: [
        "Quotes",
        "Sales orders",
        "Invoices",
        "Cash sales",
        "Recurring billing",
        "Customer transaction history"],

    },
    {
      step: "05",
      title: "Purchasing & Vendor Management",
      description: "The purchasing module provides centralized management of vendors and purchase orders. Teams can manage purchase orders, monitor purchasing activity, and update inventory based on procurement activities.",
    },
    {
      step: "06",
      title: "Business Intelligence & Reporting",
      description: "Management dashboards provide greater visibility into business performance through centralized reporting and analytics, giving management a stronger foundation for data-driven decision-making.",
      bullets: [
        "Sales performance",
        "Customer activity",
        "Product performance",
        "Inventory aging",
        "Location performance",
        "Profitability indicators",
        "Operational KPIs"],

    },
    {
      step: "07",
      title: "Role-Based Access",
      description: "A role-based security model provides users with access according to their responsibilities. The platform supports different user roles for administrators, managers, sales staff, and view-only users, helping protect business information while ensuring employees have access to the tools they need.",
    }],


  // "Key Outcomes"
  outcomes: [
    "Centralized sales, inventory, purchasing, customer, and operational information",
    "Reduced reliance on manual and spreadsheet-based processes",
    "Improved inventory visibility across multiple locations",
    "Faster and more structured order processing",
    "Enabled mobile access for field and sales teams",
    "Improved management visibility through real-time dashboards and reporting",
    "Digitized customer and vendor management",
    "Introduced barcode-enabled inventory operations",
    "Established role-based access across business functions",
    "Created a scalable platform capable of supporting future business expansion",
    "Established a technology foundation for continued automation and digital transformation"],


  metricsNote: "Where validated and approved for public disclosure, CFG can also highlight measurable business improvements such as reduced manual effort, improved inventory accuracy, faster order processing, reduced stockouts, and increased fulfillment performance.",

  // "Conclusion"
  conclusion: "JE Portal transformed Jamal Enterprises' operational environment from a collection of fragmented and manual processes into a connected digital business management platform. By bringing customers, sales, inventory, purchasing, reporting, and mobile operations together, Cloud Fusion Global helped create greater visibility, improve operational efficiency, and provide employees with the information they need to make faster business decisions. More than a software implementation, JE Portal provides Jamal Enterprises with a scalable digital foundation for continued growth, automation, analytics, and operational innovation.",

  // No testimonial in this document
  testimonial: null,

  relatedServices: [],
  relatedSolutions: [],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "JE Portal, Business Management Platform Case Study, Jamal Enterprises",
    description: "Cloud Fusion Global designed and developed JE Portal, a unified business management platform connecting sales, customers, inventory, purchasing, and reporting for Jamal Enterprises.",
  },
};

export default caseStudy;