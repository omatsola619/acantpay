/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type ScreenHeaderProps = {
  title: string;
  backHref: string;
  /** Figma uses pure white arrows on the method screens and the off-white heading colour elsewhere */
  tone?: "white" | "light";
};

/** 40px back button (arrow drawn from two vectors, as in Figma) and a 22px title. */
export default function ScreenHeader({ title, backHref, tone = "light" }: ScreenHeaderProps) {
  const suffix = tone === "light" ? "-light" : "";
  return (
    <div className="flex w-full items-center gap-3">
      <Link href={backHref} aria-label="Back" className="flex size-[39.987px] shrink-0 flex-col rounded-[10px] px-[7.997px] pt-[7.997px] active:opacity-60">
        <span className="relative h-[23.992px] w-full overflow-hidden">
          <span className="absolute inset-y-[20.83%] right-1/2 left-[20.83%]">
            <span className="absolute inset-[-7.14%_-14.29%]"><img src={`/icons/deposit/back-head${suffix}.svg`} alt="" className="block size-full max-w-none" /></span>
          </span>
          <span className="absolute inset-x-[20.83%] inset-y-1/2">
            <span className="absolute inset-[-1px_-7.14%]"><img src={`/icons/deposit/back-line${suffix}.svg`} alt="" className="block size-full max-w-none" /></span>
          </span>
        </span>
      </Link>
      <h1 className={`font-display text-[22px] leading-7 font-medium tracking-[-0.02px] ${tone === "light" ? "text-heading" : "text-white"}`}>
        {title}
      </h1>
    </div>
  );
}
