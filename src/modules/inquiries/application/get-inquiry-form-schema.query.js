import { PROJECT_TYPES, BUDGET_RANGES } from "../domain/inquiry-vocabulary";
import { REQUIRED_FIELDS } from "../domain/inquiry.schema";
import { getServices } from "@/modules/services";

/**
 * Form definition for the contact page.
 *
 * The service list is not duplicated here: it is read from the services
 * catalogue, so a new service line appears in the form the moment it is added.
 */
export function getInquiryFormSchema() {
  return {
    requiredFields: REQUIRED_FIELDS,
    serviceOptions: getServices().map((service) => ({ id: service.slug, label: service.title })),
    projectTypeOptions: PROJECT_TYPES,
    budgetRangeOptions: BUDGET_RANGES,
    placeholders: {
      serviceOfInterest: "Select a service",
      projectType: "Select a project type",
      budgetRange: "Select a range",
    },
  };
}
