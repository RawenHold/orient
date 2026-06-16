import Image from "next/image";
import { pmfMetrics } from "@/data/market";
import { SectionHeader } from "./SectionHeader";

const steps = [
  "Launch web MVP",
  "Collect 90-day PMF data",
  "Prioritize demanded verticals",
  "Sign contracts and test sandboxes",
  "Upgrade to transactional modules",
];

export function InvestorSection() {
  return (
    <section id="investors" className="bg-white px-4 py-20 md:px-8">
      <SectionHeader
        eyebrow="Investor view"
        title="Инвестиционная логика: не строить всё сразу, а покупать опцион на большой рынок через MVP-данные."
        text="MVP проверяет спрос и операционную модель. Phase 8+ начинается только там, где данные пилота показывают реальную ценность."
      />
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass-panel p-6">
          <h3 className="text-2xl font-semibold text-ink">90-day PMF metrics</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {pmfMetrics.map((metric) => (
              <div key={metric} className="rounded-md border border-slate-200 bg-white/75 p-4 font-semibold text-slate-700">
                {metric}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-md border border-cobalt/20 bg-cobalt/5 p-5 text-sm leading-6 text-slate-700">
            Decision rule: переводить в полноценную функцию только те вертикали, где есть спрос, подтверждённый партнёр, понятный legal path и fallback на ручной процесс.
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md border border-white/70 bg-ink p-6 text-white shadow-lift">
          <Image src="/assets/product-mockup.jpg" alt="Orient UBook mobile product mockup" fill className="object-cover opacity-35" sizes="(min-width: 1024px) 40vw, 100vw" />
          <div className="relative">
            <h3 className="text-2xl font-semibold">Scale gates</h3>
            <div className="mt-6 space-y-3">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-md border border-white/20 bg-white/10 p-3 backdrop-blur">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white font-semibold text-cobalt">{index + 1}</span>
                  <span className="font-semibold">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
