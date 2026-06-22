export type StageMarker = "Подготовка" | "MVP-ядро" | "Пилот" | "Рост" | "Масштаб";

export type RoleTask = {
  role: string;
  focus: string;
  tasks: string[];
};

export type Phase = {
  id: number;
  title: string;
  marker: StageMarker;
  duration: string;
  goal: string;
  result: string;
  summary: string;
  roleTasks: RoleTask[];
  workstreams: { title: string; items: string[] }[];
  deliverables: string[];
  tools: string[];
  acceptance: string[];
  dod: string[];
  gate: string;
  risk: string;
};

function streamsFromRoles(roleTasks: RoleTask[]) {
  return roleTasks.map((item) => ({ title: item.role, items: item.tasks }));
}

const stage0Roles: RoleTask[] = [
  {
    role: "Product / PM",
    focus: "Зафиксировать объём MVP и правила изменения scope.",
    tasks: [
      "Разделить услуги на работающие в MVP, через поддержку/ссылку, информационные и после MVP.",
      "Собрать backlog верхнего уровня и приоритеты запуска.",
      "Зафиксировать, что не входит в MVP: полный ticketing, mobile apps, B2B кабинет.",
    ],
  },
  {
    role: "Архитектор / Tech Lead",
    focus: "Проверить техническую реализуемость до разработки.",
    tasks: [
      "Проверить доступность API, sandbox, deep links и ручных fallback-сценариев у поставщиков.",
      "Подготовить архитектурную схему web, backend, admin, БД, support и будущих клиентов.",
      "Назначить каждой услуге уровень интеграции: информация, ссылка, ручная заявка, полуавтоматизация, API.",
    ],
  },
  {
    role: "Legal / Operations",
    focus: "Снять юридические и операционные риски.",
    tasks: [
      "Проверить ограничения по страховке, платежам, персональным данным, возвратам и ответственности.",
      "Собрать список партнёров: жильё, гиды, трансферы, ЖД/авиа, eSIM, страхование.",
      "Описать fallback: что делаем, если API или партнёр недоступны.",
    ],
  },
  {
    role: "Content / UX",
    focus: "Подготовить карту сайта и понятные статусы услуг.",
    tasks: [
      "Составить content map всех страниц услуг, городов, маршрутов, FAQ и экстренных контактов.",
      "Подготовить текстовые правила: услуга бронируется внутри платформы, через заявку, у партнёра или пока только информационная.",
      "Согласовать базовую навигацию, CTA и структуру будущих страниц.",
    ],
  },
];

const stage1Roles: RoleTask[] = [
  {
    role: "Бэкенд",
    focus: "Собрать ядро API и правила доступа.",
    tasks: [
      "Инициализировать NestJS + TypeScript, версионирование /api/v1, валидацию, общие ошибки и health check.",
      "Сделать регистрацию и вход через Google, Yandex, Apple, email-код и phone OTP; связать способы входа с одним пользователем.",
      "Ввести роли: турист, гид, партнёр, support, admin, superadmin; закрыть admin API через RBAC.",
      "Создать базовые модули: users, profile, requests, suppliers, support, audit log.",
    ],
  },
  {
    role: "База данных",
    focus: "Создать основу данных для заявок и будущих модулей.",
    tasks: [
      "Создать таблицы User, AuthIdentity, UserProfile, Service, Supplier, Request, Order, ContentPage, AuditLog.",
      "Подготовить миграции Prisma и seed-данные: роли, категории услуг, тестовый admin.",
      "Заложить аудит изменений статусов, партнёров, заявок и контента.",
    ],
  },
  {
    role: "Фронтенд",
    focus: "Поднять web-app основу.",
    tasks: [
      "Собрать Next.js + TypeScript app shell: header, footer, navigation, layout.",
      "Сделать страницы входа, регистрации, восстановления доступа и аккаунта пользователя.",
      "Подготовить дизайн-систему: цвета статусов услуг, формы, карточки, пустые состояния, ошибки.",
    ],
  },
  {
    role: "Admin / Support",
    focus: "Дать команде первый рабочий внутренний контур.",
    tasks: [
      "Сделать вход в admin panel, меню и пустые разделы будущих модулей.",
      "Подготовить просмотр тестовых заявок, пользователей, партнёров и audit log.",
      "Описать базовые статусы заявки: new, in_review, waiting_user, waiting_supplier, confirmed, rejected, cancelled, completed, escalated.",
    ],
  },
  {
    role: "DevOps",
    focus: "Сделать стабильный staging.",
    tasks: [
      "Настроить Docker Compose: frontend, backend, PostgreSQL, Redis.",
      "Настроить CI/CD: lint, typecheck, unit tests, migrations, staging deploy.",
      "Разделить .env.local, .env.staging, .env.production; секреты хранить вне git.",
    ],
  },
];

