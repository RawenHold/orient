export const architectureLayers = [
  { title: "Client Layer", items: ["Next.js Web Frontend", "Admin Panel", "Future Mobile iOS/Android", "Future Telegram Bot"] },
  { title: "Backend Layer", items: ["NestJS modular monolith", "REST/OpenAPI 3.0", "/api/v1", "JWT/OAuth/RBAC"] },
  { title: "Data Layer", items: ["PostgreSQL", "Redis", "S3-compatible storage", "Search", "Vector store for AI"] },
  { title: "Partner Layer", items: ["ManualPartnerAdapter", "DeepLinkAdapter", "Supplier adapters", "Logged fallback flows"] },
];

export const integrationLevels = [
  ["0", "Informational only", "Статический контент без supplier interaction"],
  ["1", "External / Deep link", "Переход во внешний сервис или приложение"],
  ["2", "Manual request", "Форма -> support -> партнёр по email/телефону"],
  ["3", "Semi-automated", "Admin workflow + уведомление партнёра"],
  ["4", "API availability", "Поиск наличия через API"],
  ["5", "API booking", "Создание бронирования через supplier API"],
  ["6", "Full lifecycle", "Бронь, отмена, refund, webhook, reconciliation"],
];

export const apiMap = [
  "Auth: /api/v1/auth/register, login, refresh, me",
  "Content: /api/v1/content/pages/:slug, categories, faq, destinations",
  "Accommodation: /api/v1/accommodations, /requests, admin workflow",
  "Tours & Guides: /api/v1/guides, /tours, /reviews, moderation",
  "Logistics: /api/v1/logistics/transfer-request, driver-request, links",
  "Support: /api/v1/support/cases, admin/support processing",
  "AI: /api/v1/ai/session, message, handoff",
  "Analytics: /api/v1/analytics/events, dashboard, funnel",
];

export const operationalFlow = [
  "User submits request",
  "Support reviews",
  "Partner contacted",
  "Offer sent",
  "User confirms",
  "Order created",
  "Offline payment confirmed",
  "Voucher / confirmation delivered",
];
