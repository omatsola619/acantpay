/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type ListRowProps = {
  /** Icon path shown in the round badge, or a custom badge node */
  icon: string | React.ReactNode;
  iconSize?: number;
  label: string;
  /** Second line under the label (e.g. a currency code) */
  detail?: string;
  /** Value text before the chevron, a custom trailing node, or nothing */
  value?: string;
  trailing?: React.ReactNode;
  chevron?: boolean;
  href?: string;
  onClick?: () => void;
  tone?: "dark" | "light";
};

/** 72px settings-style row: round icon badge, label, and an optional value / control on the right. */
export default function ListRow({ icon, iconSize = 24, label, detail, value, trailing, chevron, href, onClick, tone = "dark" }: ListRowProps) {
  const light = tone === "light";
  const className = `flex h-[72px] w-full items-center justify-between rounded-[14px] p-4 text-left transition active:scale-[0.99] ${light ? "bg-white" : "bg-surface [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.25))] active:opacity-90"}`;

  const content = (
    <>
      <span className="flex items-center gap-2">
        {typeof icon === "string" ? (
          <span
            className={`flex size-10 shrink-0 items-center justify-center rounded-full ${light ? "bg-primary-gradient" : "bg-[linear-gradient(135deg,rgba(188,72,255,0.2)_0%,rgba(138,56,245,0.2)_100%)]"}`}
          >
            <img src={icon} alt="" width={iconSize} height={iconSize} />
          </span>
        ) : (
          icon
        )}
        <span className="flex flex-col justify-center gap-2">
          <span className={`font-display text-[12px] leading-4 font-medium tracking-[0.5px] ${light ? "text-fg-base" : "text-white"}`}>{label}</span>
          {detail && <span className="font-display text-[14px] leading-[22px] font-light text-sub-heading">{detail}</span>}
        </span>
      </span>
      <span className="flex items-center gap-2">
        {value && <span className="font-body text-[14px] leading-[22px] font-light text-sub-heading">{value}</span>}
        {trailing}
        {chevron && <img src="/icons/settings/chevron-right.svg" alt="" width={24} height={24} />}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {content}
      </button>
    );
  }
  // Rows without an action (or with their own control, like a toggle) aren't buttons themselves
  return <div className={className.replace(/ active:\S+/g, "")}>{content}</div>;
}
