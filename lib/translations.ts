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
    "nav.tagline": "Product · AI Engineer",

    "hero.label": "React · React Native · MCP",
    "hero.headline": "Si no existe, lo construyo.",
    "hero.subtitle":
      "Frontend de producto en React y React Native — agentes, servidores MCP y automatización.",
    "hero.meta": "Barcelona · Disponible en remoto",
    "hero.viewWork": "Ver proyectos",

    "now.sectionIndex": "01 — AHORA",
    "now.headline": "Ahora",
    "now.subhead": "En qué estoy trabajando y qué estoy construyendo ahora mismo.",

    "mcp.sectionIndex": "02 — LAB",
    "mcp.headline": "design-context-bridge",
    "mcp.subhead":
      "Servidor MCP que expone Figma a agentes de IA: tokens, capas y espaciado, sin capturas de pantalla.",
    "mcp.explainer":
      "MCP (Model Context Protocol) es el protocolo que permite a los agentes de IA llamar a herramientas externas en lugar de interpretar capturas de pantalla. Cuando vi que nadie había conectado Figma con los agentes de forma que expusiera los tokens reales — no los píxeles — lo construí.",
    "mcp.cta": "Ver en GitHub",
    "mcp.viewLab": "Ver el lab completo →",

    "lab.sectionIndex": "LAB",
    "lab.title": "design-context-bridge",
    "lab.status": "WIP",
    "lab.backToHome": "Volver al inicio",
    "lab.howItWorks.title": "Cómo funciona",
    "lab.howItWorks.step1":
      "El servidor MCP se conecta al archivo de Figma vía API y expone su estructura — nodos, estilos, variables — como herramientas que cualquier agente compatible puede invocar.",
    "lab.howItWorks.step2":
      "Cuando un agente de IA (Cursor, Claude) necesita contexto de diseño, llama a esas herramientas en vez de pedir una captura de pantalla.",
    "lab.howItWorks.step3":
      "El agente recibe datos estructurados — tokens, capas, espaciado — y los usa para generar código que respeta el sistema de diseño desde el primer prompt.",
    "lab.capabilities.title": "Qué expone",
    "lab.about.title": "Sobre MCP",
    "lab.modes.title": "Modos de uso",
    "lab.clients.title": "Clientes compatibles",
    "lab.install.title": "Instalación",
    "lab.security.title": "Privacidad",
    "lab.disclaimer": "Independiente — no afiliado a Figma, Inc.",
    "lab.pageSubtitle": "Proyectos que construyo cuando la herramienta no existe.",
    "lab.alsoBuilding": "También en proceso",
    "lab.auralang.description": "Extensión de Chrome que traduce el audio de cualquier pestaña en tiempo real — Whisper local, sin clave de API.",
    "lab.viewDetails": "Ver detalles",
    "lab.links": "Enlaces",
    "lab.pending": "Pendiente",

    "work.sectionIndex": "03 — PROYECTOS",
    "work.sectionTitle": "Proyectos en producción",
    "work.subhead":
      "Cada proyecto de esta lista está en producción. Ninguno es un ejercicio.",
    "work.viewAll": "Ver todos los proyectos",
    "work.allIndex": "PROYECTOS",
    "work.allTitle": "Todos los proyectos",
    "work.allSubhead":
      "Trabajo web y móvil en producción con React, React Native, Next.js y Vue. Ningún proyecto de demostración.",

    "contact.headline": "¿Hablamos?",
    "contact.subline":
      "Disponible en remoto para front-end, móvil y producto con IA — interfaces en producción, MCP y tooling para equipos que trabajan con agentes.",
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
      "Product / AI Engineer. Construyo interfaces de producto en React, React Native y Next.js — y las herramientas de IA que las rodean.",
    "about.bio.2":
      "En Gyoza lideré la implementación de proyectos como Wetour (comunidad en Next.js con foco en SEO) y Turbowash (app IoT en React Native que controla pagos físicos, loyalty y la activación de máquinas), además de contribuir en Goiko.",
    "about.bio.3":
      "Mi trabajo se apoya en arquitecturas de interfaz escalables y en la gestión de estado y datos asíncronos con Zustand y TanStack Query. En paralelo construyo design-context-bridge, un servidor MCP que da a los agentes de IA contexto real de diseño desde Figma.",
    "about.bio.4":
      "En poco más de un año pasé de frontend a construir mi propio servidor MCP en producción, compatible con Cursor, Claude Code y Windsurf. Cuando una herramienta no existe, la construyo — y me aseguro de que llegue a producción.",
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
      "Liderazgo en la implementación de proyectos clave, planteando arquitecturas React escalables y adaptadas a cada cliente.",
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
    "nav.tagline": "Product · AI Engineer",

    "hero.label": "React · React Native · MCP",
    "hero.headline": "If it doesn't exist, I build it.",
    "hero.subtitle":
      "Product frontend in React and React Native — agents, MCP servers, and automation.",
    "hero.meta": "Barcelona · Available for remote work",
    "hero.viewWork": "View projects",

    "now.sectionIndex": "01 — NOW",
    "now.headline": "Now",
    "now.subhead": "What I'm working on and building right now.",

    "mcp.sectionIndex": "02 — LAB",
    "mcp.headline": "design-context-bridge",
    "mcp.subhead":
      "An MCP server that exposes Figma to AI agents: tokens, layers, and spacing — not screenshots.",
    "mcp.explainer":
      "MCP (Model Context Protocol) is the protocol that lets AI agents call external tools instead of interpreting screenshots. When I saw that nobody had connected Figma to agents in a way that exposed the actual tokens — not the pixels — I built it.",
    "mcp.cta": "View on GitHub",
    "mcp.viewLab": "View the full lab →",

    "lab.sectionIndex": "LAB",
    "lab.title": "design-context-bridge",
    "lab.status": "WIP",
    "lab.backToHome": "Back to home",
    "lab.howItWorks.title": "How it works",
    "lab.howItWorks.step1":
      "The MCP server connects to the Figma file via API and exposes its structure — nodes, styles, variables — as tools any compatible agent can call.",
    "lab.howItWorks.step2":
      "When an AI agent (Cursor, Claude) needs design context, it calls those tools instead of asking for a screenshot.",
    "lab.howItWorks.step3":
      "The agent receives structured data — tokens, layers, spacing — and uses it to generate code that respects the design system from the first prompt.",
    "lab.capabilities.title": "What it exposes",
    "lab.about.title": "About MCP",
    "lab.modes.title": "Usage modes",
    "lab.clients.title": "Supported clients",
    "lab.install.title": "Install",
    "lab.security.title": "Privacy",
    "lab.disclaimer": "Independent — not affiliated with Figma, Inc.",
    "lab.pageSubtitle": "Projects I build when the tool doesn't exist.",
    "lab.alsoBuilding": "Also in progress",
    "lab.auralang.description": "Chrome extension that translates any tab's audio in real time — local Whisper, no API key.",
    "lab.viewDetails": "View details",
    "lab.links": "Links",
    "lab.pending": "Pending",

    "work.sectionIndex": "03 — SELECTED WORK",
    "work.sectionTitle": "Production projects",
    "work.subhead":
      "Every project on this list is in production. None of them are exercises.",
    "work.viewAll": "View all projects",
    "work.allIndex": "PROJECTS",
    "work.allTitle": "All projects",
    "work.allSubhead":
      "Web and mobile work in production with React, React Native, Next.js and Vue. No demo projects.",

    "contact.headline": "Get in touch",
    "contact.subline":
      "Available remotely for front-end, mobile, and AI product roles — production interfaces, MCP, and tooling for teams building with agents.",
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
      "Product / AI Engineer. I build product interfaces in React, React Native, and Next.js — and the AI tooling around them.",
    "about.bio.2":
      "At Gyoza I led the implementation of projects like Wetour (a Next.js community with an SEO focus) and Turbowash (a React Native IoT app controlling physical payments, loyalty, and machine activation), alongside contributing to Goiko.",
    "about.bio.3":
      "My work is grounded in scalable UI architecture and in state and async data management with Zustand and TanStack Query. In parallel I build design-context-bridge, an MCP server that gives AI agents real design context from Figma.",
    "about.bio.4":
      "In little over a year I went from frontend to shipping my own MCP server in production — compatible with Cursor, Claude Code, and Windsurf. When a tool doesn't exist, I build it, and I make sure it ships.",
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
      "Led the implementation of key projects, defining scalable React architectures tailored to each client.",
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
