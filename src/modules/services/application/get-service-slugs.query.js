import { serviceRepository } from "../infrastructure/service.repository";

/** Feeds generateStaticParams and the sitemap. */
export function getServiceSlugs() {
  return serviceRepository.listSlugs();
}
