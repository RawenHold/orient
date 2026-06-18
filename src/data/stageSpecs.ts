export type StageSpec = {
  reviewQa: string;
  apiEndpoints: string[];
  notInScope: string[];
  strictDod: string[];
  aiGuidelines?: string[];
};

export const stageSpecs: Record<number, StageSpec> = {
  0: {
    reviewQa: "2 дня на ревизию scope, архитектуры, рисков и финальное согласование MVP boundary.",
    apiEndpoints: [],
    notInScope: ["Разработка production-кода", "Подключение оплат", "Договоры с API-поставщиками без legal review", "Обещание всех SuperApp-функций в MVP"],
    strictDod: ["MVP scope утверждён", "Статусы услуг согласованы", "Backlog разбит по этапам", "Риски и fallback-сценарии описаны", "Переход к Этапу 1 одобрен Tech Lead и Product"],
  },
  1: {
    reviewQa: "3 дня code review + 2 дня QA/staging smoke test. Без этого этап не закрывается.",
    apiEndpoints: [
      "POST /api/v1/auth/register",
      "POST /api/v1/auth/login",
      "POST /api/v1/auth/logout",
      "POST /api/v1/auth/otp/request",
      "POST /api/v1/auth/otp/verify",
      "GET /api/v1/users/me",
      "PATCH /api/v1/users/me",
      "GET /api/v1/admin/users",
      "GET /api/v1/services",
      "POST /api/v1/requests",
      "GET /api/v1/requests/:id",
      "GET /api/v1/admin/audit-log",
      "GET /api/v1/health",
    ],
    notInScope: ["Онлайн-оплаты", "Прямое бронирование OTA/API", "Mobile apps", "B2B-кабинет", "Полный AI-консьерж", "Сложная CRM партнёров"],
    strictDod: [
      "Все endpoints возвращают единый error format",
      "Пользователь регистрируется, входит и получает /users/me",
      "Admin API закрыт RBAC",
      "Смена статуса пишет AuditLog",
      "Docker Compose поднимает проект одной командой",
      "CI проходит lint, typecheck, tests и build",
      "README содержит команды запуска и миграций",
    ],
  },
  2: {
    reviewQa: "2 дня review контента/SEO + 2 дня responsive QA на mobile, tablet и desktop.",
    apiEndpoints: [
      "GET /api/v1/content/pages",
      "GET /api/v1/content/pages/:slug",
      "GET /api/v1/content/categories",
      "GET /api/v1/content/faq",
      "POST /api/v1/analytics/events",
      "GET /api/v1/admin/content",
      "POST /api/v1/admin/content/pages",
    ],
    notInScope: ["Оплата услуг", "Встроенный ticketing", "Автоматическое подтверждение партнёром", "Публичное обещание бронирования для informational services"],
    strictDod: ["Каждая услуга имеет видимый MVP-статус", "SEO-поля заполнены", "Формы заявок не создают ложного обещания оплаты", "Контент редактируется из admin", "Analytics events отправляются для CTA и deep links"],
  },
  3: {
    reviewQa: "3 дня backend/frontend review + 2 дня QA полного flow жилья.",
    apiEndpoints: [
      "GET /api/v1/accommodations",
      "GET /api/v1/accommodations/:id",
      "POST /api/v1/accommodation-requests",
      "GET /api/v1/users/me/requests",
      "GET /api/v1/admin/accommodation-requests",
      "PATCH /api/v1/admin/accommodation-requests/:id/status",
    ],
    notInScope: ["Мгновенное бронирование", "Календарь live availability через OTA", "Онлайн-оплата", "Автоматический voucher без проверки support"],
    strictDod: ["Пользователь создаёт заявку на жильё", "Admin видит заявку и меняет статус", "Партнёрская коммуникация логируется", "Повторная отправка формы не создаёт дубль", "Пользователь видит статус в личном кабинете"],
  },
  4: {
    reviewQa: "2 дня review каталога/заявок + 2 дня QA сценариев гида и тура.",
    apiEndpoints: [
      "GET /api/v1/tours",
      "GET /api/v1/tours/:id",
      "GET /api/v1/guides",
      "POST /api/v1/tour-requests",
      "GET /api/v1/admin/tour-requests",
      "PATCH /api/v1/admin/tour-requests/:id/status",
    ],
    notInScope: ["Автоматическая проверка лицензий", "Мгновенное расписание гидов", "Split payments", "Marketplace reviews без модерации"],
    strictDod: ["Каталог туров и гидов фильтруется", "Заявка содержит язык, дату, группу и маршрут", "Support может назначить исполнителя", "Статусы видны пользователю", "Некачественный партнёр блокируется через admin"],
  },
  5: {
    reviewQa: "2 дня review логистических сценариев + 2 дня QA маршрутов и fallback.",
    apiEndpoints: [
      "GET /api/v1/logistics/options",
      "POST /api/v1/transfer-requests",
      "POST /api/v1/ticket-assist-requests",
      "GET /api/v1/admin/logistics-requests",
      "PATCH /api/v1/admin/logistics-requests/:id/status",
    ],
    notInScope: ["Прямая продажа авиа/ЖД билетов", "Собственный taxi dispatch", "Хранение платёжных данных", "Гарантия цены внешнего поставщика"],
    strictDod: ["Трансфер создаётся как заявка", "Авиа/ЖД/taxi помечены как assisted или deep link", "Fallback support виден пользователю", "Admin видит urgency и маршрут", "Ошибки внешних ссылок логируются"],
  },
  6: {
    reviewQa: "3 дня AI review + 3 дня safety QA: hallucination, fallback, privacy и escalation.",
    apiEndpoints: [
      "POST /api/v1/ai/chat",
      "GET /api/v1/ai/conversations/:id",
      "POST /api/v1/ai/conversations/:id/escalate",
      "GET /api/v1/admin/ai/conversations",
      "POST /api/v1/admin/knowledge-base/documents",
      "GET /api/v1/support/cases",
    ],
    notInScope: ["AI как самостоятельный продавец без support fallback", "Финансовые/юридические гарантии от AI", "Медицинские рекомендации", "Автоматическое подтверждение бронирования"],
    strictDod: ["AI знает статусы услуг MVP", "Каждый ответ имеет source/context или fallback", "Опасные темы переводятся в support", "Логи не содержат секретов", "Admin может обновить базу знаний", "Пользователь понимает, когда отвечает AI, а когда support"],
    aiGuidelines: [
      "Prompt обязан явно перечислять границы MVP: где заявка, где deep link, где только информация.",
      "Если уверенность ниже порога или нет источника в RAG, AI отвечает коротко и предлагает support.",
      "AI не обещает цену, наличие, бронь, страховку, визу или медсовет без подтверждённого источника.",
      "Все escalations сохраняют conversation summary, user intent, language и suggested next action.",
    ],
  },
  7: {
    reviewQa: "5 рабочих дней stabilization + 90 дней pilot monitoring.",
    apiEndpoints: [
      "GET /api/v1/admin/dashboard",
      "GET /api/v1/admin/metrics/requests",
      "GET /api/v1/admin/metrics/conversion",
      "GET /api/v1/admin/feedback",
      "POST /api/v1/feedback",
      "GET /api/v1/health/deep",
    ],
    notInScope: ["Новые крупные verticals", "Миграция на микросервисы", "Автоматизация оплат", "Массовый performance marketing без baseline metrics"],
    strictDod: ["Pilot dashboard показывает заявки, конверсию и NPS", "Critical bugs закрыты", "Runbook support готов", "Есть список решений для Phase 8+", "Production deploy прошёл staging 48 часов"],
  },
  8: {
    reviewQa: "Review каждой интеграции отдельно: sandbox, legal, fallback, monitoring.",
    apiEndpoints: [],
    notInScope: ["Интеграция без договора", "Frontend-only интеграции", "Подключение API без fallback", "Автоматическая продажа регулируемых услуг без legal"],
    strictDod: ["Sandbox работает", "Ошибки API обрабатываются", "Fallback support описан", "SLA и rate limits известны", "Monitoring подключён"],
  },
  9: {
    reviewQa: "Mobile QA на ключевых устройствах + Telegram flow review.",
    apiEndpoints: [],
    notInScope: ["Переписывание backend", "Отдельная бизнес-логика в mobile", "Публикация в stores без privacy/legal readiness"],
    strictDod: ["Mobile использует существующий backend", "Основные flows работают", "Telegram закрывает быстрые сценарии", "Push notifications протестированы", "Store readiness подготовлен"],
  },
  10: {
    reviewQa: "Payment QA, reconciliation review и legal sign-off обязательны.",
    apiEndpoints: [],
    notInScope: ["Хранение карточных данных", "Платежи без возвратов и dispute flow", "Escrow без юридической схемы", "Автоматизация supplier payouts без сверки"],
    strictDod: ["Payment status sync работает", "Refund/dispute flow описан", "Finance reconciliation доступен", "Audit log покрывает оплату", "Legal approval получен"],
  },
  11: {
    reviewQa: "B2B role/security review + partner onboarding QA.",
    apiEndpoints: [],
    notInScope: ["Полный ERP для партнёров", "Self-service payouts без finance review", "Публичный marketplace без модерации"],
    strictDod: ["Партнёр видит только свои заявки", "RBAC закрывает доступ", "Supplier profile редактируется безопасно", "SLA и статусы понятны", "Admin может отключить партнёра"],
  },
  12: {
    reviewQa: "Scale review: performance, security, data, legal, support operations.",
    apiEndpoints: [],
    notInScope: ["Географическое расширение без support capacity", "White-label без unit economics", "Новая страна без локального контента и legal review"],
    strictDod: ["Есть performance baseline", "Data model выдерживает multi-market", "Support processes масштабируются", "Security review пройден", "Series A metrics собраны"],
  },
};
