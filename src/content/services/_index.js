/**
 * Service registry, the single place a new record is registered.
 * Adding a file without adding it here means it does not exist to the domain.
 */
import agenticAiAutomation from "./agentic-ai-automation";
import generativeAi from "./generative-ai";
import microsoftSyntex from "./microsoft-syntex";
import microsoftCloudSolutions from "./microsoft-cloud-solutions";
import sharepointSolutions from "./sharepoint-solutions";
import powerPlatformSolutions from "./power-platform-solutions";
import dataBusinessIntelligence from "./data-business-intelligence";
import customSoftwareDevelopment from "./custom-software-development";
import saasProductDevelopment from "./saas-product-development";
import mobileAppDevelopment from "./mobile-app-development";
import dataSecurityGovernance from "./data-security-governance";
import itStaffAugmentation from "./it-staff-augmentation";

export const serviceRecords = [
  agenticAiAutomation,
  generativeAi,
  microsoftSyntex,
  microsoftCloudSolutions,
  sharepointSolutions,
  powerPlatformSolutions,
  dataBusinessIntelligence,
  customSoftwareDevelopment,
  saasProductDevelopment,
  mobileAppDevelopment,
  dataSecurityGovernance,
  itStaffAugmentation,
];

export default serviceRecords;
