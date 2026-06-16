import { CheckCircle2, Clock3, Layers3 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const columns = [
  {
    title: "MVP сейчас",
    icon: CheckCircle2,
    text: "Функционируют заявки на жильё, туры/гиды, трансферы, account, admin/support и AI routing.",
    items: ["Manual/semi-auto booking", "Offline payment confirmation", "Analytics для PMF", "Content + SEO foundation"],
  },
  {
    title: "PMF pilot",
    icon: Clock3,
    text: "90 дней данных показывают, какие сервисы переводить в полноценные transactional modules.",
    items: ["50+ bookings target", "NPS >= 40", "CTA demand by section", "Support load analysis"],
  },
  {
    title: "Full Platform",
    icon: Layers3,
    text: "После подтверждения спроса подключаются API, платежи, mobile, Telegram, B2B и loyalty.",
    items: ["OTA / eSIM / insurance API", "Online payments", "Partner dashboards", "Regional SuperApp scale"],
  },
];

export function MvpComparison() {
  return (
    <section id="concept" className="bg-milk px-4 py-20 md:px-8">
      <SectionHeader
        eyebrow="MVP vs Full Platform"
        title="Полный масштаб идеи виден сразу, но разработка идёт по доказанному спросу."
        text="Сайт намеренно разделяет рабочие MVP-сценарии, assisted flows, информационные разделы и крупные Post-MVP обновления."
      />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {columns.map((column) => {
          const Icon = column.icon;
          return (
            <article key={column.title} className="glass-panel p-6">
              <Icon className="mb-5 text-cobalt" size={30} />
              <h3 className="text-2xl font-semibold text-ink">{column.title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-600">{column.text}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-lagoon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
