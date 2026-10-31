/* eslint-disable @next/next/no-img-element */

/** Prompt card asking the user to complete ID verification. */
export default function VerifyIdCard() {
  return (
    <button
      type="button"
      className="bg-card flex w-full shrink-0 flex-col items-center rounded-2xl text-left shadow-[0_1px_0.5px_rgba(0,0,0,0.25)] transition active:scale-[0.99]"
    >
      <div className="relative h-[164px] w-full overflow-hidden rounded-t-2xl border-[0.5px] border-border">
        <img src="/images/verify-id.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(96,19,200,0.28)] to-[rgba(38,4,76,0.28)]" />
      </div>
      <div className="relative flex w-full items-center gap-6 rounded-b-2xl p-4">
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-b-2xl bg-[#17042c] mix-blend-saturation" />
        <p className="relative flex-1 font-body text-[14px] leading-[22px] font-light text-on-primary">
          Verify your ID to complete account setup.
        </p>
        <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-chip shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <img src="/icons/home/arrow-right.svg" alt="" width={16} height={16} />
        </span>
      </div>
    </button>
  );
}
