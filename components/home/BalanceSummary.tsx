"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { formatUsd } from "@/lib/mock-data";

/** "Total Value" with a tap-to-hide balance, followed by the Buy / Sell / more actions. */
export default function BalanceSummary({ total }: { total: number }) {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <button
          type="button"
          onClick={() => setHidden((h) => !h)}
          aria-label={hidden ? "Show balance" : "Hide balance"}
          className="flex items-center justify-center gap-2 active:opacity-70"
        >
          <span className="font-body text-[12px] leading-[18px] font-light text-sub-heading">Total Value</span>
          <span className="relative flex size-5 items-center justify-center">
            <img src="/icons/home/eye-show.svg" alt="" width={20} height={20} />
            {hidden && (
              <span className="absolute top-1/2 left-1/2 h-[1.25px] w-[18px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-sub-heading" />
            )}
          </span>
        </button>
        <p className="font-display text-[28px] leading-9 font-bold text-on-primary">{hidden ? "$****" : formatUsd(total)}</p>
      </div>

      <div className="flex w-full items-center justify-between">
        {["Buy", "Sell"].map((label) => (
          <button
            key={label}
            type="button"
            className="flex w-[132px] items-center justify-center rounded-full bg-on-primary px-6 py-3 font-nunito text-[12px] leading-4 font-medium text-fg-base transition active:scale-[0.97] active:opacity-90"
          >
            {label}
          </button>
        ))}
        <button
          type="button"
          aria-label="More actions"
          className="flex size-10 items-center justify-center rounded-full border-[0.5px] border-border bg-chip shadow-[0_4px_4px_rgba(0,0,0,0.25)] active:opacity-70"
        >
          <img src="/icons/home/dots.svg" alt="" width={20} height={20} />
        </button>
      </div>
    </>
  );
}
