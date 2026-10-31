"use client";

import Link from "next/link";
import CurrencyAvatar from "@/components/deposit/CurrencyAvatar";
import InfoCard from "@/components/deposit/InfoCard";
import ScreenHeader from "@/components/deposit/ScreenHeader";
import CopyIcon from "@/components/ui/CopyIcon";
import { Toast, useCopyToast } from "@/components/ui/Toast";
import { bankDetails, type Currency } from "@/lib/deposit-data";

const fieldBox = "flex w-full items-center justify-between rounded-xl ring-[1.735px] ring-inset";

function CopyField({ label, value, mono, onCopy }: { label: string; value: string; mono?: boolean; onCopy: () => void }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <p className="font-body text-[14px] leading-[22px] font-light text-sub-heading">{label}</p>
      <div className={`${fieldBox} ring-white/10 bg-black/30 p-[13.735px]`}>
        <p className={mono ? "font-code text-[14px] leading-5 text-heading" : "font-body text-[14px] leading-[22px] font-light text-heading"}>{value}</p>
        <button type="button" onClick={onCopy} aria-label={`Copy ${label}`} className="-m-2 p-2 active:opacity-60">
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}

export default function BankDetails({ currency, notes }: { currency: Currency; notes: string[] }) {
  const { copy, message } = useCopyToast();
  const code = currency.code.toLowerCase();

  return (
    <div className="flex flex-col px-4 pt-3 pb-[44px]">
      <div className="flex flex-col gap-4">
        <ScreenHeader title="Deposit Method" backHref={`/deposit/${code}`} />
        <div className="flex items-center gap-3">
          <CurrencyAvatar icon={currency.icon} />
          <div className="flex flex-col gap-1">
            <p className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-heading">{currency.code}</p>
            <p className="font-body text-[12px] leading-4 font-light text-sub-heading">IBAN &amp; SWIFT supported</p>
          </div>
        </div>
      </div>

      <div className="mt-[49px] flex flex-col gap-6">
        <div className="bg-surface flex w-full flex-col gap-4 rounded-2xl ring-[1.735px] ring-white/10 ring-inset p-4">
          <h2 className="h-[27px] font-body text-[16px] leading-[22px] font-light text-heading">Bank Transfer Details</h2>
          <div className="flex w-full flex-col gap-[15.995px]">
            <CopyField label="Account Name" value={bankDetails.accountName} onCopy={() => copy(bankDetails.accountName, "Account name copied")} />
            <CopyField label="IBAN" value={bankDetails.iban} mono onCopy={() => copy(bankDetails.iban.replaceAll(" ", ""), "IBAN copied")} />
            <CopyField label="SWIFT/BIC" value={bankDetails.swift} mono onCopy={() => copy(bankDetails.swift, "SWIFT/BIC copied")} />
            <div className="flex w-full flex-col gap-2">
              <p className="font-body text-[14px] leading-[22px] font-light text-sub-heading">Bank Name</p>
              <div className={`${fieldBox} ring-white/10 bg-black/30 p-3`}>
                <p className="font-sans text-[14px] leading-5 text-heading">{bankDetails.bankName}</p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 pt-[7.997px]">
              <p className="font-body text-[14px] leading-[22px] font-light text-sub-heading">Reference (Required)</p>
              <div className={`${fieldBox} ring-[rgba(255,105,0,0.3)] bg-[rgba(255,105,0,0.1)] p-[13.735px]`}>
                <p className="font-code text-[16px] leading-6 text-[#ffd6a7]">{bankDetails.reference}</p>
                <button
                  type="button"
                  onClick={() => copy(bankDetails.reference, "Reference copied")}
                  aria-label="Copy reference"
                  className="-m-2 p-2 active:opacity-60"
                >
                  <CopyIcon tone="accent" />
                </button>
              </div>
              <p className="font-sans text-[12px] leading-4 text-[rgba(255,214,167,0.8)]">⚠️ Include this reference in your transfer</p>
            </div>
          </div>
        </div>

        <InfoCard items={notes} />
      </div>

      <div className="mt-[26px] py-3">
        <Link
          href={`/deposit/${code}/status`}
          className="bg-primary-gradient flex w-full items-center justify-center rounded-lg px-6 py-3 font-sans text-[16px] leading-6 text-white transition active:scale-[0.98]"
        >
          Send Funds
        </Link>
      </div>

      <Toast message={message} />
    </div>
  );
}
