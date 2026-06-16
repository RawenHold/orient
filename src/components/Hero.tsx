import { ArrowRight, Compass, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/20" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-milk to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(92vh-4rem)] max-w-7xl content-center px-4 py-20 md:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/70 px-3 py-2 text-sm font-semibold text-cobalt backdrop-blur">
            <Compass size={16} /> API-first Travel Concierge Platform
          </p>
          <h1 className="font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            Orient UBook превращает поездку в Узбекистан в управляемый маршрут.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
            MVP запускает рабочие заявки на жильё, туры и логистику, а остальные туристические сервисы показывает как честные информационные разделы с измерением спроса.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 font-semibold text-white shadow-lift transition hover:bg-ink">
              Смотреть карту услуг <ArrowRight size={18} />
            </a>
            <a href="#developers" className="inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/75 px-5 py-3 font-semibold text-cobalt backdrop-blur transition hover:bg-white">
              ТЗ для разработки <ShieldCheck size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
