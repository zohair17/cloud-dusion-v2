/**
 * The Microsoft stack, expressed as one registry across four layers.
 * Aggregates reference technologies by `id` only.
 */
export const technologies = [
  { id: "azure-ai-foundry", label: "Azure AI Foundry", layer: "ai" },
  { id: "azure-openai", label: "Azure OpenAI", layer: "ai" },
  { id: "copilot-studio", label: "Copilot Studio", layer: "ai" },
  { id: "microsoft-syntex", label: "Microsoft Syntex", layer: "ai" },
  { id: "azure-ai-document-intelligence", label: "Azure AI Document Intelligence", layer: "ai" },
  { id: "microsoft-copilot", label: "Microsoft 365 Copilot", layer: "ai" },
  { id: "semantic-kernel", label: "Semantic Kernel", layer: "ai" },

  { id: "azure", label: "Microsoft Azure", layer: "cloud" },
  { id: "azure-integration-services", label: "Azure Integration Services", layer: "cloud" },
  { id: "azure-iot", label: "Azure IoT", layer: "cloud" },
  { id: "microsoft-fabric", label: "Microsoft Fabric", layer: "cloud" },
  { id: "azure-data-platform", label: "Azure Data Platform", layer: "cloud" },
  { id: "azure-functions", label: "Azure Functions", layer: "cloud" },

  { id: "microsoft-365", label: "Microsoft 365", layer: "workplace" },
  { id: "sharepoint-online", label: "SharePoint Online", layer: "workplace" },
  { id: "microsoft-teams", label: "Microsoft Teams", layer: "workplace" },
  { id: "onedrive", label: "OneDrive for Business", layer: "workplace" },
  { id: "microsoft-purview", label: "Microsoft Purview", layer: "workplace" },
  { id: "microsoft-entra", label: "Microsoft Entra", layer: "workplace" },
  { id: "microsoft-graph", label: "Microsoft Graph", layer: "workplace" },

  { id: "power-apps", label: "Power Apps", layer: "applications" },
  { id: "power-automate", label: "Power Automate", layer: "applications" },
  { id: "power-bi", label: "Power BI", layer: "applications" },
  { id: "dataverse", label: "Dataverse", layer: "applications" },
  { id: "dynamics-365", label: "Dynamics 365", layer: "applications" },
];

export const technologyLayers = [
  { id: "ai", title: "AI & Intelligence", tagline: "Where intelligence is built", description: "Models, agents, and document intelligence.", order: 1 },
  { id: "cloud", title: "Cloud & Identity", tagline: "Where it runs, securely", description: "Infrastructure, data, and integration on Azure.", order: 2 },
  { id: "workplace", title: "Digital Workplace", tagline: "Where people work", description: "Collaboration, content, identity, and governance.", order: 3 },
  { id: "applications", title: "Applications & Data", tagline: "Where business processes live", description: "Business applications, automation, and analytics.", order: 4 },
];
