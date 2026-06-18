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

        <div className="hidden min-w-0 items-center justify-end gap-3 md:flex">
          <div
            className="inline-flex items-center rounded-[8px] border border-slate-200/80 bg-white/80 p-1 shadow-[0_18px_55px_rgba(34,48,89,0.10)] backdrop-blur-xl"
            aria-label="Переключение разделов сайта"
          >
            <Link
              href="/"
              className={`whitespace-nowrap rounded-[6px] px-3 py-2 text-sm font-semibold transition lg:px-4 ${active === "investor"
                ? "bg-cobalt text-white shadow-glass"
                : "text-slate-600 hover:bg-cobalt/5 hover:text-cobalt"
                }`}
            >
              Для инвестора
            </Link>
            <Link
              href="/developers"
              className={`inline-flex whitespace-nowrap items-center gap-2 rounded-[6px] px-3 py-2 text-sm font-semibold transition lg:px-4 ${active === "developers" || active === "phases"
                ? "bg-cobalt text-white shadow-glass"
                : "text-slate-600 hover:bg-cobalt/5 hover:text-cobalt"
                }`}
            >
              Для разработчиков <ArrowRight className="hidden sm:block" size={16} />
            </Link>
          </div>
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
