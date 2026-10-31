/* eslint-disable @next/next/no-img-element */
import type { Transaction, TransactionStatus } from "@/lib/mock-data";

const statusStyle: Record<TransactionStatus, { label: string; className: string }> = {
  successful: { label: "Successful", className: "text-success" },
  failed: { label: "Failed", className: "text-error" },
  pending: { label: "Pending", className: "text-sub-heading" },
};

function TransactionIcon({ type }: { type: Transaction["type"] }) {
  const isTransfer = type !== "swap";
  return (
    <span
      className={`bg-app flex shrink-0 items-center justify-center rounded-full p-2.5 ${isTransfer ? "[filter:drop-shadow(0_4px_2px_rgba(0,0,0,0.25))]" : ""}`}
    >
      {type === "swap" ? (
        <img src="/icons/home/minus.svg" alt="" width={16} height={16} />
      ) : (
        <img src="/icons/home/arrow-up.svg" alt="" width={16} height={16} className={type === "deposit" ? "-scale-y-100" : undefined} />
      )}
    </span>
  );
}

/** "Recent Transactions" panel; the list scrolls inside the remaining screen height. */
export default function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
  return (
    <section className="bg-card flex min-h-[200px] w-full flex-1 flex-col gap-4 overflow-hidden rounded-t-xl border-[0.5px] border-border p-3">
      <div className="flex h-6 w-full shrink-0 items-center justify-between">
        <h2 className="font-body text-[14px] leading-[22px] font-light text-on-primary">Recent Transactions</h2>
        <button type="button" className="font-body text-[12px] leading-4 font-light text-sub-heading underline active:opacity-70">
          see all
        </button>
      </div>

      <ul className="-mx-3 flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 [scrollbar-width:none]">
        {transactions.map((t, i) => {
          const status = statusStyle[t.status];
          const isLast = i === transactions.length - 1;
          return (
            <li key={t.id} className={`flex w-full items-center gap-3 ${isLast ? "" : "border-b-[0.5px] border-border pb-2"}`}>
              <TransactionIcon type={t.type} />
              <div className="flex min-w-0 flex-1 items-center gap-1">
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="truncate font-body text-[14px] leading-[22px] font-light text-on-primary">{t.title}</p>
                  <p className="font-body text-[12px] leading-[18px] font-light text-sub-heading">{t.date}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end justify-center gap-1">
                  <p className="font-display text-[14px] leading-5 font-medium tracking-[-0.02px] text-on-primary">{t.amount}</p>
                  <p className={`font-body text-[12px] leading-4 font-light ${status.className}`}>{status.label}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
