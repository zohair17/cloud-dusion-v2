/**
 * The data-driven engine.
 *
 * Content records are plain data. These helpers turn a flat record array into
 * the indexed, ordered, grouped read models the application layer serves — once
 * per process, not once per request.
 */
export function indexBySlug(records) {
  return new Map(records.map((record) => [record.slug, record]));
}

export function sortByOrder(records) {
  return [...records].sort((a, b) => {
    const delta = (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER);
    return delta !== 0 ? delta : a.title.localeCompare(b.title);
  });
}

export function groupBy(records, keyOf) {
  const groups = new Map();
  for (const record of records) {
    const key = keyOf(record);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(record);
  }
  return groups;
}

export function pickBySlugs(index, slugs = []) {
  return slugs.map((slug) => index.get(slug)).filter(Boolean);
}

/** Lazily computes a value once and reuses it for the lifetime of the process. */
export function memoize(factory) {
  let computed = false;
  let value;
  return () => {
    if (!computed) {
      value = factory();
      computed = true;
    }
    return value;
  };
}
