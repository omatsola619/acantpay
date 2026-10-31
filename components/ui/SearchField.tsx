/* eslint-disable @next/next/no-img-element */

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  /** Select Currency uses the card gradient; the settings currency list uses a flat fill */
  surface?: "gradient" | "flat";
  autoFocus?: boolean;
};

/** Rounded search input with a magnifier icon. */
export default function SearchField({ value, onChange, placeholder, surface = "gradient", autoFocus }: SearchFieldProps) {
  return (
    <label
      className={`flex w-full items-center gap-2 overflow-hidden rounded-[14px] p-4 ring-[0.5px] ring-border ring-inset ${surface === "flat" ? "bg-[#170a25]" : "bg-surface"}`}
    >
      <img src="/icons/deposit/search.svg" alt="" width={19.9799} height={19.9799} className="shrink-0" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder.replace(/\.+$/, "")}
        autoFocus={autoFocus}
        className="h-5 min-w-0 flex-1 appearance-none bg-transparent p-0 font-sans text-[16px] leading-normal text-placeholder caret-accent outline-none placeholder:text-placeholder [&::-webkit-search-cancel-button]:hidden"
      />
    </label>
  );
}
