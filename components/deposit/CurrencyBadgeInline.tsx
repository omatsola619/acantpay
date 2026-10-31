/* eslint-disable @next/next/no-img-element */
import type { Currency } from "@/lib/deposit-data";

/** Flag or coin glyph followed by the currency code, as in the status card. */
export default function CurrencyBadgeInline({ currency }: { currency: Currency }) {
  const { icon } = currency;
  return (
    <span className="flex items-center gap-[7px] text-heading">
      {icon.type === "image" ? (
        <img src={icon.src} alt="" width={icon.size} height={icon.size} />
      ) : (
        <span className="font-sans text-[18px] leading-7">{icon.value}</span>
      )}
      {currency.code}
    </span>
  );
}
