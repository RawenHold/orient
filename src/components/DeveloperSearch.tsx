"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { apiMap, architectureLayers, integrationLevels, operationalFlow } from "@/data/architecture";
import { phases } from "@/data/phases";
import { services } from "@/data/services";

type SearchItem = {
  type: "Этап" | "Услуга" | "Архитектура" | "API" | "Процесс";
  title: string;
  subtitle: string;
  href: string;
  haystack: string;
};

function buildIndex(): SearchItem[] {
  const phaseItems = phases.map((phase) => ({
    type: "Этап" as const,
    title: `Этап ${phase.id}: ${phase.title}`,
    subtitle: `${phase.marker} · ${phase.summary}`,
    href: `/stages/${phase.id}`,
    haystack: [
      phase.title,
      phase.marker,
      phase.duration,
      phase.goal,
      phase.summary,
      phase.gate,
      phase.risk,
      phase.deliverables.join(" "),
      phase.tools.join(" "),
      phase.dod.join(" "),
      phase.acceptance.join(" "),
      phase.result,
      phase.roleTasks.map((group) => `${group.role} ${group.focus} ${group.tasks.join(" ")}`).join(" "),
      phase.workstreams.map((stream) => `${stream.title} ${stream.items.join(" ")}`).join(" "),
    ].join(" "),
  }));

  const serviceItems = services.map((service) => ({
    type: "Услуга" as const,
    title: service.title,
    subtitle: `${service.group} · MVP этап ${service.phase} · развитие на этапе ${service.upgradePhase ?? service.phase}`,
    href: `/stages/${service.phase}`,
    haystack: Object.values(service).join(" "),
  }));

  const architectureItems = architectureLayers.map((layer) => ({
    type: "Архитектура" as const,
    title: layer.title,
    subtitle: layer.items.join(" · "),
    href: "/stages/1",
    haystack: `${layer.title} ${layer.items.join(" ")}`,
  }));

  const apiItems = apiMap.map((item) => ({
    type: "API" as const,
    title: item.split(":")[0],
    subtitle: item,
    href: item.includes("Accommodation") ? "/stages/3" : item.includes("Tours") ? "/stages/4" : item.includes("Logistics") ? "/stages/5" : item.includes("AI") ? "/stages/6" : item.includes("Analytics") ? "/stages/7" : "/stages/1",
    haystack: item,
  }));

  const integrationItems = integrationLevels.map(([level, name, text]) => ({
    type: "Архитектура" as const,
    title: `Integration Level ${level}: ${name}`,
    subtitle: text,
    href: "/stages/0",
    haystack: `${level} ${name} ${text}`,
  }));

  const workflowItems = operationalFlow.map((item, index) => ({
    type: "Процесс" as const,
    title: `Support процесс ${index + 1}`,
    subtitle: item,
    href: "/stages/7",
    haystack: item,
  }));

  return [...phaseItems, ...serviceItems, ...architectureItems, ...apiItems, ...integrationItems, ...workflowItems];
}

function scoreItem(item: SearchItem, query: string) {
  const q = query.toLowerCase();
  const title = item.title.toLowerCase();
  const subtitle = item.subtitle.toLowerCase();
  const haystack = item.haystack.toLowerCase();

  let score = 0;
  if (title.includes(q)) score += 12;
  if (subtitle.includes(q)) score += 6;
  if (haystack.includes(q)) score += 3;
  if (item.type === "Этап" && haystack.includes(q)) score += 2;
  return score;
}

export function DeveloperSearch() {
  const [query, setQuery] = useState("");
  const index = useMemo(() => buildIndex(), []);
  const normalized = query.trim();
  const results = useMemo(() => {
    if (!normalized) return [];
    return index
      .map((item) => ({ item, score: scoreItem(item, normalized) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map(({ item }) => item);
  }, [index, normalized]);

  return (
    <section className="bg-milk px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-md border border-slate-200 bg-white p-3 shadow-sm">
          <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Поиск по ТЗ: API, оплата, AI, водитель, eSIM, DevOps..."
                className="w-full rounded-md border border-slate-200 bg-white px-11 py-3 text-base text-ink outline-none transition placeholder:text-slate-400 focus:border-cobalt focus:ring-4 focus:ring-cobalt/10"
              />
          </div>

          {results.length ? (
            <div className="mt-3 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {results.map((result) => (
                <Link key={`${result.type}-${result.title}-${result.href}`} href={result.href} className="rounded-md border border-slate-200 bg-slate-50 p-3 transition hover:border-cobalt/35 hover:bg-white">
                  <span className="rounded-md bg-cobalt/[0.08] px-2.5 py-1 text-xs font-semibold text-cobalt">{result.type}</span>
                  <h3 className="mt-2 text-sm font-semibold text-ink">{result.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{result.subtitle}</p>
                </Link>
              ))}
            </div>
          ) : null}

          {normalized && results.length === 0 ? (
            <p className="mt-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm font-semibold text-amber-800">Ничего не найдено. Попробуйте другое слово.</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
