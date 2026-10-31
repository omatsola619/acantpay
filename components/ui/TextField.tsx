"use client";

/* eslint-disable @next/next/no-img-element */
import { useId, useState } from "react";

type TextFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
};

/** Figma "Input Field": label above a filled field, with a show/hide toggle for passwords. */
export default function TextField({ label, placeholder, value, onChange, type = "text", inputMode, autoComplete }: TextFieldProps) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="font-body text-[14px] leading-[22px] font-light text-sub-heading">
        {label}
      </label>
      <div className="flex w-full items-center gap-3 rounded-lg bg-field p-3 ring-accent/40 focus-within:ring-1">
        <input
          id={id}
          type={isPassword && !visible ? "password" : isPassword ? "text" : type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="h-[22px] min-w-0 flex-1 bg-transparent font-body text-[14px] leading-[22px] font-light text-on-primary outline-none placeholder:text-on-primary"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide passcode" : "Show passcode"}
            className="relative shrink-0 active:opacity-60"
          >
            <img src="/icons/auth/eye-show.svg" alt="" width={24} height={24} />
            {visible && (
              <span className="absolute top-1/2 left-1/2 h-[1.5px] w-[22px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-sub-heading" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
