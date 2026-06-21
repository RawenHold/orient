import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  Route,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  budgetSplit,
  competitorRows,
  customerSegments,
  deckMetrics,
  financialScenarios,
  heroProof,
  investorRisks,
  investorRoadmap,
  marketTimeline,
  painPoints,
  problemJourney,
  revenueStreams,
  solutionPillars,
  unitEconomics,
  validationItems,
  whyNow,
} from "@/data/deck";
import { PresentationCta } from "./PresentationCta";
import { SideSectionNav } from "./SideSectionNav";

const investorSectionNav = [
  { href: "#investor-problem", label: "Проблема" },
  { href: "#market-opportunity", label: "Рынок" },
  { href: "#competitive-position", label: "Конкуренты" },
  { href: "#validation-customers", label: "Клиенты" },
  { href: "#seed-business-model", label: "Раунд" },
  { href: "#risk-register", label: "Риски" },
  { href: "#implementation-roadmap", label: "Roadmap" },
  { href: "#why-now", label: "Почему сейчас" },
  { href: "#investor-room", label: "Deck" },
];

const investorSectionActions = [
  { href: "https://t.me/LazDmitriy", label: "Связаться", external: true, accent: true },
  { href: "/assets/orient-ubook-presentation.pdf", label: "Скачать презентацию", download: true },
  { href: "/developers", label: "Для разработчиков" },
  { href: "/stages", label: "Этапы реализации" },
  { href: "https://orient-ubook-mvp.lovable.app/app.html", label: "Дизайн-макет", external: true },
];

function ResponsiveTable({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
      <table className="min-w-[760px] w-full border-collapse text-left text-sm">{children}</table>
    </div>
  );
}

