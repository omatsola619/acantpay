import { notFound } from "next/navigation";
import CurrencyBadgeInline from "@/components/deposit/CurrencyBadgeInline";
import StatusScreen, { PendingBadge } from "@/components/ui/StatusScreen";
import { getCurrency } from "@/lib/deposit-data";

export default async function DepositStatusScreen({ params }: PageProps<"/deposit/[code]/status">) {
  const { code } = await params;
  const currency = getCurrency(code);
  if (!currency) notFound();

  return (
    <StatusScreen
      title="Waiting for Deposit"
      subtitle={`Processing your ${currency.code} deposit...`}
      rows={[
        { label: "Status", value: <PendingBadge /> },
        { label: "Currency", value: <CurrencyBadgeInline currency={currency} /> },
        { label: "Estimated Time", value: <span>{currency.kind === "fiat" ? "1-3 business days" : "10-30 minutes"}</span>, small: true },
      ]}
      note="You will be notified once the transfer is received"
    />
  );
}
