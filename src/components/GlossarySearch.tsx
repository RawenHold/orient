"use client";

import { useMemo, useState } from "react";
import { Search, TerminalSquare } from "lucide-react";

type GlossaryItem = {
  term: string;
  definition: string;
};

export function GlossarySearch({ items }: { items: GlossaryItem[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = useMemo(() => {
    if (!normalizedQuery) return items;

    return items.filter((item) => {
      const haystack = `${item.term} ${item.definition}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [items, normalizedQuery]);

  return (
    <div>
      <label className="relative mt-8 block max-w-xl">
        <span className="sr-only">Поиск по глоссарию</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cobalt" size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Найти термин: Request, MVP Status, IT Park..."
          className="w-full rounded-md border border-cobalt/20 bg-white px-11 py-3 text-sm font-semibold text-ink outline-none transition placeholder:text-slate-400 focus:border-cobalt focus:ring-4 focus:ring-cobalt/10"
        />
      </label>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {filteredItems.map((item) => (
          <article key={item.term} className="rounded-md border border-slate-200 bg-white p-4">
            <h3 className="flex items-center gap-2 font-semibold text-ink">
              <TerminalSquare size={17} className="text-cobalt" /> {item.term}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.definition}</p>
          </article>
        ))}
      </div>
      {!filteredItems.length ? (
        <p className="mt-5 rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-600">
          Термин не найден. Проверь написание или ищи по смыслу: заявка, партнёр, платежи, PMF.
        </p>
      ) : null}
    </div>
  );
}
