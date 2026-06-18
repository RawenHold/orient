export const quickNav = ["Backend", "Frontend", "DB", "DevOps", "QA", "AI", "Роли", "API", "Этапы"];

export const techStack = [
  { layer: "Frontend", value: "Next.js 14 App Router + TypeScript + Tailwind", note: "SSR/SSG, быстрые публичные страницы, единый UI для investor, tourist и admin." },
  { layer: "Backend", value: "NestJS + TypeScript + Prisma ORM", note: "Модульный монолит с явными доменами и строгими DTO." },
  { layer: "Database", value: "PostgreSQL primary + Redis cache/sessions", note: "PostgreSQL хранит бизнес-данные, Redis держит сессии, OTP и быстрый cache." },
  { layer: "Auth", value: "NextAuth или custom JWT + OAuth", note: "Google, Yandex, Apple, email/phone OTP; роли закрываются RBAC." },
  { layer: "AI", value: "OpenAI API GPT-4o + RAG", note: "Ответы строятся на внутренней базе знаний, статусах услуг и локальных правилах." },
  { layer: "Storage", value: "Cloudflare R2", note: "Фото, ваучеры, подтверждения партнёров и будущие документы заявок." },
  { layer: "Infra", value: "Docker Compose -> Railway/Render -> VPS", note: "Одинаковый dev-контур, staging для пилота и управляемый production." },
  { layer: "CI/CD", value: "GitHub Actions", note: "Lint, typecheck, tests, build, migrations и staging deploy." },
  { layer: "Monitoring", value: "Sentry + PostHog", note: "Ошибки, воронки, события заявок и поведение пользователей." },
  { layer: "Payments MVP", value: "Manual confirmation; Payme/Click post-MVP", note: "В MVP не обещаем автоматическую оплату там, где юридика и партнёры не готовы." },
];

export const architectureNotes = [
  "Микросервисы не нужны до Series A: команда маленькая, MVP должен выйти за 18 недель, а главный риск сейчас продуктовый, не инфраструктурный.",
  "Модульный монолит даёт скорость без хаоса: users, requests, services, suppliers, support, content, audit и AI имеют отдельные границы.",
  "Внешние интеграции проходят через backend. Frontend не общается напрямую с OTA, платёжками, AI или поставщиками.",
];

export const dataEntities = [
  { name: "User", fields: ["id UUID required", "email string optional", "phone string optional", "role enum required", "createdAt date"] },
  { name: "UserProfile", fields: ["userId UUID required", "fullName string", "language enum", "country string", "preferences json"] },
  { name: "AuthIdentity", fields: ["userId UUID required", "provider enum", "providerId string", "verifiedAt date"] },
  { name: "Request", fields: ["id UUID required", "userId UUID required", "serviceId UUID required", "status enum", "payload json"] },
  { name: "Order", fields: ["id UUID required", "requestId UUID required", "amount decimal", "currency string", "paymentStatus enum"] },
  { name: "Service", fields: ["id UUID required", "type enum", "title string", "mvpStatus enum", "phase number"] },
  { name: "Supplier", fields: ["id UUID required", "type enum", "legalName string", "contact json", "verificationStatus enum"] },
  { name: "AuditLog", fields: ["id UUID required", "actorId UUID", "entityType string", "entityId UUID", "diff json"] },
  { name: "SupportCase", fields: ["id UUID required", "requestId UUID optional", "userId UUID", "priority enum", "status enum"] },
  { name: "ContentPage", fields: ["id UUID required", "slug string", "locale string", "status enum", "seo json"] },
];

export const dataRelations = [
  "User -> UserProfile -> AuthIdentity",
  "User -> Request -> Order",
  "Request -> Service -> Supplier",
  "Request -> SupportCase",
  "Любая смена статуса -> AuditLog",
  "ContentPage питает публичные страницы и RAG-базу AI.",
];

export const onboardingSteps = [
  "Прочитать README, .env.example, текущий этап и правила MVP scope.",
  "Поднять проект через Docker Compose: frontend, backend, PostgreSQL, Redis.",
  "Запустить миграции Prisma и seed: роли, категории услуг, тестовый admin.",
  "Проверить health endpoints и локальный login/register flow.",
  "Пройти сценарий: регистрация -> заявка -> admin -> смена статуса -> audit log.",
  "Взять задачу только после понимания acceptance criteria и границы: что не входит в этап.",
];

export const readyChecklist = [
  "Есть owner задачи и роль исполнителя.",
  "Описаны acceptance criteria и Definition of Done.",
  "Понятны API, UI, DB или DevOps изменения.",
  "Зафиксировано, что не входит в задачу.",
  "Есть тестовый сценарий или manual QA checklist.",
];

export const qaStrategy = [
  { title: "Unit tests", text: "Jest для бизнес-логики сервисов; >80% coverage на core modules: auth, requests, RBAC, status transitions." },
  { title: "Integration tests", text: "Supertest для API: auth, users/me, request create/read, admin status update, audit log." },
  { title: "E2E", text: "Playwright flow: регистрация -> заявка -> admin -> статус -> уведомление или support handoff." },
  { title: "Manual QA", text: "Чеклист перед закрытием каждого этапа: responsive, empty/error states, роли, длинные тексты, статусы услуг." },
  { title: "Staging rule", text: "Ничего не идёт в production без staging минимум 48 часов без critical bugs." },
  { title: "Regression rule", text: "Баг, найденный в production, получает автотест или явный manual regression case." },
];

export const glossary = [
  { term: "Request", definition: "Заявка пользователя на услугу. Может быть без оплаты и без финального подтверждения партнёром." },
  { term: "Order", definition: "Подтверждённая коммерческая операция, привязанная к Request." },
  { term: "Booking", definition: "Финальное бронирование у партнёра или через API. В MVP часто заменяется ручным подтверждением." },
  { term: "Support case", definition: "Обращение в поддержку. Может быть связано с Request, но не всегда." },
  { term: "Supplier", definition: "Конкретный поставщик услуги: отель, гид, трансфер, страховой или eSIM-провайдер." },
  { term: "Partner", definition: "Supplier с коммерческой договорённостью, условиями, SLA и проверенным контактом." },
  { term: "Deep link", definition: "Переход во внешний сервис без прямого обмена данными через API." },
  { term: "API integration", definition: "Прямой обмен данными с внешним сервисом: доступность, бронь, оплата, статус." },
  { term: "Assisted flow", definition: "Сценарий, где платформа помогает через заявку или support, но не завершает транзакцию автоматически." },
  { term: "PMF", definition: "Для Orient UBook: NPS >40, 1 000 заявок, 12-18% conversion to confirmed service, 50+ активных партнёров и повторные заявки." },
];
