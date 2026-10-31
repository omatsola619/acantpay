"use client";

import ScreenHeader from "@/components/deposit/ScreenHeader";
import CurrencyAvatar from "@/components/deposit/CurrencyAvatar";
import ActionButton from "@/components/ui/ActionButton";
import CircleIconButton from "@/components/ui/CircleIconButton";
import { getCurrency } from "@/lib/deposit-data";
import { useSell } from "../SellContext";

export default function AddRecipientScreen() {
  const { sendCode, recipient, update } = useSell();
  const send = getCurrency(sendCode)!;

  return (
    <div className="flex min-h-full flex-col pb-[127px]">
      <div className="px-4 pt-5">
        <ScreenHeader title="Add Recipient" backHref="/sell" />
      </div>

      <div className="bg-surface mx-4 mt-8 flex flex-col items-center gap-8 rounded-3xl px-6 py-8 ring-[0.5px] ring-border ring-inset">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-heading">Recipient</h2>
          <CircleIconButton icon="/icons/sell/x.svg" label="Clear recipient" onClick={() => update({ recipient: "" })} />
        </div>
        <label className="flex w-full items-center gap-3 rounded-xl px-4 py-3 ring-[0.5px] ring-sub-heading ring-inset focus-within:ring-accent">
          <CurrencyAvatar icon={send.icon} size={32} />
          <input
            value={recipient}
            onChange={(e) => update({ recipient: e.target.value.trim() })}
            placeholder={`${send.name} Wallet Address`}
            aria-label={`${send.name} wallet address`}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="h-[22px] min-w-0 flex-1 bg-transparent p-0 font-body text-[14px] leading-[22px] font-light text-on-primary outline-none placeholder:text-sub-heading"
          />
        </label>
      </div>

      <div className="mt-auto pt-8">
        <ActionButton href="/sell/confirm" disabled={recipient.length < 8}>
          Continue
        </ActionButton>
      </div>
    </div>
  );
}