const stage2Roles: RoleTask[] = [
  {
    role: "Фронтенд / UX",
    focus: "Показать весь масштаб продукта без ложного обещания бронирования.",
    tasks: [
      "Собрать главную, страницы услуг, города, маршруты 3/5/7/10 дней, FAQ, About и Contact.",
      "На каждой странице явно показать статус услуги: заявка внутри платформы, партнёрская ссылка, support или только информация.",
      "Сделать формы заявок для функциональных услуг и CTA к AI/support для информационных разделов.",
    ],
  },
  {
    role: "Бэкенд",
    focus: "Дать сайту управляемый контент и события.",
    tasks: [
      "Сделать ContentModule: страницы, категории услуг, FAQ, SEO-поля, статусы draft/published/archived.",
      "Добавить публичные API для страниц, категорий, FAQ, городов и маршрутов.",
      "Сделать endpoint аналитики: page_view, cta_click, external_link_click, support_request.",
    ],
  },
  {
    role: "Контент / SEO",
    focus: "Наполнить MVP полезными информационными разделами.",
    tasks: [
      "Подготовить eSIM, страховку, рестораны, события, визы, SOS, шоппинг, обмен валюты, культуру, посольства и FAQ.",
      "Собрать официальные ссылки, карты, deep links и дату проверки каждого материала.",
      "Подготовить EN/RU/UZ тексты, title, description, OG и внутренние ссылки.",
    ],
  },
  {
    role: "Admin / Content manager",
    focus: "Редактировать сайт без разработчика.",
    tasks: [
      "Сделать CRUD страниц, редактор переводов, SEO-поля и preview.",
      "Добавить владельца контента и дату следующей проверки страницы.",
      "Дать возможность менять CTA и статус услуги.",
    ],
  },
  {
    role: "QA / Analytics",
    focus: "Проверить понятность и измеримость спроса.",
    tasks: [
      "Проверить мобильную версию, формы, CTA, SEO metadata, ссылки и i18n.",
      "Убедиться, что информационные страницы не выглядят как полноценное бронирование.",
      "Настроить dashboard спроса по услугам и информационным разделам.",
    ],
  },
];

const stage3Roles: RoleTask[] = [
  {
    role: "Бэкенд",
    focus: "Сделать первый рабочий сервис заявок.",
    tasks: [
      "Создать Accommodation, AccommodationPhoto, AccommodationPricing, AccommodationRequest.",
      "Сделать поиск и фильтры: город, тип жилья, даты, гости, цена.",
      "Сделать создание заявки, статусы, уведомления и ручную доступность партнёра.",
      "Добавить PartnerCommunicationLog и загрузку ваучера/подтверждения в S3-compatible storage.",
    ],
  },
  {
    role: "Фронтенд",
    focus: "Дать туристу понятный путь выбора жилья.",
    tasks: [
      "Собрать страницу поиска жилья, карточку объекта, детальную страницу и карту.",
      "Сделать форму заявки: даты, гости, контакты, комментарий, язык общения.",
      "Добавить страницу 'Мои заявки' и видимый статус обработки.",
      "Явно написать, что мгновенное бронирование и онлайн-оплата не входят в MVP.",
    ],
  },
  {
    role: "База данных / Storage",
    focus: "Хранить объекты жилья, цены, фото и историю заявок без потери данных.",
    tasks: [
      "Создать таблицы accommodations, accommodation_photos, accommodation_pricing, accommodation_requests.",
      "Добавить индексы для фильтров: город, тип жилья, статус, цена, даты.",
      "Настроить S3-compatible storage для фото, ваучеров и подтверждений.",
      "Добавить idempotency/unique constraints, чтобы повторная отправка формы не создавала дубль.",
    ],
  },
  {
    role: "Admin / Support",
    focus: "Обрабатывать заявки без доступа к базе данных.",
    tasks: [
      "Сделать CRUD партнёрских объектов, загрузку фото, статусы публикации и заметки.",
      "Сделать очередь заявок: назначение support, статус, комментарии, оффер пользователю.",
      "Логировать связь с партнёром: email, телефон, WhatsApp, ответ, время и результат.",
    ],
  },
  {
    role: "DevOps / Monitoring",
    focus: "Сделать обработку заявок наблюдаемой.",
    tasks: [
      "Проверить env-переменные для S3, уведомлений и backend storage.",
      "Добавить логи request_id для создания заявки, смены статуса и загрузки ваучера.",
      "Настроить alert на ошибки создания accommodation request.",
    ],
  },
  {
    role: "QA",
    focus: "Проверить весь путь до подтверждения.",
    tasks: [
      "Протестировать flow: поиск -> карточка -> заявка -> admin -> статус -> уведомление.",
      "Проверить fallback: партнёр не отвечает, цена изменилась, пользователь отменяет заявку.",
      "Проверить, что один запрос не создаётся дважды при повторной отправке формы.",
    ],
  },
];

