import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, CircleDollarSign, Layers3, Sparkles, Target } from "lucide-react";
import { budgetSplit, customerSegments, deckMetrics, heroProof, investorRoadmap, marketTimeline, problemPoints, revenueStreams, solutionPillars, whyNow } from "@/data/deck";
import { PresentationCta } from "./PresentationCta";

export function InvestorLanding() {
  return (
    <>
      <section id="top" className="relative min-h-[92vh] overflow-hidden pt-[72px]">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/25" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-milk to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(92vh-72px)] max-w-7xl content-center px-4 py-16 md:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/75 px-3 py-2 text-sm font-semibold text-cobalt backdrop-blur">
              <Sparkles size={16} /> Everything Uzbekistan. One Assistant SuperApp.
            </p>
            <h1 className="font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Один помощник для всей поездки по Узбекистану.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Orient UBook объединяет AI-консьержа, локальных партнёров, бутик-отели, гидов и логистику в понятный сервис для туристов, бизнеса и внутреннего рынка.
            </p>
            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {heroProof.map((item) => (
                <div key={item.label} className="glass-panel p-4">
                  <p className="text-xs font-semibold uppercase text-slate-500">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-ink">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#investment" className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 font-semibold text-white shadow-lift transition hover:bg-ink">
                Инвестиционная логика <ArrowRight size={18} />
              </a>
              <Link href="/developers" className="inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/80 px-5 py-3 font-semibold text-cobalt backdrop-blur transition hover:bg-white">
                Техническое ТЗ <Layers3 size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cobalt">Investor overview</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Проблема не в отсутствии сервисов. Проблема в отсутствии единого слоя поездки.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Туризм Узбекистана растёт, но путь туриста остаётся разрозненным: бронирование, транспорт, гиды, оплата, язык, безопасность и локальный контекст живут в разных местах.
            </p>
          </div>
          <div className="grid gap-3">
            {problemPoints.map((point, index) => (
              <div key={point} className="glass-panel flex gap-4 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-cobalt font-semibold text-white">{index + 1}</span>
                <p className="leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-md">
            <Image src="/assets/registan.jpg" alt="Registan, Samarkand" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 max-w-xl p-6 text-white">
              <p className="text-sm font-semibold uppercase text-white/75">Concierge-first platform</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight">Один интерфейс собирает поездку из 12+ туристических вертикалей.</h2>
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
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Узбекистан входит в окно быстрого туристического роста.</h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-600">Цифры ниже взяты из презентации. Перед публичной публикацией рядом с ними нужно закрепить официальные источники и пометки статуса.</p>
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
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase text-cobalt">Customers</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Три аудитории. Один интерфейс.</h2>
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

          <div id="investment" className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase text-cobalt">Business model</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Четыре источника выручки вместо зависимости от одного канала.</h2>
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
        </div>
      </section>

      <section className="bg-ceramic px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel p-6">
            <div className="flex items-center gap-3">
              <CircleDollarSign className="text-cobalt" size={24} />
              <div>
                <p className="text-sm font-semibold uppercase text-cobalt">Seed round 2026</p>
                <h2 className="mt-1 text-4xl font-semibold text-ink">$580K</h2>
              </div>
            </div>
            <p className="mt-5 leading-7 text-slate-700">Раунд финансирует MVP, партнёрскую сеть, первые продажи и проверку unit economics. Средства не направлены на одновременный запуск всех 12+ сервисов.</p>
            <div className="mt-5 grid gap-2">
              {budgetSplit.map((item) => (
                <div key={item.label} className="rounded-md border border-slate-200 bg-white/80 p-3">
                  <div className="flex justify-between gap-3 text-sm font-semibold text-slate-700">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-cobalt" style={{ width: item.value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <PresentationCta />
            <div className="glass-panel p-6">
              <p className="text-sm font-semibold uppercase text-cobalt">Why now</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {whyNow.map((item) => (
                  <div key={item} className="rounded-md border border-slate-200 bg-white/78 p-4 text-sm leading-6 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cobalt">Implementation roadmap</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">18 месяцев до Series A через проверяемые этапы.</h2>
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
                <p className="mt-2 max-w-3xl leading-7 text-slate-700">MVP проверяет спрос и операционную модель. Полные API-бронирования, платежи, mobile apps и B2B платформа включаются только после пилотных данных, договоров и legal review.</p>
              </div>
              <Link href="/developers" className="inline-flex shrink-0 items-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-2 font-semibold text-cobalt transition hover:bg-cobalt hover:text-white">
                Dev spec <BarChart3 size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
