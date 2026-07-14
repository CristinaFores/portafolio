import type { ProjectBase } from "@/types/project"

export const PROJECTS: ProjectBase[] = [
  {
    slug: "wayvo",
    title: "Wayvo",
    company: "Gyoza",
    year: "2025-2026",
    stack: [
      "React Native",
      "Expo",
      "Firebase",
      "Google Sign-In",
      "React Native Maps",
      "TanStack Query",
    ],
    tags: ["React Native"],
    icon: "/images/cards/Wayvo.png",
    images: [
      {
        src: "/images/wayvo/wayvo-login.png",
        alt: "Login — mobile",
        type: "mobile",
      },
      {
        src: "/images/wayvo/wayvo-chat.png",
        alt: "Chat — mobile",
        type: "mobile",
      },
      {
        src: "/images/wayvo/wayvo-edit-chat.png",
        alt: "Edit chat — mobile",
        type: "mobile",
      },
      {
        src: "/images/wayvo/wayvo-itinerary.png",
        alt: "Itinerary — mobile",
        type: "mobile",
      },
      {
        src: "/images/wayvo/wayvo-detail.png",
        alt: "Trip detail — mobile",
        type: "mobile",
      },
      {
        src: "/images/wayvo/wayvo-checklist.png",
        alt: "Checklist — mobile",
        type: "mobile",
      },
      {
        src: "/images/wayvo/wayvo-profile.png",
        alt: "Profile — mobile",
        type: "mobile",
      },
      {
        src: "/images/wayvo/wayvo-subscription.png",
        alt: "Subscription — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "turbowash-admin",
    title: "Turbowash Admin",
    company: "Gyoza",
    year: "2025-2026",
    stack: ["React", "Vite", "TanStack Query", "TanStack Table", "Zustand"],
    tags: ["React"],
    icon: "/images/cards/Turbowash.png",
    images: [
      {
        src: "/images/twa/01-twa-welcome-desktop.png",
        alt: "Welcome screen — desktop",
        type: "desktop",
      },
      {
        src: "/images/twa/02-twa-centers-list-desktop.png",
        alt: "Locations list — desktop",
        type: "desktop",
      },
      {
        src: "/images/twa/03-twa-center-detail-desktop.png",
        alt: "Location detail — desktop",
        type: "desktop",
      },
      {
        src: "/images/twa/04-twa-center-form-desktop.png",
        alt: "Location form — desktop",
        type: "desktop",
      },
      {
        src: "/images/twa/05-twa-centers-list-phone.png",
        alt: "Locations list — mobile",
        type: "mobile",
      },
      {
        src: "/images/twa/06-twa-center-detail-phone.png",
        alt: "Location detail — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "turbowash-portal",
    title: "Turbowash Portal",
    company: "Gyoza",
    url: "https://turbowash.es/",
    year: "2025-2026",
    stack: ["React", "REST API Integration"],
    tags: ["React"],
    icon: "/images/cards/Turbowash.png",
    images: [
      {
        src: "/images/twc/01-twc-welcome-phone.png",
        alt: "Welcome screen — mobile",
        type: "mobile",
      },
      {
        src: "/images/twc/02-twc-verification-phone.png",
        alt: "Verification — mobile",
        type: "mobile",
      },
      {
        src: "/images/twc/03-twc-home-phone.png",
        alt: "Summary — mobile",
        type: "mobile",
      },
      {
        src: "/images/twc/04-twc-qr-phone.png",
        alt: "QR code — mobile",
        type: "mobile",
      },
      {
        src: "/images/twc/05-twc-washes-list-phone.png",
        alt: "Wash history — mobile",
        type: "mobile",
      },
      {
        src: "/images/twc/06-twc-cars-list-phone.png",
        alt: "Vehicle list — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "turbowash-terminal",
    title: "Turbowash Terminal",
    company: "Gyoza",

    url: "https://turbowash.es/",
    year: "2025-2026",
    stack: ["React Native", "Expo", "Hardware Integration"],
    tags: ["React Native"],
    icon: "/images/cards/Turbowash.png",
    images: [
      {
        src: "/images/twt/01-twt-logged-welcome-terminal.png",
        alt: "Welcome screen — terminal",
        type: "terminal",
      },
      {
        src: "/images/twt/02-twt-washing-terminal.png",
        alt: "Wash in progress — terminal",
        type: "terminal",
      },
      {
        src: "/images/twt/03-twt-end-terminal.png",
        alt: "End screen — terminal",
        type: "terminal",
      },
    ],
  },
  {
    slug: "pulse-video-manager",
    title: "Pulse Video Manager",
    company: "Gyoza",
    year: "2025",
    stack: [
      "React",
      "Vite",
      "TanStack Query",
      "Zustand",
      "Formik",
      "i18n",
      "Media Chrome",
    ],
    tags: ["React"],
    icon: "/images/cards/Pulse.png",
    images: [
      {
        src: "/images/pulse/01-pulse-welcome-desktop.png",
        alt: "Welcome screen — desktop",
        type: "desktop",
      },
      {
        src: "/images/pulse/02-pulse-today-desktop.png",
        alt: "Today view — desktop",
        type: "desktop",
      },
      {
        src: "/images/pulse/03-pulse-videos-list-desktop.png",
        alt: "Video library — desktop",
        type: "desktop",
      },
      {
        src: "/images/pulse/04-pulse-tags-list-desktop.png",
        alt: "Tags list — desktop",
        type: "desktop",
      },
      {
        src: "/images/pulse/05-pulse-today-phone.png",
        alt: "Today view — mobile",
        type: "mobile",
      },
      {
        src: "/images/pulse/06-pulse-videos-list-phone.png",
        alt: "Video library — mobile",
        type: "mobile",
      },
      {
        src: "/images/pulse/07-pulse-playlist-list-phone.png",
        alt: "Playlist list — mobile",
        type: "mobile",
      },
      {
        src: "/images/pulse/08-pulse-tags-list-phone.png",
        alt: "Tags list — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "wezone-plan-recommendator",
    title: "Wezone Plan Recommendator",
    company: "Gyoza",
    year: "2025",
    stack: [
      "React",
      "Vite",
      "TanStack Query",
      "TanStack Router",
      "Zustand",
      "Formik",
    ],
    tags: ["React"],
    icon: "/images/cards/Wezone.png",
    images: [
      {
        src: "/images/wrp/01-wrp-welcome-desktop.png",
        alt: "Welcome screen — desktop",
        type: "desktop",
      },
      {
        src: "/images/wrp/02-wrp-steps-desktop.png",
        alt: "Steps flow — desktop",
        type: "desktop",
      },
      {
        src: "/images/wrp/03-wrp-steps-desktop.png",
        alt: "Steps flow — desktop",
        type: "desktop",
      },
      {
        src: "/images/wrp/04-wrp-cta-desktop.png",
        alt: "CTA — desktop",
        type: "desktop",
      },
      {
        src: "/images/wrp/05-wrp-results-desktop.png",
        alt: "Results screen — desktop",
        type: "desktop",
      },
      {
        src: "/images/wrp/06-wrp-welcome-phone.png",
        alt: "Welcome screen — mobile",
        type: "mobile",
      },
      {
        src: "/images/wrp/07-wrp-steps-phone.png",
        alt: "Steps flow — mobile",
        type: "mobile",
      },
      {
        src: "/images/wrp/08-wrp-steps-phone.png",
        alt: "Steps flow — mobile",
        type: "mobile",
      },
      {
        src: "/images/wrp/09-wrp-cta-phone.png",
        alt: "CTA — mobile",
        type: "mobile",
      },
      {
        src: "/images/wrp/10-wrp-results-phone.png",
        alt: "Results screen — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "wetour",
    title: "Wetour",
    company: "Gyoza",
    url: "https://wetourfit.com/",
    year: "2024-2025",
    stack: ["Next.js", "React", "SEO Optimization"],
    tags: ["Next.js"],
    icon: "/images/cards/Wetour.png",
    images: [
      {
        src: "/images/wt/01-wt-welcome-desktop.png",
        alt: "Welcome screen — desktop",
        type: "desktop",
      },
      {
        src: "/images/wt/02-wt-event-desktop.png",
        alt: "Event detail — desktop",
        type: "desktop",
      },
      {
        src: "/images/wt/03-wt-map-desktop.png",
        alt: "Map view — desktop",
        type: "desktop",
      },
      {
        src: "/images/wt/04-wt-map-filters-desktop.png",
        alt: "Map with filters — desktop",
        type: "desktop",
      },
      {
        src: "/images/wt/05-wt-map-event-desktop.png",
        alt: "Event on map — desktop",
        type: "desktop",
      },
      {
        src: "/images/wt/06-wt-welcome-phone.png",
        alt: "Welcome screen — mobile",
        type: "mobile",
      },
      {
        src: "/images/wt/07-wt-events-list-phone.png",
        alt: "Events list — mobile",
        type: "mobile",
      },
      {
        src: "/images/wt/08-wt-event-phone.png",
        alt: "Event detail — mobile",
        type: "mobile",
      },
      {
        src: "/images/wt/09-wt-map-phone.png",
        alt: "Map view — mobile",
        type: "mobile",
      },
      {
        src: "/images/wt/10-wt-map-filters-phone.png",
        alt: "Map with filters — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "aee-corporate-web",
    title: "AEE Corporate Web",
    company: "Gyoza",
    year: "2024",
    stack: ["Next.js", "React", "Strapi Blocks", "i18next", "Sass"],
    tags: ["Next.js"],
    icon: "/images/cards/AEE.png",
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
    title: "Time Tracking & Billing",
    company: "Gyoza",
    year: "2024",
    stack: [
      "React",
      "Vite",
      "Firebase",
      "Google OAuth",
      "TanStack Query",
      "Zustand",
    ],
    tags: ["React"],
    icon: "/images/cards/T3.png",
    images: [],
  },
  {
    slug: "time-tracking-workspace",
    title: "Time Tracking Workspace",
    company: "Gyoza",
    year: "2024",
    stack: [
      "React",
      "Vite",
      "TanStack Query",
      "React Date Range",
      "Zustand",
      "Formik",
    ],
    tags: ["React"],
    icon: "/images/cards/T3.png",
    images: [
      {
        src: "/images/t3/01-t3-welcome-desktop.png",
        alt: "Welcome screen — desktop",
        type: "desktop",
      },
      {
        src: "/images/t3/02-t3-home-desktop.png",
        alt: "Home — desktop",
        type: "desktop",
      },
    ],
  },
  {
    slug: "goiko-customer-area",
    title: "Goiko Customer Area",
    company: "Gyoza",
    year: "2024",
    stack: [
      "React",
      "Vite",
      "Firebase",
      "Google Maps API",
      "React Query",
      "Zustand",
    ],
    tags: ["React"],
    icon: "/images/cards/Goiko.png",
    images: [],
  },
  {
    slug: "goiko-online-menu",
    title: "Goiko Online Menu",
    company: "Gyoza",
    year: "2024",
    stack: ["React", "Vite", "React Query", "i18n", "GTM"],
    tags: ["React"],
    icon: "/images/cards/Goiko.png",
    images: [
      {
        src: "/images/gm/01-gm-products-list-phone.png",
        alt: "Product list — mobile",
        type: "mobile",
      },
      {
        src: "/images/gm/02-gm-product-detail-phone.png",
        alt: "Product detail — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "goiko-ordering",
    title: "Goiko Ordering",
    company: "Gyoza",
    url: "https://www.goiko.com/es/delivery",
    year: "2024",
    stack: [
      "Vue 3",
      "Vuex",
      "JavaScript",
      "Paycomet",
      "Deliverect",
      "Google Maps API",
    ],
    tags: ["Vue"],
    icon: "/images/cards/Goiko.png",
    images: [
      {
        src: "/images/gd/01-gd-welcome-phone.png",
        alt: "Welcome screen — mobile",
        type: "mobile",
      },
      {
        src: "/images/gd/02-gd-steps-phone.png",
        alt: "Steps flow — mobile",
        type: "mobile",
      },
      {
        src: "/images/gd/03-gd-address-steps-phone.png",
        alt: "Address step — mobile",
        type: "mobile",
      },
      {
        src: "/images/gd/04-gd-schedules-steps-phone.png",
        alt: "Schedule step — mobile",
        type: "mobile",
      },
      {
        src: "/images/gd/05-gd-products-list-phone.png",
        alt: "Product list — mobile",
        type: "mobile",
      },
      {
        src: "/images/gd/06-gd-preparing-status-phone.png",
        alt: "Preparing status — mobile",
        type: "mobile",
      },
      {
        src: "/images/gd/07-gd-delivery-status-phone.png",
        alt: "Delivery status — mobile",
        type: "mobile",
      },
      {
        src: "/images/gd/08-gd-delivered-status-phone.png",
        alt: "Delivered status — mobile",
        type: "mobile",
      },
    ],
  },
  {
    slug: "goiko-table-ordering",
    title: "Goiko Table Ordering",
    company: "Gyoza",
    year: "2024",
    stack: ["React", "Create React App", "Formik", "Yup", "GTM"],
    tags: ["React"],
    icon: "/images/cards/Goiko.png",
    images: [
      {
        src: "/images/gt/01-gt-welcome-phone.png",
        alt: "Welcome screen — mobile",
        type: "mobile",
      },
      {
        src: "/images/gt/02-gt-products-list-phone.png",
        alt: "Product list — mobile",
        type: "mobile",
      },
      {
        src: "/images/gt/03-gt-product-detail-phone.png",
        alt: "Product detail — mobile",
        type: "mobile",
      },
    ],
  },
]

/**
 * Home page: one project per client, chosen for technical depth.
 * Order: Goiko ordering → Turbowash terminal → Wetour → Wayvo → AEE → Pulse
 */
const FEATURED_ORDER = [
  "goiko-online-menu",
  "goiko-customer-area",
  "turbowash-terminal",
  "wetour",
  "wayvo",
  "pulse-video-manager",
] as const

/**
 * Returns the curated featured set for the home page (one per client).
 */
export function getFeaturedProjects(): ProjectBase[] {
  const bySlug = new Map(PROJECTS.map((p) => [p.slug, p]))
  return FEATURED_ORDER.map((slug) => bySlug.get(slug)).filter(
    (project): project is ProjectBase => project != null,
  )
}

/**
 * Returns a project by slug.
 */
export function getProject(slug: string): ProjectBase | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

/**
 * Returns previous and next projects for detail page navigation.
 */
export function getAdjacentProjects(slug: string) {
  const index = PROJECTS.findIndex((project) => project.slug === slug)
  const prev = index > 0 ? PROJECTS[index - 1] : null
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null
  return { prev, next }
}
