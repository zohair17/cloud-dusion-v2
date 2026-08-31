/**
 * Case study: Building a Digital Room & Property Rental Marketplace (Hut24)
 *
 * This source is a Word doc, not the usual flyer layout: it has no
 * "Industry" / "Technologies" / "Business gains" header strip and no
 * testimonial section. It does have an extra "Engagement Partner" role
 * (Briggr's Tech) distinct from the "Delivery & Technology Partner"
 * (Cloud Fusion Global), so both are captured separately.
 * Every heading/sub-heading present in the doc is mapped below.
 */

/** @type {import("@/modules/case-studies/domain/case-study.schema").CaseStudyRecord} */
export const caseStudy = {
  slug: "hut24-digital-room-property-rental-marketplace",
  title: "Building a Digital Room & Property Rental Marketplace",
  /** The photograph its tile is set on. */
  image: "/asset/case-studies/hut24-digital-room-property-rental-marketplace.webp",

  // --- Header info (no Industry/Technologies/Business-gains strip in this doc) ---
  client: "Hut24", // "Customer"
  engagementPartner: "Briggr's Tech", // "Engagement Partner"
  deliveryPartner: "Cloud Fusion Global", // "Delivery & Technology Partner"
  order: 1,
  status: "published",

  // "Summary"
  summary: "Cloud Fusion Global, serving as the Delivery & Technology Partner to Briggr's Tech, helped transform Hut24's vision for a digital room and property rental marketplace into a structured, mobile-first technology platform. The solution connects property hosts and renters through a unified digital experience, enabling hosts to create and manage property listings while renters can discover properties, search and filter available options, save favourites, communicate with hosts, and express interest. The platform also incorporates listing promotions, payments, notifications, reporting, moderation, and administrative capabilities, providing Hut24 with a foundation for building and scaling its digital rental marketplace.",

  // "About Our Customer"
  aboutCustomer: "Hut24 is a digital property rental marketplace focused on simplifying the way people discover, list, and connect around rooms and rental properties. The platform was envisioned to provide a more convenient and structured experience for both property owners and prospective renters while creating a scalable foundation for future marketplace services. The engagement was delivered by Cloud Fusion Global in partnership with Briggr's Tech, with CFG contributing business analysis, product definition, solution architecture, technology expertise, and platform delivery capabilities.",

  // "Business Challenge": intro + the key business requirements list
  challenge: "Traditional room and property rental processes can involve fragmented communication, manual listing management, limited visibility for property owners, and inefficient ways for renters to discover suitable properties. Hut24 needed a digital platform capable of bringing these interactions into one connected ecosystem. The key business requirements included:",
  challengePoints: [
    "Making property discovery simple and intuitive",
    "Giving hosts an easy way to create and manage property listings",
    "Providing powerful search, filtering, and location-based discovery",
    "Enabling direct communication between renters and hosts",
    "Allowing renters to save properties and express interest",
    "Providing hosts with opportunities to promote their listings",
    "Supporting user verification, reporting, and moderation",
    "Giving administrators centralized control over the marketplace",
    "Establishing a scalable foundation for future rental services and monetization"],


  // "Solution Provided": intro line + the 7 sub-headed sections
  solution: "Cloud Fusion Global worked as the Delivery & Technology Partner, translating Hut24's marketplace vision into a structured digital platform supporting both renter and host journeys.",
  approach: [
    {
      step: "01",
      title: "Mobile-First Rental Marketplace",
      description: "A unified mobile experience was designed around two primary user journeys: Renter: Discover → Evaluate → Connect → Express Interest, and Host: Create → Publish → Manage → Promote. The platform enables users to register, manage profiles, discover properties, communicate, and interact with listings through a streamlined digital experience.",
    },
    {
      step: "02",
      title: "Property Discovery & Listing Management",
      description: "Renters can discover properties through search, filters, location-based browsing, pricing, property type, amenities, availability, and map-based experiences. Hosts can create and manage property listings through a guided process covering property details, amenities, pricing, media, location, rules, and availability.",
    },
    {
      step: "03",
      title: "Communication & Engagement",
      description: "An integrated messaging experience provides a direct communication channel between renters and hosts, allowing users to discuss properties, respond to enquiries, and continue conversations within the platform.",
    },
    {
      step: "04",
      title: "Listing Promotion & Monetization",
      description: "The platform provides hosts with the ability to increase listing visibility through promotional packages. The solution supports promotional plans, pricing, promotional durations, promo codes, payment processing, and promotion tracking: providing Hut24 with a foundation for a marketplace monetization model.",
    },
    {
      step: "05",
      title: "Trust, Safety & Moderation",
      description: "Because the platform connects property owners and renters, trust and safety were incorporated into the solution. Capabilities include user verification, reporting, blocking, listing moderation, content reporting, and administrative review processes.",
    },
    {
      step: "06",
      title: "Administration & Marketplace Management",
      description: "A dedicated administration platform provides centralized management, giving Hut24 greater visibility and operational control across the marketplace.",
      bullets: [
        "Users and verification",
        "Property listings",
        "Reports and moderation",
        "Promotions and promotional packages",
        "Transactions",
        "Marketplace activity and analytics"],

    },
    {
      step: "07",
      title: "Scalable Technology Foundation",
      description: "The platform was designed as a mobile-first and scalable digital marketplace, with mobile applications, backend services and APIs, web-based administration, cloud-based media storage, notifications, payments, mapping, and secure authentication. The architecture provides a foundation that can evolve as Hut24 expands its marketplace and introduces additional digital services.",
    }],


  // "Key Outcomes"
  outcomes: [
    "Established a unified digital marketplace connecting property hosts and renters",
    "Created mobile-first experiences for both renters and hosts",
    "Digitized property listing creation and management",
    "Simplified property search and location-based discovery",
    "Enabled direct communication between renters and property hosts",
    "Introduced favourites and interest management",
    "Established listing promotion and monetization capabilities",
    "Integrated payment capabilities for promotional transactions",
    "Introduced trust, verification, reporting, and moderation mechanisms",
    "Provided centralized administration and marketplace management",
    "Created a scalable foundation for future property rental and marketplace services"],


  metricsNote: "Verified performance metrics to be added upon client approval",

  // "Conclusion"
  conclusion: "The Hut24 initiative transforms the traditional property discovery and rental journey into a connected, mobile-first digital marketplace. Through the collaboration between Hut24, Briggr's Tech, and Cloud Fusion Global, the platform brings property discovery, listing management, communication, promotions, payments, trust, moderation, and administration together within a unified ecosystem. The engagement demonstrates Cloud Fusion Global's ability to work alongside technology and engagement partners to transform a business concept into a scalable digital product, combining business analysis, product thinking, solution architecture, and technology delivery. The platform provides Hut24 with a strong foundation for continued innovation and future capabilities, including enhanced marketplace intelligence, personalized property discovery, advanced analytics, and AI-powered experiences.",

  // No testimonial in this document
  testimonial: null,

  relatedServices: [
    "custom-software-development",
    "mobile-app-development",
  ],
  relatedSolutions: [
    "property-listing-app",
  ],
  ctas: [
    "talk-to-expert",
    "request-proposal",
    "discovery-session"],


  seo: {
    title: "Building a Digital Room & Property Rental Marketplace Case Study: Hut24",
    description: "Cloud Fusion Global, as Delivery & Technology Partner to Briggr's Tech, built a mobile-first digital property rental marketplace platform for Hut24.",
  },
};

export default caseStudy;