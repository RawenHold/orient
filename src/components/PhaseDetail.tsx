import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, CircleAlert, Code2, Target, TimerReset, Wrench, XCircle } from "lucide-react";
import { phases, type Phase } from "@/data/phases";
import { stageSpecs } from "@/data/stageSpecs";
import { PhaseSnapshot, markerClass } from "./PhaseCards";

function SpecList({ title, items, icon = "arrow" }: { title: string; items: string[]; icon?: "arrow" | "check" | "tool" }) {
  return (
    <section className="rounded-md border border-slate-200 bg-white/[0.78] p-5">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            {icon === "check" ? <CheckCircle2 className="mt-1 shrink-0 text-lagoon" size={17} /> : null}
            {icon === "tool" ? <Wrench className="mt-1 shrink-0 text-cobalt" size={17} /> : null}
            {icon === "arrow" ? <ArrowRight className="mt-1 shrink-0 text-cobalt" size={17} /> : null}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PhaseDetail({ phase }: { phase: Phase }) {
  const previous = phases.find((item) => item.id === phase.id - 1);
  const next = phases.find((item) => item.id === phase.id + 1);
  const spec = stageSpecs[phase.id];

  return (
    <>
      <section className="bg-white px-4 pb-12 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/stages" className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt transition hover:text-ink">
            <ArrowLeft size={16} /> Все этапы реализации
          </Link>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-md border px-3 py-1.5 text-xs font-semibold ${markerClass[phase.marker]}`}>{phase.marker}</span>
                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">Этап {phase.id}</span>
                <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">{phase.duration}</span>
              </div>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-ink md:text-6xl">{phase.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{phase.summary}</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-md border border-cobalt/15 bg-cobalt/5 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase text-cobalt"><Target size={16} /> Цель</p>
                  <p className="mt-2 text-lg leading-8 text-slate-700">{phase.goal}</p>
                </div>
                <div className="rounded-md border border-teal-200 bg-teal-50 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase text-teal-800"><CheckCircle2 size={16} /> Что должно получиться</p>
                  <p className="mt-2 text-lg leading-8 text-slate-700">{phase.result}</p>
                </div>
              </div>
            </div>
            <PhaseSnapshot phase={phase} />
          </div>
        </div>
      </section>

      <section className="bg-milk px-4 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-cobalt">Задачи по ролям</p>
          <h2 className="mt-2 text-3xl font-semibold text-ink">Кто что делает на этом этапе.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {phase.roleTasks.map((group) => (
              <article key={group.role} className="glass-panel p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{group.role}</h3>
                    <p className="mt-2 text-sm leading-6 text-cobalt">{group.focus}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  {group.tasks.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 shrink-0 text-lagoon" size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <SpecList title="Что сдаём на выходе" items={phase.deliverables} />
          <SpecList title="Инструменты и подход" items={phase.tools} icon="tool" />
          <SpecList title="Критерии приёмки" items={phase.acceptance} icon="check" />
          {spec ? <SpecList title="Definition of Done" items={spec.strictDod} icon="check" /> : <SpecList title="Definition of Done" items={phase.dod} icon="check" />}
          {spec ? (
            <section className="rounded-md border border-slate-200 bg-white/[0.78] p-5">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <TimerReset className="text-cobalt" size={19} /> Code review и тестирование
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-700">{spec.reviewQa}</p>
            </section>
          ) : null}
          {spec?.notInScope.length ? (
            <section className="rounded-md border border-slate-200 bg-white/[0.78] p-5">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <XCircle className="text-amber-600" size={19} /> Что явно не делаем
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {spec.notInScope.map((item) => (
                  <li key={item} className="flex gap-3">
                    <XCircle className="mt-1 shrink-0 text-amber-600" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {spec?.apiEndpoints.length ? (
            <section className="rounded-md border border-slate-200 bg-white/[0.78] p-5">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <Code2 className="text-cobalt" size={19} /> API на выходе этапа
              </h2>
              <div className="mt-4 grid gap-2">
                {spec.apiEndpoints.map((endpoint) => (
                  <code key={endpoint} className="rounded-md bg-slate-950 px-3 py-2 text-xs font-semibold text-white sm:text-sm">
                    {endpoint}
                  </code>
                ))}
              </div>
            </section>
          ) : null}
          {spec?.aiGuidelines?.length ? (
            <section className="rounded-md border border-cobalt/20 bg-cobalt/5 p-5">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
                <Code2 className="text-cobalt" size={19} /> AI prompt guidelines и fallback
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {spec.aiGuidelines.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 shrink-0 text-lagoon" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <section className="rounded-md border border-slate-200 bg-white/[0.78] p-5">
            <h2 className="text-xl font-semibold text-ink">Риски и критерий перехода</h2>
            <div className="mt-4 grid gap-3">
              <div className="rounded-md border border-amber-200 bg-amber-50 p-4">
                <p className="flex items-center gap-2 font-semibold text-amber-800">
                  <CircleAlert size={18} /> Риск
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{phase.risk}</p>
              </div>
              <div className="rounded-md border border-teal-200 bg-teal-50 p-4">
                <p className="flex items-center gap-2 font-semibold text-teal-800">
                  <CheckCircle2 size={18} /> Критерий перехода
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{phase.gate}</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="bg-milk px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:justify-between">
          {previous ? (
            <Link href={`/stages/${previous.id}`} className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:border-cobalt/40">
              <ArrowLeft size={18} /> Этап {previous.id}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/stages/${next.id}`} className="inline-flex items-center gap-2 rounded-md bg-cobalt px-4 py-3 font-semibold text-white transition hover:bg-ink">
              Этап {next.id} <ArrowRight size={18} />
            </Link>
          ) : (
            <Link href="/developers" className="inline-flex items-center gap-2 rounded-md bg-cobalt px-4 py-3 font-semibold text-white transition hover:bg-ink">
              Для разработчиков <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
