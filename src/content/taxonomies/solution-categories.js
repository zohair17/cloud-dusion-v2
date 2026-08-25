/**
 * Solution categories. `anchor` is the fragment the solutions index and the
 * footer link to (e.g. /solutions/#real-estate): it is part of the public URL
 * contract, so it lives in data, not in a template.
 */
export const solutionCategories = [
  {
    id: "ai",
    anchor: "ai",
    title: "AI Solutions",
    description: "Intelligence applied directly to enterprise content, conversations, and compliance-critical environments.",
    order: 1,
  },
  {
    id: "sharepoint-microsoft",
    anchor: "sharepoint-microsoft",
    title: "SharePoint & Microsoft Solutions",
    description: "Content, collaboration, and migration platforms built on the Microsoft ecosystem.",
    order: 2,
  },
  {
    id: "real-estate",
    anchor: "real-estate",
    title: "Real Estate Solutions",
    description: "Purpose-built systems for property portfolios, deals, tenants, and analytics.",
    order: 3,
  },
  {
    id: "erp",
    anchor: "erp",
    title: "ERP Solutions",
    description: "Operational backbones for manufacturing, distribution, and project-driven businesses.",
    order: 4,
  },
  {
    id: "mobile-iot",
    anchor: "mobile-iot",
    title: "Mobile & IoT",
    description: "Mobile experiences for connected devices and AI-powered applications.",
    order: 5,
  },
  {
    id: "automation",
    anchor: "automation",
    title: "Business Automation",
    description: "Workflow, approval, and integration platforms that remove manual work.",
    order: 6,
  },
];
