import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { phases } from "@/data/phases";
import { markerClass } from "./PhaseCards";

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
          <div className="absolute left-6 right-6 top-[35px] h-0.5 bg-slate-200" />
          <div className="relative flex min-w-[1220px] gap-3">
            {phases.map((phase) => (
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
      </div>
    </section>
  );
}
