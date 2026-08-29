/**
 * Solution: Request Approval System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "request-approval-system",
  title: "Request Approval System",
  tagline: "Approvals in hours, with an audit trail",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/request-approval-system.webp",
  summary: "A structured approval system for requests of every kind, routed by rules, tracked to decision, and auditable end to end.",
  categoryId: "automation",
  order: 2,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Approval requests chase managers through inboxes and chats. Decisions stall, policies apply unevenly, and when auditors ask who approved what, the answer is a search through email.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Approvals delayed for days in overflowing inboxes.",
      "Policy thresholds applied inconsistently across teams.",
      "Requesters blind to status and forced to chase.",
      "Approval evidence scattered when audits arrive."],
  },

  overview: [
    "CFG's Request Approval System standardizes the approval pattern organization-wide: typed request forms, policy-driven routing, delegation and escalation, and decisions captured with reasons: accessible from Teams, web, and mobile.",
    "Every request moves visibly through its chain. Approvers act in one click from where they work; requesters see status without asking; auditors get a complete, timestamped record."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Submit",
        description: "Typed forms capture complete request data with attachments and validation.",
      },
      {
        step: "02",
        title: "Route by policy",
        description: "Amount, category, and role determine the approval chain automatically.",
      },
      {
        step: "03",
        title: "Decide anywhere",
        description: "Approvers act from Teams, email, or mobile, with delegation and escalation covering absence.",
      },
      {
        step: "04",
        title: "Record",
        description: "Decisions, reasons, and timing are logged and reportable for every request.",
      }],
  },

  capabilities: [
    "Configurable request types and forms",
    "Policy-based multi-level routing",
    "Teams, email, and mobile approvals",
    "Delegation, escalation, and out-of-office handling",
    "Complete decision audit trail",
    "Volume and cycle-time reporting"],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Auto-approval recommendations for low-risk requests",
      "Duplicate and anomaly flagging before approval"],
  },

  architecture: null,

  benefits: [
    "Approval cycles measured in hours, not days",
    "Policies enforced consistently by design",
    "Requesters informed without chasing",
    "Audit questions answered in minutes",
    "Manager attention focused on genuine exceptions"],

  useCases: [
    "Purchase and expense approvals",
    "Access and permission requests",
    "Document and content publishing approvals",
    "Travel, leave, and HR requests"],

  technologies: [
    "power-automate",
    "power-apps",
    "microsoft-teams",
    "dataverse",
    "power-bi"],

  industries: [
    "financial-services",
    
    "energy"],

  relatedServices: [
    "power-platform-solutions",
    "sharepoint-solutions"],

  relatedSolutions: [
    "workflow-automation-platform",
    "electronic-contract-generator",
    "intranet-portal"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "Request Approval System",
    description: "A structured approval system for requests of every kind, routed by rules, tracked to decision, and auditable end to end.",
  },
};

export default solution;
