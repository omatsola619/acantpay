/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Currency } from "@/lib/deposit-data";
import CurrencyAvatar from "./CurrencyAvatar";

/** Currency row from Select Currency: badge, name and code, with a "+" on the right. */
export default function CurrencyItem({ currency, href, onClick }: { currency: Currency; href?: string; onClick?: () => void }) {
  const className =
    "bg-surface flex w-full items-center justify-between rounded-[14px] p-3 text-left transition [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.25))] active:scale-[0.99] active:opacity-90";
  const content = (
    <>
      <span className="flex items-center gap-2">
        <CurrencyAvatar icon={currency.icon} />
        <span className="flex flex-col justify-center gap-2">
          <span className="font-display text-[12px] leading-4 font-medium tracking-[0.5px] text-white">{currency.name}</span>
          <span className="font-display text-[14px] leading-[22px] font-light text-sub-heading">{currency.code}</span>
        </span>
      </span>
      <img src="/icons/deposit/add.svg" alt="" width={24} height={24} />
    </>
  );
  return href ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
