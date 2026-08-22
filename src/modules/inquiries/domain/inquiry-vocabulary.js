/**
 * The inquiry vocabulary.
 *
 * These are not form widget options, they are the terms the business uses to
 * qualify an inquiry. Sales reporting, routing rules and the contact form all
 * read the same list, so a new project type is added once, here.
 */
export const PROJECT_TYPES = Object.freeze([
  { id: "new-ai-initiative", label: "New AI initiative" },
  { id: "microsoft-365-azure", label: "Microsoft 365 / Azure project" },
  { id: "sharepoint", label: "SharePoint implementation or migration" },
  { id: "custom-software", label: "Custom software or product build" },
  { id: "data-analytics", label: "Data & analytics" },
  { id: "managed-services", label: "Managed services / support" },
  { id: "staff-augmentation", label: "Staff augmentation" },
  { id: "other", label: "Other / not sure yet" },
]);

export const BUDGET_RANGES = Object.freeze([
  { id: "under-25k", label: "Under $25,000" },
  { id: "25k-75k", label: "$25,000 - $75,000" },
  { id: "75k-200k", label: "$75,000 - $200,000" },
  { id: "200k-plus", label: "$200,000+" },
  { id: "tbd", label: "To be determined" },
]);

export const projectTypeIds = PROJECT_TYPES.map((type) => type.id);
export const budgetRangeIds = BUDGET_RANGES.map((range) => range.id);
