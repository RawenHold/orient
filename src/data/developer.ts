export const quickNav = ["Backend", "Frontend", "DB", "DevOps", "QA", "AI", "Роли", "Глоссарий"];

export const techStack = [
  { layer: "Frontend", value: "Next.js 14 App Router + TypeScript + Tailwind", note: "SSR/ISR для SEO, единый UI для tourist/admin/investor.", why: "Менять нельзя: сайт уже деплоится на Vercel." },
  { layer: "Backend", value: "NestJS + TypeScript + Prisma ORM", note: "Модульный монолит с явными доменами и строгими DTO.", why: "До Series A архитектура не усложняется микросервисами." },
  { layer: "Database", value: "PostgreSQL primary + Redis cache/sessions", note: "PostgreSQL хранит бизнес-данные, Redis держит сессии, OTP TTL 5 минут и кеш справочников.", why: "Так проще держать статусы, RBAC и аудит в одном контуре." },
  { layer: "Auth", value: "NextAuth или custom JWT + OAuth", note: "Google, Yandex, Apple, email/phone OTP; роли закрываются RBAC.", why: "OAuth-провайдеры фиксируются при реализации этапа 1." },
  { layer: "AI", value: "OpenAI API GPT-4o + RAG", note: "Ответы только с source; без подтверждённого контекста -> handoff в поддержку.", why: "Модель заменяема, RAG-архитектура нет." },
  { layer: "Storage", value: "Cloudflare R2", note: "Фото, ваучеры, подтверждения партнёров и будущие документы заявок.", why: "Дешевле S3, CDN включён, подходит для MVP." },
  { layer: "Infra", value: "Docker Compose -> Railway/Render -> VPS", note: "Одинаковый dev-контур, staging для пилота и управляемый production.", why: "Kubernetes не нужен до зрелого production load." },
  { layer: "CI/CD", value: "GitHub Actions", note: "Lint, typecheck, tests, build, migrations и staging deploy.", why: "PR не проходит без автоматических проверок." },
  { layer: "Monitoring", value: "Sentry + PostHog", note: "Ошибки, воронки, события заявок и поведение пользователей.", why: "PMF проверяется событиями, а не мнениями команды." },
  { layer: "Payments MVP", value: "Manual payment record; Payme/Click post-MVP", note: "В MVP нет auto-checkout. Support фиксирует оплату вручную в AdminPanel.", why: "Payme/Click подключаются только после юрлица, KYB, refund и reconciliation." },
];

export const excludedStack = [
  "Микросервисы — после Series A.",
  "GraphQL — REST достаточно до 10K DAU.",
  "Kubernetes — Docker Compose -> Railway/Render до пилота.",
  "Собственный AI — только API + RAG.",
  "Realtime payments — этап 10.",
];

export const architectureNotes = [
  "Микросервисы не нужны до Series A: команда маленькая, MVP должен выйти за 18 недель, а главный риск сейчас продуктовый, не инфраструктурный.",
  "Модульный монолит даёт скорость без хаоса: users, requests, services, suppliers, support, content, audit и AI имеют отдельные границы.",
  "Внешние интеграции проходят через backend. Frontend не общается напрямую с OTA, платёжками, AI или поставщиками.",
];

export const dataRelations = [
  "Request не равен Order: заявка живёт без оплаты и подтверждения.",
  "Supplier не равен Partner: Partner появляется только после договора и KYC/KYB.",
  "Каждый статус-переход пишет AuditLog. Без исключений.",
  "ContentPage питает публичные страницы и RAG-индекс AI.",
];

export const uzDevContext = [
  { title: "Платёжный контур", value: "Этап 10", text: "Этапы 0-7: только manual payment record. Payme/Click, refunds и reconciliation подключаются после юрлица, IT Park/KYB и договора с PSP." },
  { title: "Языки", value: "RU / UZ / EN", text: "ru для туристов из СНГ, uz для партнёров и локального контента, en для международной аудитории и B2B. Реализация через locale-файлы и RAG по языкам." },
  { title: "Юридика и IT Park", value: "Legal review", text: "IT Park, персональные данные, партнёрские договоры, SLA и refund-правила учитываются до платежей и API-бронирований. Audit log обязателен." },
  { title: "Локальные интеграции", value: "Post-MVP", text: "RateHawk/Ostrovok, Payme/Click, GPT-4o/RAG и Cloudflare R2 подключаются через backend. Если API недоступен, работает assisted flow через support." },
  { title: "Операционка партнёров", value: "KYB/KYC", text: "Отели, гиды и трансферы проходят проверку, SLA, правила отмены и ручную escalation. Supplier становится Partner только после проверки." },
];

export const onboardingPrerequisites = [
  "Node.js 20+ / Docker Desktop / Git.",
  "Доступ к репозиторию и .env.example.",
  "Прочитан текущий этап в /stages/[N].",
];

export const onboardingSteps = [
  { task: "Прочитать README, .env.example, текущий этап и правила MVP scope.", result: "Знаю, что строю и что не входит в этап." },
  { task: "Поднять проект через Docker Compose: frontend, backend, PostgreSQL, Redis.", result: "Все сервисы зелёные, health endpoints отвечают." },
  { task: "Запустить миграции Prisma и seed: роли, категории услуг, тестовый admin.", result: "Admin login работает, данные есть в БД." },
  { task: "Пройти flow: регистрация -> заявка -> admin -> статус -> audit log.", result: "Вижу данные в таблицах, AuditLog пишется." },
  { task: "Взять задачу только после понимания acceptance criteria.", result: "Понимаю IN scope и OUT of scope задачи." },
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
  { term: "MVP Status", definition: "Статус услуги в матрице: работает в MVP, support/ссылка, информация сейчас или после MVP. Нельзя менять без согласования с PM и инвестором." },
  { term: "IT Park Mode", definition: "Налоговый режим Orient UBook: 0% налог на прибыль для IT-компаний при соответствии критериям. Влияет на договоры и платёжный контур." },
];
