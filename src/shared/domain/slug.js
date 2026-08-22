import { InvariantViolationError } from "./errors";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Slug value object.
 * A slug is the stable public identity of a content aggregate — it appears in
 * the URL, so changing one is a breaking change, not an edit.
 */
export function createSlug(value) {
  if (typeof value !== "string" || !SLUG_PATTERN.test(value)) {
    throw new InvariantViolationError(`Invalid slug: "${value}"`, { value });
  }
  return value;
}

export function isSlug(value) {
  return typeof value === "string" && SLUG_PATTERN.test(value);
}

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
