"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/navigation";
import ScreenHeader from "@/components/deposit/ScreenHeader";
import CurrencyAvatar from "@/components/deposit/CurrencyAvatar";
import ActionButton from "@/components/ui/ActionButton";
import CircleIconButton from "@/components/ui/CircleIconButton";
import { getCurrency } from "@/lib/deposit-data";
import { convert, sellEta, sellFee } from "@/lib/sell-data";
import { formatUsd } from "@/lib/mock-data";
import { useSell } from "../SellContext";

const boxClass = "bg-card flex w-full items-center justify-between rounded-xl px-4 py-3 ring-[0.5px] ring-border ring-inset";
const tint = "flex size-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(188,72,255,0.2)_0%,rgba(138,56,245,0.2)_100%)]";

export default function ConfirmDetailsScreen() {
  const router = useRouter();
  const { sendCode, amount, recipient } = useSell();
  const send = getCurrency(sendCode)!;
  const value = Number(amount) || 0;

  return (
    <div className="flex min-h-full flex-col pb-[44px]">
      <div className="px-4 pt-[21px]">
        <ScreenHeader title="International Transaction" backHref="/sell/recipient" />
      </div>

      <div className="bg-surface mx-4 mt-8 flex flex-col items-center gap-6 rounded-3xl px-4 py-10 ring-[0.5px] ring-border ring-inset">
        <div className="flex w-full items-center justify-between">
          <CircleIconButton icon="/icons/sell/arrow-down.svg" label="Back" onClick={() => router.push("/sell/recipient")} />
          <h2 className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-heading">Confirm Details</h2>
          <CircleIconButton icon="/icons/sell/x.svg" label="Cancel" onClick={() => router.push("/home")} />
        </div>

        <div className="flex w-full flex-col items-center gap-3">
          <CurrencyAvatar icon={send.icon} size={48} />
          <p className="text-center font-display text-[20px] leading-7 font-bold tracking-[-0.02px] text-on-primary">
            You’ll send {value.toLocaleString("en-US", { maximumFractionDigits: 8 })}
            {send.code}
          </p>
          <p className="text-center font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-sub-heading">
            {formatUsd(convert(value, sendCode, "USD"))}
          </p>
        </div>

        <div className="flex w-full flex-col items-end gap-4">
          <div className={boxClass}>
            <div className="flex flex-col gap-2">
              <p className="font-display text-[14px] leading-[22px] font-light text-sub-heading">From</p>
              <div className="flex items-center gap-2">
                <span className={tint}>
                  <img src="/images/acantpay-mark.png" alt="" className="h-[22px] w-[24.708px] rounded-[1.354px] object-cover" />
                </span>
                <span className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-white">AcantPay</span>
              </div>
            </div>
            <p className="font-display text-[22px] leading-7 font-medium tracking-[-0.02px] whitespace-pre text-sub-heading">| 0</p>
          </div>

          <Link href="/sell/recipient" className={`${boxClass} active:opacity-80`}>
            <div className="flex w-[119px] flex-col gap-2">
              <p className="font-display text-[14px] leading-[22px] font-light text-sub-heading">Deliver To</p>
              <div className="flex w-full items-center gap-2">
                <span className={tint}>
                  <img src="/icons/sell/user.svg" alt="" width={22} height={22} />
                </span>
                <span className="min-w-0 flex-1 truncate font-display text-[16px] leading-[22px] font-medium tracking-[0.5px] text-white">
                  {recipient || "—"}
                </span>
              </div>
            </div>
            <img src="/icons/sell/chevron-down.svg" alt="" width={24} height={24} className="-rotate-90" />
          </Link>

          <div className="flex w-full items-center justify-between font-body text-[12px] leading-4 font-light text-sub-heading">
            <span className="flex items-center gap-2">
              <img src="/icons/sell/trend.svg" alt="" width={12} height={7} />
              Fee : ${sellFee}
            </span>
            <span className="flex items-center gap-2">
              <img src="/icons/sell/clock.svg" alt="" width={16} height={16} />
              {sellEta}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-[34px]">
        <ActionButton href="/sell/status">Tap to Send</ActionButton>
      </div>
    </div>
  );
}
