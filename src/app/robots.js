import { siteConfig } from "@/shared/config/site.config";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
