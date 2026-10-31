import { notFound } from "next/navigation";
import { cryptoAddresses, cryptoMinimums, cryptoNotes, getCurrency } from "@/lib/deposit-data";
import DepositAddress from "./DepositAddress";

export default async function DepositAddressScreen({ params }: PageProps<"/deposit/[code]/address">) {
  const { code } = await params;
  const currency = getCurrency(code);
  if (!currency || currency.kind !== "crypto") notFound();

  return (
    <DepositAddress
      currency={currency}
      address={cryptoAddresses[currency.code]}
      notes={cryptoNotes(currency.code, cryptoMinimums[currency.code])}
    />
  );
}
