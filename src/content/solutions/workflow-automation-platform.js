/**
 * Solution: Workflow Automation Platform
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "workflow-automation-platform",
  title: "Workflow Automation Platform",
  tagline: "Your processes, running themselves",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/workflow-automation-platform.webp",
  summary: "An enterprise workflow platform on Power Platform: requests, approvals, casework, and cross-system processes automated with full visibility and audit.",
  categoryId: "automation",
  order: 1,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Enterprise processes run on email, attachments, and reminders. Work stalls invisibly, no one can say where anything is, and every handoff is a chance to drop the ball.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Processes with no visibility into status, bottlenecks, or ownership.",
      "Approvals stalled in inboxes for days at a time.",
      "The same data re-keyed across multiple systems.",
      "No audit trail when questions or disputes arise."],
  },

  overview: [
    "CFG's Workflow Automation Platform gives the organization a common backbone for process automation: structured intake, routing rules, approvals, escalations, integrations, and dashboards: a pattern applied to process after process instead of a one-off build.",
    "Processes move from email to governed flows in weeks: forms capture clean data, rules route work to the right people with deadlines, integrations update downstream systems automatically, and every action is logged."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Capture",
        description: "Structured forms in Teams and web replace email intake with validated, complete data.",
      },
      {
        step: "02",
        title: "Route & approve",
        description: "Rules assign work by role, value, and type, with deadlines, reminders, and escalations.",
      },
      {
        step: "03",
        title: "Integrate",
        description: "Completed steps update ERP, HR, and line-of-business systems without re-keying.",
      },
      {
        step: "04",
        title: "Monitor",
        description: "Dashboards show volumes, cycle times, and bottlenecks across every automated process.",
      }],
  },

  capabilities: [
    "Structured intake forms across web and Teams",
    "Rule-based routing, approvals, and escalation",
    "Cross-system integration and updates",
    "Deadline, reminder, and SLA management",
    "Complete audit trail per case",
    "Process analytics dashboards"],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "AI triage and categorization of incoming requests",
      "Document understanding within process steps",
      "Anomaly detection on cycle times and volumes"],
  },

  architecture: null,

  benefits: [
    "Cycle times cut from days to hours",
    "Full visibility into every process instance",
    "Re-keying and handoff errors eliminated",
    "Audit trails produced automatically",
    "A reusable automation pattern, not one-off scripts"],

  useCases: [
    "Finance approvals: invoices, expenses, purchases",
    "HR processes: onboarding, changes, leave",
    "IT and facilities service requests",
    "Compliance reviews and attestations"],

  technologies: [
    "power-automate",
    "power-apps",
    "dataverse",
    "microsoft-teams",
    "power-bi",
    "ai-builder"],

  industries: [
    "financial-services",
    
    "energy"],

  relatedServices: [
    "power-platform-solutions",
    "agentic-ai-automation"],

  relatedSolutions: [
    "request-approval-system",
    "electronic-contract-generator",
    "b2b-integration"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "Workflow Automation Platform",
    description: "An enterprise workflow platform on Power Platform: requests, approvals, casework, and cross-system processes automated with full visibility and audit.",
  },
};

export default solution;
