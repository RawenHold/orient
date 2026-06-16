import Link from "next/link";
import { ArrowLeft, GitPullRequestArrow, Map } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PhaseCards } from "@/components/PhaseCards";
import { TopNav } from "@/components/TopNav";

export default function StagesPage() {
  return (
    <main>
      <TopNav active="phases" />
      <section className="bg-white px-4 pb-8 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/developers" className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt transition hover:text-ink">
            <ArrowLeft size={16} /> Назад в раздел разработчиков
          </Link>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase text-cobalt">
                <Map size={16} /> Этапы реализации
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-6xl">Каждый этап раскрывается как отдельное рабочее ТЗ.</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                На плашке видно, что примерно внедряется на этапе. Клик открывает страницу с задачами по ролям, инструментами, результатами, критериями приёмки и рисками.
              </p>
            </div>
            <div className="glass-panel p-5">
              <p className="flex items-center gap-2 font-semibold text-ink">
                <GitPullRequestArrow className="text-cobalt" size={18} /> Логика перехода
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                Этапы 0-7 закрывают MVP и 90-дневный пилот. Этапы 8-12 включаются только после данных пилота, договоров, проверки API/sandbox и юридической готовности.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PhaseCards />
      <Footer />
    </main>
  );
}
