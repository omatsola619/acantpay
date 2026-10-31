"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CurrencyAvatar from "@/components/deposit/CurrencyAvatar";
import Keypad from "@/components/deposit/Keypad";
import ScreenHeader from "@/components/deposit/ScreenHeader";
import ActionButton from "@/components/ui/ActionButton";
import { quickAmounts, type Currency } from "@/lib/deposit-data";

const MAX_DIGITS = 7;

export default function AddFunds({ currency, limits, nextHref }: { currency: Currency; limits: string; nextHref: string }) {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const canProceed = Number(amount) > 0;

  const pressDigit = (d: string) =>
    setAmount((a) => {
      if (a.length >= MAX_DIGITS) return a;
      return a === "0" || a === "" ? (d === "0" ? "" : d) : a + d;
    });

  return (
    <div data-bleed-bottom className="flex min-h-0 flex-1 flex-col">
      <div className="px-4 pt-5">
        <ScreenHeader title={`Add Funds ${currency.code}`} backHref={`/deposit/${currency.code.toLowerCase()}`} />
      </div>

      <div className="mx-auto mt-6 w-[367.826px] max-w-full px-[15.995px]">
        <div className="flex w-full flex-col items-center gap-3">
          <div className="flex w-full flex-col items-center gap-[15.995px] p-4">
            <CurrencyAvatar icon={currency.icon} />
            <p className="text-center font-body text-[14px] leading-[22px] font-light text-placeholder">Deposit Amount</p>
          </div>
          <p className="text-center font-display text-[28px] leading-9 whitespace-nowrap" aria-live="polite">
            <span className="animate-pulse font-light text-sub-heading">| </span>
            <span className="font-bold text-heading">{amount ? Number(amount).toLocaleString("en-US") : "0"}</span>
          </p>
          <p className="text-center font-body text-[12px] leading-[18px] font-light text-sub-heading">{limits}</p>
        </div>
      </div>

      <div className="mx-auto mt-[46px] flex w-[343px] max-w-[calc(100%-32px)] items-start justify-between">
        {quickAmounts.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setAmount(String(v))}
            className={`bg-surface rounded-full px-6 py-2 text-center font-body text-[12px] leading-[18px] font-light transition active:scale-95 ${amount === String(v) ? "text-white ring-1 ring-accent/60" : "text-sub-heading"}`}
          >
            ${v}
          </button>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-3">
        <ActionButton disabled={!canProceed} onClick={() => router.push(nextHref)}>
          Proceed to Deposit
        </ActionButton>
        <Keypad onDigit={pressDigit} onDelete={() => setAmount((a) => a.slice(0, -1))} />
      </div>
    </div>
  );
}
