import { serviceRepository } from "../infrastructure/service.repository";
import { resolveCtas } from "@/shared/domain/cta";

/** Copy for the /services index head. Intents become renderable calls to action here. */
export function getServicesPage() {
  const page = serviceRepository.getIndexPage();
  return { ...page, ctas: resolveCtas(page.ctas) };
}
