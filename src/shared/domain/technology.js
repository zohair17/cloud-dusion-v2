import { technologies } from "@/content/taxonomies/technologies";

/**
 * Technology value object + registry.
 *
 * Services, solutions, case studies and industries all reference the Microsoft
 * stack. They store technology *ids* only; the label and layer resolve here so
 * a product rename is a single-record edit.
 */
const registry = new Map(technologies.map((technology) => [technology.id, Object.freeze(technology)]));

export const TECHNOLOGY_LAYER = Object.freeze({
  AI: "ai",
  CLOUD: "cloud",
  WORKPLACE: "workplace",
  APPLICATIONS: "applications",
});

export function resolveTechnology(id) {
  return registry.get(id) ?? Object.freeze({ id, label: id, layer: null, unresolved: true });
}

export function resolveTechnologies(ids = []) {
  return ids.map(resolveTechnology);
}

export function listTechnologiesByLayer(layer) {
  return technologies.filter((technology) => technology.layer === layer);
}
