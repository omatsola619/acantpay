/* eslint-disable @next/next/no-img-element */

type InfoCardProps = {
  items: string[];
  /** The crypto details screen uses an 18px Arial heading; the others use the bold display style */
  heading?: "display" | "plain";
};

/** "Important Information" card with a bullet list. */
export default function InfoCard({ items, heading = "display" }: InfoCardProps) {
  return (
    <div className="bg-surface w-full rounded-2xl ring-[0.5px] ring-border ring-inset p-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-[11.983px]">
          <img src="/icons/deposit/info.svg" alt="" width={19.9799} height={19.9799} className={heading === "plain" ? "" : "mt-px"} />
          {heading === "plain" ? (
            <h2 className="font-sans text-[18px] leading-[27px] text-heading">Important Information</h2>
          ) : (
            <h2 className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-heading">Important Information</h2>
          )}
        </div>
        <ul className={`flex flex-col gap-[7.997px] font-body text-[12px] leading-4 font-light text-sub-heading ${heading === "plain" ? "min-h-[123.892px]" : ""}`}>
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
