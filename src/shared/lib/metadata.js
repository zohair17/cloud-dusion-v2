import { siteConfig } from "../config/site.config";
import { formatPageTitle } from "../domain/seo";

/**
 * Translates a domain SeoMeta value object into a Next.js Metadata object.
 * Route segments call this from `generateMetadata` and never assemble metadata
 * by hand.
 */
export function buildMetadata(seo) {
  const canonical = new URL(seo.canonicalPath, siteConfig.url).toString();
  const title = formatPageTitle(seo.title);

  return {
    title,
    description: seo.description,
    keywords: seo.keywords?.length ? seo.keywords : undefined,
    alternates: { canonical },
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description: seo.description,
      url: canonical,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
    },
  };
}

/** Metadata defaults applied by the root layout. */
export function buildRootMetadata() {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
  };
}
