import { companyRepository } from "../infrastructure/company.repository";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { getInquiryFormSchema } from "@/modules/inquiries";

/**
 * Read model for /contact: page copy from the company context, form definition
 * from the inquiries context. Two contexts, one page.
 */
export function getContactPage() {
  const page = companyRepository.getContactPage();
  return {
    ...page,
    form: getInquiryFormSchema(),
    seo: createSeoMeta({ ...page.seo, canonicalPath: routes.contact() }),
  };
}
