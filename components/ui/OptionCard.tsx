/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type OptionCardProps = {
  href?: string;
  onClick?: () => void;
  icon: string;
  title: string;
  /** Line under the title: a plain description or a custom node (e.g. an ETA with a clock) */
  subtitle: React.ReactNode;
  footer?: React.ReactNode;
};

/** Selectable card with a gradient icon tile, used for deposit methods and the Sell "Choose Method" sheet. */
export default function OptionCard({ href, onClick, icon, title, subtitle, footer }: OptionCardProps) {
  const className =
    "bg-surface flex w-full flex-col gap-4 rounded-2xl p-4 text-left ring-[0.5px] ring-border ring-inset transition active:scale-[0.99] active:opacity-90";
  const content = (
    <>
      <span className="flex w-full items-center gap-3">
        <span className="bg-primary-gradient flex size-[47.984px] shrink-0 items-center justify-center rounded-[14px]">
          <img src={icon} alt="" width={24} height={24} />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-[3.985px] leading-[22px]">
          <span className="font-display text-[16px] font-bold tracking-[0.5px] text-heading">{title}</span>
          {typeof subtitle === "string" ? <span className="font-body text-[14px] font-light text-sub-heading">{subtitle}</span> : subtitle}
        </span>
      </span>
      {footer}
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
