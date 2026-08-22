import { serviceRepository } from "../infrastructure/service.repository";
import { toServiceSummary } from "../domain/service.entity";

/** Cross-context lookup: resolve a list of service slugs into card read models. */
export function getServiceSummaries(slugs = []) {
  return serviceRepository.findManyBySlugs(slugs).map(toServiceSummary);
}
