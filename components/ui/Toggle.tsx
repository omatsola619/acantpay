"use client";

/** iOS-style switch (Figma "Toggle"): 51×31, green when on. */
export default function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (checked: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onChange(!checked);
      }}
      className={`relative h-[31px] w-[51px] shrink-0 overflow-hidden rounded-full transition-colors duration-200 ${checked ? "bg-[#34c759]" : "bg-[rgba(120,120,128,0.32)]"}`}
    >
      <span
        className={`absolute top-1/2 size-[27px] -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_0_rgba(0,0,0,0.04),0_3px_8px_0_rgba(0,0,0,0.15),0_3px_1px_0_rgba(0,0,0,0.06)] transition-[left] duration-200 ${checked ? "left-[22px]" : "left-[2px]"}`}
      />
    </button>
  );
}
