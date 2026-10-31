import { SellProvider } from "./SellContext";

export default function SellLayout({ children }: { children: React.ReactNode }) {
  return <SellProvider>{children}</SellProvider>;
}