const stage4Roles: RoleTask[] = [
  {
    role: "Бэкенд",
    focus: "Запустить каталог гидов и туров.",
    tasks: [
      "Создать GuideProfile: языки, специализация, KYC, статус, рейтинг, документы.",
      "Создать TourExperience: тип, маршрут, длительность, цена, даты, города, статус модерации.",
      "Сделать поиск гидов и туров, заявку на тур, модерацию, отзывы и ban/suspend flow.",
    ],
  },
  {
    role: "Фронтенд",
    focus: "Показать локальную дифференциацию Orient UBook.",
    tasks: [
      "Собрать страницу 'Гиды и туры', каталог гидов, профиль гида, каталог туров и детальную страницу тура.",
      "Сделать форму заявки: дата, количество людей, язык, пожелания, контакты.",
      "Сделать публичную форму регистрации гида и понятные статусы проверки.",
    ],
  },
  {
    role: "База данных",
    focus: "Хранить гидов, KYC, туры, отзывы и модерацию.",
    tasks: [
      "Создать таблицы guides, guide_kyc_documents, tours, tour_requests, guide_reviews.",
      "Добавить статусы PENDING, VERIFIED, SUSPENDED, BANNED для гидов.",
      "Добавить статусы DRAFT, PENDING_MODERATION, PUBLISHED, SUSPENDED для туров.",
      "Защитить KYC-документы: доступ только admin/support по роли.",
    ],
  },
  {
    role: "Admin / Operations",
    focus: "Контролировать качество гидов и туров.",
    tasks: [
      "Сделать approve/reject/ban гида, управление KYC и внутренние комментарии.",
      "Добавить модерацию туров и отзывов до публикации.",
      "Описать стандарты качества: непроверенный гид не выглядит гарантированно доступным.",
    ],
  },
  {
    role: "QA",
    focus: "Проверить качество и безопасность публикации гидов.",
    tasks: [
      "Проверить, что непроверенный гид не публикуется как доступный.",
      "Проверить flow: регистрация гида -> KYC -> модерация -> публикация тура -> заявка.",
      "Проверить фильтры по языку, городу, специализации и рейтингу.",
    ],
  },
  {
    role: "Content / Product",
    focus: "Сформировать понятные типы experiences.",
    tasks: [
      "Разделить туры на культурные, скрытые маршруты, гастрономические и приключенческие.",
      "Собрать стартовый каталог: минимум 10 верифицированных гидов и 20 туров.",
      "Отслеживать спрос по городам, языкам и типам туров.",
    ],
  },
];

const stage5Roles: RoleTask[] = [
  {
    role: "Бэкенд",
    focus: "Закрыть базовую логистику без полного ticketing engine.",
    tasks: [
      "Создать LogisticsRequest: transfer, taxi, private_driver, intercity, rail, flight.",
      "Сделать заявки на трансфер, частного водителя и межгородскую поездку.",
      "Добавить DeepLinkAdapter для такси, ЖД и авиа, а также учёт кликов по партнёрским ссылкам.",
      "Создать DriverPartner registry и назначение партнёра в admin.",
    ],
  },
  {
    role: "Фронтенд",
    focus: "Показать пользователю, где заявка, где ссылка, где помощь support.",
    tasks: [
      "Собрать страницу 'Логистика / Транспорт'.",
      "Сделать формы трансфера, частного водителя и межгорода.",
      "Сделать ЖД и авиа как informational + deep link + запрос помощи.",
      "Сделать блок городского такси с deep links или инструкцией.",
    ],
  },
  {
    role: "База данных",
    focus: "Хранить логистические заявки, партнёров и клики по ссылкам.",
    tasks: [
      "Создать logistics_requests, driver_partners, deep_link_clicks и partner_contact_logs.",
      "Сохранить тип запроса, маршрут, дату, время, пассажиров, багаж, язык и контакт.",
      "Добавить статусы для assisted flow: new, in_review, waiting_supplier, confirmed, cancelled, escalated.",
    ],
  },
  {
    role: "Admin / Support",
    focus: "Операционно обработать логистику.",
    tasks: [
      "Сделать список логистических заявок, назначение водителя/партнёра, смену статуса и уведомления.",
      "Описать assisted flow для ЖД/авиа: support консультирует, пользователь оплачивает на внешнем сайте.",
      "Логировать связь с водителем, партнёром и пользователем.",
    ],
  },
  {
    role: "DevOps / Monitoring",
    focus: "Контролировать внешние ссылки и ошибки заявок.",
    tasks: [
      "Добавить проверку критичных deep links и fallback на support form.",
      "Логировать ошибки logistics API и сбои уведомлений.",
      "Настроить alert, если заявки создаются, но не назначаются support.",
    ],
  },
  {
    role: "QA / Analytics",
    focus: "Проверить ссылки, заявки и спрос.",
    tasks: [
      "Проверить создание всех logistics requests и deep links.",
      "Проверить, что нет обещания авиа/ЖД бронирования внутри MVP.",
      "Отслеживать deep_link_click, request_submit и support_handoff.",
    ],
  },
];

