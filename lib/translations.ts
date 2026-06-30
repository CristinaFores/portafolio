/**
 * Translations for es/en. Default locale is device preference; user can override.
 */

export type Locale = "es" | "en"

export const defaultLocale: Locale = "es"

export const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.lab": "Lab",
    "nav.work": "Proyectos",
    "nav.linkedIn": "LinkedIn ↗",
    "nav.gitHub": "GitHub ↗",
    "nav.cv": "Ver CV",
    "nav.email": "Enviar email",
    "nav.toggleMenu": "Abrir o cerrar menú",
    "nav.themeLight": "Usar tema claro",
    "nav.themeDark": "Usar tema oscuro",

    "hero.label": "React · React Native · MCP",
    "hero.headline": "Product / AI Engineer",
    "hero.subtitle":
      "Desarrollo interfaces web y móviles para flujos reales de producto: pedidos, pagos, acceso, dispositivos Android y datos asíncronos. También construyo herramientas MCP como design-context-bridge.",
    "hero.meta": "Barcelona · Disponible en remoto",
    "hero.viewWork": "Ver proyectos",
    "hero.visualLabel": "Herramienta propia · design-context-bridge",
    "hero.visualCaption":
      "Conecta Figma con agentes de IA mediante MCP. El diseño llega como contexto estructurado — tokens, capas y espaciado —, no como capturas sueltas.",
    "hero.visualLink": "Ver cómo funciona →",

    "mcp.sectionIndex": "02 — LAB",
    "mcp.headline": "design-context-bridge",
    "mcp.subhead":
      "Servidor MCP que expone Figma a agentes de IA: tokens, capas y espaciado, sin capturas de pantalla.",
    "mcp.explainer":
      "MCP (Model Context Protocol) es el estándar para que herramientas como Cursor accedan a contexto estructurado del diseño. Lo he desarrollado para que el código respete el sistema de diseño desde el primer prompt.",
    "mcp.cta": "Ver en GitHub",
    "mcp.cap1": "Tokens y variables de Figma",
    "mcp.cap2": "Capas y componentes",
    "mcp.cap3": "Plugin en directo o API headless",

    "work.sectionIndex": "03 — PROYECTOS",
    "work.sectionTitle": "Proyectos en producción",
    "work.subhead":
      "Interfaces web y móvil con React y React Native, aplicadas en producto real.",
    "work.viewAll": "Ver todos los proyectos",
    "work.allIndex": "PROYECTOS",
    "work.allTitle": "Todos los proyectos",
    "work.allSubhead":
      "Trabajo web y móvil en producción con React, React Native, Next.js y Vue.",

    "contact.headline": "¿Hablamos?",
    "contact.subline":
      "Disponible en remoto para roles de front-end y móvil donde la calidad de interfaz y el tooling de IA formen parte del día a día.",
    "contact.title": "¿Hablamos?",
    "contact.sectionIndex": "04 — CONTACTO",

    "footer.tagline": "Product / AI Engineer · Barcelona",
    "work.companyBadge": "Proyecto Gyoza",

    "project.allProjects": "Todos los proyectos",
    "project.visitProject": "Ver proyecto",
    "project.viewInFigma": "Ver en Figma",
    "project.theChallenge": "El reto",
    "project.myRole": "Mi rol",
    "project.keyFeatures": "Características principales",
    "project.howItWorks": "Cómo funciona",
    "project.whyIBuiltThis": "Por qué lo construí",
    "project.uxProcess": "Proceso UX",
    "project.userTestInsights": "Insights de tests de usuario",
    "project.keyFindings": "Hallazgos clave",
    "project.theOutcome": "El resultado",
    "project.gallery": "Galería",
    "project.prevImage": "Imagen anterior",
    "project.nextImage": "Imagen siguiente",
    "project.goToImage": "Ir a la imagen",

    "about.title": "Sobre mí",
    "about.bio.1":
      "Product / AI Engineer especializada en interfaces web y móviles con React, React Native y Next.js.",
    "about.bio.2":
      "He trabajado en producto real: Goiko, Wetour y Turbowash, incluyendo flujos de compra, control de acceso, dispositivos Android y terminales de pago.",
    "about.bio.3":
      "Mi foco está en arquitectura de interfaz, estado y datos asíncronos con Zustand y TanStack Query. También construyo design-context-bridge, un servidor MCP que conecta Figma con agentes de IA.",
    "about.bio.4":
      "Me gusta colaborar en equipos ágiles, resolver problemas concretos y mantener código claro y mantenible.",
    "about.bio.availability":
      "Barcelona · Disponible en remoto.",
    "about.skills.title": "Skills",
    "about.skills.programming": "Lenguajes y frameworks",
    "about.skills.state": "Estado y datos",
    "about.skills.forms": "Formularios y validación",
    "about.skills.mobile": "Desarrollo móvil",
    "about.skills.automation": "Automatización e IA",
    "about.skills.ui": "UI y estilos",
    "about.skills.build": "Build y herramientas",
    "about.skills.quality": "Calidad de código",
    "about.skills.languages": "Idiomas",
    "about.education.title": "Educación",
    "about.experience.title": "Experiencia profesional",
    "about.coreStack.title": "Stack principal",
    "about.experience.gyoza.title": "GYOZA TECHNOLOGY STUDIO S.L. — Desarrollo front-end (Remoto)",
    "about.experience.gyoza.date": "Agosto 2023 – Marzo 2026",
    "about.experience.gyoza.summary":
      "Desarrollo de productos web y móviles para clientes y plataformas internas, contribuyendo en proyectos como <strong>Goiko</strong>, <strong>Wetour</strong>, <strong>Turbowash</strong> e integraciones con dispositivos de pago.",
    "about.experience.gyoza.bullets": [
      "Planteamiento de arquitecturas React escalables y adaptadas a las necesidades de producto.",
      "Construcción de interfaces y funcionalidades con React, React Native (Expo) y Next.js.",
      "Implementación de flujos de compra, pago, validación y experiencia end-to-end.",
      "Integración de APIs, servicios externos y datos asíncronos con Axios, TanStack Query y Zustand.",
      "Trabajo en productos con dispositivos Android, terminales de pago, loyalty y activación de máquinas vía pulsos.",
    ],
    "about.experience.freelance.title": "Software Developer — Freelancer · Remoto (España)",
    "about.experience.freelance.date": "Feb 2022 – Agosto 2023",
    "about.experience.freelance.summary":
      "Desarrollo de UI web con React y APIs Node.js/Express, incluyendo integración con MongoDB. Trabajé en proyectos pequeños y medianos: formularios, autenticación, integración/consumo de APIs y componentes reutilizables.",
    "about.education.items": [
      {
        year: "2022",
        label:
          "ISDI Coders — Full Stack Web Development · Barcelona\nJun 2022 – Dic 2022\nReact, JavaScript/TypeScript, Node.js/Express, MongoDB, testing (Jest/Cypress), Figma, Scrum.",
      },
    ],
    "about.skills.langs.native": "Español / Catalán (nativo)",
    "about.skills.langs.english": "Inglés (Intermedio)",
    "about.coreStack.text":
      "React · React Native · Expo · Vite · Next.js · Vue 3 · TypeScript · Zustand · TanStack Query · Pinia · Formik · Yup · Axios · Firebase · Google Maps API · i18next · Sass · n8n · Git",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.lab": "Lab",
    "nav.work": "Projects",
    "nav.linkedIn": "LinkedIn ↗",
    "nav.gitHub": "GitHub ↗",
    "nav.cv": "View CV",
    "nav.email": "Send email",
    "nav.toggleMenu": "Toggle menu",
    "nav.themeLight": "Use light theme",
    "nav.themeDark": "Use dark theme",

    "hero.label": "React · React Native · MCP",
    "hero.headline": "Product / AI Engineer",
    "hero.subtitle":
      "I build web and mobile interfaces for real product flows: ordering, payments, access control, Android devices, and async data. I also build MCP tooling like design-context-bridge.",
    "hero.meta": "Barcelona · Available for remote work",
    "hero.viewWork": "View projects",
    "hero.visualLabel": "Own tooling · design-context-bridge",
    "hero.visualCaption":
      "Connects Figma to AI agents via MCP. Design arrives as structured context — tokens, layers, and spacing — not loose screenshots.",
    "hero.visualLink": "See how it works →",

    "mcp.sectionIndex": "02 — LAB",
    "mcp.headline": "design-context-bridge",
    "mcp.subhead":
      "An MCP server that exposes Figma to AI agents: tokens, layers, and spacing — not screenshots.",
    "mcp.explainer":
      "MCP (Model Context Protocol) is the standard for tools like Cursor to access structured design context. I built this so code respects the design system from the first prompt.",
    "mcp.cta": "View on GitHub",
    "mcp.cap1": "Figma tokens & variables",
    "mcp.cap2": "Layers & components",
    "mcp.cap3": "Live plugin or headless API",

    "work.sectionIndex": "03 — SELECTED WORK",
    "work.sectionTitle": "Production projects",
    "work.subhead":
      "Web and mobile interfaces with React and React Native, shipped in production.",
    "work.viewAll": "View all projects",
    "work.allIndex": "PROJECTS",
    "work.allTitle": "All projects",
    "work.allSubhead":
      "Web and mobile work shipped in production with React, React Native, Next.js and Vue.",

    "contact.headline": "Get in touch",
    "contact.subline":
      "Available remotely for front-end and mobile roles where interface quality and AI tooling are part of the day-to-day.",
    "contact.title": "Get in touch",
    "contact.sectionIndex": "04 — CONTACT",

    "footer.tagline": "Product / AI Engineer · Barcelona",

    "work.companyBadge": "Gyoza project",

    "project.allProjects": "All Projects",
    "project.visitProject": "Visit project",
    "project.viewInFigma": "View in Figma",
    "project.theChallenge": "The Challenge",
    "project.myRole": "My Role",
    "project.keyFeatures": "Key Features",
    "project.howItWorks": "How It Works",
    "project.whyIBuiltThis": "Why I Built This",
    "project.uxProcess": "UX Process",
    "project.userTestInsights": "User Testing Insights",
    "project.keyFindings": "Key Findings",
    "project.theOutcome": "The Outcome",
    "project.gallery": "Gallery",
    "project.prevImage": "Previous image",
    "project.nextImage": "Next image",
    "project.goToImage": "Go to image",

    "about.title": "About Me",
    "about.bio.1":
      "Product / AI Engineer specialized in web and mobile interfaces with React, React Native, and Next.js.",
    "about.bio.2":
      "I have worked on real product work across Goiko, Wetour, and Turbowash, including purchase flows, access control, Android devices, and payment terminals.",
    "about.bio.3":
      "My focus is UI architecture, state, and async data with Zustand and TanStack Query. I also build design-context-bridge, an MCP server that connects Figma to AI agents.",
    "about.bio.4":
      "I enjoy working in agile teams, solving concrete problems, and keeping code clear and maintainable.",
    "about.bio.availability":
      "Barcelona · Available for remote work.",
    "about.skills.title": "Skills",
    "about.skills.programming": "Programming Languages & Frameworks",
    "about.skills.state": "State Management & Data",
    "about.skills.forms": "Forms & Validation",
    "about.skills.mobile": "Mobile Development",
    "about.skills.automation": "Automation & AI",
    "about.skills.ui": "UI & Styling",
    "about.skills.build": "Build & Tooling",
    "about.skills.quality": "Code Quality",
    "about.skills.languages": "Languages",
    "about.education.title": "Education",
    "about.experience.title": "Professional Experience",
    "about.coreStack.title": "Core Stack",
    "about.experience.gyoza.title": "GYOZA TECHNOLOGY STUDIO S.L. — Front-end development (Remote)",
    "about.experience.gyoza.date": "Aug 2023 – Mar 2026",
    "about.experience.gyoza.summary":
      "Developed web and mobile products for clients and internal platforms, contributing to projects such as <strong>Goiko</strong>, <strong>Wetour</strong>, <strong>Turbowash</strong>, and payment-device integrations.",
    "about.experience.gyoza.bullets": [
      "Defined scalable React architectures tailored to product needs.",
      "Built interfaces and features using React, React Native (Expo), and Next.js.",
      "Implemented purchase, payment, validation, and end-to-end user flows.",
      "Integrated APIs, external services, and async data with Axios, TanStack Query, and Zustand.",
      "Worked on products involving Android devices, payment terminals, loyalty, and machine activation through pulses.",
    ],
    "about.experience.freelance.title": "Software Developer — Freelancer · Remote (Spain)",
    "about.experience.freelance.date": "Feb 2022 – Aug 2023",
    "about.experience.freelance.summary":
      "Web UI development with React and Node.js/Express APIs, including MongoDB integration. Worked on small to mid-sized projects: forms, authentication, API integration/consumption, and reusable components.",
    "about.education.items": [
      {
        year: "2022",
        label:
          "ISDI Coders — Full Stack Web Development · Barcelona\nJun 2022 – Dec 2022\nReact, JavaScript/TypeScript, Node.js/Express, MongoDB, testing (Jest/Cypress), Figma, Scrum.",
      },
    ],
    "about.skills.langs.native": "Spanish / Catalan (Native)",
    "about.skills.langs.english": "English (Intermediate)",
    "about.coreStack.text":
      "React · React Native · Expo · Vite · Next.js · Vue 3 · TypeScript · Zustand · TanStack Query · Pinia · Formik · Yup · Axios · Firebase · Google Maps API · i18next · Sass · n8n · Git",
  },
} as const
