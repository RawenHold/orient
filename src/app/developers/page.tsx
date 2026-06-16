import Link from "next/link";
import { ArrowRight, Code2, Search } from "lucide-react";
import { DeveloperSearch } from "@/components/DeveloperSearch";
import { Footer } from "@/components/Footer";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { StageTimeline } from "@/components/StageTimeline";
import { TopNav } from "@/components/TopNav";

export default function DevelopersPage() {
  return (
    <main>
      <TopNav active="developers" />
      <section className="bg-ceramic px-4 pb-12 pt-32 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-cobalt">
              <Code2 size={16} /> Для разработчиков
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-6xl">Что нужно построить, по этапам и ролям.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Каждый этап показывает цель, результат, задачи для бэкенда, фронтенда, базы данных, DevOps, QA, контента, support и менеджера. Без лишних архитектурных блоков вне контекста.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/stages" className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 font-semibold text-white shadow-lift transition hover:bg-ink">
                Этапы реализации <ArrowRight size={18} />
              </Link>
              <a href="#developer-search" className="inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/80 px-5 py-3 font-semibold text-cobalt backdrop-blur transition hover:bg-white">
                Поиск по ТЗ <Search size={18} />
              </a>
            </div>
          </div>

          <div className="glass-panel grid content-center gap-4 p-5">
            <h2 className="text-2xl font-semibold text-ink">Главное правило MVP</h2>
            <p className="leading-7 text-slate-700">
              Сначала запускаем рабочие заявки, admin/support и аналитику спроса. Полные API-бронирования, онлайн-оплаты, mobile apps и B2B кабинет включаются только после пилота и подтверждённых договоров.
            </p>
            <div className="grid gap-2 text-sm font-semibold text-slate-700">
              <span className="rounded-md bg-white/75 p-3">1. Не обещать услугу, которая пока только информационная.</span>
              <span className="rounded-md bg-white/75 p-3">2. Вся внешняя интеграция идёт через backend, не напрямую с frontend.</span>
              <span className="rounded-md bg-white/75 p-3">3. Каждая заявка имеет статус, владельца и audit log.</span>
            </div>
          </div>
        </div>
      </section>
      <StageTimeline />
      <div id="developer-search">
        <DeveloperSearch />
      </div>
      <ServiceMatrix />
      <Footer />
    </main>
  );
}
