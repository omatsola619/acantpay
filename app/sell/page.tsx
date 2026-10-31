"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import CurrencyItem from "@/components/deposit/CurrencyItem";
import ScreenHeader from "@/components/deposit/ScreenHeader";
import AmountField from "@/components/sell/AmountField";
import ActionButton from "@/components/ui/ActionButton";
import BottomSheet from "@/components/ui/BottomSheet";
import { getCurrency } from "@/lib/deposit-data";
import { convert, formatRate, receiveCurrencies, sendCurrencies } from "@/lib/sell-data";
import { useSell } from "./SellContext";

const trim = (n: number, digits: number) => (Number.isFinite(n) && n > 0 ? String(Number(n.toFixed(digits))) : "");

export default function InternationalTransactionScreen() {
  const { sendCode, receiveCode, amount, update } = useSell();
  const [picker, setPicker] = useState<"send" | "receive" | null>(null);
  // While the user types in "Recipient Gets", show their raw text instead of the recomputed value
  const [receiveDraft, setReceiveDraft] = useState<string | null>(null);
  const send = getCurrency(sendCode)!;
  const receive = getCurrency(receiveCode)!;

  const received = trim(convert(Number(amount), sendCode, receiveCode), 2);
  const options = picker === "send" ? sendCurrencies : receiveCurrencies;

  return (
    <div className="flex min-h-full flex-col pb-[127px]">
      <div className="px-4 pt-5">
        <ScreenHeader title="International Transaction" backHref="/home" />
      </div>

      <div className="mt-8 flex flex-col items-end gap-4 px-4">
        <AmountField
          label="You Send"
          value={amount}
          onChange={(v) => {
            setReceiveDraft(null);
            update({ amount: v });
          }}
          currency={send}
          onPickCurrency={() => setPicker("send")}
        />
        <AmountField
          label="Recipient Gets"
          value={receiveDraft ?? received}
          onChange={(v) => {
            setReceiveDraft(v);
            update({ amount: trim(convert(Number(v), receiveCode, sendCode), 8) });
          }}
          currency={receive}
          onPickCurrency={() => setPicker("receive")}
        />
        <p className="flex items-center gap-2 font-body text-[12px] leading-4 font-light text-sub-heading">
          <img src="/icons/sell/trend.svg" alt="" width={12} height={7} />
          {formatRate(sendCode, receiveCode)}
        </p>
      </div>

      <div className="mt-auto pt-8">
        <ActionButton href="/sell/recipient" disabled={!(Number(amount) > 0)}>
          Continue
        </ActionButton>
      </div>

      <BottomSheet open={picker !== null} onClose={() => setPicker(null)} title={picker === "send" ? "You Send" : "Recipient Gets"}>
        {options.map((c) => (
          <CurrencyItem
            key={c.code}
            currency={c}
            onClick={() => {
              update(picker === "send" ? { sendCode: c.code } : { receiveCode: c.code });
              setReceiveDraft(null);
              setPicker(null);
            }}
          />
        ))}
      </BottomSheet>
    </div>
  );
}
