/**
 * Industry: Education
 *
 * Section eyebrows and headings are the same on all nine industries, so they
 * live in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "education",
  title: "Education",
  tagline: "Modern digital campuses, safely governed",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/education.webp",
  summary: "Collaboration, automation, and responsible AI for schools, colleges, and universities: on the Microsoft platforms education already runs on.",
  order: 6,
  inFooter: true,
  status: "published",

  intro: [
    "Educational institutions balance three pressures: enriching learning experiences, shrinking administrative budgets, and governing technology responsibly for young and diverse users. The Microsoft education stack (often already licensed) holds far more capability than most institutions use. CFG helps unlock it.",
  ],

  challenges: [
    "Administrative processes (admissions, approvals, records) still paper-driven.",
    "Departmental information scattered and hard for students and staff to find.",
    "Tight budgets demanding more from existing licensing.",
    "Responsible AI governance for students and staff still undefined.",
    "Records retention and privacy obligations across student data.",
  ],

  aiImpact: [
    "AI processing digitizes admissions, records, and administrative document flows.",
    "Grounded assistants answer student and staff questions from institutional policies.",
    "AI governance frameworks enable safe, policy-aligned adoption in academic settings.",
    "Analytics surface engagement and progression signals earlier.",
  ],

  microsoftEnablement: [
    "Microsoft 365 Education and Teams underpin communication, teaching, and collaboration.",
    "SharePoint intranets give campuses one governed front door.",
    "Power Platform automates administrative workflows within existing licensing.",
    "Purview governs student records and privacy compliance.",
  ],

  outcomes: [
    "Administrative effort reduced within existing budgets",
    "One findable front door for campus information",
    "Student data governed to privacy obligations",
    "AI adopted with clear institutional guardrails",
    "Staff time shifted from process to people",
  ],

  solutions: [
    "intranet-portal",
    "workflow-automation-platform",
    "request-approval-system",
    "ai-chatbot-solutions",
    "records-management-system",
  ],

  relatedServices: [
    "microsoft-cloud-solutions",
    "sharepoint-solutions",
    "power-platform-solutions",
    "data-security-governance",
  ],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Education Industry Solutions",
    description: "Collaboration, automation, and responsible AI for schools, colleges, and universities: on the Microsoft platforms education already runs on.",
  },
};

export default industry;
