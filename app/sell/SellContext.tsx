"use client";

import { createContext, useContext, useState } from "react";

type SellState = {
  sendCode: string;
  receiveCode: string;
  /** Amount typed in the send currency, kept as the raw input string */
  amount: string;
  recipient: string;
};

type SellContextValue = SellState & { update: (patch: Partial<SellState>) => void; reset: () => void };

const initial: SellState = { sendCode: "BTC", receiveCode: "USD", amount: "", recipient: "" };

const SellContext = createContext<SellContextValue | null>(null);

/** Keeps the Sell flow's choices while the user moves between its screens. */
export function SellProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initial);
  const value: SellContextValue = {
    ...state,
    update: (patch) => setState((s) => ({ ...s, ...patch })),
    reset: () => setState(initial),
  };
  return <SellContext.Provider value={value}>{children}</SellContext.Provider>;
}

export function useSell() {
  const ctx = useContext(SellContext);
  if (!ctx) throw new Error("useSell must be used inside SellProvider");
  return ctx;
}
