// Dummy data for the Sell ("International Transaction") flow.
import { currencies } from "./deposit-data";

export const sendCurrencies = currencies.filter((c) => c.kind === "crypto");
export const receiveCurrencies = currencies.filter((c) => c.kind === "fiat");

/** Price of one unit in USD */
export const usdPrice: Record<string, number> = {
  BTC: 91510.4989,
  ETH: 3245.12,
  USDT: 1,
  USD: 1,
  NGN: 1 / 1550,
  XAF: 1 / 605,
};

export const sellFee = 0.5;
export const sellEta = "30 seconds";

export const convert = (amount: number, from: string, to: string) => (amount * usdPrice[from]) / usdPrice[to];

export const formatRate = (from: string, to: string) =>
  `1 ${from} = ${convert(1, from, to).toLocaleString("en-US", { maximumFractionDigits: 4 })} ${to}`;

export const methods = [
  {
    id: "international",
    title: "International Transfer",
    description: "Send and receive crypto and local currency to your bank account or wallet ",
    icon: "/icons/deposit/bank.svg",
    href: "/sell",
  },
  {
    id: "in-app",
    title: "In-App Transaction",
    description: "Send and receive transactions using your unique IUD",
    icon: "/icons/sell/users.svg",
  },
] as const;
