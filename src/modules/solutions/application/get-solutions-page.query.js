import { solutionRepository } from "../infrastructure/solution.repository";
import { resolveCtas } from "@/shared/domain/cta";

/** Copy for the /solutions index head. Intents become renderable calls to action here. */
export function getSolutionsPage() {
  const page = solutionRepository.getIndexPage();
  return { ...page, ctas: resolveCtas(page.ctas) };
}
