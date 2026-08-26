/**
 * Solution: Records Management System
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "records-management-system",
  title: "Records Management System",
  tagline: "Compliance you can prove, retention you can trust",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/records-management-system.webp",
  summary: "Formal records management on SharePoint and Purview: declaration, retention, legal hold, and defensible disposal aligned to your regulatory obligations.",
  categoryId: "sharepoint-microsoft",
  order: 3,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Organizations face binding retention obligations but manage records with spreadsheets and habit: unable to prove what was kept, what was destroyed, or why.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Retention schedules that exist on paper but not in systems.",
      "Records mixed with working documents, kept forever 'just in case'.",
      "Legal holds applied manually and inconsistently.",
      "Audits and litigation requests consuming weeks of discovery effort.",
    ],
  },

  overview: [
    "CFG's Records Management System operationalizes your retention schedule: records are declared automatically or deliberately, immutability and retention are enforced by the platform, and disposal happens on schedule with documented review, creating a defensible, auditable lifecycle for every record class.",
    "Built on SharePoint and Microsoft Purview Records Management, the system applies file plans, event-based retention, and legal holds across your content estate without requiring users to become records managers.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Codify the file plan",
        description: "Your retention schedule becomes an executable file plan with record classes, triggers, and disposition rules.",
      },
      {
        step: "02",
        title: "Declare",
        description: "Records are declared automatically by classification rules or explicitly by authorized users, locking content against change.",
      },
      {
        step: "03",
        title: "Retain & hold",
        description: "Retention clocks run from creation or business events; legal holds override disposal instantly across the estate.",
      },
      {
        step: "04",
        title: "Dispose defensibly",
        description: "Scheduled disposition reviews approve destruction or transfer, with certificates and full audit trail.",
      },
    ],
  },

  capabilities: [
    "Executable file plans with event-based retention",
    "Automatic and manual record declaration",
    "Immutability and version locking for declared records",
    "Legal hold management",
    "Disposition review workflow with audit certificates",
    "Compliance dashboards and audit reporting",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "AI classification proposing record classes for incoming content",
      "Automated identification of record-worthy content in legacy stores",
    ],
  },

  architecture: null,

  benefits: [
    "Demonstrable, defensible compliance with retention law",
    "Storage and risk reduced by disciplined disposal",
    "Litigation readiness measured in hours, not weeks",
    "Records managed without burdening everyday users",
    "Complete audit trail for regulators and courts",
  ],

  useCases: [
    "Regulatory retention for financial and healthcare records",
    "Contract and corporate record lifecycles",
    "Government and public-sector recordkeeping",
    "Litigation hold and eDiscovery readiness",
  ],

  technologies: [
    "microsoft-purview",
    "sharepoint-online",
    "microsoft-syntex",
    "power-automate",
    "microsoft-365",
  ],

  industries: [
    "financial-services",
    "healthcare",
    "energy",
  ],

  relatedServices: [
    "data-security-governance",
    "sharepoint-solutions",
    "microsoft-syntex",
  ],

  relatedSolutions: [
    "document-management-system",
    "enterprise-content-management",
    "contract-management-system",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "Records Management System",
    description: "Formal records management on SharePoint and Purview: declaration, retention, legal hold, and defensible disposal aligned to your regulatory obligations.",
  },
};

export default solution;