export function InvestorLanding() {
  return (
    <>
      <SideSectionNav
        actions={investorSectionActions}
        ariaLabel="Разделы и действия для инвестора"
        items={investorSectionNav}
        kicker="Разделы инвестора"
      />

      <section id="top" className="relative min-h-[92vh] overflow-hidden pt-[112px] md:pt-[72px]">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-milk to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(92vh-112px)] max-w-7xl content-center px-4 py-14 md:min-h-[calc(92vh-72px)] md:px-8">
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-cobalt/20 bg-white/75 px-3 py-2 text-sm font-semibold text-cobalt backdrop-blur">
              <Sparkles size={16} /> Central Asia travel concierge layer
            </p>
            <h1 className="font-display text-4xl leading-[1.04] text-ink sm:text-5xl md:text-7xl">
              Туризм в Узбекистане растёт быстрее, чем его цифровая инфраструктура.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              По данным UN Tourism (UNWTO, декабрь 2025), Узбекистан — один из 7 самых быстрорастущих туристических рынков планеты. Турист уже здесь. Но его поездку по-прежнему собирают вручную: жильё в одном сервисе, гид в Telegram, трансфер через знакомых, оплата в трёх валютах.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              Orient UBook закрывает этот разрыв первым: один AI-консьерж, один маршрут, один партнёрский слой — от прилёта до отъезда гостя.
            </p>
            <p className="mt-5 max-w-3xl rounded-md border border-gold/30 bg-white/78 px-4 py-3 text-base font-semibold leading-7 text-ink shadow-sm backdrop-blur">
              Рынок растёт быстрее, чем успевает строиться его цифровая инфраструктура. Кто первым займёт этот слой — забирает рынок целиком, а не его долю.
            </p>
            <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
              {heroProof.map((item) => (
                <div key={item.label} className="glass-panel p-4">
                  <p className="text-xs font-semibold uppercase text-slate-500">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-ink">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-4xl text-sm font-semibold leading-6 text-cobalt">
              Структура раунда построена так, чтобы каждая стадия снижала риск следующей — не наоборот.
            </p>
          </div>
        </div>
      </section>

      <section id="investor-problem" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="relative">
            <p className="text-sm font-semibold uppercase text-cobalt">Проблема туриста</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">{problemJourney.title}</h2>
            <div className="mt-6 rounded-md border border-cobalt/15 bg-white/78 p-5 shadow-glass">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cobalt text-white">
                  <Route size={22} />
                </span>
                <p className="text-sm font-semibold uppercase text-cobalt">реальный сценарий туриста</p>
              </div>
              <p className="mt-4 text-lg leading-8 text-slate-700">{problemJourney.text}</p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {painPoints.map((point, index) => (
              <article key={point.title} className="feature-card group rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/25 hover:shadow-glass">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase text-cobalt">точка боли {index + 1}</span>
                    <h3 className="mt-2 text-xl font-semibold text-ink">{point.title}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cobalt/5 text-cobalt transition group-hover:bg-cobalt group-hover:text-white">
                    <Compass size={19} />
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase text-slate-500">сейчас</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{point.now}</p>
                  </div>
                  <div className="rounded-md bg-cobalt/5 p-3">
                    <p className="text-xs font-semibold uppercase text-cobalt">стоимость проблемы</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{point.cost}</p>
                  </div>
                  <div className="rounded-md border border-gold/25 bg-gold/10 p-3">
                    <p className="text-xs font-semibold uppercase text-gold">почему это важно</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{point.proof}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl rounded-md border border-cobalt/15 bg-white/80 p-5 text-lg font-semibold leading-8 text-ink shadow-sm">
          Каждая точка трения сегодня — место, где никто не зарабатывает. Это и есть рынок, который собирает Orient UBook: не новый спрос, а монетизация уже существующего хаоса.
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-md">
            <Image src="/assets/registan.jpg" alt="Registan, Samarkand" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 max-w-xl p-6 text-white">
              <p className="text-sm font-semibold uppercase text-white/75">Платформа с консьержем в основе</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Один интерфейс переводит хаос поездки в управляемую заявку.</h2>
            </div>
          </div>
          <div className="grid content-center gap-4">
            {solutionPillars.map((pillar) => (
              <article key={pillar.title} className="glass-panel p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-lagoon" size={20} />
                  <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-700">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="market-opportunity" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-cobalt">Рынок и возможность</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Окно входа открыто: спрос растёт быстрее, чем локальная цифровая инфраструктура.</h2>
            </div>
            <div className="glass-panel relative overflow-hidden p-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lagoon/15 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cobalt text-white">
                  <TrendingUp size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase text-cobalt">Сигнал рынка</p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-ink">Узбекистан вошёл в топ-7 мира по темпам роста въездного туризма (UNWTO, дек. 2025), но ни один локальный игрок ещё не занял цифровой слой этой поездки. Окно для захвата категории открыто сейчас, и оно не будет открыто бесконечно.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {marketTimeline.map((item, index) => (
              <div key={item.year} className="metric-card glass-panel p-5" style={{ animationDelay: `${index * 70}ms` }}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-cobalt">{item.year}</p>
                  <span className="h-2 w-2 rounded-full bg-lagoon shadow-[0_0_18px_rgba(23,185,193,0.75)]" />
                </div>
                <p className="mt-3 text-4xl font-semibold text-ink md:text-5xl">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-[1.05fr_1.4fr]">
            <div className="feature-card relative overflow-hidden rounded-md border border-cobalt/20 bg-white p-6 shadow-glass">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-lagoon/15 blur-2xl" />
              <p className="relative text-sm font-semibold uppercase text-cobalt">главная цифра рынка</p>
              <p className="relative mt-4 text-6xl font-semibold leading-none text-ink md:text-7xl">{deckMetrics[0].value}</p>
              <p className="relative mt-3 text-2xl font-semibold text-ink">{deckMetrics[0].label}</p>
              <p className="relative mt-4 text-sm leading-6 text-slate-600">{deckMetrics[0].note}</p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {deckMetrics.slice(1).map((metric, index) => (
                <div key={metric.label} className="feature-card rounded-md border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cobalt/25 hover:shadow-glass" style={{ animationDelay: `${index * 60}ms` }}>
                  <p className="text-3xl font-semibold text-ink md:text-4xl">{metric.value}</p>
                  <p className="mt-2 font-semibold text-slate-700">{metric.label}</p>
                  <p className="mt-3 text-xs leading-5 text-slate-500">{metric.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="competitive-position" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cobalt">Конкурентная позиция</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Никто из текущих игроков не строит этот рынок снизу вверх.</h2>
          </div>
          <div className="mt-8">
            <ResponsiveTable>
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Критерий</th>
                  <th className="px-4 py-3 text-cobalt">Orient UBook</th>
                  <th className="px-4 py-3">Booking</th>
                  <th className="px-4 py-3">GetYourGuide</th>
                  <th className="px-4 py-3">Yandex Travel</th>
                  <th className="px-4 py-3">Локальные агентства</th>
                </tr>
              </thead>
              <tbody>
                {competitorRows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100">
                    <td className="px-4 py-4 font-semibold text-ink">{row.label}</td>
                    <td className="px-4 py-4 font-semibold text-cobalt">{row.orient}</td>
                    <td className="px-4 py-4 text-slate-700">{row.booking}</td>
                    <td className="px-4 py-4 text-slate-700">{row.getYourGuide}</td>
                    <td className="px-4 py-4 text-slate-700">{row.yandex}</td>
                    <td className="px-4 py-4 text-slate-700">{row.agencies}</td>
                  </tr>
                ))}
              </tbody>
            </ResponsiveTable>
          </div>
          <p className="mt-5 rounded-md border border-cobalt/15 bg-cobalt/5 p-5 leading-7 text-slate-700">
            Booking и GetYourGuide продают каталог — они зарабатывают на показе, а не на результате поездки туриста. Orient UBook продаёт результат: маршрут, который реально случился, со status-трекингом и поддержкой на всём пути. Это структурно другой бизнес: его нельзя скопировать ещё одним каталогом, потому что нужна партнёрская сеть и доверие на земле.
          </p>
        </div>
      </section>

      <section id="validation-customers" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase text-cobalt">Validation plan</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Что уже подготовлено к пилоту.</h2>
            <div className="mt-6 grid gap-3">
              {validationItems.map((item) => (
                <div key={item.title} className="rounded-md border border-slate-200 bg-white/75 p-4">
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase text-cobalt">Customers</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Три аудитории. Один интерфейс поездки.</h2>
            <div className="mt-6 grid gap-3">
              {customerSegments.map((segment) => (
                <div key={segment.title} className="rounded-md border border-slate-200 bg-white/75 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-ink">{segment.title}</h3>
                    <span className="rounded-md bg-cobalt/[0.08] px-2.5 py-1 text-xs font-semibold text-cobalt">{segment.check}</span>
                  </div>
                  <div className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-ink">Кто: </span>{segment.who}</p>
                    <p><span className="font-semibold text-ink">Боль: </span>{segment.pain}</p>
                    <p className="rounded-md bg-cobalt/5 p-3"><span className="font-semibold text-cobalt">Почему покупает: </span>{segment.why}</p>
                    <p><span className="font-semibold text-ink">Repeat: </span>{segment.repeat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="seed-business-model" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3">
                <CircleDollarSign className="text-cobalt" size={24} />
                <div>
                  <p className="text-sm font-semibold uppercase text-cobalt">Seed-раунд 2026</p>
                  <h2 className="mt-1 text-4xl font-semibold text-ink">$580K</h2>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-700">
                Раунд финансирует MVP, пилот, партнёрскую сеть, первые продажи и проверку unit economics. Деньги не тратятся на преждевременный запуск всех SuperApp-функций.
              </p>
              <div className="mt-5 grid gap-2">
                {budgetSplit.map((item) => (
                  <div key={item.label} className="rounded-md border border-slate-200 bg-white/80 p-3">
                    <div className="flex flex-wrap justify-between gap-3 text-sm font-semibold text-slate-700">
                      <span>{item.label}</span>
                      <span>{item.amount} · {item.value}</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.text}</p>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-cobalt" style={{ width: item.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="glass-panel p-6">
                <p className="text-sm font-semibold uppercase text-cobalt">Бизнес-модель</p>
                <h2 className="mt-3 text-3xl font-semibold text-ink">Экономика строится на заявках, take rate и партнёрской подписке.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Целевая структура выручки (revenue mix — распределение источников дохода) на горизонте 3 лет после выхода на транзакционный слой.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {revenueStreams.map((stream) => (
                    <div key={stream.title} className="rounded-md border border-slate-200 bg-white/75 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-ink">{stream.title}</h3>
                        <span className="text-2xl font-semibold text-cobalt">{stream.value}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{stream.text}</p>
                      <p className="mt-3 rounded-md bg-gold/10 p-3 text-xs font-semibold leading-5 text-slate-700">{stream.activation}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-4">
                {unitEconomics.map((item) => (
                  <div key={item.label} className="rounded-md border border-slate-200 bg-white p-4">
                    <p className="text-2xl font-semibold text-ink">{item.value}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-700">{item.label}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <ResponsiveTable>
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Сценарий</th>
                  <th className="px-4 py-3">Заявки</th>
                  <th className="px-4 py-3">Конверсия</th>
                  <th className="px-4 py-3">Net revenue</th>
                </tr>
              </thead>
              <tbody>
                {financialScenarios.map((row) => (
                  <tr key={row.scenario} className="border-t border-slate-100">
                    <td className="px-4 py-4 font-semibold text-ink">{row.scenario}</td>
                    <td className="px-4 py-4 text-slate-700">{row.requests}</td>
                    <td className="px-4 py-4 text-slate-700">{row.conversion}</td>
                    <td className="px-4 py-4 font-semibold text-cobalt">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </ResponsiveTable>
            <p className="mt-3 rounded-md border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
              Допущение модели: средний чек $150 и take rate (комиссия платформы с подтверждённой операции) 12%. Реальные цифры фиксируются после 90-дневного пилота.
            </p>
          </div>
        </div>
      </section>

      <section id="risk-register" className="scroll-mt-24 bg-ceramic px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cobalt">Карта рисков</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Риски проверяются до масштабирования, а не после него.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Мы сознательно построили MVP так, чтобы каждый из этих рисков проверялся на минимальном бюджете до запроса раунда масштабирования. Прозрачность здесь — часть модели снижения риска для инвестора.
            </p>
          </div>
          <div className="grid gap-3">
            {investorRisks.map((item) => (
              <article key={item.title} className="glass-panel p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-cobalt" size={20} />
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.risk}</p>
                <p className="mt-3 rounded-md bg-white/75 p-3 text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-cobalt">Митигация: </span>
                  {item.mitigation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="implementation-roadmap" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cobalt">Дорожная карта</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">От MVP к транзакционной платформе через проверяемые этапы.</h2>
            </div>
            <Link href="/stages" className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white transition hover:bg-cobalt">
              Этапы реализации <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {investorRoadmap.map((step) => (
              <article key={step.period} className="glass-panel p-5">
                <p className="text-sm font-semibold text-cobalt">{step.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                <p className="mt-4 rounded-md border border-cobalt/15 bg-white/70 p-3 text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-cobalt">Что получим: </span>{step.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-now" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="glass-panel relative overflow-hidden p-6">
            <div className="absolute -bottom-16 -right-12 h-40 w-40 rounded-full bg-cobalt/10 blur-3xl" />
            <p className="text-sm font-semibold uppercase text-cobalt">Почему сейчас</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Рынок созрел для локального travel layer.</h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Узбекистан уже получает туристический спрос, но цифровой слой поездки ещё не занял сильный локальный игрок.
            </p>
            <div className="relative mt-6 rounded-md border border-cobalt/15 bg-white/70 p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">Тезис по timing</p>
              <p className="mt-2 text-2xl font-semibold text-ink">Local-first сейчас важнее глобального каталога.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyNow.map((item, index) => (
              <div key={item.text} className="feature-card group rounded-md border border-slate-200 bg-white/85 p-5 text-sm leading-6 text-slate-700 transition hover:-translate-y-1 hover:border-cobalt/25 hover:shadow-glass" style={{ animationDelay: `${index * 70}ms` }}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt text-xs font-semibold text-white">0{index + 1}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-cobalt/20 to-transparent" />
                </div>
                <p>{item.text}</p>
                <p className="mt-4 rounded-md bg-cobalt/5 p-3 text-xs font-semibold leading-5 text-cobalt">{item.proof}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investor-room" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-4">
          <PresentationCta />
        </div>
      </section>
    </>
  );
}
