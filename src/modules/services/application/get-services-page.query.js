import { serviceRepository } from "../infrastructure/service.repository";

/** Copy for the /services index head. */
export function getServicesPage() {
  return serviceRepository.getIndexPage();
}