const stage6Roles: RoleTask[] = [
  {
    role: "AI / Бэкенд",
    focus: "Сделать AI помощником навигации, а не автономным агентом бронирования.",
    tasks: [
      "Подключить LLM через backend, чтобы ключи не попадали на frontend.",
      "Сделать intent routing: жильё, туры, логистика, eSIM, визы, SOS, другое.",
      "Подготовить базу знаний: FAQ, правила въезда, культура, города, ограничения MVP.",
      "Сделать human handoff: support получает историю диалога, выбранную услугу, контакты и комментарий.",
    ],
  },
  {
    role: "База знаний / Data",
    focus: "Подготовить проверенный контент для ответов AI.",
    tasks: [
      "Собрать FAQ, визы, культуру, города, услуги, статусы MVP и ограничения в единую базу знаний.",
      "Разметить источники и дату проверки, чтобы AI не отвечал неподтверждёнными фактами.",
      "Подготовить embeddings через pgvector или Qdrant, если RAG нужен в MVP.",
    ],
  },
  {
    role: "Фронтенд",
    focus: "Сделать понятный интерфейс консьержа.",
    tasks: [
      "Собрать floating chat widget и отдельную страницу чата.",
      "Добавить быстрые ответы, историю сообщений, typing indicator и кнопку 'Передать специалисту'.",
      "Показывать дисклеймер: AI даёт информацию, бронирование подтверждает человек/support.",
    ],
  },
  {
    role: "DevOps / Cost control",
    focus: "Контролировать доступность и стоимость AI.",
    tasks: [
      "Хранить API keys только на backend и в секретах окружения.",
      "Добавить лимиты сессий, rate limit, логирование стоимости и fallback при недоступности LLM.",
      "Настроить Sentry/alert для ошибок AI gateway и handoff.",
    ],
  },
  {
    role: "Support / Operations",
    focus: "Принять сложные запросы от AI.",
    tasks: [
      "Сделать очередь handoff-заявок и правила приоритета.",
      "Описать сценарии SOS, неопределённых запросов, жалоб, отмен и нестандартных ситуаций.",
      "Подготовить шаблоны ответов support.",
    ],
  },
  {
    role: "QA / Safety",
    focus: "Ограничить риск ошибок AI.",
    tasks: [
      "Проверить prompt injection, hallucinations, медицинские/юридические вопросы и SOS trigger.",
      "AI не должен обещать цену, наличие, бронь, возврат или юридическую консультацию.",
      "При сомнении AI должен переводить запрос человеку.",
    ],
  },
];

const stage7Roles: RoleTask[] = [
  {
    role: "QA",
    focus: "Проверить MVP перед реальными пользователями.",
    tasks: [
      "Пройти E2E: жильё, туры, логистика, AI handoff, admin request processing, регистрация и профиль.",
      "Проверить RBAC, fallback, AI safety, content, SEO/i18n и mobile responsive.",
      "Провести load smoke test на 100 concurrent users.",
    ],
  },
  {
    role: "DevOps",
    focus: "Поднять production-контур.",
    tasks: [
      "Настроить production environment, SSL, CDN, WAF, backups, monitoring и alerting.",
      "Подключить Sentry, structured logs, request_id, error rate и response time alerts.",
      "Проверить восстановление backup и health checks после деплоя.",
    ],
  },
  {
    role: "Operations / Support",
    focus: "Подготовить команду к пилоту.",
    tasks: [
      "Подготовить support scripts, SOP, partner onboarding pack и admin training.",
      "Проверить, что support умеет менять статусы, писать комментарии, эскалировать и закрывать заявки.",
      "Назначить владельцев контента и процесс регулярной проверки ссылок.",
    ],
  },
  {
    role: "PM / Analytics",
    focus: "Запустить 90-дневную проверку PMF.",
    tasks: [
      "Собрать dashboard: visitors, registered users, CTA clicks, requests, confirmed bookings, GMV, NPS, repeat requests.",
      "Зафиксировать пороги: 50+ confirmed bookings, NPS >= 40, request -> booking conversion >= 30%.",
      "Подготовить список улучшений после пилота и правило перехода к Этапу 8.",
    ],
  },
];

const stage8Roles: RoleTask[] = [
  {
    role: "Бэкенд / Integrations",
    focus: "Превратить доказанные verticals в API-модули.",
    tasks: [
      "Подключать только те интеграции, где пилот доказал спрос: OTA/API, eSIM purchase, insurance checkout, restaurant/events, rail/flight API.",
      "Для каждого поставщика сделать adapter, sandbox tests, fallback и contract-backed flow.",
      "Сохранить ручной fallback на случай недоступности API.",
    ],
  },
  {
    role: "PM / Legal",
    focus: "Не начинать интеграцию без договора и понятной ответственности.",
    tasks: [
      "Проверить договор, sandbox, production access, правила возврата, SLA и ответственность.",
      "Принять Go/No-Go по каждой vertical отдельно.",
      "Проверить, что коммерческая модель покрывает поддержку и риски.",
    ],
  },
  {
    role: "Фронтенд / QA",
    focus: "Показать API-функции без потери понятности.",
    tasks: [
      "Обновить страницы услуг: availability, статус, условия, цена, fallback.",
      "Проверить ошибки API, таймауты, повторные запросы и понятные сообщения пользователю.",
      "Сохранить маркировку: бронирование внутри платформы или партнёрская обработка.",
    ],
  },
];

const stage9Roles: RoleTask[] = [
  {
    role: "Mobile / Telegram",
    focus: "Подключить новые клиенты к стабильному backend.",
    tasks: [
      "Сделать iOS и Android на React Native или Flutter.",
      "Сделать Telegram bot на Node.js / Telegraf для быстрых сценариев и уведомлений.",
      "Подключить push notifications и mobile-first UX.",
    ],
  },
  {
    role: "Бэкенд / DevOps",
    focus: "Не ломать web MVP при подключении новых клиентов.",
    tasks: [
      "Переиспользовать существующий backend API без отдельного mobile backend.",
      "Добавить device/session management, push tokens и rate limits.",
      "Проверить нагрузку и мониторинг по новым клиентам.",
    ],
  },
  {
    role: "QA / Design",
    focus: "Проверить mobile flows и store readiness.",
    tasks: [
      "Проверить вход, профиль, заявки, AI handoff, уведомления и offline states.",
      "Подготовить store assets, privacy labels и процесс approval.",
      "Сохранить единые статусы услуг на web/mobile/Telegram.",
    ],
  },
];

