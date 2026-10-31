/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import CurrencyAvatar from "@/components/deposit/CurrencyAvatar";
import ScreenHeader from "@/components/deposit/ScreenHeader";
import OptionCard from "@/components/ui/OptionCard";
import { cryptoMethods, fiatMethods, getCurrency, type DepositMethod } from "@/lib/deposit-data";

function Eta({ text }: { text: string }) {
  return (
    <span className="flex w-full items-center gap-[3.985px]">
      <img src="/icons/deposit/clock.svg" alt="" width={15.9948} height={15.9948} />
      <span className="font-body text-[14px] leading-[22px] font-light text-sub-heading">{text}</span>
    </span>
  );
}

const cardClass =
  "bg-surface flex w-full flex-col gap-4 rounded-2xl ring-[0.5px] ring-border ring-inset transition active:scale-[0.99] active:opacity-90";

function FiatMethodCard({ method, href }: { method: DepositMethod; href: string }) {
  return (
    <OptionCard
      href={href}
      icon={method.icon!}
      title={method.title}
      subtitle={<Eta text={method.eta} />}
      footer={
        <span className="flex w-full items-center justify-between pt-[8.5px] font-sans text-[16px] leading-6 text-sub-heading shadow-[inset_0_0.5px_0_var(--border-color)]">
          <span>Fee</span>
          <span>{method.fee}</span>
        </span>
      }
    />
  );
}

function CryptoMethodCard({ method, href, glyph }: { method: DepositMethod; href: string; glyph: React.ReactNode }) {
  return (
    <Link href={href} className={`${cardClass} px-4 py-6`}>
      <span className="flex items-center gap-3">
        {glyph}
        <span className="flex flex-col">
          <span className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-white">{method.title}</span>
          <Eta text={method.eta} />
        </span>
      </span>
    </Link>
  );
}

export default async function DepositMethodScreen({ params }: PageProps<"/deposit/[code]">) {
  const { code } = await params;
  const currency = getCurrency(code);
  if (!currency) notFound();

  const base = `/deposit/${code}`;
  const isFiat = currency.kind === "fiat";
  const methods = isFiat ? fiatMethods : cryptoMethods(currency.code);

  return (
    <div className="flex flex-col px-4 pt-3 pb-8">
      <div className="flex flex-col gap-4">
        <ScreenHeader title="Deposit Method" backHref="/deposit" tone="white" />
        <p className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-sub-heading">
          Choose how to deposit {isFiat ? currency.code : "Crypto"}
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        {methods.map((m) =>
          isFiat ? (
            <FiatMethodCard key={m.id} method={m} href={`${base}/${m.next}`} />
          ) : (
            <CryptoMethodCard key={m.id} method={m} href={`${base}/${m.next}`} glyph={<CurrencyAvatar icon={currency.icon} />} />
          ),
        )}
      </div>
    </div>
  );
}
