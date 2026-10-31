"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import CurrencyItem from "@/components/deposit/CurrencyItem";
import { currencies, type CurrencyKind } from "@/lib/deposit-data";

type Filter = "all" | CurrencyKind;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fiat", label: "Fiat" },
  { id: "crypto", label: "Crypto" },
];

const sections: { kind: CurrencyKind; title: string }[] = [
  { kind: "fiat", title: "Fiat Currency" },
  { kind: "crypto", title: "Crypto Currency" },
];

export default function SelectCurrencyScreen() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = currencies.filter(
    (c) => (filter === "all" || c.kind === filter) && (!q || c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)),
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex shrink-0 flex-col gap-8 px-4 pt-3">
        <div className="flex items-center gap-11">
          <Link href="/home" aria-label="Back" className="-m-2 p-2 active:opacity-60">
            <img src="/icons/deposit/arrow-up-24.svg" alt="" width={24} height={24} className="-rotate-90" />
          </Link>
          <h1 className="font-display text-[20px] leading-7 font-medium tracking-[-0.02px] text-white">Select Currency</h1>
        </div>

        <div className="flex gap-3" role="tablist">
          {filters.map((f) => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-6 py-2 text-center font-sans text-[16px] leading-6 transition active:scale-[0.97] ${active ? "bg-primary-gradient text-heading" : "bg-surface text-sub-heading"}`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <label className="bg-surface flex w-full items-center gap-2 overflow-hidden rounded-[14px] ring-[0.5px] ring-border ring-inset p-4">
          <img src="/icons/deposit/search.svg" alt="" width={19.9799} height={19.9799} className="shrink-0" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search currency..."
            aria-label="Search currency"
            className="h-5 min-w-0 flex-1 appearance-none bg-transparent p-0 font-sans text-[16px] leading-normal text-on-primary outline-none placeholder:text-placeholder [&::-webkit-search-cancel-button]:hidden"
          />
        </label>
      </div>

      <div className="mt-6 flex min-h-0 flex-1 flex-col gap-6 overflow-x-hidden overflow-y-auto px-4 pb-6 [scrollbar-width:none]">
        {sections.map((section) => {
          const items = visible.filter((c) => c.kind === section.kind);
          if (items.length === 0) return null;
          return (
            <section key={section.kind} className="flex w-full flex-col gap-2">
              <h2 className="font-display text-[18px] leading-[26px] font-medium tracking-[-0.02px] text-sub-heading">{section.title}</h2>
              <div className="flex w-full flex-col gap-3">
                {items.map((c) => (
                  <CurrencyItem key={c.code} currency={c} href={`/deposit/${c.code.toLowerCase()}`} />
                ))}
              </div>
            </section>
          );
        })}
        {visible.length === 0 && (
          <p className="pt-8 text-center font-body text-[14px] leading-[22px] font-light text-sub-heading">No currencies match “{query}”</p>
        )}
      </div>
    </div>
  );
}
