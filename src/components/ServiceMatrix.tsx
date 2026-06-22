"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { services, statusMeta, type ServiceStatus } from "@/data/services";
import { StatusBadge } from "./StatusBadge";

const filters: { label: string; value: "all" | ServiceStatus }[] = [
  { label: "Все", value: "all" },
  { label: "Работает в MVP", value: "functional" },
  { label: "Через поддержку / ссылку", value: "assisted" },
  { label: "Актуальная инофрмация", value: "informational" },
  { label: "Реализация после MVP", value: "post" },
];

const statusPurpose: Record<ServiceStatus, string> = {
  functional: "Может быть реализовано через форму, заявку, поддержку и статусы обработки.",
  assisted: "Закрываем через ссылку, заявку или поддержку — без полноценного функционала.",
  informational: "Даём информацию и проверяем спрос. Бронирование в MVP не предусмотрено.",
  post: "После MVP: по итогам пилота и юридической подготовки.",
};

export function ServiceMatrix() {
  const [filter, setFilter] = useState<"all" | ServiceStatus>("all");
  const visible = useMemo(() => (filter === "all" ? services : services.filter((service) => service.status === filter)), [filter]);
  const counts = useMemo(() => {
    return services.reduce<Record<ServiceStatus, number>>(
      (acc, service) => {
        acc[service.status] += 1;
        return acc;
      },
      { functional: 0, assisted: 0, informational: 0, post: 0 },
    );
  }, []);

  return (
    <section className="bg-milk px-4 py-14 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cobalt">Карта статусов услуг</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink">Фильтр по MVP</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Показано, что реализуем сейчас, что закрываем поддержкой клиентов и что проверим позже.
            </p>
            <div className="mt-5 grid gap-2">
              {(Object.keys(statusMeta) as ServiceStatus[]).map((status) => (
                <div key={status} className="rounded-md border border-slate-200 bg-white p-3">
                  <div className="flex items-center justify-between gap-2">
                    <StatusBadge status={status} />
                    <span className="text-sm font-semibold text-slate-500">{counts[status]}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{statusPurpose[status]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600">
                <Filter size={16} /> Фильтр
              </span>
              {filters.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  className={`rounded-md border px-3 py-2 text-sm font-semibold transition ${
                    filter === item.value ? "border-cobalt bg-cobalt text-white" : "border-slate-200 bg-white text-slate-600 hover:border-cobalt/40"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {visible.map((service) => (
                <Link key={`${service.title}-${service.phase}`} href={`/stages/${service.phase}`} className="rounded-md border border-slate-200 bg-white/80 p-4 transition hover:border-cobalt/35 hover:shadow-glass">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase text-cobalt">{service.group}</p>
                      <h3 className="mt-1 font-semibold text-ink">{service.title}</h3>
                    </div>
                    <StatusBadge status={service.status} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.mvpMode}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                    <span className="rounded-md bg-slate-100 px-2.5 py-1">MVP: этап {service.phase}</span>
                    <span className="rounded-md bg-slate-100 px-2.5 py-1">Развитие: этап {service.upgradePhase ?? service.phase}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cobalt">
                    Открыть этап <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