const stage10Roles: RoleTask[] = [
  {
    role: "Бэкенд / Payments",
    focus: "Подключить полноценную оплату только после legal readiness.",
    tasks: [
      "Сделать payment gateway, payment intent, status callbacks, idempotency и reconciliation.",
      "Добавить refunds, partial/split payments и partner payouts только при юридическом разрешении.",
      "Не хранить raw card data на серверах платформы.",
    ],
  },
  {
    role: "Legal / Finance",
    focus: "Закрыть merchant, acquiring и возвраты.",
    tasks: [
      "Проверить юрлицо, merchant of record, local/international acquiring, KYB и налоговые последствия.",
      "Описать T&C, refund policy, dispute process и финансовую отчётность.",
      "Утвердить, какие платежи можно принимать внутри платформы.",
    ],
  },
  {
    role: "Admin / QA",
    focus: "Сделать платежи управляемыми и проверяемыми.",
    tasks: [
      "Добавить в admin статусы оплаты, возвраты, reconciliation и audit log.",
      "Протестировать повторные callbacks, отмену, неуспешную оплату, возврат и уведомления.",
      "Проверить security scan и PCI-minimal scope.",
    ],
  },
];

const stage11Roles: RoleTask[] = [
  {
    role: "Фронтенд / Admin",
    focus: "Дать партнёрам личные кабинеты.",
    tasks: [
      "Сделать partner dashboard для отелей, транспортных партнёров и гидов.",
      "Добавить управление inventory, заявками, бронированиями, статусами и отчётами.",
      "Разделить интерфейсы: admin команды, support и партнёры.",
    ],
  },
  {
    role: "Бэкенд / Data",
    focus: "Поддержать партнёрские операции и аналитику.",
    tasks: [
      "Добавить partner RBAC, commission tracking, reports, analytics и audit logs.",
      "Сделать APIs для inventory и booking management.",
      "Ограничить доступ партнёра только его данными.",
    ],
  },
  {
    role: "Operations / QA",
    focus: "Снизить ручную нагрузку support.",
    tasks: [
      "Онбордить партнёров и обучить их dashboard.",
      "Проверить, что партнёры реально используют кабинет и support load снижается.",
      "Добавить quality monitoring и правила блокировки партнёра.",
    ],
  },
];

const stage12Roles: RoleTask[] = [
  {
    role: "Product / Growth",
    focus: "Масштабировать Orient UBook до SuperApp.",
    tasks: [
      "Запустить loyalty, Orient+, subscription, white-label и API marketplace.",
      "Планировать региональное расширение: Казахстан, Кыргызстан, Таджикистан.",
      "Подготовить Series A roadmap и KPI роста.",
    ],
  },
  {
    role: "Platform / AI / Data",
    focus: "Поднять платформу до multi-country уровня.",
    tasks: [
      "Развить advanced AI concierge: персонализация, предсказание, multi-country context.",
      "Сделать multi-country i18n, partner APIs, analytics и масштабируемую инфраструктуру.",
      "Рассмотреть Kubernetes только при доказанной необходимости: высокая нагрузка, auto-scaling, multi-region.",
    ],
  },
  {
    role: "Security / Operations",
    focus: "Контролировать сложность полного продукта.",
    tasks: [
      "Расширить monitoring, security, compliance, incident response и data governance.",
      "Проверить SOS/госинтеграции только после юридической и операционной готовности.",
      "Удержать product scope через stage gates и data-driven decisions.",
    ],
  },
];

