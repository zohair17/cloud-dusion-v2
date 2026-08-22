import { routes } from "../config/routes";

/**
 * CallToAction value object.
 *
 * Conversion paths are a business concern, so the vocabulary lives in the domain
 * rather than being retyped in each template. Content records store an *intent*;
 * the label, destination and emphasis resolve here, which is why renaming a
 * button across the whole site is a one-line change.
 */
export const CTA_INTENT = Object.freeze({
  TALK_TO_EXPERT: "talk-to-expert",
  REQUEST_PROPOSAL: "request-proposal",
  DISCOVERY_SESSION: "discovery-session",
  REQUEST_DEMO: "request-demo",
  DISCUSS_REQUIREMENTS: "discuss-requirements",
  BOOK_CONSULTATION: "book-consultation",
  EXPLORE_SOLUTIONS: "explore-solutions",
});

const CTA_REGISTRY = Object.freeze({
  [CTA_INTENT.TALK_TO_EXPERT]: { label: "Talk to an Expert", href: routes.contact(), variant: "primary" },
  [CTA_INTENT.REQUEST_PROPOSAL]: { label: "Request a Proposal", href: routes.contact(), variant: "secondary" },
  [CTA_INTENT.DISCOVERY_SESSION]: {
    label: "Schedule a Discovery Session",
    href: routes.contact(),
    variant: "secondary",
  },
  [CTA_INTENT.REQUEST_DEMO]: { label: "Request a Demo", href: routes.contact(), variant: "primary" },
  [CTA_INTENT.DISCUSS_REQUIREMENTS]: {
    label: "Discuss Your Requirements",
    href: routes.contact(),
    variant: "primary",
  },
  [CTA_INTENT.BOOK_CONSULTATION]: { label: "Book a Free Consultation", href: routes.contact(), variant: "primary" },
  [CTA_INTENT.EXPLORE_SOLUTIONS]: {
    label: "Explore Our Solutions",
    href: routes.solutions.index(),
    variant: "secondary",
  },
});

export function createCta({ intent, label, href, variant = "primary" }) {
  return Object.freeze({ intent, label, href, variant });
}

/**
 * Resolves an intent into a renderable call to action.
 * A record may override the label or emphasis without inventing a new intent.
 */
export function resolveCta(intent, overrides = {}) {
  const base = CTA_REGISTRY[intent];
  if (!base) return createCta({ intent, label: intent, href: routes.contact() });
  return createCta({ intent, ...base, ...overrides });
}

export function resolveCtas(intents = []) {
  return intents.map((intent) =>
    typeof intent === "string" ? resolveCta(intent) : resolveCta(intent.intent, intent)
  );
}
