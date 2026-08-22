/**
 * Services bounded context — public API.
 *
 * Other modules and the delivery layer import from here and from nowhere else
 * inside this folder. The barrel is the contract; the internals are free to change.
 */
export { getServices } from "./application/get-services.query";
export { getGroupedServices } from "./application/get-grouped-services.query";
export { getServiceDetail } from "./application/get-service-detail.query";
export { getServiceSlugs } from "./application/get-service-slugs.query";
export { getServicesPage } from "./application/get-services-page.query";
export { getServiceSummaries } from "./application/get-service-summaries.query";
export { listServiceGroups } from "./domain/service-group";
