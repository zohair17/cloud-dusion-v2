import { ValidationError } from "../domain/errors";

/**
 * Minimal, dependency-free field validation used by the write side (inquiries)
 * and by the content contract checks. Swap for a schema library without
 * touching call sites: the input is a rule map, the output is an issue list.
 */
export const rules = {
  required: (message = "This field is required") => (value) =>
    value === undefined || value === null || String(value).trim() === "" ? message : null,
  maxLength: (max, message) => (value) =>
    value && String(value).length > max ? message ?? `Must be ${max} characters or fewer` : null,
  minLength: (min, message) => (value) =>
    value && String(value).length < min ? message ?? `Must be at least ${min} characters` : null,
  email: (message = "Enter a valid email address") => (value) =>
    value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value)) ? message : null,
  oneOf: (allowed, message = "Select a valid option") => (value) =>
    value && !allowed.includes(value) ? message : null,
};

export function validate(input, schema) {
  const issues = [];
  for (const [field, fieldRules] of Object.entries(schema)) {
    for (const rule of fieldRules) {
      const message = rule(input[field]);
      if (message) {
        issues.push({ field, message });
        break;
      }
    }
  }
  return issues;
}

export function assertValid(input, schema) {
  const issues = validate(input, schema);
  if (issues.length) throw new ValidationError(issues);
  return input;
}
