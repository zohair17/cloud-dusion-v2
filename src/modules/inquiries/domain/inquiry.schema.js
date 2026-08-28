import { rules } from "@/shared/lib/validation";
import { projectTypeIds, budgetRangeIds } from "./inquiry-vocabulary";

/**
 * Inquiry validation rules.
 *
 * Deliberately defined once and shared by both sides of the form: the client
 * component renders these to give instant feedback, and the server action runs
 * the same rules again because a server function is reachable without the UI.
 *
 * @typedef {object} InquiryInput
 * @property {string}  name
 * @property {string}  company
 * @property {string}  email
 * @property {string?} phone
 * @property {string}  country
 * @property {string?} serviceOfInterest  A service slug.
 * @property {string?} projectType
 * @property {string?} budgetRange
 * @property {string}  message
 */
export function buildInquirySchema({ serviceSlugs = [] } = {}) {
  return {
    name: [rules.required("Tell us your name"), rules.maxLength(120)],
    company: [rules.required("Company is required"), rules.maxLength(160)],
    email: [rules.required("Email is required"), rules.email()],
    phone: [rules.maxLength(40)],
    country: [rules.required("Country is required"), rules.maxLength(80)],
    serviceOfInterest: [rules.oneOf(serviceSlugs, "Select a service from the list")],
    projectType: [rules.oneOf(projectTypeIds, "Select a project type from the list")],
    budgetRange: [rules.oneOf(budgetRangeIds, "Select a budget range from the list")],
    message: [rules.required("A short message helps us respond usefully"), rules.minLength(10), rules.maxLength(4000)],
  };
}

/** Fields marked required in the UI. */
/** Only what we cannot reply without: everything else is offered, not demanded. */
export const REQUIRED_FIELDS = Object.freeze(["name", "email"]);
