/* eslint-disable @next/next/no-img-element */
import type { CurrencyIcon } from "@/lib/deposit-data";

const sizes = {
  32: { box: "size-8", glyph: "text-[16px] leading-[22.4px]", emoji: "text-[14.4px] leading-[22.4px]" },
  40: { box: "size-10", glyph: "text-[20px] leading-7", emoji: "text-[20px] leading-7" },
  48: { box: "size-12", glyph: "text-[24px] leading-[33.6px]", emoji: "text-[24px] leading-[33.6px]" },
};

type Props = {
  icon: CurrencyIcon;
  size?: keyof typeof sizes;
  /** By default coins sit on the brand gradient and flags on the soft tint; some screens use the tint for coins too */
  tone?: "auto" | "tint" | "gradient";
};

/** Round currency badge: a flag or coin glyph on the brand gradient or a soft purple tint. */
export default function CurrencyAvatar({ icon, size = 40, tone = "auto" }: Props) {
  const s = sizes[size];
  const gradient = tone === "gradient" || (tone === "auto" && icon.type === "glyph");
  return (
    <span
      className={`${s.box} flex shrink-0 items-center justify-center rounded-full ${gradient ? "bg-primary-gradient" : "bg-[linear-gradient(135deg,rgba(188,72,255,0.2)_0%,rgba(138,56,245,0.2)_100%)]"}`}
    >
      {icon.type === "glyph" && <span className={`font-sans ${s.glyph} text-heading`}>{icon.value}</span>}
      {icon.type === "emoji" && <span className={`font-sans ${s.emoji} ${size === 40 ? "text-[#0a0a0a]" : "text-heading"}`}>{icon.value}</span>}
      {icon.type === "image" && <img src={icon.src} alt="" width={icon.size} height={icon.size} />}
    </span>
  );
}
