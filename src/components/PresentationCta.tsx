import { ArrowUpRight, CalendarDays, Download, FileText, Sparkles } from "lucide-react";

const deckHref = "/assets/orient-ubook-presentation.pdf";
const demoHref = "https://orient-ubook-mvp.lovable.app/app.html";
const meetingHref = "mailto:laz.dmitriy@gmail.com?subject=Orient%20UBook%20seed%20meeting";

export function PresentationCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`presentation-cta ${compact ? "p-[1px]" : "p-[2px]"}`}>
      <div className="relative overflow-hidden rounded-[7px] bg-white/[0.94] p-5 shadow-glass backdrop-blur md:p-7">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/50 to-transparent" />
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-start gap-4">
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-cobalt text-white shadow-glass">
              <FileText size={23} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-lagoon text-white">
                <Sparkles size={12} />
              </span>
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xl font-semibold text-ink">Investor room</p>
                <span className="rounded-full border border-cobalt/15 bg-cobalt/5 px-2.5 py-1 text-xs font-semibold text-cobalt">Seed $580K</span>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                Быстрый доступ к встрече, investor deck и живому демо-макету. Всё, что нужно для первого разговора по раунду и пилоту.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                <span className="rounded-md bg-slate-100 px-2.5 py-1">Deck PDF</span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1">Demo</span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1">Founder call</span>
              </div>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[520px] lg:grid-cols-1 xl:grid-cols-3">
            <a href={meetingHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-cobalt px-4 py-3 text-sm font-semibold text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-ink">
              Запросить встречу <CalendarDays size={16} />
            </a>
            <a href={deckHref} download className="inline-flex items-center justify-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-3 text-sm font-semibold text-cobalt transition hover:-translate-y-0.5 hover:bg-cobalt/5">
              Скачать deck <Download size={16} />
            </a>
            <a href={demoHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-3 text-sm font-semibold text-cobalt transition hover:-translate-y-0.5 hover:bg-cobalt/5">
              Открыть демо <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
