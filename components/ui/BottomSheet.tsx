"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

/** Dimmed overlay with a sheet pinned to the bottom of the phone frame. */
export default function BottomSheet({ open, onClose, title, children }: BottomSheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="absolute inset-0 z-40 flex flex-col justify-end" role="dialog" aria-modal="true" aria-label={title}>
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 animate-[fade-in_200ms_ease-out] bg-[linear-gradient(180deg,rgba(9,0,15,0.64)_0%,rgba(10,0,15,0.64)_90.545%)]"
      />
      <div className="bg-app relative flex w-full animate-[sheet-up_260ms_cubic-bezier(0.2,0.8,0.2,1)] flex-col items-end gap-3 px-4 py-6 pb-[calc(24px+env(safe-area-inset-bottom))]">
        <button type="button" onClick={onClose} aria-label="Close" className="active:opacity-60">
          <img src="/icons/sell/cancel.svg" alt="" width={24} height={24} />
        </button>
        <div className="flex w-full flex-col items-center gap-6 pb-4">
          <h2 className="w-full text-center font-display text-[20px] leading-7 font-medium tracking-[-0.02px] text-white">{title}</h2>
          <div className="flex w-full flex-col gap-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
