import { urlConfig } from "./site.config";

/**
 * Normalises an internal path against the site URL policy.
 * Every internal href in the application must originate here so that a routing
 * change is a one-file change.
 */
export function path(segments = []) {
  const parts = segments.filter(Boolean).join("/");
  const base = parts ? `/${parts}` : "/";
  if (base === "/") return "/";
  return urlConfig.trailingSlash ? `${base}/` : base;
}

export const routes = Object.freeze({
  home: () => path([]),

  services: Object.freeze({
    index: () => path(["services"]),
    detail: (slug) => path(["services", slug]),
  }),

  solutions: Object.freeze({
    index: () => path(["solutions"]),
    detail: (slug) => path(["solutions", slug]),
    category: (categoryId) => `${path(["solutions"])}#${categoryId}`,
  }),

  industries: Object.freeze({
    index: () => path(["industries"]),
    detail: (slug) => path(["industries", slug]),
  }),

  caseStudies: Object.freeze({
    index: () => path(["case-studies"]),
    detail: (slug) => path(["case-studies", slug]),
  }),

  insights: Object.freeze({
    index: () => path(["insights"]),
    detail: (slug) => path(["insights", slug]),
  }),

  about: () => path(["about"]),
  contact: () => path(["contact"]),
});

/** Absolute URL for canonicals, Open Graph and JSON-LD. */
export function absoluteUrl(relativePath, origin) {
  return new URL(relativePath, origin).toString();
}
