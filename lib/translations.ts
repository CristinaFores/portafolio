/**
 * Translations for es/en. Default locale is device preference; user can override.
 */

export type Locale = "es" | "en"

export const defaultLocale: Locale = "en"

export const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.work": "Proyectos",
    "nav.linkedIn": "LinkedIn ↗",
    "nav.gitHub": "GitHub ↗",
    "nav.email": "Enviar email",
    "nav.toggleMenu": "Abrir o cerrar menú",
    "nav.themeLight": "Usar tema claro",
    "nav.themeDark": "Usar tema oscuro",

    "hero.role": "Frontend Developer",
    "hero.subtitle":
      "Hago que productos complejos se sientan simples. Especializada en React y React Native (Expo / Expo Router / EAS), con experiencia en Next.js (App Router).Habilidades en arquitectura de UI, manejo de estado (Zustand), y gestión de datos asíncronos (TanStack Query).",
    "hero.location": "Barcelona, España · Remoto y reubicación",
    "hero.viewWork": "Proyectos",
    "hero.aboutMe": "Sobre mí",

    "contact.title": "Trabajemos juntos",

    "work.sectionTitle": "Proyectos destacados",
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
      "Desarrolladora Frontend especializada en React y React Native (Expo / Expo Router / EAS), con experiencia en Next.js (App Router). Fuerte en arquitectura de UI, manejo de estado (Zustand), datos asíncronos (TanStack Query) y consumo de APIs con Axios.",
    "about.bio.2":
      "He trabajado en proyectos complejos desde la fase inicial hasta producción, incluyendo flujos con RBAC, dispositivos Android y terminales de pago. Participo en decisiones técnicas, optimización de rendimiento y mejora continua del producto.",
    "about.bio.3":
      "Integro herramientas de IA y desarrollo asistido (Cursor, MCP servers, OpenAI) en mi flujo diario para acelerar entregas y mejorar la calidad del código. También automatizo procesos internos con n8n.",
    "about.bio.4":
      "Me caracterizo por ser constante, responsable y orientada a la calidad del código. Disfruto colaborando en equipos ágiles, resolviendo problemas reales y construyendo soluciones que aporten valor a largo plazo.",
    "about.bio.availability":
      "Actualmente abierta a oportunidades remotas o híbridas en entornos de producto y tecnología.",
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
    "about.experience.gyoza.title": "GYOZA TECHNOLOGY STUDIO S.L. — Frontend Developer (Remoto)",
    "about.experience.gyoza.date": "Agosto 2023 – Actualidad",
    "about.experience.gyoza.summary":
      "Desarrollo de productos web y móviles para clientes y plataformas internas, contribuyendo en proyectos como <strong>Goiko</strong>, <strong>Wetour</strong>, <strong>Turbowash</strong> e integraciones con dispositivos de pago.",
    "about.experience.gyoza.bullets": [
      "Construcción de interfaces y funcionalidades con React, React Native (Expo) y Next.js.",
      "Implementación de pantallas de compra/pago, validaciones y experiencias de usuario end-to-end desde cero.",
      "Integración de APIs y servicios externos (Axios), gestión de datos asíncronos (TanStack Query) y estado global (Zustand).",
      "UI reutilizable y mantenible con SCSS/Sass + BEM, diseño responsive y arquitectura basada en componentes.",
      "Colaboración estrecha con equipos de backend, producto y diseño para entregar funcionalidades listas para producción.",
    ],
    "about.education.items": [
      {
        year: "2022",
        label:
          "ISDI Coders — Full Stack Web Development · Barcelona\nJun 2022 – Dic 2022\nReact, JavaScript/TypeScript, Node.js/Express, MongoDB, testing (Jest/Cypress), Figma, Scrum.",
      },
    ],
    "about.skills.langs.native": "Español (nativo)",
    "about.skills.langs.english": "Inglés – Intermedio-Alto (B2+)",
    "about.coreStack.text":
      "React · React Native · Expo · Vite · Next.js · Vue 3 · TypeScript · Zustand · TanStack Query · Pinia · Formik · Yup · Axios · Firebase · Google Maps API · i18next · Sass · n8n · Git",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Projects",
    "nav.linkedIn": "LinkedIn ↗",
    "nav.gitHub": "GitHub ↗",
    "nav.email": "Send email",
    "nav.toggleMenu": "Toggle menu",
    "nav.themeLight": "Use light theme",
    "nav.themeDark": "Use dark theme",

    "hero.role": "Frontend Developer",
    "hero.subtitle":
      " I make complex products feel simple. Specializing in React and React Native (Expo / Expo Router / EAS), with experience in Next.js (App Router). Skilled in UI architecture, state management (Zustand), and asynchronous data management (TanStack Query)",
    "hero.location": "Barcelona, Spain · Open to Remote & Relocation",
    "hero.viewWork": "Projects",
    "hero.aboutMe": "About Me",

    "contact.title": "Let's work together",

    "work.sectionTitle": "Selected Work",
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
      "Frontend developer specialized in React and React Native (Expo / Expo Router / EAS), with experience in Next.js (App Router). Strong in UI architecture, state management (Zustand), async data (TanStack Query) and API consumption with Axios.",
    "about.bio.2":
      "I have worked on complex projects from inception to production, including RBAC flows, Android devices and payment terminals. I contribute to technical decisions, performance optimization and continuous product improvement.",
    "about.bio.3":
      "I integrate AI-assisted development tools (Cursor, MCP servers, OpenAI) into my daily workflow to ship faster and improve code quality. I also automate internal processes with n8n.",
    "about.bio.4":
      "I am consistent, responsible and focused on code quality. I enjoy collaborating in agile teams, solving real problems and building solutions that add long-term value.",
    "about.bio.availability":
      "Currently open to remote or hybrid opportunities in product and technology environments.",
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
    "about.experience.gyoza.title": "GYOZA TECHNOLOGY STUDIO S.L. — Frontend Developer (Remote)",
    "about.experience.gyoza.date": "February 2024 – Present",
    "about.experience.gyoza.summary":
      "Developed web and mobile products for clients and internal platforms, contributing to projects such as <strong>Goiko</strong>, <strong>Wetour</strong>, <strong>Turbowash</strong>, and payment-device integrations.",
    "about.experience.gyoza.bullets": [
      "Built interfaces and features using React, React Native (Expo), and Next.js.",
      "Implemented purchase/payment screens, validations, and end-to-end user experiences from start to finish.",
      "Integrated APIs and external services (Axios), managing async data (TanStack Query) and global state (Zustand).",
      "Built reusable, maintainable UI with SCSS/Sass + BEM, responsive design, and component-based architecture.",
      "Collaborated closely with backend, product, and design teams to deliver production-ready features.",
    ],
    "about.education.items": [
      {
        year: "2022",
        label:
          "ISDI Coders — Full Stack Web Development · Barcelona\nJun 2022 – Dec 2022\nReact, JavaScript/TypeScript, Node.js/Express, MongoDB, testing (Jest/Cypress), Figma, Scrum.",
      },
    ],
    "about.skills.langs.native": "Spanish (Native)",
    "about.skills.langs.english": "English – Upper-Intermediate (B2+)",
    "about.coreStack.text":
      "React · React Native · Expo · Vite · Next.js · Vue 3 · TypeScript · Zustand · TanStack Query · Pinia · Formik · Yup · Axios · Firebase · Google Maps API · i18next · Sass · n8n · Git",
  },
} as const
