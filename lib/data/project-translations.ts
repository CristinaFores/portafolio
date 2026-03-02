/**
 * Translated content for each project (es/en). Merged with project base data in components.
 *
 * Image alt text pattern (use for imageAlts and for project.images[].alt in projects.ts):
 * - Do not repeat the project name (user is already on that project page).
 * - Format: "[Screen or section description] — [desktop|mobile]" (EN) / "[Descripción] — [escritorio|móvil]" (ES).
 * - Same screen on desktop and mobile must use the same description; only the device suffix changes.
 * - Keep wording consistent across projects (e.g. always "Homepage", "News section", "Welcome screen", "Results screen").
 */

import type { Locale } from "../translations"

export interface ProjectTranslation {
  title: string
  subtitle: string
  challenge: string
  myRole: string
  features: string[]
  results: string[]
  imageAlts: string[]
  howItWorks?: string[]
}

type ProjectTranslations = Record<string, ProjectTranslation>

export const projectTranslations: Record<Locale, ProjectTranslations> = {
  es: {
    "turbowash-terminal": {
      title: "Turbowash — Kiosko de pago",
      subtitle: "La app de la pantalla del kiosco en el túnel de lavado",
      challenge:
        "Turbowash necesitaba la pantalla que el cliente toca en el kiosco del túnel: que se viera bien a pleno sol, aceptar tarjeta y efectivo, y hablar con la máquina de lavado por señales de pulso para arrancar, pausar y terminar.",
      myRole:
        "Desarrollé el frontend en React Native (Expo). Lo más delicado fue conectar en tiempo real con el hardware por pulsos: cada estado del lavado (inicio, pausa, fin) se refleja en la app y se envía a la máquina.",
      features: [
        "Pago con tarjeta y efectivo",
        "Lavado por tiempo o por euros",
        "Comunicación por pulsos con el hardware en tiempo real",
        "Interfaz pensada para exterior (contraste alto, botones grandes)",
      ],
      results: [
        "En uso en más de 5 túneles con transacciones reales cada día",
        "Los clientes usan el kiosco sin explicaciones; no hace falta formación",
      ],
      howItWorks: [
        "El cliente elige tipo de lavado y paga en el kiosco (tarjeta o efectivo).",
        "El hardware recibe pulsos y arranca el ciclo de lavado.",
        "La pantalla muestra cuenta atrás e importe; permite pausar y reanudar por pulsos.",
        "Los socios pueden aplicar precios de club y canjear cupones.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — terminal",
        "Lavado en curso — terminal",
        "Pantalla de fin — terminal",
      ],
    },
    "turbowash-portal": {
      title: "Turbowash — Área de cliente",
      subtitle: "Vehículos, facturas y cupones en un solo sitio",
      challenge:
        "Los clientes de Turbowash necesitaban un sitio donde ver su historial de lavados, dar de alta o editar vehículos, descargar facturas y usar los cupones de fidelidad, con un aspecto cuidado y navegación clara.",
      myRole:
        "Desarrollé el frontend del área de cliente: perfil, alta y edición de vehículos con selector de tipo y color, historial de facturas y bloque de cupones. Todo conectado a la API de Turbowash.",
      features: [
        "Gestión de vehículos con selector de tipo y color",
        "Historial de lavados con detalle",
        "Descarga de facturas y datos de facturación",
        "Cupones de fidelidad para canjear en el kiosco",
      ],
      results: [
        "Área de cliente clara y estable en producción para los usuarios de Turbowash",
        "Menos consultas a soporte sobre facturas y datos de cuenta",
      ],
      howItWorks: [
        "El usuario entra y ve el resumen con el QR para usar en el túnel.",
        "Puede añadir o editar vehículos (tipo y color).",
        "El historial de lavados y las facturas están disponibles para descargar.",
        "Los cupones de fidelidad se muestran en la app y se canjean en el kiosco.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — móvil",
        "Verificación — móvil",
        "Resumen — móvil",
        "Código QR — móvil",
        "Historial de lavados — móvil",
        "Lista de vehículos — móvil",
      ],
    },
    wetour: {
      title: "Wetour — Plataforma de la comunidad",
      subtitle: "Red Wezone: eventos, centros y feed de la comunidad",
      challenge:
        "Wezone, una red de más de 11 centros y miles de socios, necesitaba una web donde la comunidad pudiera descubrir eventos, ver centros deportivos y participar en publicaciones y retos, con buena presencia en buscadores.",
      myRole:
        "Desarrollé el frontend en Next.js con foco en SEO y rendimiento. Participé en investigación UX y en el diseño de la arquitectura de páginas y flujos de inscripción a eventos y pagos.",
      features: [
        "Directorio de más de 300 centros deportivos",
        "Cientos de eventos al mes con inscripción y pago",
        "Gamificación: retos y pasaporte WZN",
        "Feed de publicaciones de la comunidad",
      ],
      results: [
        "Plataforma en producción con crecimiento orgánico gracias al SEO",
        "Nueva vía de ingresos con inscripciones de pago a eventos",
      ],
      howItWorks: [
        "El usuario explora centros y eventos en el directorio y en el mapa.",
        "Se inscribe a eventos y paga cuando aplica; suma retos y pasaporte WZN.",
        "El feed muestra publicaciones y actividad de la comunidad.",
        "El equipo gestiona contenidos vía CMS; los datos alimentan BI.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — escritorio",
        "Detalle de evento — escritorio",
        "Vista de mapa — escritorio",
        "Mapa con filtros — escritorio",
        "Evento en el mapa — escritorio",
        "Pantalla de bienvenida — móvil",
        "Listado de eventos — móvil",
        "Detalle de evento — móvil",
        "Vista de mapa — móvil",
        "Mapa con filtros — móvil",
      ],
    },
    "goiko-ordering": {
      title: "Goiko — Pedidos online",
      subtitle: "Pedidos a domicilio y recogida en más de 100 locales",
      challenge:
        "Goiko, con más de 100 locales en España, necesitaba una web de pedidos a medida: domicilio y recogida, menú sincronizado con cocina y TPV, pagos seguros y seguimiento del repartidor en el mapa.",
      myRole:
        "Me encargué del frontend completo de la plataforma de pedidos: desde la elección de restaurante por ubicación hasta el checkout con Paycomet, pasando por el carrito, la programación de pedidos y el seguimiento en tiempo real en Google Maps.",
      features: [
        "Asignación de restaurante por dirección o geolocalización (domicilio y recogida)",
        "Login sin contraseña por enlace mágico en el email",
        "Seguimiento del pedido con posición del repartidor en el mapa",
        "Menú sincronizado con Deliverect en todos los locales",
        "Pago con tarjeta (Paycomet, tokenización) y cupones ligados al BI de Goiko",
        "Pedidos programados y upselling en carrito y checkout",
      ],
      results: [
        "Plataforma en producción con pedidos reales cada día en todos los locales",
        "Integración con los TPV y cocina vía Deliverect",
        "Menos dependencia de apps externas de reparto",
      ],
      howItWorks: [
        "El usuario introduce dirección o permite ubicación; se asigna el restaurante.",
        "El menú viene de Deliverect; el carrito permite combos y personalización.",
        "En checkout: pago con Paycomet, login por enlace mágico y opción de pedido programado.",
        "Tras confirmar, se sigue al repartidor en el mapa; los cupones se validan contra el BI de Goiko.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — móvil",
        "Flujo de pasos — móvil",
        "Paso de dirección — móvil",
        "Paso de horario — móvil",
        "Lista de productos — móvil",
        "Estado preparando — móvil",
        "Estado en reparto — móvil",
        "Estado entregado — móvil",
      ],
    },
    "turbowash-admin": {
      title: "Turbowash — Panel de administración",
      subtitle: "Panel interno para ubicaciones, precios y operación del día a día",
      challenge:
        "Turbowash necesitaba una herramienta interna para que el equipo gestionara ubicaciones, configuraciones de lavado, precios y datos operativos sin depender de desarrollo en cada cambio.",
      myRole:
        "Desarrollé el frontend del panel de administración: tablas de datos con filtros y paginación, formularios con validación (Formik/Yup) e integración con la API para que el equipo pudiera actualizar y consultar datos por su cuenta.",
      features: [
        "Gestión de ubicaciones y terminales",
        "Precios y configuración de lavados",
        "Tablas con ordenación, filtros y paginación",
        "Flujos de formularios con validación y manejo de errores",
      ],
      results: [
        "El equipo operativo puede actualizar configuración y consultar datos de forma autónoma",
        "Una sola SPA en React alineada con el resto del stack front de Turbowash",
      ],
      howItWorks: [
        "El equipo entra en el panel de administración.",
        "Gestiona ubicaciones y terminales desde tablas con filtros y paginación.",
        "Actualiza precios y configuración de lavados mediante formularios con validación.",
        "Los cambios se guardan vía API; el equipo operativo puede trabajar sin depender de desarrollo para el día a día.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — escritorio",
        "Lista de ubicaciones — escritorio",
        "Detalle de ubicación — escritorio",
        "Formulario de ubicación — escritorio",
        "Lista de ubicaciones — móvil",
        "Detalle de ubicación — móvil",
      ],
    },
    "goiko-customer-area": {
      title: "Goiko — Área de cliente",
      subtitle: "Cuenta, historial de pedidos, direcciones guardadas y fidelidad",
      challenge:
        "Goiko necesitaba un área de cliente donde los usuarios gestionaran su perfil, historial de pedidos, direcciones guardadas y beneficios de fidelidad, con una experiencia coherente en todos los dispositivos.",
      myRole:
        "Desarrollé el frontend: perfil y direcciones con Google Maps, historial de pedidos y flujo de repetir pedido, Firebase Auth y bloque de QR/fidelidad para reutilizar datos en el checkout.",
      features: [
        "Gestión de perfil y direcciones con Google Maps",
        "Historial de pedidos y flujo de repetir pedido",
        "Firebase Authentication y reCAPTCHA opcional",
        "Códigos QR y sección de fidelidad",
      ],
      results: [
        "Área de cliente unificada que acompaña al flujo principal de pedidos de Goiko",
        "Reutilización de direcciones y preferencias para un checkout más rápido",
      ],
      howItWorks: [
        "El usuario inicia sesión con Firebase (email o social); tiene acceso al perfil y a las direcciones guardadas.",
        "Puede añadir o editar direcciones con Google Maps; se reutilizan en el checkout de la app de pedidos.",
        "Ve el historial de pedidos y puede lanzar un «repetir pedido» desde uno anterior.",
        "La sección de fidelidad y QR da acceso a los beneficios ligados a la cuenta Goiko.",
      ],
      imageAlts: [],
    },
    "goiko-online-menu": {
      title: "Goiko — Menú digital",
      subtitle: "Menú completo online o por QR en el restaurante",
      challenge:
        "Goiko quería un menú digital independiente que se pudiera abrir en el local por QR o por enlace: fácil de navegar y buscar, con el mismo aspecto y datos que la app de pedidos.",
      myRole:
        "Desarrollé el frontend: estructura del menú, búsqueda y filtros, imágenes con lazy loading e i18n; analytics con GTM para ver cómo se usa el menú.",
      features: [
        "Navegación completa del menú con categorías y búsqueda",
        "Detalle de producto e información nutricional",
        "i18n y maquetación responsive",
        "Soporte de código QR para uso en el local",
      ],
      results: [
        "Menú independiente utilizable desde QR o enlace directo",
        "Datos de producto y marca compartidos con la app principal de pedidos",
      ],
      howItWorks: [
        "El usuario abre el menú por QR en el local o por un enlace compartido.",
        "Navega por categorías o usa la búsqueda; el detalle del producto muestra descripción e información nutricional.",
        "El contenido es multiidioma (i18n) y responsive; las imágenes se cargan en lazy.",
        "El menú es solo lectura; el pedido se hace en la app principal de Goiko. Los analytics (GTM) registran el uso.",
      ],
      imageAlts: [
        "Lista de productos — móvil",
        "Detalle de producto — móvil",
      ],
    },
    "goiko-table-ordering": {
      title: "Goiko — Pedidos en mesa",
      subtitle: "Pedir desde la mesa dentro del restaurante",
      challenge:
        "Goiko quería un flujo sencillo para que los clientes pidieran desde la mesa en una app dedicada: pocos pasos y confirmación clara para cocina.",
      myRole:
        "Desarrollé el frontend de pedidos en mesa: flujo, validación de formularios e integración con el backend de pedidos; GTM para analytics y ver uso.",
      features: [
        "Flujo de pedido por mesa",
        "Selección de menú y carrito con validación",
        "Confirmación de pedido y estado",
        "Integración de analytics (GTM)",
      ],
      results: [
        "Pedidos en restaurante más rápidos sin depender de dispositivos del personal",
        "Misma imagen que el resto de productos digitales de Goiko",
      ],
      howItWorks: [
        "El cliente abre la app de pedidos en mesa e indica o identifica su mesa.",
        "Navega el menú, añade productos al carrito y confirma; los formularios validan la selección.",
        "El pedido se envía a cocina; la pantalla muestra confirmación y estado.",
        "Los analytics (GTM) registran el uso para que el equipo pueda ver cómo funciona el flujo.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — móvil",
        "Lista de productos — móvil",
        "Detalle de producto — móvil",
      ],
    },
    "aee-corporate-web": {
      title: "AEE — Web corporativa",
      subtitle: "Sitio de la empresa con contenido en CMS y varios idiomas",
      challenge:
        "AEE necesitaba una web corporativa moderna con contenido gestionado en un CMS (Strapi), varios idiomas y una estructura que pudiera crecer con nuevas secciones y campañas.",
      myRole:
        "Desarrollé el frontend con Next.js: renderizado de bloques Strapi, i18n (i18next), maquetación responsive y carruseles/secciones para campañas, para que marketing pudiera actualizar contenido sin tocar código.",
      features: [
        "Páginas dinámicas con Strapi Blocks renderer",
        "Multiidioma (i18next) y formato de fechas",
        "Maquetación responsive y optimización de imágenes",
        "Carruseles y secciones dinámicas",
      ],
      results: [
        "El equipo de marketing puede actualizar contenido sin tocar código",
        "Estructura SEO-friendly y marca consistente",
      ],
      howItWorks: [
        "El contenido se edita en Strapi (CMS); las páginas se construyen a partir de bloques (texto, imágenes, carruseles, etc.).",
        "El frontend en Next.js obtiene y renderiza esos bloques; la maquetación es responsive y orientada al SEO.",
        "El multiidioma se resuelve con i18next; textos y fechas se adaptan al idioma elegido.",
        "Nuevas secciones o campañas se añaden desde el CMS; la estructura del sitio permite crecer sin tocar código.",
      ],
      imageAlts: [
        "Portada — escritorio",
        "Sección Noticias — escritorio",
        "Sección Explorar — escritorio",
        "Sección Espacio e Igualdad — escritorio",
        "Portada — móvil",
        "Sección Actualidad — móvil",
      ],
    },
    "pulse-video-manager": {
      title: "Pulse — Biblioteca de vídeos y listas",
      subtitle: "Biblioteca de vídeos, listas de reproducción y programación diaria de entrenamientos",
      challenge:
        "Un equipo de fitness/contenidos necesitaba una app para gestionar una biblioteca de vídeos, organizar listas de reproducción, etiquetar contenido y programar los entrenamientos \"de hoy\", con una UX clara y orden por arrastre.",
      myRole:
        "Desarrollé el frontend: CRUD de vídeos y listas, ordenación con arrastre (FormKit), gestión de etiquetas, vista Hoy e integración de reproductor (Media Chrome / Castable).",
      features: [
        "Biblioteca de vídeos con subida, metadatos y etiquetas",
        "Listas de reproducción con reordenación por arrastre",
        "Página Hoy para entrenamientos programados",
        "Auth y layout responsive con sidebar/nav",
      ],
      results: [
        "El equipo de contenidos puede mantener listas y programación sin intervención de desarrollo",
        "Experiencia de reproducción y programación consistente",
      ],
      howItWorks: [
        "El equipo sube vídeos, añade metadatos y etiquetas; la biblioteca se navega y filtra.",
        "Se crean listas de reproducción y se reordenan vídeos con arrastrar y soltar (p. ej. FormKit).",
        "La vista «Hoy» muestra los entrenamientos programados del día; los reproductores consumen esa programación.",
        "La reproducción usa Media Chrome / Castable; el auth define quién puede gestionar contenido.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — escritorio",
        "Vista Hoy — escritorio",
        "Biblioteca de vídeos — escritorio",
        "Lista de etiquetas — escritorio",
        "Vista Hoy — móvil",
        "Biblioteca de vídeos — móvil",
        "Lista de listas de reproducción — móvil",
        "Lista de etiquetas — móvil",
      ],
    },
    "time-tracking-billing": {
      title: "Control de tiempo — Facturación y licencias",
      subtitle: "Facturación, licencias y gestión de clientes del producto de control de tiempo",
      challenge:
        "El producto de control de tiempo necesitaba una app de administración para facturación, gestión de licencias y datos de clientes, con auth segura y una visión clara para los gestores de cuenta.",
      myRole:
        "Desarrollé el frontend: auth (Firebase, Google OAuth), gestión de clientes y licencias, vistas de facturación e integración con la API backend.",
      features: [
        "Google OAuth y Firebase para autenticación",
        "Gestión de clientes y licencias",
        "Vistas de facturación y suscripciones",
        "Búsqueda, filtros y tablas responsive",
      ],
      results: [
        "Los gestores de cuenta pueden manejar licencias y facturación en un solo lugar",
        "Acceso seguro y UX consistente con la app de workspace",
      ],
      howItWorks: [
        "El gestor inicia sesión con Google OAuth o Firebase; el acceso está restringido a roles autorizados.",
        "Consulta y gestiona clientes y licencias desde la interfaz de administración.",
        "Las vistas de facturación y suscripciones muestran estado e historial; los datos vienen de la API backend.",
        "La búsqueda y los filtros en las tablas permiten localizar clientes o licencias concretos.",
      ],
      imageAlts: [],
    },
    "time-tracking-workspace": {
      title: "Control de tiempo — Espacio de trabajo",
      subtitle: "Registrar tiempo, gestionar proyectos y clientes y facturas",
      challenge:
        "Los usuarios necesitaban un espacio para registrar tiempo, gestionar proyectos y clientes, y generar o consultar facturas, con rangos de fechas, listados y navegación sencilla.",
      myRole:
        "Desarrollé el frontend: formularios de registro de tiempo, gestión de proyectos y clientes, vistas de facturas e historial con selector de rango de fechas.",
      features: [
        "Registro de tiempo e historial con selector de rango de fechas",
        "Gestión de proyectos y clientes",
        "Gestión y generación de facturas",
        "i18n y maquetación responsive",
      ],
      results: [
        "Los equipos pueden registrar tiempo y gestionar proyectos en una sola app",
        "Alineado con la app de facturación para una suite de producto completa",
      ],
      howItWorks: [
        "El usuario registra tiempo en proyectos y clientes mediante formularios de registro.",
        "Proyectos y clientes se gestionan en sus propias secciones y se vinculan a tiempo y facturas.",
        "El listado y el historial de facturas están disponibles; se puede filtrar por rango de fechas para revisar o generar facturas.",
        "i18n y maquetación responsive permiten usar la app en distintos idiomas y dispositivos.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — escritorio",
        "Inicio — escritorio",
      ],
    },
    wayvo: {
      title: "Wayvo — Planificador de viajes",
      subtitle: "Planifica el viaje y sigue el itinerario día a día en el móvil",
      challenge:
        "Wayvo necesitaba una app móvil para que los viajeros planificaran viajes con itinerarios asistidos por IA, planes día a día, recomendaciones y desbloqueo premium opcional, con auth y notificaciones push.",
      myRole:
        "Desarrollé el frontend en React Native (Expo): listado y detalle de viajes, pestañas de itinerario, checklist, vistas de alojamiento y actividades, auth (Firebase, Apple/Google Sign-In) y deep linking.",
      features: [
        "Listado de viajes (próximos/pasados) y detalle con itinerario",
        "Plan día a día con actividades y recomendaciones",
        "Checklist y enlaces a alojamiento",
        "Firebase auth, Apple/Google Sign-In, notificaciones push",
      ],
      results: [
        "Los viajeros pueden planificar y seguir el viaje desde una sola app",
        "Desbloqueo de contenido premium y engagement vía push",
      ],
      howItWorks: [
        "El usuario inicia sesión con Firebase, Apple o Google; el listado de viajes muestra próximos y pasados.",
        "Abre un viaje y ve el itinerario día a día con actividades y recomendaciones.",
        "Checklist y enlaces a alojamiento ayudan a preparar y reservar; parte del contenido puede desbloquearse con premium.",
        "Las notificaciones push mantienen el engagement; el deep linking permite abrir un viaje o sección concreta.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — móvil",
        "Login — móvil",
        "Chat — móvil",
        "Detalle de viaje — móvil",
        "Itinerario — móvil",
      ],
    },
    "wezone-plan-recommendator": {
      title: "Wezone — Recomendador de planes",
      subtitle: "Responde unas preguntas y recibe el plan recomendado por email",
      challenge:
        "Wezone quería un flujo web corto donde los socios respondieran unas preguntas (centro, objetivos, preferencias) y recibieran un plan recomendado, con opción de formulario para recibir el resultado por email.",
      myRole:
        "Desarrollé el frontend: formulario multi-paso (selección de centro, preguntas), vista de resultado, formulario de contacto e integración con la API de recomendación.",
      features: [
        "Selección de centro y preguntas paso a paso",
        "Resultado de recomendación y CTA",
        "Formulario de contacto para recibir el plan por email",
        "i18n y maquetación responsive",
      ],
      results: [
        "Los socios obtienen una recomendación clara sin ir al centro",
        "Captación de leads y seguimiento para el equipo comercial",
      ],
      howItWorks: [
        "El socio elige su centro Wezone en el primer paso del flujo.",
        "Responde un breve cuestionario (objetivos, preferencias) en un formulario multi-paso.",
        "La app llama a la API de recomendación y muestra el plan sugerido y un CTA.",
        "Opcionalmente rellena un formulario de contacto para recibir el plan por email; el equipo comercial puede hacer seguimiento.",
      ],
      imageAlts: [
        "Pantalla de bienvenida — escritorio",
        "Flujo de pasos — escritorio",
        "Flujo de pasos — escritorio",
        "CTA — escritorio",
        "Pantalla de resultados — escritorio",
        "Pantalla de bienvenida — móvil",
        "Flujo de pasos — móvil",
        "Flujo de pasos — móvil",
        "CTA — móvil",
        "Pantalla de resultados — móvil",
      ],
    },
  },
  en: {
    "turbowash-terminal": {
      title: "Turbowash — Payment Kiosk",
      subtitle: "The app that runs on the car wash kiosk screen",
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
      imageAlts: [
        "Welcome screen — terminal",
        "Wash in progress — terminal",
        "End screen — terminal",
      ],
    },
    "turbowash-portal": {
      title: "Turbowash — Customer Area",
      subtitle: "Where customers manage vehicles, invoices and coupons",
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
      imageAlts: [
        "Welcome screen — mobile",
        "Verification — mobile",
        "Summary — mobile",
        "QR code — mobile",
        "Wash history — mobile",
        "Vehicle list — mobile",
      ],
    },
    wetour: {
      title: "Wetour — Community Platform",
      subtitle: "Wezone network: events, centres and community feed",
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
      imageAlts: [
        "Welcome screen — desktop",
        "Event detail — desktop",
        "Map view — desktop",
        "Map with filters — desktop",
        "Event on map — desktop",
        "Welcome screen — mobile",
        "Events list — mobile",
        "Event detail — mobile",
        "Map view — mobile",
        "Map with filters — mobile",
      ],
    },
    "goiko-ordering": {
      title: "Goiko — Online Ordering",
      subtitle: "Delivery and pickup orders across 100+ restaurants",
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
      imageAlts: [
        "Welcome screen — mobile",
        "Steps flow — mobile",
        "Address step — mobile",
        "Schedule step — mobile",
        "Product list — mobile",
        "Preparing status — mobile",
        "Delivery status — mobile",
        "Delivered status — mobile",
      ],
    },
    "turbowash-admin": {
      title: "Turbowash — Administration Panel",
      subtitle: "Internal panel for locations, pricing and day-to-day operations",
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
      imageAlts: [
        "Welcome screen — desktop",
        "Locations list — desktop",
        "Location detail — desktop",
        "Location form — desktop",
        "Locations list — mobile",
        "Location detail — mobile",
      ],
    },
    "goiko-customer-area": {
      title: "Goiko — Customer Area",
      subtitle: "Account, order history, saved addresses and loyalty",
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
      imageAlts: [],
    },
    "goiko-invoicing": {
      title: "Goiko — Invoicing",
      subtitle: "Invoice and billing management for franchisees",
      challenge:
        "Franchisees needed a dedicated screen to view and manage invoices and billing data, with a clear structure and the option to export or filter.",
      myRole:
        "I built the frontend with Vue 3 and Pinia: invoice list, filters and integration with the billing API; UI with Naive UI so it felt consistent with other Goiko tools.",
      features: [
        "Invoice list with search and filters",
        "Billing and payment status views",
        "Vue 3 Composition API and Pinia for state",
        "Naive UI component set",
      ],
      results: [
        "Franchisees can access billing without going through the main ordering app",
        "Aligned UX with other Goiko internal tools",
      ],
      howItWorks: [
        "Franchisee logs in and opens the invoicing app.",
        "Invoice list is displayed with search and filters to find specific periods or statuses.",
        "Billing and payment status views give a clear picture of what is paid or pending.",
        "Data comes from the billing API; export or further actions depend on backend capabilities.",
      ],
      imageAlts: [],
    },
    "goiko-online-menu": {
      title: "Goiko — Digital Menu",
      subtitle: "Browse the full menu online or via QR in the restaurant",
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
      imageAlts: [
        "Product list — mobile",
        "Product detail — mobile",
      ],
    },
    "goiko-table-ordering": {
      title: "Goiko — Table Ordering",
      subtitle: "Order from your table inside the restaurant",
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
      imageAlts: [
        "Welcome screen — mobile",
        "Product list — mobile",
        "Product detail — mobile",
      ],
    },
    "aee-corporate-web": {
      title: "AEE — Corporate Website",
      subtitle: "Company site with CMS content and multiple languages",
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
      imageAlts: [
        "Homepage — desktop",
        "News section — desktop",
        "Explore section — desktop",
        "Space and Equality section — desktop",
        "Homepage — mobile",
        "Current affairs section — mobile",
      ],
    },
    "pulse-video-manager": {
      title: "Pulse — Video Library and Playlists",
      subtitle: "Video library, playlists and daily workout schedule",
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
      imageAlts: [
        "Welcome screen — desktop",
        "Today view — desktop",
        "Video library — desktop",
        "Tags list — desktop",
        "Today view — mobile",
        "Video library — mobile",
        "Playlist list — mobile",
        "Tags list — mobile",
      ],
    },
    "time-tracking-billing": {
      title: "Time Tracking — Billing and Licenses",
      subtitle: "Billing, licenses and customer management for the time-tracking product",
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
      imageAlts: [],
    },
    "time-tracking-workspace": {
      title: "Time Tracking — Workspace",
      subtitle: "Log time, manage projects and customers, and handle invoices",
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
      imageAlts: [
        "Welcome screen — desktop",
        "Home — desktop",
      ],
    },
    wayvo: {
      title: "Wayvo — Trip Planner",
      subtitle: "Plan trips and follow day-by-day itineraries on your phone",
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
      imageAlts: [
        "Welcome screen — mobile",
        "Login — mobile",
        "Chat — mobile",
        "Trip detail — mobile",
        "Itinerary — mobile",
      ],
    },
    "wezone-plan-recommendator": {
      title: "Wezone — Plan Recommender",
      subtitle: "Answer a few questions and get a recommended plan by email",
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
      imageAlts: [
        "Welcome screen — desktop",
        "Steps flow — desktop",
        "Steps flow — desktop",
        "CTA — desktop",
        "Results screen — desktop",
        "Welcome screen — mobile",
        "Steps flow — mobile",
        "Steps flow — mobile",
        "CTA — mobile",
        "Results screen — mobile",
      ],
    },
  },
}

/**
 * Returns translated content for a given project and locale.
 */
export function getProjectTranslation(
  slug: string,
  locale: Locale
): ProjectTranslation | undefined {
  return projectTranslations[locale][slug]
}
