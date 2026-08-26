/**
 * Solution: Mobile App for Smart Devices
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/solutions/domain/solution.schema").SolutionRecord} */
export const solution = {
  slug: "smart-device-mobile-app",
  title: "Mobile App for Smart Devices",
  tagline: "The companion app your connected product deserves",
  /** Glyph id; the component owns the actual icon. */
  icon: "bluetooth",
  /** Panel photograph, used by the index rail and the detail hero. */
  image: "/asset/solutions/smart-device-mobile-app.webp",
  summary: "Companion mobile applications for connected devices: pairing, control, telemetry, and firmware updates with a cloud backbone on Azure IoT.",
  categoryId: "mobile-iot",
  order: 1,
  status: "published",

  problem: {
    eyebrow: "The Problem",
    heading: "Why this exists",
    body: "Connected hardware is only as good as its app. Clunky pairing, unreliable connectivity, and dated interfaces sink otherwise excellent devices, and reviews follow.",
  },

  businessChallenges: {
    eyebrow: "Business Challenges",
    heading: "What it replaces",
    items: [
      "Device pairing and connectivity flows that frustrate users.",
      "Telemetry collected but never turned into user value.",
      "Firmware updates risky and poorly adopted.",
      "Device fleets unmanageable at scale without a cloud backbone.",
    ],
  },

  overview: [
    "CFG builds companion apps that make hardware feel effortless: fast, reliable pairing over Bluetooth or Wi-Fi, responsive control interfaces, and telemetry presented as insight users actually want.",
    "Behind the app, Azure IoT provides the fleet backbone, device identity, telemetry ingestion, remote configuration, and over-the-air updates, so the product scales from prototype to hundreds of thousands of devices.",
  ],

  howItWorks: {
    eyebrow: "How It Works",
    heading: "From input to outcome",
    steps: [
      {
        step: "01",
        title: "Pair seamlessly",
        description: "Guided onboarding connects devices over BLE or Wi-Fi with recovery paths for every failure mode.",
      },
      {
        step: "02",
        title: "Control & monitor",
        description: "Real-time control and telemetry through an interface designed for the device's actual use.",
      },
      {
        step: "03",
        title: "Sync to cloud",
        description: "Azure IoT Hub manages identity, state, and telemetry for every device in the fleet.",
      },
      {
        step: "04",
        title: "Update safely",
        description: "Staged over-the-air firmware rollouts with health monitoring and rollback.",
      },
    ],
  },

  capabilities: [
    "BLE and Wi-Fi pairing and provisioning",
    "Real-time device control and status",
    "Telemetry dashboards and history",
    "Over-the-air firmware update delivery",
    "Fleet management and remote diagnostics",
    "Offline operation with sync",
  ],

  aiCapabilities: {
    eyebrow: "AI Inside",
    heading: "AI capabilities",
    body: "Where intelligence does the heavy lifting in this solution.",
    items: [
      "Predictive alerts from device telemetry patterns",
      "Usage-based recommendations in-app",
    ],
  },

  architecture: null,

  benefits: [
    "Device experiences that earn five-star reviews",
    "A fleet backbone that scales with sales",
    "Firmware updates that reach the field safely",
    "Telemetry turned into user and product insight",
    "One codebase across iOS and Android",
  ],

  useCases: [
    "Consumer smart home device apps",
    "Industrial equipment monitoring companions",
    "Health and wellness device experiences",
    "Commercial building device management",
  ],

  technologies: [
    "azure-iot-hub",
    "dotnet-maui",
    "react-native",
    "azure-functions",
    "azure-stream-analytics",
    "power-bi",
  ],

  industries: [
    "technology",
    "energy",
    "healthcare",
  ],

  relatedServices: [
    "mobile-app-development",
    "custom-software-development",
    "data-business-intelligence",
  ],

  relatedSolutions: [
    "ai-powered-mobile-apps",
    "property-listing-app",
    "workflow-automation-platform",
  ],

  relatedCaseStudies: [],

  ctas: [
    "request-demo",
    "talk-to-expert",
  ],

  seo: {
    title: "Mobile App for Smart Devices",
    description: "Companion mobile applications for connected devices: pairing, control, telemetry, and firmware updates with a cloud backbone on Azure IoT.",
  },
};

export default solution;
