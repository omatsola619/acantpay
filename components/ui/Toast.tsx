"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Copies text and briefly shows a confirmation toast. */
export function useCopyToast() {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(async (text: string, label = "Copied to clipboard") => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); still confirm for the demo.
    }
    setMessage(label);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(null), 1800);
  }, []);

  return { copy, message };
}

export function Toast({ message }: { message: string | null }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none absolute inset-x-0 bottom-12 z-40 flex justify-center px-4 transition duration-200 ${message ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
    >
      <span className="rounded-full border-[0.5px] border-border bg-[#1a0a2c] px-4 py-2 font-body text-[14px] leading-[22px] font-light text-on-primary shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
        {message}
      </span>
    </div>
  );
}
