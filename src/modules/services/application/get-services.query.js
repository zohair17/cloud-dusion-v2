import { serviceRepository } from "../infrastructure/service.repository";
import { toServiceSummary } from "../domain/service.entity";

/** All services as card-sized read models, in catalogue order. */
export function getServices({ limit } = {}) {
  const services = serviceRepository.findAll();
  const scoped = limit ? services.slice(0, limit) : services;
  return scoped.map(toServiceSummary);
}
