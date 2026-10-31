// Dummy data for the showcase build. Swap for real API calls later.
import { usdPrice } from "./sell-data";

export type TransactionType = "deposit" | "withdrawal" | "swap";
export type TransactionStatus = "successful" | "failed" | "pending";

export type Transaction = {
  id: string;
  type: TransactionType;
  title: string;
  date: string;
  amount: string;
  status: TransactionStatus;
};

export const user = {
  firstName: "Peace",
  unreadNotifications: 1,
  totalValue: 500,
  idVerified: false,
};

export const recentTransactions: Transaction[] = [
  { id: "t1", type: "deposit", title: "Deposit", date: "04/17/2025 21:44:42", amount: "+10.00 USDT", status: "successful" },
  { id: "t2", type: "withdrawal", title: "Withdrawal", date: "04/17/2025 21:44:42", amount: "-10.00 USDT", status: "failed" },
  { id: "t3", type: "swap", title: "Swap BTC to USDT", date: "04/16/2025 18:12:05", amount: "+120.00 USDT", status: "pending" },
  { id: "t4", type: "deposit", title: "Deposit", date: "04/15/2025 09:30:17", amount: "+250.00 USDT", status: "successful" },
  { id: "t5", type: "withdrawal", title: "Withdrawal", date: "04/14/2025 14:02:51", amount: "-40.00 USDT", status: "successful" },
  { id: "t6", type: "swap", title: "Swap USDT to ETH", date: "04/12/2025 11:47:23", amount: "-75.00 USDT", status: "successful" },
  { id: "t7", type: "deposit", title: "Deposit", date: "04/10/2025 08:15:40", amount: "+100.00 USDT", status: "successful" },
];

export const formatUsd = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

/** Formats a USD amount in the user's default currency (Settings → Default Currency). */
export const formatMoney = (usd: number, code: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: code, currencyDisplay: "narrowSymbol" }).format(
    usd / (usdPrice[code] ?? 1),
  );
