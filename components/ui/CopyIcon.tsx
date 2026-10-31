/* eslint-disable @next/next/no-img-element */

/** 16px copy icon built from the two Figma vectors; "accent" is the orange reference-field variant. */
export default function CopyIcon({ tone = "muted" }: { tone?: "muted" | "accent" }) {
  const suffix = tone === "accent" ? "-ref" : "";
  return (
    <span className="relative block size-[15.995px] overflow-hidden">
      <span className="absolute inset-[33.33%_8.33%_8.33%_33.33%]">
        <span className="absolute inset-[-7.14%]"><img src={`/icons/deposit/copy-back${suffix}.svg`} alt="" className="block size-full max-w-none" /></span>
      </span>
      <span className="absolute inset-[8.33%_33.33%_33.33%_8.33%]">
        <span className="absolute inset-[-7.14%]"><img src={`/icons/deposit/copy-front${suffix}.svg`} alt="" className="block size-full max-w-none" /></span>
      </span>
    </span>
  );
}
