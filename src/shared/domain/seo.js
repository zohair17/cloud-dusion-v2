import { siteConfig } from "../config/site.config";

/**
 * SeoMeta value object — the per-page metadata contract every aggregate carries.
 * Aggregates declare intent; the metadata builder turns it into a Next.js
 * Metadata object at the delivery layer.
 */
export function createSeoMeta({ title, description, canonicalPath, noIndex = false, keywords = [] }) {
  return Object.freeze({
    title: title ?? siteConfig.name,
    description: description ?? siteConfig.description,
    canonicalPath: canonicalPath ?? "/",
    noIndex,
    keywords,
  });
}

/** Page titles across the site read "<page> | Cloud Fusion Global". */
export function formatPageTitle(title) {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.name;
}
