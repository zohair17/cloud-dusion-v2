/**
 * Case study: Smart Fan Control & IoT Mobile Application (Briggr's Tech)
 *
 * Same doc-based layout as JE Portal: labelled "Customer" / "Engagement" /
 * "Delivery & Technology Partner" fields, no Industry/Technologies/
 * Business-gains strip, no testimonial. Note: here Briggr's Tech is the
 * *customer* (unlike the Hut24 case study, where Briggr's Tech was the
 * engagement partner and Hut24 was the end customer).
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "smart-fan-control-iot-mobile-application-briggrs-tech",
  title: "Smart Fan Control & IoT Mobile Application",
  /** The photograph its tile is set on. */
  image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80",

  // --- Header info (no Industry/Technologies/Business-gains strip in this doc) ---
  client: "Briggr's Tech", // "Customer"
  engagement: "Mobile Application Development & IoT Integration", // "Engagement"
  deliveryPartner: "Cloud Fusion Global", // "Delivery & Technology Partner"
  order: 1,
  status: "published",

  // "Summary"
  summary: "Cloud Fusion Global partnered with Briggr's Tech to develop a mobile application that connects users with a portfolio of smart ventilation and fan devices through Bluetooth Low Energy (BLE). The solution enables users to connect, configure, monitor, and control smart fans directly from their iOS and Android devices, without requiring an internet connection for core device communication. A key focus of the engagement was creating a scalable, modular architecture capable of supporting multiple smart fan models while allowing each device to maintain its own capabilities, controls, and operating parameters. The resulting platform provides an intuitive connected-device experience while establishing a foundation for future expansion of the client's smart product ecosystem.",

  // "About Our Customer"
  aboutCustomer: "Briggr's Tech is a technology company involved in delivering innovative digital and technology solutions. As part of its engagement with a smart ventilation and fan technology provider, Briggr's Tech required a mobile application capable of connecting users with smart fan devices and providing an intuitive digital control experience. Cloud Fusion Global was engaged as the technology delivery partner to design and develop the mobile application and its IoT device integration capabilities.",

  // "Business Challenge": intro + capability list + closing framing
  challenge: "The client required a mobile solution that could communicate directly with smart fan hardware through Bluetooth Low Energy, while supporting different device models with varying capabilities. As the client's smart-fan portfolio expanded, the application also needed to accommodate different device specifications and control ranges without requiring significant redevelopment of the existing platform. The core challenge was therefore to build not just a mobile remote-control application, but a scalable IoT application architecture capable of evolving with the client's product portfolio.",
  challengePoints: [
    "Discover and connect to compatible smart fans",
    "Configure a fan during initial onboarding",
    "Assign custom names to devices",
    "Monitor fan flow-rate information",
    "Control fan speed",
    "Access premium timer functionality",
    "Manage multiple fan models through a consistent mobile experience"],


  // "Solution Provided": intro line + the 6 sub-headed sections
  solution: "Cloud Fusion Global designed and developed a mobile-first IoT application for iOS and Android, incorporating BLE-based communication and a modular device architecture.",
  approach: [
    {
      step: "01",
      title: "BLE Device Connectivity",
      description: "The application communicates directly with compatible smart fans using Bluetooth Low Energy, allowing users to interact with their smart fans directly from their mobile devices.",
      bullets: [
        "Discover compatible devices",
        "Establish secure device connections",
        "Identify connected fan models",
        "Send control commands",
        "Receive device information",
        "Monitor flow-rate data",
        "Control fan operation"],

    },
    {
      step: "02",
      title: "Intelligent Fan Onboarding",
      description: "A guided onboarding experience was implemented for first-time device connections.",
      bullets: [
        "Assigning a custom device name",
        "Activating eligible premium functionality",
        "Completing initial device configuration",
        "Proceeding directly to fan controls when additional configuration is not required"],

    },
    {
      step: "03",
      title: "Real-Time Monitoring & Control",
      description: "The application provides users with real-time access to fan operating information and device controls, dynamically applying the appropriate operating parameters based on the connected device.",
      bullets: [
        "Monitor flow-rate information",
        "Adjust fan speed",
        "View device status",
        "Access model-specific controls"],

    },
    {
      step: "04",
      title: "Modular Multi-Device Architecture",
      description: "The application was designed to support multiple smart-fan models without tightly coupling their functionality, following a model-specific approach: Mobile App → BLE Connection → Device Identification → Model-Specific Module → Controls & Monitoring. When a device connects, the application identifies the relevant model and loads the corresponding functionality, allowing new fan models to be introduced as independent modules while minimizing the impact on existing device functionality.",
    },
    {
      step: "05",
      title: "Premium Timer Functionality",
      description: "The application incorporates code-based access to premium timer functionality. Eligible users can activate the feature using an authorized access code, allowing the client to support differentiated device capabilities and premium functionality within the mobile experience.",
    },
    {
      step: "06",
      title: "Cross-Platform Mobile Experience",
      description: "The solution provides a consistent experience across supported mobile platforms, enabling users to interact with their connected devices through a modern and intuitive application.",
    }],


  // "Key Outcomes"
  outcomes: [
    "Delivered a dedicated smart-fan mobile application for iOS and Android",
    "Established direct BLE communication between mobile devices and smart fan hardware",
    "Enabled device discovery, connection, onboarding, monitoring, and control",
    "Successfully deployed the initial smart-fan implementation to production",
    "Established a modular architecture capable of supporting multiple fan models",
    "Enabled model-specific controls and operating parameters",
    "Reduced coupling between different device implementations",
    "Created a reusable foundation for future smart-device integrations",
    "Established a scalable digital platform capable of evolving alongside the client's connected-device portfolio"],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "The engagement transformed smart-fan control from a traditional hardware interaction into a connected mobile experience. Working with Briggr's Tech, Cloud Fusion Global combined mobile application development with BLE-based IoT integration to create an intuitive platform for connecting, monitoring, and controlling smart ventilation devices. More importantly, the solution was designed with future product expansion in mind. Instead of rebuilding the application for every new device, the modular architecture allows additional fan models to be introduced through dedicated functionality while preserving the stability of existing implementations. The result is a scalable mobile IoT foundation designed to grow alongside the client's smart-device ecosystem.",

  // No testimonial in this document
  testimonial: null,

  relatedServices: [],
  relatedSolutions: [],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "Smart Fan Control & IoT Mobile Application Case Study: Briggr's Tech",
    description: "Cloud Fusion Global built a BLE-based mobile IoT application for iOS and Android that connects, monitors, and controls smart ventilation devices for Briggr's Tech, using a modular multi-device architecture.",
  },
};

export default caseStudy;