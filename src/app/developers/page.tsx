import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Database, GitPullRequestArrow, Search, ShieldCheck, TerminalSquare } from "lucide-react";
import { DeveloperSearch } from "@/components/DeveloperSearch";
import { Footer } from "@/components/Footer";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { SideSectionNav } from "@/components/SideSectionNav";
import { StageTimeline } from "@/components/StageTimeline";
import { TopNav } from "@/components/TopNav";
import { architectureNotes, dataEntities, dataRelations, glossary, onboardingSteps, qaStrategy, quickNav, readyChecklist, techStack } from "@/data/developer";

const quickNavHref: Record<string, string> = {
  Backend: "#tech-stack",
  Frontend: "#tech-stack",
  DB: "#db",
  DevOps: "#tech-stack",
  QA: "#qa",
  AI: "#glossary",
  Роли: "#stages",
  API: "#stages",
  Этапы: "#stages",
};

const developerSectionNav = [
  { href: "#developer-intro", label: "Введение в ТЗ" },
  { href: "#tech-stack", label: "Стек технологий" },
  { href: "#db", label: "Карта данных" },
  { href: "#stages", label: "Этапы реализации" },
  { href: "#developer-search", label: "Поиск по ТЗ" },
  { href: "#services-map", label: "Карта услуг MVP" },
  { href: "#qa", label: "Онбординг и QA" },
  { href: "#glossary", label: "Глоссарий" },
];

const developerSectionActions = [
  { href: "/stages", label: "Все этапы", accent: true },
  { href: "/", label: "Для инвестора" },
  { href: "https://orient-ubook-mvp.lovable.app/app.html", label: "Дизайн-макет", external: true },
  { href: "https://t.me/LazDmitriy", label: "Связаться", external: true },
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase text-cobalt">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-700">{text}</p> : null}
    </div>
  );
}

export default function DevelopersPage() {
  return (
    <main>
      <TopNav active="developers" />
      <SideSectionNav
        actions={developerSectionActions}
        ariaLabel="Разделы и действия для разработчиков"
        items={developerSectionNav}
        kicker="Разделы разработки"
      />
      <section id="developer-intro" className="scroll-mt-24 bg-ceramic px-4 pb-12 pt-32 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-cobalt">
              <Code2 size={16} /> Для разработчиков
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-6xl">Полная техническая спецификация Orient UBook MVP.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Здесь находятся стек, архитектурные решения, задачи по ролям, критерии приёмки и то, что намеренно не входит в MVP. Раздел нужен, чтобы backend, frontend, DB, DevOps, QA, AI, дизайнер и PM одинаково понимали объём работ.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {quickNav.map((item) => (
                <a key={item} href={quickNavHref[item]} className="rounded-md border border-cobalt/15 bg-white/80 px-3 py-2 text-sm font-semibold text-cobalt transition hover:bg-white">
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/stages" className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 font-semibold text-white shadow-lift transition hover:bg-ink">
                Этапы реализации <ArrowRight size={18} />
              </Link>
              <a href="#developer-search" className="inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/80 px-5 py-3 font-semibold text-cobalt backdrop-blur transition hover:bg-white">
                Поиск по ТЗ <Search size={18} />
              </a>
            </div>
          </div>

          <div className="glass-panel grid content-center gap-4 p-5">
            <h2 className="text-2xl font-semibold text-ink">Главное правило MVP</h2>
            <p className="leading-7 text-slate-700">
              Сначала строим рабочие заявки, admin/support, статусы услуг и аналитику спроса. Прямые API-бронирования, онлайн-оплаты, mobile apps, Telegram bot и B2B-кабинеты включаются только после пилота, договоров и юридической готовности.
            </p>
            <div className="grid gap-2 text-sm font-semibold text-slate-700">
              <span className="rounded-md bg-white/75 p-3">1. Не обещать услугу как бронирование, если в MVP это только информация или assisted flow.</span>
              <span className="rounded-md bg-white/75 p-3">2. Внешние интеграции идут через backend, а не напрямую из frontend.</span>
              <span className="rounded-md bg-white/75 p-3">3. Каждая заявка имеет статус, владельца, историю и audit log.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="bg-white px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Tech stack"
            title="Единая карта технологий для MVP."
            text="Стек выбран под скорость запуска, прозрачную поддержку и простой найм исполнителей. До Series A продукту нужен модульный монолит, а не микросервисная инфраструктура."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {techStack.map((item) => (
              <article key={item.layer} className="glass-panel p-5">
                <p className="text-sm font-semibold uppercase text-cobalt">{item.layer}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{item.value}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {architectureNotes.map((item) => (
              <div key={item} className="rounded-md border border-cobalt/15 bg-cobalt/5 p-4 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="db" className="bg-milk px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Data map"
            title="Логическая карта данных для онбординга."
            text="Полная схема должна жить в Prisma schema. Здесь показана бизнес-логика сущностей и связей, чтобы новый разработчик быстрее понял проект."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-3 md:grid-cols-2">
              {dataEntities.map((entity) => (
                <article key={entity.name} className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="flex items-center gap-2 font-semibold text-ink">
                    <Database size={17} className="text-cobalt" /> {entity.name}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {entity.fields.map((field) => (
                      <li key={field} className="rounded-md bg-slate-50 px-3 py-2">{field}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <aside className="glass-panel p-5">
              <h3 className="text-xl font-semibold text-ink">Связи</h3>
              <div className="mt-4 grid gap-2">
                {dataRelations.map((item) => (
                  <p key={item} className="rounded-md border border-slate-200 bg-white/75 p-3 text-sm leading-6 text-slate-700">{item}</p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div id="stages">
        <StageTimeline />
      </div>

      <section id="developer-search" className="bg-white">
        <DeveloperSearch />
      </section>

      <div id="services-map" className="scroll-mt-24">
        <ServiceMatrix />
      </div>

      <section id="qa" className="bg-white px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow="Onboarding"
                title="Первые 2 часа нового разработчика."
                text="Исполнитель не берёт задачу, пока не поднял проект, не прошёл базовый flow и не понял границы текущего этапа."
              />
              <div className="mt-6 grid gap-2">
                {onboardingSteps.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-md border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cobalt text-xs font-semibold text-white">{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="glass-panel p-5">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">
                  <GitPullRequestArrow className="text-cobalt" size={20} /> Definition of Ready
                </h3>
                <div className="mt-4 grid gap-2">
                  {readyChecklist.map((item) => (
                    <p key={item} className="flex gap-2 rounded-md bg-white/75 p-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-1 shrink-0 text-lagoon" size={16} /> {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="glass-panel p-5">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">
                  <ShieldCheck className="text-cobalt" size={20} /> QA и тестирование
                </h3>
                <div className="mt-4 grid gap-2">
                  {qaStrategy.map((item) => (
                    <div key={item.title} className="rounded-md border border-slate-200 bg-white/75 p-3">
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="glossary" className="scroll-mt-24 bg-milk px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Glossary"
            title="Единый словарь для команды."
            text="Термины ниже нельзя трактовать свободно: они влияют на БД, API, UI-статусы, поддержку и ожидания инвесторов."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {glossary.map((item) => (
              <article key={item.term} className="rounded-md border border-slate-200 bg-white p-4">
                <h3 className="flex items-center gap-2 font-semibold text-ink">
                  <TerminalSquare size={17} className="text-cobalt" /> {item.term}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.definition}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
