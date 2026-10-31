/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Row = { label: string; value: React.ReactNode; small?: boolean };

type StatusScreenProps = {
  title: string;
  subtitle: string;
  rows: Row[];
  note: string;
  backHref?: string;
};

/** Pending-transaction screen: spinner, progress bar, a details card and a note (Figma "DepositStatus"). */
export default function StatusScreen({ title, subtitle, rows, note, backHref = "/home" }: StatusScreenProps) {
  return (
    <div className="flex min-h-full flex-col px-4 pt-3 pb-[47px]">
      <Link href={backHref} aria-label="Back to home" className="block size-[39.987px] shrink-0 rounded-[10px] p-2 active:opacity-60">
        <img src="/icons/deposit/back-24.svg" alt="" width={23.9922} height={23.9922} />
      </Link>

      <div className="mt-[81.5px] flex w-full flex-col items-center gap-[27px]">
        <div className="relative size-[127.985px]">
          <div className="bg-primary-gradient absolute inset-0 rounded-full opacity-[0.21]" />
          <div className="absolute inset-[15.99px] rounded-full bg-[linear-gradient(180deg,#0c1426_0%,#0e011b_50%,#170c26_100%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/icons/deposit/spinner.svg"
              alt=""
              width={67.7138}
              height={67.7138}
              className="animate-[spin-from_1.6s_steps(8)_infinite] [--spin-start:41.24deg]"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[7.997px]">
          <h1 className="text-center font-display text-[24px] leading-8 font-bold tracking-[-0.02px] text-heading">{title}</h1>
          <p className="text-center font-body text-[16px] leading-[22px] font-light text-sub-heading">{subtitle}</p>
        </div>

        <div className="h-[7.997px] w-full overflow-hidden rounded-full bg-white/10">
          <div className="bg-primary-gradient h-full w-[47.9%] animate-[progress-pulse_2s_ease-in-out_infinite]" />
        </div>

        <div className="bg-surface flex w-full flex-col gap-4 rounded-2xl px-4 py-6 ring-[0.5px] ring-border ring-inset">
          {rows.map((row) => (
            <div
              key={row.label}
              className={`flex items-center justify-between font-body leading-[22px] font-light ${row.small ? "text-[14px] text-sub-heading" : "min-h-6 text-[16px]"}`}
            >
              <span className="text-sub-heading">{row.label}</span>
              {row.value}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface mt-auto w-full rounded-2xl p-4 ring-[0.5px] ring-border ring-inset">
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-[11.983px]">
            <img src="/icons/deposit/info.svg" alt="" width={19.9799} height={19.9799} />
            <h2 className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-heading">Important Information</h2>
          </div>
          <p className="font-body text-[12px] leading-4 font-light text-sub-heading">{note}</p>
        </div>
      </div>
    </div>
  );
}

/** Yellow "Pending" value for the status card. */
export function PendingBadge() {
  return (
    <span className="flex items-center gap-[8.5px] text-pending">
      <span className="size-2 rounded-full bg-pending" />
      Pending
    </span>
  );
}
