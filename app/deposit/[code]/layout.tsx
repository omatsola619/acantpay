import { currencies } from "@/lib/deposit-data";

export function generateStaticParams() {
  return currencies.map((c) => ({ code: c.code.toLowerCase() }));
}

export default function CurrencyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
