/**
 * Industry: Non-Profit
 *
 * Section eyebrows and headings are the same on all nine industries, so they
 * live in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "non-profit",
  title: "Non-Profit",
  tagline: "More mission, less administration",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/non-profit.webp",
  summary: "Affordable automation, governed collaboration, and donor transparency for organizations where every hour and dollar must serve the mission.",
  order: 9,
  inFooter: false,
  status: "published",

  intro: [
    "Non-profits carry enterprise-grade obligations (governance, donor reporting, program compliance) on a fraction of enterprise budgets. The Microsoft non-profit programs make serious technology affordable; CFG helps organizations turn that access into working systems that multiply staff capacity.",
  ],

  challenges: [
    "Small teams stretched across programs, fundraising, and administration.",
    "Donor and grant reporting assembled manually each cycle.",
    "Volunteer and program coordination running on spreadsheets.",
    "Governance and records obligations without dedicated staff.",
    "Limited budgets demanding maximum value from every tool.",
  ],

  aiImpact: [
    "AI drafting accelerates grant applications, reports, and communications.",
    "Document processing organizes program and compliance records automatically.",
    "Assistants answer policy and program questions for staff and volunteers.",
    "Analytics show program outcomes and funder impact clearly.",
  ],

  microsoftEnablement: [
    "Microsoft 365 non-profit licensing delivers enterprise tools at accessible cost.",
    "SharePoint governs documents, records, and board materials.",
    "Power Platform automates intake, approvals, and volunteer coordination.",
    "Power BI turns program data into funder-ready impact reporting.",
  ],

  outcomes: [
    "Staff hours redirected from administration to mission",
    "Donor and grant reporting produced from live data",
    "Governance obligations met without dedicated overhead",
    "Volunteers coordinated through self-service tools",
    "Technology budgets stretched to their full value",
  ],

  solutions: [
    "intranet-portal",
    "workflow-automation-platform",
    "request-approval-system",
    "document-management-system",
    "records-management-system",
  ],

  relatedServices: [
    "microsoft-cloud-solutions",
    "sharepoint-solutions",
    "power-platform-solutions",
    "data-business-intelligence",
  ],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Non-Profit Industry Solutions",
    description: "Affordable automation, governed collaboration, and donor transparency for organizations where every hour and dollar must serve the mission.",
  },
};

export default industry;
