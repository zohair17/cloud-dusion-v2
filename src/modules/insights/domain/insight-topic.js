import { insightTopics } from "@/content/taxonomies/insight-topics";
import { InvariantViolationError } from "@/shared/domain/errors";

/** InsightTopic value object — the closed vocabulary behind the filter chips. */
const registry = new Map(insightTopics.map((topic) => [topic.id, Object.freeze(topic)]));

export function resolveInsightTopic(id) {
  const topic = registry.get(id);
  if (!topic) {
    throw new InvariantViolationError(`Unknown insight topic: "${id}"`, { id });
  }
  return topic;
}

export function listInsightTopics() {
  return [...registry.values()];
}
