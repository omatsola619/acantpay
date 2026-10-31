import { notFound } from "next/navigation";
import { bankNotes, getCurrency } from "@/lib/deposit-data";
import BankDetails from "./BankDetails";

export default async function BankDetailsScreen({ params }: PageProps<"/deposit/[code]/bank">) {
  const { code } = await params;
  const currency = getCurrency(code);
  if (!currency || currency.kind !== "fiat") notFound();

  return <BankDetails currency={currency} notes={bankNotes(currency.code)} />;
}
