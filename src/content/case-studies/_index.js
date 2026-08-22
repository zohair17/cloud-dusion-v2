/**
 * CaseStudy registry — the single place a new record is registered.
 * Adding a file without adding it here means it does not exist to the domain.
 */
import breddBiAnalyticsPlatform from "./bredd-bi-analytics-platform";
import freddDocumentManagementSystem from "./fredd-document-management-system";
import relAiLeaseAbstractor from "./rel-ai-lease-abstractor";
import sharepointEnterpriseMigration from "./sharepoint-enterprise-migration";
import sharepointModernization from "./sharepoint-modernization";
import realEstateDealManagement from "./real-estate-deal-management";

export const caseStudyRecords = [
  breddBiAnalyticsPlatform,
  freddDocumentManagementSystem,
  relAiLeaseAbstractor,
  sharepointEnterpriseMigration,
  sharepointModernization,
  realEstateDealManagement,
];

export default caseStudyRecords;
