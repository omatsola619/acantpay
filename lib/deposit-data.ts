// Dummy data for the deposit ("Buy") flow.

export type CurrencyKind = "fiat" | "crypto";

export type CurrencyIcon =
  | { type: "emoji"; value: string }
  | { type: "image"; src: string; size: number }
  | { type: "glyph"; value: string };

export type Currency = {
  code: string;
  name: string;
  kind: CurrencyKind;
  icon: CurrencyIcon;
};

export const currencies: Currency[] = [
  { code: "USD", name: "United States Dollar", kind: "fiat", icon: { type: "emoji", value: "🇺🇸" } },
  { code: "NGN", name: "Nigerian Naira", kind: "fiat", icon: { type: "image", src: "/icons/flags/ng.svg", size: 16 } },
  { code: "XAF", name: "Central African CFA", kind: "fiat", icon: { type: "image", src: "/icons/flags/ga.svg", size: 18 } },
  { code: "BTC", name: "Bitcoin", kind: "crypto", icon: { type: "glyph", value: "₿" } },
  { code: "ETH", name: "Ethereum", kind: "crypto", icon: { type: "glyph", value: "Ξ" } },
  { code: "USDT", name: "Tether", kind: "crypto", icon: { type: "glyph", value: "₮" } },
];

export const getCurrency = (code: string) => currencies.find((c) => c.code === code.toUpperCase());

export type DepositMethod = {
  id: "bank" | "card" | "network" | "binance";
  title: string;
  eta: string;
  fee?: string;
  icon?: string;
  next: "bank" | "amount";
};

export const fiatMethods: DepositMethod[] = [
  { id: "bank", title: "Bank Transfer", eta: "Expected in 1-2 hours", fee: "0.5%", icon: "/icons/deposit/bank.svg", next: "bank" },
  { id: "card", title: "Debit/Credit Card", eta: "Instant", fee: "2.5%", icon: "/icons/deposit/card.svg", next: "amount" },
];

export const cryptoMethods = (code: string): DepositMethod[] => [
  { id: "network", title: code, eta: "Expected in as little as 30 seconds", next: "amount" },
  { id: "binance", title: "Binance", eta: "Instant", next: "amount" },
];

export const quickAmounts = [50, 100, 200, 500];

export const amountLimits: Record<string, string> = {
  BTC: "0.0000001 BTC -1BTC",
  ETH: "0.000001 ETH -10ETH",
  USDT: "1 USDT -10,000USDT",
};

export const cryptoAddresses: Record<string, string> = {
  BTC: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb9",
  ETH: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  USDT: "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed",
};

export const cryptoNotes = (code: string, minimum: string) => [
  `Minimum deposit: ${minimum}`,
  "3 network confirmations required",
  `Only send ${code} to this address`,
  "Sending other assets may result in permanent loss",
];

export const cryptoMinimums: Record<string, string> = { BTC: "0.001 BTC", ETH: "0.01 ETH", USDT: "10 USDT" };

export const bankDetails = {
  accountName: "Account Name",
  iban: "GB29 NWBK 6016 1331 9268 19",
  swift: "NWBKGB2L",
  bankName: "Digital Bank Ltd",
  reference: "DEP-016766",
};

export const bankNotes = (code: string) => [
  `Minimum deposit: 10 ${code}`,
  "Processing time: 1-2 business days",
  "Always include the reference number",
  "Deposits without reference may be delayed",
];
