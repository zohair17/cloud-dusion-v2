import { companyRepository } from "../infrastructure/company.repository";
import { createSeoMeta } from "@/shared/domain/seo";
import { resolveCtas } from "@/shared/domain/cta";
import { routes } from "@/shared/config/routes";

/**
 * Read model for /about.
 *
 * The "Why CFG" list is the same claim the homepage makes, so it is authored
 * once there and composed in here — the about record carries only the heading
 * it gives that list, and overriding it stays a matter of filling `items`.
 */
export function getCompanyProfile() {
  const profile = companyRepository.getProfile();
  const shared = companyRepository.getHomePage().differentiators;

  return {
    ...profile,
    ctas: resolveCtas(profile.ctas),
    differentiators: {
      ...profile.differentiators,
      items: profile.differentiators.items.length ? profile.differentiators.items : shared.items,
    },
    seo: createSeoMeta({ ...profile.seo, canonicalPath: routes.about() }),
  };
}
