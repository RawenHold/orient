import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";

type TopNavProps = {
  active?: "investor" | "developers" | "phases";
};

export function TopNav({ active = "investor" }: TopNavProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Orient UBook home">
          <Image src="/assets/logo.svg" alt="Orient UBook" width={42} height={42} className="h-10 w-10 rounded-md object-cover" priority />
          <span className="hidden font-semibold text-ink sm:inline">Orient UBook</span>
        </Link>

        <div className="hidden items-center gap-5 text-sm font-semibold text-slate-600 lg:flex">
          <Link href="/stages" className={`transition hover:text-cobalt ${active === "phases" ? "text-cobalt" : ""}`}>
            Этапы реализации
          </Link>
          <a href="/assets/orient-ubook-presentation.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cobalt">
            <FileDown size={16} /> Презентация
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={`rounded-md border px-3 py-2 text-sm font-semibold transition md:px-4 ${active === "investor" ? "border-cobalt bg-cobalt text-white shadow-glass" : "border-slate-200 bg-white/80 text-slate-700 hover:border-cobalt/35"
              }`}
          >
            Для инвестора
          </Link>
          <Link
            href="/developers"
            className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition md:px-4 ${active === "developers" || active === "phases"
              ? "border-ink bg-ink text-white shadow-glass"
              : "border-slate-200 bg-white/80 text-slate-700 hover:border-cobalt/35"
              }`}
          >
            Для разработчиков <ArrowRight className="hidden sm:block" size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
