"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CurrencyAvatar from "@/components/deposit/CurrencyAvatar";
import { useSettings } from "@/components/settings/SettingsProvider";
import BackHeader from "@/components/ui/BackHeader";
import ListRow from "@/components/ui/ListRow";
import SearchField from "@/components/ui/SearchField";
import { currencies } from "@/lib/deposit-data";

const fiat = currencies.filter((c) => c.kind === "fiat");

export default function DefaultCurrencyScreen() {
  const router = useRouter();
  const { update } = useSettings();
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = fiat.filter((c) => !q || c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q));

  return (
    <div data-screen-bg="darkest" className="flex min-h-full flex-col px-4 pt-[21px] pb-6">
      <BackHeader title="Default Currency" backHref="/settings" />

      <div className="mt-8 flex flex-col gap-6">
        <SearchField value={query} onChange={setQuery} placeholder="Search currency..." surface="flat" />
        <div className="flex flex-col gap-2">
          {visible.map((c) => (
            <ListRow
              key={c.code}
              icon={<CurrencyAvatar icon={c.icon} />}
              label={c.name}
              detail={c.code}
              chevron
              onClick={() => {
                update({ currency: c.code });
                router.push("/settings");
              }}
            />
          ))}
          {visible.length === 0 && (
            <p className="pt-6 text-center font-body text-[14px] leading-[22px] font-light text-sub-heading">No currencies match “{query}”</p>
          )}
        </div>
      </div>
    </div>
  );
}
