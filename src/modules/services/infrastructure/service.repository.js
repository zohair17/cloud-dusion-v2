import { serviceRecords } from "@/content/services/_index";
import { servicesPage } from "@/content/services/_page";
import { memoize, indexBySlug, sortByOrder, groupBy } from "@/shared/lib/collection";
import { ContentNotFoundError } from "@/shared/domain/errors";
import { createService } from "../domain/service.entity";
import { listServiceGroups } from "../domain/service-group";

/**
 * Content-backed Service repository.
 *
 * The only place in the application that knows services are authored as local
 * modules. Swapping to a CMS or database means rewriting this file and nothing
 * else, because every consumer depends on the repository interface, not on the
 * content folder.
 */
const load = memoize(() => {
  const services = sortByOrder(serviceRecords.map(createService));
  return { services, index: indexBySlug(services) };
});

export const serviceRepository = {
  findAll() {
    return load().services;
  },

  findBySlug(slug) {
    return load().index.get(slug) ?? null;
  },

  getBySlug(slug) {
    const service = this.findBySlug(slug);
    if (!service) throw new ContentNotFoundError("Service", slug);
    return service;
  },

  findManyBySlugs(slugs = []) {
    const { index } = load();
    return slugs.map((slug) => index.get(slug)).filter(Boolean);
  },

  listSlugs() {
    return load().services.map((service) => service.slug);
  },

  /** Services bucketed into their declared groups, both in declared order. */
  findGrouped() {
    const byGroup = groupBy(load().services, (service) => service.group.id);
    return listServiceGroups().map((group) => ({
      group,
      services: byGroup.get(group.id) ?? [],
    }));
  },

  getIndexPage() {
    return servicesPage;
  },
};
