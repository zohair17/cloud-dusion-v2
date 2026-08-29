/**
 * Solution: Tenant Portal
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "tenant-portal",
  title: "Tenant Portal",
  tagline: "Self-service for tenants, fewer calls for your team",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/tenant-portal.webp",
  summary: "A branded portal where tenants raise requests, pay, book, and find answers, connected to your property operations behind the scenes.",
  categoryId: "real-estate",
  order: 5,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Tenant requests arrive by phone and email, get lost in inboxes, and generate repeat calls, while tenants expect the self-service they get everywhere else.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Maintenance requests untracked from report to resolution.",
      "Front-desk and property teams consumed by routine queries.",
      "Documents, leases, statements, notices, delivered ad hoc.",
      "No structured view of tenant satisfaction and service performance."],
  },

  overview: [
    "CFG's Tenant Portal gives occupants one branded place for everything: raising and tracking maintenance requests, accessing documents and statements, booking amenities, and finding building information, on web and mobile.",
    "Behind the portal, requests route to the right teams with SLAs and status updates, documents publish from your systems automatically, and service analytics show where operations excel or lag."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Request",
        description: "Tenants raise categorized requests with photos; routing rules assign the right team with an SLA.",
      },
      {
        step: "02",
        title: "Track",
        description: "Status updates flow to tenants automatically from report to resolution: no chasing calls.",
      },
      {
        step: "03",
        title: "Self-serve",
        description: "Leases, statements, bookings, and building information available around the clock.",
      },
      {
        step: "04",
        title: "Measure",
        description: "Dashboards show volumes, resolution times, and satisfaction across the portfolio.",
      }],
  },

  capabilities: [
    "Maintenance request tracking with SLAs",
    "Document delivery: leases, statements, notices",
    "Amenity and facility booking",
    "Announcements and building communication",
    "Property operations integration",
    "Service performance dashboards"],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "AI assistant answering building and lease questions",
      "Smart categorization and routing of requests"],
  },

  architecture: null,

  benefits: [
    "Routine queries deflected to self-service",
    "Requests resolved faster and visibly",
    "Professional, branded tenant experience",
    "Service performance measured, not guessed",
    "Property teams freed for higher-value work"],

  useCases: [
    "Commercial office tenant services",
    "Residential and build-to-rent communities",
    "Retail center tenant coordination",
    "Industrial park occupier services"],

  technologies: [
    "power-pages",
    "power-apps",
    "dataverse",
    "power-automate",
    "sharepoint-online",
    "power-bi"],

  industries: [
    "real-estate"],

  relatedServices: [
    "power-platform-solutions",
    "custom-software-development",
    "mobile-app-development"],

  relatedSolutions: [
    "property-listing-app",
    "request-approval-system",
    "lease-management-system"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "Tenant Portal",
    description: "A branded portal where tenants raise requests, pay, book, and find answers, connected to your property operations behind the scenes.",
  },
};

export default solution;
