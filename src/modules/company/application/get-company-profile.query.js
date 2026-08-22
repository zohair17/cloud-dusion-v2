import { companyRepository } from "../infrastructure/company.repository";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";

/** Read model for /about. */
export function getCompanyProfile() {
  const profile = companyRepository.getProfile();
  return {
    ...profile,
    seo: createSeoMeta({ ...profile.seo, canonicalPath: routes.about() }),
  };
}
