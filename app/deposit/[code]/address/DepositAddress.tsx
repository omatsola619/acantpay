"use client";

/* eslint-disable @next/next/no-img-element */
import InfoCard from "@/components/deposit/InfoCard";
import ScreenHeader from "@/components/deposit/ScreenHeader";
import { Toast, useCopyToast } from "@/components/ui/Toast";
import type { Currency } from "@/lib/deposit-data";

type Props = { currency: Currency; address: string; notes: string[] };

export default function DepositAddress({ currency, address, notes }: Props) {
  const { copy, message } = useCopyToast();

  const share = async () => {
    const text = `My ${currency.name} (${currency.code}) deposit address: ${address}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `${currency.code} deposit address`, text });
      } catch {
        // User dismissed the share sheet
      }
    } else {
      copy(address, "Address copied — sharing isn't supported here");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 pt-5 pb-8">
      <div className="flex w-[343px] max-w-[calc(100%-32px)] flex-col gap-4">
        <ScreenHeader title="Deposit Details" backHref={`/deposit/${currency.code.toLowerCase()}/amount`} />
        <div className="flex items-center gap-[7.997px] font-body text-[14px] leading-[22px] font-light">
          <span className="text-white">{currency.code}</span>
          <span className="text-placeholder">• {currency.name}</span>
        </div>
      </div>

      <div className="w-[367.826px] max-w-full px-[15.995px]">
        <div className="flex w-full flex-col gap-[15.995px]">
          <div className="bg-surface flex w-full flex-col items-center gap-[15.995px] rounded-2xl ring-[0.5px] ring-border ring-inset p-4">
            <div className="rounded-[14px] bg-white p-3">
              <img src="/icons/deposit/qr.svg" alt={`QR code for your ${currency.code} deposit address`} width={100} height={100} />
            </div>
            <p className="text-center font-body text-[14px] leading-[22px] font-light text-placeholder">Scan QR code to get deposit address</p>
          </div>

          <div className="bg-surface flex w-full flex-col gap-4 rounded-2xl ring-[0.5px] ring-border ring-inset p-4">
            <p className="font-sans text-[14px] leading-5 text-placeholder">Deposit Address</p>
            <div className="h-[75.419px] w-full rounded-[14px] ring-[1.735px] ring-white/10 ring-inset bg-black/30 px-[17.73px] pt-[17.73px] pb-[1.735px]">
              <p className="w-[254px] max-w-full font-code text-[14px] leading-5 break-all text-white">{address}</p>
            </div>
            <button
              type="button"
              onClick={() => copy(address, "Address copied")}
              className="bg-primary-gradient flex w-full items-center justify-center gap-3 rounded-lg px-6 py-3 transition active:scale-[0.98]"
            >
              <img src="/icons/deposit/copy-white.svg" alt="" width={15.9948} height={15.9948} />
              <span className="font-sans text-[16px] leading-6 text-white">Copy Address</span>
            </button>
          </div>

          <InfoCard items={notes} heading="plain" />
        </div>
      </div>

      <div className="w-full px-4 py-3">
        <button
          type="button"
          onClick={share}
          className="bg-primary-gradient flex w-full items-center justify-center rounded-lg px-6 py-3 font-sans text-[16px] leading-6 text-white transition active:scale-[0.98]"
        >
          Share
        </button>
      </div>

      <Toast message={message} />
    </div>
  );
}
