/**
 * Solution registry, the single place a new record is registered.
 * Adding a file without adding it here means it does not exist to the domain.
 */
import aiDocumentManagement from "./ai-document-management";
import aiDocumentGenerator from "./ai-document-generator";
import aiChatbotSolutions from "./ai-chatbot-solutions";
import selfHostedEnterpriseAi from "./self-hosted-enterprise-ai";
import documentManagementSystem from "./document-management-system";
import enterpriseContentManagement from "./enterprise-content-management";
import recordsManagementSystem from "./records-management-system";
import contractManagementSystem from "./contract-management-system";
import intranetPortal from "./intranet-portal";
import sharepointMigration from "./sharepoint-migration";
import sharepointVersionUpgrade from "./sharepoint-version-upgrade";
import tenantToTenantMigration from "./tenant-to-tenant-migration";
import selfHostedSharepointSites from "./self-hosted-sharepoint-sites";
import leaseManagementSystem from "./lease-management-system";
import dealManagementSystem from "./deal-management-system";
import propertyListingApp from "./property-listing-app";
import reitAnalyticsDashboard from "./reit-analytics-dashboard";
import tenantPortal from "./tenant-portal";
import erpManufacturing from "./erp-manufacturing";
import erpWholesaleDistribution from "./erp-wholesale-distribution";
import jobManagementSystem from "./job-management-system";
import smartDeviceMobileApp from "./smart-device-mobile-app";
import aiPoweredMobileApps from "./ai-powered-mobile-apps";
import workflowAutomationPlatform from "./workflow-automation-platform";
import requestApprovalSystem from "./request-approval-system";
import electronicContractGenerator from "./electronic-contract-generator";
import b2bIntegration from "./b2b-integration";

export const solutionRecords = [
  aiDocumentManagement,
  aiDocumentGenerator,
  aiChatbotSolutions,
  selfHostedEnterpriseAi,
  documentManagementSystem,
  enterpriseContentManagement,
  recordsManagementSystem,
  contractManagementSystem,
  intranetPortal,
  sharepointMigration,
  sharepointVersionUpgrade,
  tenantToTenantMigration,
  selfHostedSharepointSites,
  leaseManagementSystem,
  dealManagementSystem,
  propertyListingApp,
  reitAnalyticsDashboard,
  tenantPortal,
  erpManufacturing,
  erpWholesaleDistribution,
  jobManagementSystem,
  smartDeviceMobileApp,
  aiPoweredMobileApps,
  workflowAutomationPlatform,
  requestApprovalSystem,
  electronicContractGenerator,
  b2bIntegration,
];

export default solutionRecords;
