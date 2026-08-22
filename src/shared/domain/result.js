/**
 * Result type used by application-layer use cases that can fail for expected
 * reasons (validation, not found). Exceptions stay reserved for defects.
 */
export function ok(value) {
  return Object.freeze({ ok: true, value, error: null });
}

export function err(error) {
  return Object.freeze({ ok: false, value: null, error });
}

export function isOk(result) {
  return result?.ok === true;
}
