/**
 * Industry registry, the single place a new record is registered.
 * Adding a file without adding it here means it does not exist to the domain.
 */
import financialServices from "./financial-services";
import energy from "./energy";
import technology from "./technology";
import education from "./education";
import realEstate from "./real-estate";
import manufacturing from "./manufacturing";
import insurance from "./insurance";
import retail from "./retail";
import government from "./government";

export const industryRecords = [
  financialServices,
  energy,
  technology,
  education,
  realEstate,
  manufacturing,
  insurance,
  retail,
  government];

export default industryRecords;
