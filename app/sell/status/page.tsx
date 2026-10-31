"use client";

import CurrencyBadgeInline from "@/components/deposit/CurrencyBadgeInline";
import StatusScreen, { PendingBadge } from "@/components/ui/StatusScreen";
import { getCurrency } from "@/lib/deposit-data";
import { sellEta } from "@/lib/sell-data";
import { useSell } from "../SellContext";

// No Figma design for this step yet; it reuses the deposit status screen.
export default function SellStatusScreen() {
  const { sendCode } = useSell();
  const send = getCurrency(sendCode)!;

  return (
    <StatusScreen
      title="Sending Funds"
      subtitle={`Processing your ${send.code} transfer...`}
      rows={[
        { label: "Status", value: <PendingBadge /> },
        { label: "Currency", value: <CurrencyBadgeInline currency={send} /> },
        { label: "Estimated Time", value: <span>{sellEta}</span>, small: true },
      ]}
      note="You will be notified once the recipient receives the funds"
    />
  );
}
