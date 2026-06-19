import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { phases } from "@/data/phases";
import { markerClass } from "./PhaseCards";

const phaseGroups = [
  { title: "Подготовка", subtitle: "фиксация объёма", ids: [0] },
  { title: "MVP-ядро", subtitle: "недели 1-18", ids: [1, 2, 3, 4, 5, 6] },
  { title: "Пилот", subtitle: "90 дней", ids: [7] },
  { title: "Рост", subtitle: "после PMF", ids: [8, 9, 10] },
  { title: "Масштаб", subtitle: "после доказанной экономики", ids: [11, 12] },
];

export function StageTimeline() {
  return (
    <section className="bg-white px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-cobalt">Быстрая карта разработки</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink">Этапы, сроки и главный результат.</h2>
          </div>
          <Link href="/stages" className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 font-semibold text-white transition hover:bg-cobalt">
            Все этапы <ArrowRight size={18} />
          </Link>
        </div>

        <div className="relative overflow-x-auto pb-3">
          <div className="relative flex min-w-[1320px] gap-4">
            {phaseGroups.map((group) => {
              const groupPhases = phases.filter((phase) => group.ids.includes(phase.id));
              const isPmfGate = group.title === "Рост";

              return (
                <div key={group.title} className="relative rounded-md border border-slate-200 bg-slate-50/70 p-3">
                  {isPmfGate ? (
                    <div className="absolute -left-4 top-0 flex h-full items-center">
                      <div className="rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-gold shadow-sm">
                        PMF Gate
                      </div>
                    </div>
                  ) : null}
                  <div className="mb-3 flex items-center justify-between gap-3 border-b border-slate-200 pb-2">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-wide text-cobalt">Phase: {group.title}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">{group.subtitle}</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-lagoon shadow-[0_0_18px_rgba(23,185,193,0.75)]" />
                  </div>
                  <div className="flex gap-3">
                    {groupPhases.map((phase) => (
                      <Link key={phase.id} href={`/stages/${phase.id}`} className="group w-[170px] shrink-0 rounded-md border border-slate-200 bg-white p-3 shadow-sm transition hover:border-cobalt/40 hover:shadow-glass">
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cobalt text-sm font-semibold text-white">{phase.id}</span>
                          <span className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold ${markerClass[phase.marker]}`}>{phase.marker}</span>
                        </div>
                        <h3 className="mt-4 min-h-12 text-sm font-semibold leading-5 text-ink">Этап {phase.id}: {phase.title}</h3>
                        <p className="mt-2 text-xs font-semibold text-cobalt">{phase.duration}</p>
                        <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-600">{phase.result}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
