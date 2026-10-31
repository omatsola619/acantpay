import { notFound } from "next/navigation";
import { amountLimits, getCurrency } from "@/lib/deposit-data";
import AddFunds from "./AddFunds";

export default async function AddFundsScreen({ params }: PageProps<"/deposit/[code]/amount">) {
  const { code } = await params;
  const currency = getCurrency(code);
  if (!currency) notFound();

  const limits = amountLimits[currency.code] ?? `10 ${currency.code} -10,000${currency.code}`;
  // Crypto shows the wallet address next; card payments go straight to the status screen
  const nextHref = `/deposit/${code}/${currency.kind === "crypto" ? "address" : "status"}`;

  return <AddFunds currency={currency} limits={limits} nextHref={nextHref} />;
}
