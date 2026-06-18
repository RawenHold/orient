import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  ExternalLink,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
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

const demoHref = "https://orient-ubook-mvp.lovable.app/app.html";
const meetingHref = "mailto:laz.dmitriy@gmail.com?subject=Orient%20UBook%20seed%20meeting";

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
      <section id="top" className="relative min-h-[92vh] overflow-hidden pt-[72px]">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-milk to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(92vh-72px)] max-w-7xl content-center px-4 py-14 md:px-8">
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-cobalt/20 bg-white/75 px-3 py-2 text-sm font-semibold text-cobalt backdrop-blur">
              <Sparkles size={16} /> Central Asia travel concierge layer
            </p>
            <h1 className="font-display text-4xl leading-[1.04] text-ink sm:text-5xl md:text-7xl">
              Миллионы туристов уже едут в Узбекистан. Но поездку всё ещё собирают вручную.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              Жильё, гиды, трансферы, оплата, язык и поддержка живут в разных сервисах и чатах. Orient UBook объединяет их в один мультиинструмент с AI-консьержем и понятным маршрутом от прилёта до отъезда гостя.
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
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={meetingHref} className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 font-semibold text-white shadow-lift transition hover:bg-ink">
                Запросить встречу <ArrowRight size={18} />
              </a>
              <Link href="/developers" className="inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/80 px-5 py-3 font-semibold text-cobalt backdrop-blur transition hover:bg-white">
                Техническое ТЗ <Layers3 size={18} />
              </Link>
              <a
                href={demoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/80 px-5 py-3 font-semibold text-cobalt backdrop-blur transition hover:bg-white"
              >
                Открыть дизайн макет <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cobalt">Investor problem</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">{problemJourney.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">{problemJourney.text}</p>
          </div>
          <ResponsiveTable>
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Боль</th>
                <th className="px-4 py-3">Как сейчас</th>
                <th className="px-4 py-3">Почему это дорого</th>
              </tr>
            </thead>
            <tbody>
              {painPoints.map((point) => (
                <tr key={point.title} className="border-t border-slate-100">
                  <td className="px-4 py-4 font-semibold text-ink">{point.title}</td>
                  <td className="px-4 py-4 leading-6 text-slate-700">{point.now}</td>
                  <td className="px-4 py-4 leading-6 text-slate-700">{point.cost}</td>
                </tr>
              ))}
            </tbody>
          </ResponsiveTable>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-md">
            <Image src="/assets/registan.jpg" alt="Registan, Samarkand" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 max-w-xl p-6 text-white">
              <p className="text-sm font-semibold uppercase text-white/75">Concierge-first platform</p>
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

      <section id="market" className="bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cobalt">Market opportunity</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Окно входа открыто: спрос растёт быстрее, чем локальная цифровая инфраструктура.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {marketTimeline.map((item) => (
              <div key={item.year} className="glass-panel p-5">
                <p className="text-sm font-semibold text-cobalt">{item.year}</p>
                <p className="mt-3 text-4xl font-semibold text-ink">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {deckMetrics.map((metric) => (
              <div key={metric.label} className="rounded-md border border-slate-200 bg-white p-5">
                <p className="text-3xl font-semibold text-ink">{metric.value}</p>
                <p className="mt-2 font-semibold text-slate-700">{metric.label}</p>
                <p className="mt-3 text-xs leading-5 text-slate-500">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cobalt">Competitive position</p>
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
                  <th className="px-4 py-3">Local agencies</th>
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
            Глобальные OTA начинают с каталога. Orient UBook начинает с локального контекста, партнёрского процесса и поддержки, поэтому может стать операционным слоем поездки, а не ещё одной витриной.
          </p>
        </div>
      </section>

      <section className="bg-milk px-4 py-16 md:px-8">
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
                  <p className="mt-2 text-sm leading-6 text-slate-600">{segment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="investment" className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3">
                <CircleDollarSign className="text-cobalt" size={24} />
                <div>
                  <p className="text-sm font-semibold uppercase text-cobalt">Seed round 2026</p>
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
                <p className="text-sm font-semibold uppercase text-cobalt">Business model</p>
                <h2 className="mt-3 text-3xl font-semibold text-ink">Экономика строится на заявках, take rate и партнёрской подписке.</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {revenueStreams.map((stream) => (
                    <div key={stream.title} className="rounded-md border border-slate-200 bg-white/75 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-ink">{stream.title}</h3>
                        <span className="text-2xl font-semibold text-cobalt">{stream.value}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{stream.text}</p>
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
          </div>
        </div>
      </section>

      <section className="bg-ceramic px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cobalt">Risk register</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Риски не скрываем. MVP построен, чтобы проверять их дешево.</h2>
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

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cobalt">Implementation roadmap</p>
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
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-md border border-cobalt/15 bg-cobalt/5 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase text-cobalt"><Target size={16} /> PMF rule</p>
                <p className="mt-2 max-w-3xl leading-7 text-slate-700">Переход к оплатам, API, mobile, Telegram и B2B делается только после пилотных данных: заявок, конверсии, NPS, повторного спроса и юридически готовых партнёрских договоров.</p>
              </div>
              <Link href="/developers" className="inline-flex shrink-0 items-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-2 font-semibold text-cobalt transition hover:bg-cobalt hover:text-white">
                Dev spec <BarChart3 size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid content-center">
            <p className="text-sm font-semibold uppercase text-cobalt">Why now</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Рынок созрел для локального travel layer.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyNow.map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white/78 p-4 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <PresentationCta />
        </div>
      </section>
    </>
  );
}
