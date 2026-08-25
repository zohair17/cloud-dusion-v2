import { industryRepository } from "../infrastructure/industry.repository";
import { resolveCtas } from "@/shared/domain/cta";

/** Read model for /industries. Intents become renderable calls to action here. */
export function getIndustriesPage() {
  const page = industryRepository.getIndexPage();
  return { ...page, ctas: resolveCtas(page.ctas) };
}