export const phases: Phase[] = [
  {
    id: 0,
    title: "Подготовка и фиксация объёма",
    marker: "Подготовка",
    duration: "1-2 недели",
    goal: "Снять главные неопределённости до начала разработки.",
    result: "Команда понимает scope, партнёров, риски, стек, роли и то, что не входит в MVP.",
    summary: "Фиксируем MVP scope, статусы услуг, партнёров, юридические ограничения, архитектуру v1 и backlog.",
    roleTasks: stage0Roles,
    workstreams: streamsFromRoles(stage0Roles),
    deliverables: ["Утверждённый MVP backlog", "Supplier Integration Matrix", "Content Matrix", "Risk Register v1", "Roadmap и бюджетная оценка"],
    tools: ["Notion / Google Docs / Confluence", "Jira / Linear / YouTrack", "Miro / FigJam / Mermaid"],
    acceptance: ["Есть финальный список модулей MVP", "Каждая услуга имеет статус и fallback", "Команда понимает, что не входит в MVP", "Backlog верхнего уровня создан"],
    dod: ["MVP scope подписан stakeholders", "Партнёры размечены: API, deep link, manual или неизвестно", "Роли команды распределены"],
    gate: "Scope утверждён, backlog создан, команда готова к этапу 1.",
    risk: "Главный риск - расширить MVP до полноценного SuperApp до проверки спроса.",
  },
  {
    id: 1,
    title: "Технический фундамент платформы",
    marker: "MVP-ядро",
    duration: "3-4 недели",
    goal: "Сделать основу, на которой будут работать сайт, admin, заявки, support и будущие клиенты.",
    result: "Работают backend API, база данных, авторизация, профиль пользователя, роли, admin shell, audit log и staging.",
    summary: "Backend, БД, вход через Google/Yandex/Apple/email/phone, аккаунт, admin shell, CI/CD и staging.",
    roleTasks: stage1Roles,
    workstreams: streamsFromRoles(stage1Roles),
    deliverables: ["Backend skeleton", "Auth API", "Profile module", "DB schema", "Admin shell", "Staging deploy"],
    tools: ["Next.js + TypeScript", "NestJS + TypeScript", "PostgreSQL + Prisma", "Redis", "Docker", "GitHub Actions"],
    acceptance: ["Тестовый пользователь создаётся", "Пользователь входит всеми MVP-способами", "Профиль сохраняется", "Admin открывается", "Audit log пишет изменения", "Staging стабилен"],
    dod: ["Health check отвечает", "Auth endpoints работают", "DB migrations применены", "CI/CD деплоит staging", "Frontend запускается с базовой навигацией"],
    gate: "Core platform работает в staging, auth и база готовы к публичному сайту.",
    risk: "Риск - начать преждевременные микросервисы, Kubernetes или сложную оплату вместо стабильного MVP-ядра.",
  },
  {
    id: 2,
    title: "Публичный сайт и информационные разделы",
    marker: "MVP-ядро",
    duration: "3-4 недели",
    goal: "Показать пользователю все услуги и честно разделить рабочие, assisted и информационные сценарии.",
    result: "Сайт с главной, услугами, городами, маршрутами, формами, SEO, контентом и базовой аналитикой.",
    summary: "Публичный сайт, все informational pages, CMS, SEO, i18n, формы и события аналитики.",
    roleTasks: stage2Roles,
    workstreams: streamsFromRoles(stage2Roles),
    deliverables: ["Public site", "Информационные разделы", "Content admin", "SEO/i18n база", "Analytics event map"],
    tools: ["Next.js metadata, sitemap, robots.txt", "Tailwind CSS", "Content module / Strapi / Directus", "PostHog / Amplitude / Google & Яндекс analytics"],
    acceptance: ["Все основные услуги есть на сайте", "Пользователь видит статус каждой услуги", "Формы создают заявки в backend", "Контент меняется без разработчика", "События аналитики отправляются"],
    dod: ["Все informational страницы опубликованы", "CTA ведут на AI/support или правильную форму", "SEO-поля заполнены", "Ссылки проверены", "EN/RU/UZ страницы отображаются"],
    gate: "Сайт и контент готовы на staging, аналитика показывает спрос, можно строить первый функциональный модуль.",
    risk: "Пользователь может принять информационную страницу за реальное бронирование. Нужна явная маркировка статуса.",
  },
  {
    id: 3,
    title: "Жильё",
    marker: "MVP-ядро",
    duration: "3-4 недели",
    goal: "Сделать первый полноценный сервис: заявка на жильё у локальных партнёров.",
    result: "Турист выбирает объект, отправляет заявку, support обрабатывает её в admin и фиксирует коммуникацию с партнёром.",
    summary: "Каталог партнёрского жилья, фильтры, request flow, admin/support обработка и partner logs.",
    roleTasks: stage3Roles,
    workstreams: streamsFromRoles(stage3Roles),
    deliverables: ["Каталог жилья", "Фильтры", "Форма заявки", "Admin workflow", "Partner communication log", "Voucher upload"],
    tools: ["NestJS modules: accommodations, suppliers, requests", "PostgreSQL", "Prisma", "S3-compatible storage", "Playwright"],
    acceptance: ["Пользователь находит жильё", "Пользователь отправляет заявку", "Support видит заявку и меняет статус", "Есть история действий", "Нет обещания мгновенного бронирования"],
    dod: ["Каталог отображается", "Фильтры работают", "Admin обновляет статус", "Уведомления работают", "Партнёрская коммуникация логируется"],
    gate: "Минимум 5 партнёрских объектов в каталоге, request flow протестирован E2E.",
    risk: "Качество данных партнёров и ручная доступность объектов могут тормозить обработку заявок.",
  },
  {
    id: 4,
    title: "Туры и гиды",
    marker: "MVP-ядро",
    duration: "3-4 недели",
    goal: "Запустить локальные туры и проверенных гидов как ключевое отличие платформы.",
    result: "Пользователь выбирает тур или гида, отправляет заявку, команда подтверждает вручную после проверки качества.",
    summary: "Гиды, KYC, туры, hidden routes, гастрономические подтипы, request flow и moderation.",
    roleTasks: stage4Roles,
    workstreams: streamsFromRoles(stage4Roles),
    deliverables: ["Каталог гидов", "Каталог туров", "KYC/moderation workflow", "Tour request flow", "Reviews"],
    tools: ["NestJS modules: tours, guides, requests", "PostgreSQL", "Admin moderation", "Playwright"],
    acceptance: ["Пользователь выбирает тур или гида", "Заявка попадает в admin", "Support назначает гида и фиксирует результат", "Непроверенный гид не выглядит гарантированно доступным"],
    dod: ["Гиды регистрируются", "Admin модерирует гидов и туры", "Туры публикуются", "Запрос на тур создаётся", "Отзывы отображаются"],
    gate: "Минимум 10 верифицированных гидов и 20 туров, request flow протестирован.",
    risk: "Низкое качество гидов без KYC и модерации может ударить по доверию к платформе.",
  },
  {
    id: 5,
    title: "Логистика туриста",
    marker: "MVP-ядро",
    duration: "2-3 недели",
    goal: "Дать туристу понятный путь для трансфера, такси, ЖД, авиа и частных поездок.",
    result: "Логистика работает через заявку, deep link или помощь support; полного ticketing engine в MVP нет.",
    summary: "Трансферы и водители через заявки; ЖД/авиа/taxi через deep links, инструкции и assisted support.",
    roleTasks: stage5Roles,
    workstreams: streamsFromRoles(stage5Roles),
    deliverables: ["Logistics request flows", "Transfer forms", "Deep links", "Driver assignment", "Assisted rail/flight flow"],
    tools: ["Logistics requests API", "DeepLinkAdapter", "Admin queue", "Analytics events"],
    acceptance: ["Пользователь понимает, где бронирует внутри платформы, а где у партнёра", "Transfer/private trip заявки создаются в admin", "Deep link клики логируются", "Нет обещания полного авиа/ЖД бронирования"],
    dod: ["Все типы logistics запросов создаются", "Deep links работают", "Admin назначает партнёра", "Уведомления работают"],
    gate: "Базовая логистика покрыта без полного ticketing engine, QA пройдено.",
    risk: "Поставщики ЖД/авиа могут не дать API. Поэтому deep link и support fallback обязательны.",
  },
  {
    id: 6,
    title: "AI-консьерж и поддержка",
    marker: "MVP-ядро",
    duration: "3-4 недели",
    goal: "Сделать AI главным помощником навигации и передачи сложных случаев support.",
    result: "AI объясняет услуги, собирает базовые данные, направляет к форме/странице и передаёт сложные запросы человеку.",
    summary: "AI chat, база знаний, intent routing, переход к нужным сценариям, human handoff и support cases.",
    roleTasks: stage6Roles,
    workstreams: streamsFromRoles(stage6Roles),
    deliverables: ["AI chat", "Knowledge base", "Intent routing", "Human handoff", "AI logs"],
    tools: ["OpenAI / Anthropic / Gemini через backend", "pgvector или Qdrant", "Redis sessions", "Sentry"],
    acceptance: ["AI направляет пользователя к форме или разделу", "Support получает контекст диалога", "AI не обещает неподтверждённые услуги", "Опасные запросы уходят человеку"],
    dod: ["AI отвечает по основным интентам", "Routing работает", "Handoff создаёт support case", "Knowledge base покрывает FAQ/visa/culture/cities", "Сессии логируются"],
    gate: "AI помогает пользователю, но не принимает booking/payment решения автономно; safety test пройден.",
    risk: "AI может ошибаться или галлюцинировать. Нужны ограничения, база знаний и human handoff.",
  },
  {
    id: 7,
    title: "QA, запуск пилота и улучшения",
    marker: "Пилот",
    duration: "2-3 недели подготовки + 90 дней пилота",
    goal: "Подготовить MVP к реальным пользователям и собрать PMF-данные.",
    result: "MVP запущен в production/pilot, команда видит спрос, конверсию, поддержку, ошибки и список улучшений.",
    summary: "QA, production, monitoring, support SOP, partner onboarding и 90-дневный PMF dashboard.",
    roleTasks: stage7Roles,
    workstreams: streamsFromRoles(stage7Roles),
    deliverables: ["Production release", "Support SOP", "PMF dashboard", "Partner onboarding pack", "90-day pilot report"],
    tools: ["Playwright / Cypress", "Jest / Supertest", "k6 / Artillery", "Sentry", "Grafana / Datadog", "PostHog / Amplitude"],
    acceptance: ["Критические баги закрыты", "Support умеет обработать заявку", "Есть dashboard ключевых метрик", "Партнёры онбордены", "Список улучшений после пилота создан"],
    dod: ["Functional flows работают", "Informational разделы опубликованы", "Admin обрабатывает заявки", "Monitoring активен", "Support готов", "Пилот запущен"],
    gate: "50+ confirmed bookings, NPS >= 40, request -> booking conversion >= 30% дают основание переходить к этапу 8.",
    risk: "Пилот может не подтвердить PMF или перегрузить support. Решения принимаются по данным, не по предположениям.",
  },
  {
    id: 8,
    title: "Интеграции роста",
    marker: "Рост",
    duration: "после MVP",
    goal: "Перевести доказанные информационные и assisted-сервисы в полноценные transactional-модули.",
    result: "Появляются API-бронирования и checkout только в тех вертикалях, где есть спрос, договор и legal readiness.",
    summary: "OTA/API, eSIM purchase, insurance checkout, restaurants/events, rail/flight API where justified.",
    roleTasks: stage8Roles,
    workstreams: streamsFromRoles(stage8Roles),
    deliverables: ["Supplier adapters", "Sandbox tests", "Contract-backed flows", "Fallback сохранён"],
    tools: ["Supplier adapters", "Contract management", "Sandbox environments", "API monitoring"],
    acceptance: ["Интеграция запускается только после PMF", "Есть договор и sandbox", "Fallback остаётся доступным", "Пользователь видит реальный статус услуги"],
    dod: ["API reliability proven", "Demand validated by pilot data", "Legal model confirmed"],
    gate: "Конкретная vertical доказала спрос и имеет договор/доступ к API.",
    risk: "API reliability, юридические ограничения и ответственность поставщика.",
  },
  {
    id: 9,
    title: "Mobile и Telegram",
    marker: "Рост",
    duration: "после MVP",
    goal: "Добавить новые клиенты к стабильному backend API после web PMF.",
    result: "iOS, Android и Telegram используют тот же backend без дублирования бизнес-логики.",
    summary: "Mobile apps, Telegram bot, push notifications и mobile-first UX.",
    roleTasks: stage9Roles,
    workstreams: streamsFromRoles(stage9Roles),
    deliverables: ["iOS app", "Android app", "Telegram bot", "Push notifications"],
    tools: ["React Native / Flutter", "Node.js / Telegraf", "Existing backend API"],
    acceptance: ["Backend API не переписывается", "Основные flows работают на mobile", "Telegram закрывает быстрые сценарии", "Store readiness подготовлен"],
    dod: ["Store approval", "Telegram flow works", "Push notifications work", "Backend remains stable"],
    gate: "Web PMF подтверждён, API стабилен, есть активное использование платформы.",
    risk: "Store approval, дублирование UX и рост поддержки новых клиентов.",
  },
  {
    id: 10,
    title: "Оплаты и автоматизация",
    marker: "Рост",
    duration: "после MVP",
    goal: "Подключить полноценную оплату, возвраты и сверку только после юридической готовности.",
    result: "Платформа умеет принимать online payments, вести reconciliation и управлять refund/payout процессами.",
    summary: "Online payments, refunds, reconciliation, partner payouts и split payments if legal allows.",
    roleTasks: stage10Roles,
    workstreams: streamsFromRoles(stage10Roles),
    deliverables: ["Payment gateway", "Refund workflow", "Reconciliation", "Partner payouts"],
    tools: ["Stripe / Adyen / Payme / Click UZ after confirmation", "Payment webhooks", "Audit logs"],
    acceptance: ["Юридическая модель подтверждена", "Raw card data не хранится", "Повторный callback не создаёт дубль", "Admin видит статусы оплаты"],
    dod: ["Live transactions tested", "Refund workflow works", "Reconciliation ready", "Security scan passed"],
    gate: "GMV достаточен, юридическая структура и acquiring позволяют принимать платежи.",
    risk: "International acquiring для Узбекистана и split payments требуют отдельного подтверждения.",
  },
  {
    id: 11,
    title: "Кабинеты партнёров B2B",
    marker: "Масштаб",
    duration: "после MVP",
    goal: "Дать партнёрам операционную автономность и снизить ручную нагрузку support.",
    result: "Партнёры управляют заявками, inventory, отчётами и комиссиями в собственном кабинете.",
    summary: "Partner dashboard, guide dashboard, inventory, booking management, commission reports and analytics.",
    roleTasks: stage11Roles,
    workstreams: streamsFromRoles(stage11Roles),
    deliverables: ["Partner dashboard", "Guide dashboard", "Inventory tools", "Commission reports", "Partner analytics"],
    tools: ["Next.js admin extension", "RBAC", "Audit logs", "Analytics"],
    acceptance: ["Партнёр видит только свои данные", "Support load снижается", "Отчёты и комиссии прозрачны", "Audit log покрывает действия партнёров"],
    dod: ["Partners actively use dashboard", "Inventory updates work", "Reports are available"],
    gate: "Количество активных партнёров оправдывает отдельный кабинет.",
    risk: "Партнёры могут не принять новый workflow без обучения и понятной ценности.",
  },
  {
    id: 12,
    title: "Масштабирование SuperApp",
    marker: "Масштаб",
    duration: "после MVP",
    goal: "Расширить Orient UBook до региональной travel SuperApp платформы.",
    result: "Платформа поддерживает loyalty, subscription, marketplace, white-label, regional expansion и advanced AI.",
    summary: "Loyalty, Orient+, API marketplace, white-label, regional expansion and advanced AI.",
    roleTasks: stage12Roles,
    workstreams: streamsFromRoles(stage12Roles),
    deliverables: ["Loyalty / Orient+", "API marketplace", "White-label", "Regional expansion", "Advanced AI"],
    tools: ["Advanced analytics", "Partner APIs", "Multi-country i18n", "Scale infrastructure"],
    acceptance: ["Рост устойчивый", "Команда справляется с операционной сложностью", "Инвестиционный раунд поддерживает масштаб", "Multi-country risks разобраны"],
    dod: ["Sustainable growth", "Series A / investment secured", "Multi-country operations ready"],
    gate: "Рост, удержание, выручка и инвестиции подтверждают масштабирование.",
    risk: "Сложность продукта может расти быстрее команды, операций и качества сервиса.",
  },
];
