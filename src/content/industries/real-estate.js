/**
 * Industry: Real Estate
 *
 * Section eyebrows and headings are the same on all nine industries, so they
 * live in `_detail.js`; only what is true of this industry is authored here.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "real-estate",
  title: "Real Estate",
  tagline: "From documents and deals to data and decisions",
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/real-estate.webp",
  summary: "Purpose-built lease, deal, and portfolio solutions: CFG's deepest industry practice, where AI meets property operations.",
  order: 7,
  inFooter: true,
  status: "published",

  intro: [
    "Real estate is a document business wearing an asset business's clothes: leases, deals, diligence, and portfolio decisions all run on paper trails and institutional memory. CFG's deepest industry practice turns that paper into structured, intelligent systems (lease abstraction, deal pipelines, tenant services, and portfolio analytics built specifically for property organizations)."],

  challenges: [
    "Lease terms, dates, and obligations buried in unstructured documents.",
    "Deal pipelines run through inboxes and personal spreadsheets.",
    "Portfolio reporting assembled manually from property system exports.",
    "Tenant service expectations rising while operating costs are squeezed.",
    "Institutional knowledge concentrated in a few long-tenured people."],

  aiImpact: [
    "AI lease abstraction extracts terms, dates, and obligations with analyst verification, at a fraction of manual cost.",
    "Deal document AI summarizes offering packages and diligence rooms.",
    "Natural-language portfolio queries answer leadership questions instantly.",
    "AI assistants serve tenant and broker inquiries around the clock."],

  microsoftEnablement: [
    "SharePoint provides the governed document backbone for leases, deals, and assets.",
    "Power Platform digitizes approvals, deal gates, and tenant requests rapidly.",
    "Power BI unifies portfolio performance into live dashboards.",
    "Azure hosts the data pipelines and AI models behind it all."],

  outcomes: [
    "No missed critical dates across the lease portfolio",
    "Deal pipelines visible and governed end to end",
    "Portfolio questions answered in seconds",
    "Tenant service delivered at lower cost-to-serve",
    "Property knowledge institutionalized in systems"],

  solutions: [
    "lease-management-system",
    "deal-management-system",
    "reit-analytics-dashboard",
    "tenant-portal",
    "property-listing-app"],

  relatedServices: [
    "agentic-ai-automation",
    "microsoft-syntex",
    "custom-software-development",
    "data-business-intelligence"],

  relatedCaseStudies: [],

  ctas: ["industry-expert"],

  seo: {
    title: "Real Estate Industry Solutions",
    description: "Purpose-built lease, deal, and portfolio solutions: CFG's deepest industry practice, where AI meets property operations.",
  },
};

export default industry;
