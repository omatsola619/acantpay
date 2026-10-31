/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type BackHeaderProps = {
  title?: string;
  /** Omit for top-level tab screens, which have no back button */
  backHref?: string;
  tone?: "dark" | "light";
};

/** 24px arrow + 20px title header (Select Currency, Settings and its sub-screens). */
export default function BackHeader({ title, backHref, tone = "dark" }: BackHeaderProps) {
  return (
    <div className="flex items-center gap-11">
      {backHref && (
        <Link href={backHref} aria-label="Back" className="-m-2 p-2 active:opacity-60">
          <img
            src={tone === "light" ? "/icons/settings/arrow-left-dark.svg" : "/icons/deposit/arrow-up-24.svg"}
            alt=""
            width={24}
            height={24}
            className="-rotate-90"
          />
        </Link>
      )}
      {title && (
        <h1 className={`font-display text-[20px] leading-7 font-medium tracking-[-0.02px] ${tone === "light" ? "text-fg-base" : "text-white"}`}>
          {title}
        </h1>
      )}
    </div>
  );
}
