import { serviceRepository } from "../infrastructure/service.repository";
import { toServiceSummary } from "../domain/service.entity";

/** Read model for the /services index: groups in order, each with its services. */
export function getGroupedServices() {
  return serviceRepository.findGrouped().map(({ group, services }) => ({
    id: group.id,
    title: group.title,
    description: group.description,
    services: services.map(toServiceSummary),
  }));
}
