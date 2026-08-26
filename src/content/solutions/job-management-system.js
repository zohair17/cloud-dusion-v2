/**
 * Solution: Job Management System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "job-management-system",
  title: "Job Management System",
  tagline: "Every job scheduled, tracked, and profitable",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/job-management-system.webp",
  summary: "End-to-end job management for project and field service businesses: quoting, scheduling, execution, costing, and invoicing in one flow.",
  categoryId: "erp",
  order: 3,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Service and project businesses run jobs through quotes in documents, schedules on whiteboards, and costs in spreadsheets, losing margin in the gaps between them.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Quotes disconnected from actual job costs and outcomes.",
      "Scheduling conflicts and idle time from manual planning.",
      "Field updates arriving by phone call and paper.",
      "Invoicing delayed and incomplete because job data is scattered.",
    ],
  },

  overview: [
    "CFG's Job Management System connects the job lifecycle: quotes convert to jobs with budgets attached, jobs are scheduled against team capacity, field crews update progress from mobile, and completed work flows straight to accurate invoices.",
    "Job costing runs continuously, labor, materials, subcontractors against budget, so margin problems surface while they can still be fixed, not at month-end.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Quote & win",
        description: "Structured estimates with cost build-ups convert to jobs and budgets on acceptance.",
      },
      {
        step: "02",
        title: "Schedule",
        description: "Jobs are planned against team capacity, skills, and locations with drag-and-drop adjustments.",
      },
      {
        step: "03",
        title: "Execute in the field",
        description: "Crews receive job packs, capture time, materials, photos, and sign-offs on mobile.",
      },
      {
        step: "04",
        title: "Cost & invoice",
        description: "Actuals accrue against budget in real time; completed jobs invoice with full backup.",
      },
    ],
  },

  capabilities: [
    "Estimating and quote-to-job conversion",
    "Capacity-based scheduling and dispatch",
    "Mobile field execution with offline support",
    "Real-time job costing against budget",
    "Progress and completion invoicing",
    "Job profitability reporting",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Estimate suggestions from historical job outcomes",
      "Schedule optimization across crews and travel",
    ],
  },

  architecture: null,

  benefits: [
    "Quotes grounded in real historical costs",
    "Higher utilization from capacity-based scheduling",
    "Field data captured once, at the source",
    "Margin visible during the job, not after",
    "Invoicing accelerated with complete backup",
  ],

  useCases: [
    "Field service and maintenance operations",
    "Installation and fit-out projects",
    "Facilities and property maintenance",
    "Specialist contracting businesses",
  ],

  technologies: [
    "power-apps",
    "dataverse",
    "power-automate",
    "power-bi",
    "dynamics-365-business-central",
  ],

  industries: [
    "real-estate",
    "energy",
    "transportation",
  ],

  relatedServices: [
    "power-platform-solutions",
    "mobile-app-development",
    "custom-software-development",
  ],

  relatedSolutions: [
    "erp-manufacturing",
    "workflow-automation-platform",
    "tenant-portal",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "Job Management System",
    description: "End-to-end job management for project and field service businesses: quoting, scheduling, execution, costing, and invoicing in one flow.",
  },
};

export default solution;
