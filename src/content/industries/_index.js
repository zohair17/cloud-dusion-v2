/**
 * Industry registry — the single place a new record is registered.
 * Adding a file without adding it here means it does not exist to the domain.
 */
import healthcare from "./healthcare";
import financialServices from "./financial-services";
import energy from "./energy";
import telecom from "./telecom";
import technology from "./technology";
import education from "./education";
import realEstate from "./real-estate";
import transportation from "./transportation";
import nonProfit from "./non-profit";

export const industryRecords = [
  healthcare,
  financialServices,
  energy,
  telecom,
  technology,
  education,
  realEstate,
  transportation,
  nonProfit,
];

export default industryRecords;
