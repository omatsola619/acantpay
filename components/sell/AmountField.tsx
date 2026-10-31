/* eslint-disable @next/next/no-img-element */
import CurrencyAvatar from "@/components/deposit/CurrencyAvatar";
import type { Currency } from "@/lib/deposit-data";

type AmountFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  currency: Currency;
  onPickCurrency: () => void;
};

/** "You Send" / "Recipient Gets" box: amount input on the left, currency picker on the right. */
export default function AmountField({ label, value, onChange, currency, onPickCurrency }: AmountFieldProps) {
  return (
    <div className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 ring-[0.5px] ring-border ring-inset">
      <label className="flex min-w-0 flex-1 flex-col gap-2 text-sub-heading">
        <span className="font-display text-[14px] leading-[22px] font-light">{label}</span>
        <span className="flex items-center font-display text-[22px] leading-7 font-medium tracking-[-0.02px]">
          <span aria-hidden className="whitespace-pre">| </span>
          <input
            inputMode="decimal"
            value={value}
            onChange={(e) => onChange(e.target.value.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1"))}
            placeholder="0"
            aria-label={label}
            className="h-7 min-w-0 flex-1 bg-transparent p-0 text-heading caret-accent outline-none placeholder:text-heading"
          />
        </span>
      </label>
      <button type="button" onClick={onPickCurrency} aria-label={`Change currency, ${currency.code} selected`} className="flex shrink-0 items-center gap-2 active:opacity-70">
        <CurrencyAvatar icon={currency.icon} size={32} tone="tint" />
        <span className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-white">{currency.code}</span>
        <img src="/icons/sell/chevron-down.svg" alt="" width={24} height={24} />
      </button>
    </div>
  );
}
