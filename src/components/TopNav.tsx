import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

type TopNavProps = {
  active?: "investor" | "developers" | "phases";
};

export function TopNav({ active = "investor" }: TopNavProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-center gap-3 px-4 py-3 md:justify-between md:px-8">
        <Link href="/" className="flex min-w-0 shrink items-center" aria-label="Orient UBook home">
          <Image
            src="/assets/logo.svg"
            alt="Orient UBook"
            width={214}
            height={26}
            className="h-7 w-auto max-w-[190px] md:max-w-[180px] xl:max-w-[214px]"
            priority
          />
        </Link>

        <div className="hidden min-w-0 items-center justify-end gap-2 md:flex">
          <Link
            href="/"
            className={`whitespace-nowrap rounded-md border px-3 py-2 text-sm font-semibold transition lg:px-4 ${active === "investor" ? "border-cobalt bg-cobalt text-white shadow-glass" : "border-slate-200 bg-white/80 text-slate-700 hover:border-cobalt/35"
              }`}
          >
            Для инвестора
          </Link>
          <Link
            href="/developers"
            className={`inline-flex whitespace-nowrap items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition lg:px-4 ${active === "developers" || active === "phases"
              ? "border-ink bg-ink text-white shadow-glass"
              : "border-slate-200 bg-white/80 text-slate-700 hover:border-cobalt/35"
              }`}
          >
            Для разработчиков <ArrowRight className="hidden sm:block" size={16} />
          </Link>
          <a
            href="https://orient-ubook-mvp.lovable.app/app.html"
            target="_blank"
            rel="noreferrer"
            className="hidden whitespace-nowrap items-center gap-2 rounded-md border border-cobalt/20 bg-white/80 px-4 py-2 text-sm font-semibold text-cobalt transition hover:border-cobalt/40 hover:bg-white lg:inline-flex"
          >
            Открыть дизайн макет <ExternalLink size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
