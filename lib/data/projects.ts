export interface ProjectImage {
  src: string
  /** Screen/section description — "desktop" or "mobile". Do not include project name. */
  alt: string
  type: "mobile" | "desktop" | "terminal" | "wireframe"
}

export interface UxProcess {
  title: string
  description: string
}

export interface UserTestInsight {
  area: string
  finding: string
}

export interface Project {
  slug: string
  /** When set (e.g. "Gyoza"), a company badge is shown on the card and detail. */
  company?: "Gyoza"
  title: string
  subtitle: string
  year: string
  stack: string[]
  tags: string[]
  challenge: string
  myRole: string
  features: string[]
  results: string[]
  howItWorks?: string[]
  whyBuilt?: string[]
  uxProcess?: UxProcess[]
  userTestInsights?: UserTestInsight[]
  keyFindings?: string[]
  figmaUrl?: string
  images: ProjectImage[]
  cover: string
  url?: string
}

export const projects: Project[] = [
  {
    slug: "wayvo",
    company: "Gyoza",
    title: "Wayvo — Trip Planner",
    subtitle: "Plan trips and follow day-by-day itineraries on your phone",
    year: "2025-2026",
    stack: ["React Native", "Expo", "Firebase", "Google Sign-In", "React Native Maps", "TanStack Query"],
    tags: ["React Native"],
    challenge:
      "Wayvo needed a mobile app for travellers to plan trips with AI-assisted itineraries, day-by-day plans, recommendations and optional premium unlock — with auth and push notifications.",
    myRole:
      "I built the frontend in React Native (Expo): trip list and detail, itinerary tabs, checklist, accommodation and activity views, auth (Firebase, Apple/Google Sign-In) and deep linking.",
    features: [
      "Trip list (upcoming/past) and trip detail with itinerary",
      "Day-by-day plan with activities and recommendations",
      "Checklist and accommodation links",
      "Firebase auth, Apple/Google Sign-In, push notifications",
    ],
    results: [
      "Travellers can plan and follow the trip from a single app",
      "Premium content unlock and engagement via push",
    ],
    howItWorks: [
      "User signs in with Firebase, Apple or Google; trip list shows upcoming and past trips.",
      "They open a trip and see the day-by-day itinerary with activities and recommendations.",
      "Checklist and accommodation links help prepare and book; some content can be premium-unlocked.",
      "Push notifications keep the user engaged; deep linking supports opening specific trips or sections.",
    ],
    cover: "/images/cards/Wayvo.png",
    images: [
      { src: "/images/wayvo/wayvo-login.png", alt: "Login — mobile", type: "mobile" },
      { src: "/images/wayvo/wayvo-chat.png", alt: "Chat — mobile", type: "mobile" },
      { src: "/images/wayvo/wayvo-edit-chat.png", alt: "Edit chat — mobile", type: "mobile" },
      { src: "/images/wayvo/wayvo-itinerary.png", alt: "Itinerary — mobile", type: "mobile" },
      { src: "/images/wayvo/wayvo-detail.png", alt: "Trip detail — mobile", type: "mobile" },
      { src: "/images/wayvo/wayvo-checklist.png", alt: "Checklist — mobile", type: "mobile" },
      { src: "/images/wayvo/wayvo-profile.png", alt: "Profile — mobile", type: "mobile" },
      { src: "/images/wayvo/wayvo-subscription.png", alt: "Subscription — mobile", type: "mobile" },
    ],
  },
  {
    slug: "turbowash-admin",
    company: "Gyoza",
    title: "Turbowash — Administration Panel",
    subtitle: "Internal panel for locations, pricing and day-to-day operations",
    year: "2025-2026",
    stack: ["React", "Vite", "TanStack Query", "TanStack Table", "Zustand"],
    tags: ["React"],
    challenge:
      "Turbowash needed an internal tool so staff could manage locations, wash settings, pricing and operational data without calling on developers for every change.",
    myRole:
      "I built the admin SPA frontend: data tables with filters and pagination, forms with validation (Formik/Yup), and integration with the existing API so the team can update and consult data on their own.",
    features: [
      "Location and terminal management",
      "Pricing and wash configuration",
      "Data tables with sorting, filters and pagination",
      "Form flows with validation and error handling",
    ],
    results: [
      "Operations team can update settings and view data on their own",
      "Single React SPA aligned with the rest of the Turbowash front stack",
    ],
    howItWorks: [
      "Staff log in and access the admin panel.",
      "They manage locations and terminals from data tables with filters and pagination.",
      "Pricing and wash configuration are updated via forms with validation.",
      "Changes are saved through the API; the operations team works without developer involvement for day-to-day updates.",
    ],
    cover: "/images/cards/Turbowash.png",
    images: [
      { src: "/images/twa/01-twa-welcome-desktop.png", alt: "Welcome screen — desktop", type: "desktop" },
      { src: "/images/twa/02-twa-centers-list-desktop.png", alt: "Locations list — desktop", type: "desktop" },
      { src: "/images/twa/03-twa-center-detail-desktop.png", alt: "Location detail — desktop", type: "desktop" },
      { src: "/images/twa/04-twa-center-form-desktop.png", alt: "Location form — desktop", type: "desktop" },
      { src: "/images/twa/05-twa-centers-list-phone.png", alt: "Locations list — mobile", type: "mobile" },
      { src: "/images/twa/06-twa-center-detail-phone.png", alt: "Location detail — mobile", type: "mobile" },
    ],
  },
  {
    slug: "turbowash-portal",
    company: "Gyoza",
    title: "Turbowash — Customer Area",
    subtitle: "Where customers manage vehicles, invoices and coupons",
    url: "https://turbowash.es/",
    year: "2025-2026",
    stack: ["React", "REST API Integration"],
    tags: ["React"],
    challenge:
      "Turbowash customers needed a place to see their wash history, add or edit vehicles, download invoices, and use loyalty coupons — with a clear layout and straightforward navigation.",
    myRole:
      "I built the customer area frontend: profile, add/edit vehicles with type and colour selector, invoice history, and coupon block. All wired to the Turbowash API.",
    features: [
      "Vehicle management with type and colour selector",
      "Wash history with detail",
      "Invoice download and billing info",
      "Loyalty coupons to redeem at the kiosk",
    ],
    results: [
      "Stable, clear customer area in production for Turbowash users",
      "Fewer support requests about invoices and account data",
    ],
    howItWorks: [
      "User logs in and sees the summary with the QR for use at the tunnel.",
      "They can add or edit vehicles (type and colour).",
      "Wash history and invoices are available to download.",
      "Loyalty coupons are shown in the app and redeemed at the kiosk.",
    ],
    cover: "/images/cards/Turbowash.png",
    images: [
      { src: "/images/twc/01-twc-welcome-phone.png", alt: "Welcome screen — mobile", type: "mobile" },
      { src: "/images/twc/02-twc-verification-phone.png", alt: "Verification — mobile", type: "mobile" },
      { src: "/images/twc/03-twc-home-phone.png", alt: "Summary — mobile", type: "mobile" },
      { src: "/images/twc/04-twc-qr-phone.png", alt: "QR code — mobile", type: "mobile" },
      { src: "/images/twc/05-twc-washes-list-phone.png", alt: "Wash history — mobile", type: "mobile" },
      { src: "/images/twc/06-twc-cars-list-phone.png", alt: "Vehicle list — mobile", type: "mobile" },
    ],
  },
  {
    slug: "turbowash-terminal",
    company: "Gyoza",
    title: "Turbowash — Payment Kiosk",
    subtitle: "The app that runs on the car wash kiosk screen",
    url: "https://turbowash.es/",
    year: "2025-2026",
    stack: ["React Native", "Expo", "Hardware Integration"],
    tags: ["React Native"],
    challenge:
      "Turbowash needed the screen that customers touch at the tunnel kiosk: readable in full sun, card and cash payment, and two-way communication with the wash hardware via pulse signals so the machine could start, pause, and finish the wash.",
    myRole:
      "I built the frontend in React Native (Expo). The main difficulty was real-time pulse communication with the hardware: every wash state (start, pause, end) is reflected in the app and sent to the machine.",
    features: [
      "Card and cash payment",
      "Wash by time or by euros",
      "Real-time pulse communication with the hardware",
      "UI designed for outdoor use (high contrast, large tap targets)",
    ],
    results: [
      "Live in 5+ tunnels with real transactions every day",
      "Customers use the kiosk without instructions; no training needed",
    ],
    howItWorks: [
      "Customer chooses wash type and pays at the kiosk (card or cash).",
      "Hardware receives pulses and starts the wash cycle.",
      "Screen shows countdown and amount; supports pause and resume via pulses.",
      "Club members can apply loyalty pricing and redeem coupons.",
    ],
    cover: "/images/cards/Turbowash.png",
    images: [
      { src: "/images/twt/01-twt-logged-welcome-terminal.png", alt: "Welcome screen — terminal", type: "terminal" },
      { src: "/images/twt/02-twt-washing-terminal.png", alt: "Wash in progress — terminal", type: "terminal" },
      { src: "/images/twt/03-twt-end-terminal.png", alt: "End screen — terminal", type: "terminal" },
    ],
  },
  {
    slug: "pulse-video-manager",
    company: "Gyoza",
    title: "Pulse — Video Library and Playlists",
    subtitle: "Video library, playlists and daily workout schedule",
    year: "2025",
    stack: ["React", "Vite", "TanStack Query", "Zustand", "Formik", "i18n", "Media Chrome"],
    tags: ["React"],
    challenge:
      "A fitness/content team needed an app to manage a video library, organise playlists, tag content and schedule \"today's\" workouts — with clear browsing and drag-and-drop ordering.",
    myRole:
      "I built the frontend: video and playlist CRUD, drag-and-drop ordering (FormKit), tags management, Today view and video player integration (Media Chrome / Castable).",
    features: [
      "Video library with upload, metadata and tags",
      "Playlists with drag-and-drop reordering",
      "Today page for scheduled workouts",
      "Auth and responsive layout with sidebar/nav",
    ],
    results: [
      "Content team can maintain playlists and schedule without dev involvement",
      "Consistent playback and scheduling experience",
    ],
    howItWorks: [
      "Team uploads videos, adds metadata and tags; the library is browsable and filterable.",
      "Playlists are created and videos are reordered with drag-and-drop (e.g. FormKit).",
      "The \"Today\" view shows the scheduled workouts for the day; players consume this schedule.",
      "Video playback uses Media Chrome / Castable; auth controls who can manage content.",
    ],
    cover: "/images/cards/Pulse.png",
    images: [
      { src: "/images/pulse/01-pulse-welcome-desktop.png", alt: "Welcome screen — desktop", type: "desktop" },
      { src: "/images/pulse/02-pulse-today-desktop.png", alt: "Today view — desktop", type: "desktop" },
      { src: "/images/pulse/03-pulse-videos-list-desktop.png", alt: "Video library — desktop", type: "desktop" },
      { src: "/images/pulse/04-pulse-tags-list-desktop.png", alt: "Tags list — desktop", type: "desktop" },
      { src: "/images/pulse/05-pulse-today-phone.png", alt: "Today view — mobile", type: "mobile" },
      { src: "/images/pulse/06-pulse-videos-list-phone.png", alt: "Video library — mobile", type: "mobile" },
      { src: "/images/pulse/07-pulse-playlist-list-phone.png", alt: "Playlist list — mobile", type: "mobile" },
      { src: "/images/pulse/08-pulse-tags-list-phone.png", alt: "Tags list — mobile", type: "mobile" },
    ],
  },
  {
    slug: "wezone-plan-recommendator",
    company: "Gyoza",
    title: "Wezone — Plan Recommender",
    subtitle: "Answer a few questions and get a recommended plan by email",
    year: "2025",
    stack: ["React", "Vite", "TanStack Query", "TanStack Router", "Zustand", "Formik"],
    tags: ["React"],
    challenge:
      "Wezone wanted a short web flow where members answer a few questions (centre, goals, preferences) and receive a recommended plan — with an optional form to get the result by email.",
    myRole:
      "I built the frontend: multi-step form (centre selection, questions), result view, contact form and integration with the recommendation API.",
    features: [
      "Centre selection and step-by-step questions",
      "Plan recommendation result and CTA",
      "Contact form to receive the plan by email",
      "i18n and responsive layout",
    ],
    results: [
      "Members get a clear recommendation without visiting the centre",
      "Lead capture and follow-up for the sales team",
    ],
    howItWorks: [
      "Member selects their Wezone centre in the first step of the flow.",
      "They answer a short set of questions (goals, preferences) in a multi-step form.",
      "The app calls the recommendation API and displays the suggested plan and a CTA.",
      "Optionally they fill in a contact form to receive the plan by email; the sales team can follow up.",
    ],
    cover: "/images/cards/Wezone.png",
    images: [
      { src: "/images/wrp/01-wrp-welcome-desktop.png", alt: "Welcome screen — desktop", type: "desktop" },
      { src: "/images/wrp/02-wrp-steps-desktop.png", alt: "Steps flow — desktop", type: "desktop" },
      { src: "/images/wrp/03-wrp-steps-desktop.png", alt: "Steps flow — desktop", type: "desktop" },
      { src: "/images/wrp/04-wrp-cta-desktop.png", alt: "CTA — desktop", type: "desktop" },
      { src: "/images/wrp/05-wrp-results-desktop.png", alt: "Results screen — desktop", type: "desktop" },
      { src: "/images/wrp/06-wrp-welcome-phone.png", alt: "Welcome screen — mobile", type: "mobile" },
      { src: "/images/wrp/07-wrp-steps-phone.png", alt: "Steps flow — mobile", type: "mobile" },
      { src: "/images/wrp/08-wrp-steps-phone.png", alt: "Steps flow — mobile", type: "mobile" },
      { src: "/images/wrp/09-wrp-cta-phone.png", alt: "CTA — mobile", type: "mobile" },
      { src: "/images/wrp/10-wrp-results-phone.png", alt: "Results screen — mobile", type: "mobile" },
    ],
  },
  {
    slug: "wetour",
    company: "Gyoza",
    title: "Wetour — Community Platform",
    subtitle: "Wezone network: events, centres and community feed",
    url: "https://wetourfit.com/",
    year: "2024-2025",
    stack: ["Next.js", "React", "SEO Optimization"],
    tags: ["Next.js"],
    challenge:
      "Wezone, a network of 11+ centres and thousands of members, needed a site where the community could discover events, browse sports centres, and take part in posts and challenges — with strong presence in search.",
    myRole:
      "I built the frontend in Next.js with a focus on SEO and performance. I took part in UX research and in the design of page architecture and event registration and payment flows.",
    features: [
      "Directory of 300+ sports centres",
      "Hundreds of events per month with registration and payment",
      "Gamification: challenges and WZN passport",
      "Community feed and publications",
    ],
    results: [
      "Platform in production with organic growth thanks to SEO",
      "New revenue stream from paid event registrations",
    ],
    howItWorks: [
      "User browses centres and events in the directory and on the map.",
      "They register for events and pay when applicable; they earn challenges and WZN passport.",
      "The feed shows community posts and activity.",
      "The team manages content via CMS; data feeds into BI.",
    ],
    cover: "/images/cards/Wetour.png",
    images: [
      { src: "/images/wt/01-wt-welcome-desktop.png", alt: "Welcome screen — desktop", type: "desktop" },
      { src: "/images/wt/02-wt-event-desktop.png", alt: "Event detail — desktop", type: "desktop" },
      { src: "/images/wt/03-wt-map-desktop.png", alt: "Map view — desktop", type: "desktop" },
      { src: "/images/wt/04-wt-map-filters-desktop.png", alt: "Map with filters — desktop", type: "desktop" },
      { src: "/images/wt/05-wt-map-event-desktop.png", alt: "Event on map — desktop", type: "desktop" },
      { src: "/images/wt/06-wt-welcome-phone.png", alt: "Welcome screen — mobile", type: "mobile" },
      { src: "/images/wt/07-wt-events-list-phone.png", alt: "Events list — mobile", type: "mobile" },
      { src: "/images/wt/08-wt-event-phone.png", alt: "Event detail — mobile", type: "mobile" },
      { src: "/images/wt/09-wt-map-phone.png", alt: "Map view — mobile", type: "mobile" },
      { src: "/images/wt/10-wt-map-filters-phone.png", alt: "Map with filters — mobile", type: "mobile" },
    ],
  },
  {
    slug: "aee-corporate-web",
    company: "Gyoza",
    title: "AEE — Corporate Website",
    subtitle: "Company site with CMS content and multiple languages",
    year: "2024",
    stack: ["Next.js", "React", "Strapi Blocks", "i18next", "Sass"],
    tags: ["Next.js"],
    challenge:
      "AEE needed a modern corporate site with content managed in a CMS (Strapi), several languages and a structure that could grow with new sections and campaigns.",
    myRole:
      "I built the frontend with Next.js: rendering Strapi block content, i18n (i18next), responsive layout and carousels/sections for campaigns so marketing could update content without code.",
    features: [
      "Pages driven by Strapi Blocks renderer",
      "Multi-language (i18next) and date formatting",
      "Responsive layout and image optimisation",
      "Carousels and dynamic sections",
    ],
    results: [
      "Marketing can update content without touching code",
      "SEO-friendly structure and consistent branding",
    ],
    howItWorks: [
      "Content is edited in Strapi (CMS); pages are built from blocks (text, images, carousels, etc.).",
      "The Next.js frontend fetches and renders these blocks; layout is responsive and SEO-oriented.",
      "Multi-language is handled with i18next; dates and copy adapt to the selected language.",
      "New sections or campaigns are added in the CMS; the site structure supports growth without code changes.",
    ],
    cover: "/images/cards/AEE.png",
    images: [
      {
        src: "/images/aee/01-aee-home-desktop.png",
        alt: "Homepage — desktop",
        type: "desktop",
      },
      {
        src: "/images/aee/02-aee-news-desktop.png",
        alt: "News section — desktop",
        type: "desktop",
      },
      {
        src: "/images/aee/03-aee-explore-desktop.png",
        alt: "Explore section — desktop",
        type: "desktop",
      },
      {
        src: "/images/aee/04-aee-equality-desktop.png",
        alt: "Space and Equality section — desktop",
        type: "desktop",
      },
      {
        src: "/images/aee/05-aee-home-phone.png",
        alt: "Homepage — mobile",
        type: "mobile",
      },
      {
        src: "/images/aee/06-aee-current-phone.png",
        alt: "Current affairs section — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "time-tracking-billing",
    company: "Gyoza",
    title: "Time Tracking — Billing and Licenses",
    subtitle: "Billing, licenses and customer management for the time-tracking product",
    year: "2024",
    stack: ["React", "Vite", "Firebase", "Google OAuth", "TanStack Query", "Zustand"],
    tags: ["React"],
    challenge:
      "The time-tracking product needed an admin app for billing, licence management and customer data — with secure auth and a clear overview for account managers.",
    myRole:
      "I built the frontend: auth (Firebase, Google OAuth), customer and licence management, billing views and integration with the backend API.",
    features: [
      "Google OAuth and Firebase authentication",
      "Customer and licence management",
      "Billing and subscription views",
      "Search, filters and responsive tables",
    ],
    results: [
      "Account managers can handle licences and billing in one place",
      "Secure access and UX consistent with the workspace app",
    ],
    howItWorks: [
      "Manager logs in with Google OAuth or Firebase; access is restricted to authorised roles.",
      "They consult and manage customers and licences from the admin interface.",
      "Billing and subscription views show status and history; data comes from the backend API.",
      "Search and filters on tables make it easy to find specific customers or licence records.",
    ],
    cover: "/images/cards/T3.png",
    images: [],
  },
  {
    slug: "time-tracking-workspace",
    company: "Gyoza",
    title: "Time Tracking — Workspace",
    subtitle: "Log time, manage projects and customers, and handle invoices",
    year: "2024",
    stack: ["React", "Vite", "TanStack Query", "React Date Range", "Zustand", "Formik"],
    tags: ["React"],
    challenge:
      "Users needed a workspace to log time, manage projects and customers, and generate or track invoices — with date ranges, lists and simple navigation.",
    myRole:
      "I built the frontend: time entry forms, project and customer management, invoice views and history with date range selection.",
    features: [
      "Time tracking and history with date range picker",
      "Projects and customers management",
      "Invoice management and generation",
      "i18n and responsive layout",
    ],
    results: [
      "Teams can track time and manage projects in one app",
      "Aligned with the billing app for a full product suite",
    ],
    howItWorks: [
      "User logs time against projects and customers via time-entry forms.",
      "Projects and customers are managed from their own sections; they are linked to time and invoices.",
      "Invoice list and history are available; user can filter by date range to review or generate invoices.",
      "i18n and responsive layout support different locales and devices.",
    ],
    cover: "/images/cards/T3.png",
    images: [
      { src: "/images/t3/01-t3-welcome-desktop.png", alt: "Welcome screen — desktop", type: "desktop" },
      { src: "/images/t3/02-t3-home-desktop.png", alt: "Home — desktop", type: "desktop" },
    ],
  },
  {
    slug: "goiko-customer-area",
    company: "Gyoza",
    title: "Goiko — Customer Area",
    subtitle: "Account, order history, saved addresses and loyalty",
    year: "2024",
    stack: ["React", "Vite", "Firebase", "Google Maps API", "React Query", "Zustand"],
    tags: ["React"],
    challenge:
      "Goiko needed a customer area where users could manage their profile, see order history, save addresses and access loyalty benefits, with a consistent experience on any device.",
    myRole:
      "I built the frontend: profile and address management with Google Maps, order history and reorder flow, Firebase Auth, and QR/loyalty section so users could reuse data at checkout.",
    features: [
      "Profile and address management with Google Maps",
      "Order history and reorder flow",
      "Firebase Authentication and optional reCAPTCHA",
      "QR codes and loyalty section",
    ],
    results: [
      "Single customer area that supports the main Goiko ordering flow",
      "Reuse of addresses and preferences for faster checkout",
    ],
    howItWorks: [
      "User signs in with Firebase (email or social); profile and saved addresses are available.",
      "Addresses can be added or edited with Google Maps; they are reused at checkout in the ordering app.",
      "Order history is displayed; the user can trigger a reorder from a past order.",
      "Loyalty and QR section gives access to benefits linked to the Goiko account.",
    ],
    cover: "/images/cards/Goiko.png",
    images: [],
  },
  {
    slug: "goiko-online-menu",
    company: "Gyoza",
    title: "Goiko — Digital Menu",
    subtitle: "Browse the full menu online or via QR in the restaurant",
    year: "2024",
    stack: ["React", "Vite", "React Query", "i18n", "GTM"],
    tags: ["React"],
    challenge:
      "Goiko wanted a standalone digital menu that could be opened in the restaurant via QR or shared by link — easy to browse and search, with the same look and data as the ordering app.",
    myRole:
      "I built the frontend: menu structure, search and filters, lazy-loaded images and i18n; analytics via GTM so the team could see how the menu was used.",
    features: [
      "Full menu browsing with categories and search",
      "Product detail and nutritional info",
      "i18n and responsive layout",
      "QR code support for in-restaurant use",
    ],
    results: [
      "Standalone menu usable from QR or direct link",
      "Shared product data and branding with the main ordering app",
    ],
    howItWorks: [
      "User opens the menu via QR in the restaurant or via a shared link.",
      "They browse by category or use search; product detail shows description and nutritional info.",
      "Content is multi-language (i18n) and responsive; images are lazy-loaded.",
      "The menu is read-only; ordering is done in the main Goiko ordering app. Analytics (GTM) track usage.",
    ],
    cover: "/images/cards/Goiko.png",
    images: [
      { src: "/images/gm/01-gm-products-list-phone.png", alt: "Product list — mobile", type: "mobile" },
      { src: "/images/gm/02-gm-product-detail-phone.png", alt: "Product detail — mobile", type: "mobile" },
    ],
  },
  {
    slug: "goiko-ordering",
    company: "Gyoza",
    title: "Goiko — Online Ordering",
    subtitle: "Delivery and pickup orders across 100+ restaurants",
    url: "https://www.goiko.com/es/delivery",
    year: "2024",
    stack: ["Vue 3", "Vuex", "JavaScript", "Paycomet", "Deliverect", "Google Maps API"],
    tags: ["Vue"],
    challenge:
      "Goiko, with 100+ restaurants in Spain, needed a custom ordering site: delivery and pickup, menu in sync with kitchen and POS, secure payments, and live tracking of the rider on the map.",
    myRole:
      "I was responsible for the full frontend of the ordering platform: from restaurant selection by location to checkout with Paycomet, including cart, scheduled orders, and real-time tracking on Google Maps.",
    features: [
      "Restaurant assignment by address or geolocation (delivery and pickup)",
      "Password-less login via magic link in email",
      "Order tracking with rider position on the map",
      "Menu synced with Deliverect across all restaurants",
      "Card payment (Paycomet, tokenisation) and coupons linked to Goiko BI",
      "Scheduled orders and upselling in cart and checkout",
    ],
    results: [
      "Platform in production with real orders every day in all restaurants",
      "Integration with POS and kitchen via Deliverect",
      "Less reliance on third-party delivery apps",
    ],
    howItWorks: [
      "User enters address or allows location; restaurant is assigned.",
      "Menu comes from Deliverect; cart supports combos and customisation.",
      "At checkout: Paycomet payment, magic-link login, optional scheduled order.",
      "After confirming, rider is tracked on the map; coupons validated against Goiko BI.",
    ],
    cover: "/images/cards/Goiko.png",
    images: [
      { src: "/images/gd/01-gd-welcome-phone.png", alt: "Welcome screen — mobile", type: "mobile" },
      { src: "/images/gd/02-gd-steps-phone.png", alt: "Steps flow — mobile", type: "mobile" },
      { src: "/images/gd/03-gd-address-steps-phone.png", alt: "Address step — mobile", type: "mobile" },
      { src: "/images/gd/04-gd-schedules-steps-phone.png", alt: "Schedule step — mobile", type: "mobile" },
      { src: "/images/gd/05-gd-products-list-phone.png", alt: "Product list — mobile", type: "mobile" },
      { src: "/images/gd/06-gd-preparing-status-phone.png", alt: "Preparing status — mobile", type: "mobile" },
      { src: "/images/gd/07-gd-delivery-status-phone.png", alt: "Delivery status — mobile", type: "mobile" },
      { src: "/images/gd/08-gd-delivered-status-phone.png", alt: "Delivered status — mobile", type: "mobile" },
    ],
  },
  {
    slug: "goiko-table-ordering",
    company: "Gyoza",
    title: "Goiko — Table Ordering",
    subtitle: "Order from your table inside the restaurant",
    year: "2024",
    stack: ["React", "Create React App", "Formik", "Yup", "GTM"],
    tags: ["React"],
    challenge:
      "Goiko wanted a simple flow so customers could order from their table on a dedicated app — few steps and clear confirmation for the kitchen.",
    myRole:
      "I built the table-ordering frontend: flow, form validation and integration with the ordering backend; GTM for analytics so the team could track usage.",
    features: [
      "Table-based ordering flow",
      "Menu selection and cart with validation",
      "Order confirmation and status feedback",
      "Analytics integration (GTM)",
    ],
    results: [
      "Faster in-restaurant orders without relying on staff devices",
      "Same look and feel as other Goiko digital products",
    ],
    howItWorks: [
      "Customer opens the table-ordering app and selects or identifies their table.",
      "They browse the menu, add items to the cart and confirm; forms validate the selection.",
      "Order is sent to the kitchen; the screen shows confirmation and status.",
      "Analytics (GTM) record usage so the team can see how the flow performs.",
    ],
    cover: "/images/cards/Goiko.png",
    images: [
      { src: "/images/gt/01-gt-welcome-phone.png", alt: "Welcome screen — mobile", type: "mobile" },
      { src: "/images/gt/02-gt-products-list-phone.png", alt: "Product list — mobile", type: "mobile" },
      { src: "/images/gt/03-gt-product-detail-phone.png", alt: "Product detail — mobile", type: "mobile" },
    ],
  },
]

/** Goiko first — flagship ordering, then the rest of the suite. */
const GOIKO_DISPLAY_ORDER = [
  "goiko-ordering",
  "goiko-customer-area",
  "goiko-table-ordering",
  "goiko-online-menu",
] as const

/**
 * Projects ordered for listings: Goiko suite first, then the rest unchanged.
 */
export function getProjectsForDisplay(): Project[] {
  const bySlug = new Map(projects.map((p) => [p.slug, p]))
  const goiko = GOIKO_DISPLAY_ORDER.map((slug) => bySlug.get(slug)).filter(
    (p): p is Project => p != null,
  )
  const goikoSlugs = new Set<string>(GOIKO_DISPLAY_ORDER)
  const rest = projects.filter((p) => !goikoSlugs.has(p.slug))
  return [...goiko, ...rest]
}

/**
 * Returns a project by slug.
 */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/**
 * Returns previous and next projects for detail page navigation.
 */
export function getAdjacentProjects(slug: string) {
  const ordered = getProjectsForDisplay()
  const index = ordered.findIndex((p) => p.slug === slug)
  const prev = index > 0 ? ordered[index - 1] : null
  const next = index < ordered.length - 1 ? ordered[index + 1] : null
  return { prev, next }
}
