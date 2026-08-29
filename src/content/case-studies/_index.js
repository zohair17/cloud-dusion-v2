/**
 * CaseStudy registry, the single place a new record is registered.
 * Adding a file without adding it here means it does not exist to the domain.
 */
import aiEnabledEmailAutomation from "./ai-enabled-email-automation";
import businessManagementPlatform from "./business-managment-platform";
import digitalRoomPropertyRental from "./digital-room-&-property-rental";
import documentManagementIntranet from "./document-management-&-intranet";
import financialReportingPowerBi from "./financial-reporting-with-power-bi";
import iotMobileApplication from "./iot-mobile-application";
import microsoftMigration from "./microsoft-migration";
import powerBiImplementation from "./power-bi-implementation";
import sharepointDisasterRecovery from "./sharepoint-disaster-recovery";
import sharepointEnterpriseMigration from "./sharepoint-enterprise-migration";
import sharepointIntranetProgressiveLeasing from "./sharepoint-intranet-&-progrssive-leasing";
import sharepointOnline from "./sharepoint-online";

export const caseStudyRecords = [
  aiEnabledEmailAutomation,
  businessManagementPlatform,
  digitalRoomPropertyRental,
  documentManagementIntranet,
  financialReportingPowerBi,
  iotMobileApplication,
  microsoftMigration,
  powerBiImplementation,
  sharepointDisasterRecovery,
  sharepointEnterpriseMigration,
  sharepointIntranetProgressiveLeasing,
  sharepointOnline,
];

export default caseStudyRecords;
