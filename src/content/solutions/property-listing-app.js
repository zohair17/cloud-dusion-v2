/**
 * Solution: Property Listing Mobile App
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "property-listing-app",
  title: "Property Listing Mobile App",
  tagline: "Your portfolio in every prospect's pocket",
  /** Glyph id; the component owns the actual icon. */
  icon: undefined,
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/property-listing-app.webp",
  summary: "A branded mobile experience for property search and inquiry: rich listings, maps, media, and lead capture connected to your back office.",
  categoryId: "real-estate",
  order: 3,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Prospects search for space on their phones, but many portfolios are represented only by PDFs and aging web pages, losing leads to platforms that own the customer relationship.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Listings trapped in PDFs and outdated sites.",
      "Third-party portals owning your prospect relationships and data.",
      "No mobile-quality search, media, or inquiry experience.",
      "Leads arriving by phone and email with no tracking."],
  },

  overview: [
    "CFG builds branded property listing apps that present your portfolio the way prospects expect: fast search with map and filters, rich media including floor plans and virtual tours, and instant inquiry that flows straight into your CRM.",
    "The app runs from the same data as your website and back office, so availability is always current, and every lead, view, and favorite becomes data you own."],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Sync the portfolio",
        description: "Listings, availability, media, and pricing sync from your management systems automatically.",
      },
      {
        step: "02",
        title: "Search & explore",
        description: "Prospects filter by location, size, price, and features across map and list views with rich media.",
      },
      {
        step: "03",
        title: "Inquire & book",
        description: "In-app inquiries and viewing requests route instantly to the right agent with full context.",
      },
      {
        step: "04",
        title: "Track & nurture",
        description: "Views, favorites, and inquiries feed your CRM for follow-up and pipeline reporting.",
      }],
  },

  capabilities: [
    "Map and list search with rich filtering",
    "Media galleries, floor plans, and virtual tours",
    "Instant inquiry and viewing scheduling",
    "Saved searches and availability alerts",
    "CRM and back-office integration",
    "iOS and Android from one codebase"],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Natural-language search: 'ground floor retail near the marina'",
      "Personalized recommendations from browsing behaviour"],
  },

  architecture: null,

  benefits: [
    "Direct prospect relationships and owned lead data",
    "Always-current availability across channels",
    "Faster inquiry-to-viewing cycles",
    "A branded experience competitive with portals",
    "Marketing insight from real engagement data"],

  useCases: [
    "Commercial portfolio leasing apps",
    "Residential sales and letting apps",
    "Build-to-rent community leasing",
    "Brokerage listing platforms"],

  technologies: [
    "dotnet-maui",
    "react-native",
    "azure-app-services",
    "azure-sql",
    "azure-openai",
    "microsoft-entra"],

  industries: [
    "real-estate"],

  relatedServices: [
    "mobile-app-development",
    "custom-software-development"],

  relatedSolutions: [
    "tenant-portal",
    "deal-management-system",
    "ai-powered-mobile-apps"],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert"],

  seo: {
    title: "Property Listing Mobile App",
    description: "A branded mobile experience for property search and inquiry: rich listings, maps, media, and lead capture connected to your back office.",
  },
};

export default solution;
