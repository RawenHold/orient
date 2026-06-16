import { ArrowUpRight, Download, FileText } from "lucide-react";

const deckHref = "/assets/orient-ubook-presentation.pdf";

export function PresentationCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`presentation-cta ${compact ? "p-[1px]" : "p-[2px]"}`}>
      <div className="rounded-[7px] bg-white/[0.92] p-4 shadow-glass backdrop-blur md:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cobalt text-white shadow-glass">
              <FileText size={20} />
            </span>
            <div>
              <p className="font-semibold text-ink">Investor pitch deck</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">Orient UBook.pdf: рынок, экономика, roadmap и seed-запрос.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={deckHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-cobalt px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink">
              Смотреть <ArrowUpRight size={16} />
            </a>
            <a href={deckHref} download className="inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-2 text-sm font-semibold text-cobalt transition hover:bg-cobalt/5">
              Скачать <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
