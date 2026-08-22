import { serviceGroups } from "@/content/taxonomies/service-groups";
import { InvariantViolationError } from "@/shared/domain/errors";

/**
 * ServiceGroup value object.
 * Groups are a closed vocabulary: a service may only belong to a declared group,
 * and an unknown groupId is a content defect, not a runtime fallback.
 */
const registry = new Map(serviceGroups.map((group) => [group.id, Object.freeze(group)]));

export function resolveServiceGroup(id) {
  const group = registry.get(id);
  if (!group) {
    throw new InvariantViolationError(`Unknown service group: "${id}"`, { id });
  }
  return group;
}

export function listServiceGroups() {
  return [...registry.values()].sort((a, b) => a.order - b.order);
}
