/**
 * Single source of truth for organisation-level facts.
 * Nothing in the codebase should hard-code the company name, URL or email.
 */
export const siteConfig = Object.freeze({
  name: "Cloud Fusion Global",
  shortName: "CFG",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cfgv2.vercel.app",
  email: "hello@cloudfusionglobal.com",
  /** Shown on the hero contact bar. */
  contactEmail: "Business@cloudfusionglobal.com",
  phone: "+61 490 789 038",
  social: Object.freeze([
    { id: "facebook", label: "Facebook", href: "https://facebook.com/cloudfusionglobal" },
    { id: "instagram", label: "Instagram", href: "https://instagram.com/cloudfusionglobal" },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/company/cloudfusionglobal" },
  ]),
  locale: "en",
  tagline: "AI-Powered Microsoft Solutions & Digital Transformation",
  headline: "Transforming Enterprises with AI-Powered Microsoft Solutions",
  description:
    "Cloud Fusion Global helps organizations modernize operations, automate complex workflows, unlock the power of their data, and build intelligent business applications through Artificial Intelligence, Microsoft technologies, and enterprise-grade software solutions.",
  shortDescription:
    "Cloud Fusion Global helps enterprises transform their operations through AI-powered Microsoft solutions.",
  delivery: "Global delivery capability",
  responsePromise: "We reply to every serious inquiry",
  copyrightStartYear: 2026,
});

/** URL policy — the deployed site canonicalises every route with a trailing slash. */
export const urlConfig = Object.freeze({
  trailingSlash: true,
});
