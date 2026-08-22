/**
 * Minimal class-name joiner. Falsy values drop out, so conditional classes read
 * as plain expressions without pulling in a dependency.
 */
export function cn(...values) {
  return values.filter(Boolean).join(" ");
}
