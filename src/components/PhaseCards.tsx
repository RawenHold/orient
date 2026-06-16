import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { phases, type Phase } from "@/data/phases";
import { services } from "@/data/services";
import { StatusBadge } from "./StatusBadge";

export const markerClass: Record<Phase["marker"], string> = {
  Подготовка: "border-cobalt bg-cobalt text-white",
  "MVP-ядро": "border-teal-300 bg-teal-50 text-teal-800",
  Пилот: "border-sky-300 bg-sky-50 text-sky-800",
  Рост: "border-amber-300 bg-amber-50 text-amber-800",
  Масштаб: "border-violet-300 bg-violet-50 text-violet-800",
};

export function PhaseCards() {
  return (
    <section className="bg-milk px-4 py-14 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        {phases.map((phase) => {
          const phaseServices = services.filter((service) => service.phase === phase.id || service.upgradePhase === phase.id).slice(0, 4);

          return (
            <Link key={phase.id} href={`/stages/${phase.id}`} className="group glass-panel flex min-h-[360px] flex-col p-5 transition hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-lift">
              <div className="flex items-start justify-between gap-3">
                <span className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${markerClass[phase.marker]}`}>{phase.marker}</span>
                <span className="text-sm font-semibold text-slate-500">Этап {phase.id}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold leading-tight text-ink">{phase.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{phase.summary}</p>

              <div className="mt-5 rounded-md border border-slate-200 bg-white/75 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Clock3 size={16} /> Что делаем на этапе
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {phase.acceptance.slice(0, 3).map((item) => (
                    <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {phaseServices.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {phaseServices.slice(0, 2).map((service) => (
                    <StatusBadge key={`${phase.id}-${service.title}`} status={service.status} />
                  ))}
                </div>
              ) : null}

              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-2 font-semibold text-cobalt transition group-hover:gap-3">
                  Открыть задачи этапа <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function PhaseSnapshot({ phase }: { phase: Phase }) {
  const phaseServices = services.filter((service) => service.phase === phase.id || service.upgradePhase === phase.id);

  return (
    <aside className="glass-panel p-5">
      <span className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${markerClass[phase.marker]}`}>{phase.marker}</span>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-md border border-slate-200 bg-white/75 p-3">
          <p className="text-xs font-semibold uppercase text-slate-500">Этап</p>
          <p className="mt-1 text-2xl font-semibold text-ink">{phase.id}</p>
        </div>
        <div className="rounded-md border border-slate-200 bg-white/75 p-3">
          <p className="text-xs font-semibold uppercase text-slate-500">Срок</p>
          <p className="mt-1 text-lg font-semibold text-ink">{phase.duration}</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-semibold text-ink">Связанные услуги</p>
        <div className="mt-3 space-y-2">
          {phaseServices.length ? (
            phaseServices.slice(0, 8).map((service) => (
              <div key={service.title} className="rounded-md border border-slate-200 bg-white/75 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-ink">{service.title}</p>
                  <StatusBadge status={service.status} />
                </div>
                  <p className="mt-2 text-sm leading-5 text-slate-600">{service.group} · этап {service.phase}</p>
              </div>
            ))
          ) : (
            <p className="rounded-md border border-slate-200 bg-white/75 p-3 text-sm text-slate-600">На этом этапе фиксируются базовые задачи без отдельной service-карточки.</p>
          )}
        </div>
      </div>
      <div className="mt-5 rounded-md border border-cobalt/15 bg-cobalt/5 p-4">
        <p className="flex items-center gap-2 font-semibold text-cobalt">
          <CheckCircle2 size={18} /> Критерий перехода
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-700">{phase.gate}</p>
      </div>
    </aside>
  );
}
