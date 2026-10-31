"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { label: string; icon: string; href?: string };

// Tabs without an href don't have screens yet; they render but don't navigate.
const tabs: Tab[] = [
  { label: "Home", icon: "/icons/tabs/home.svg", href: "/home" },
  { label: "Markets", icon: "/icons/tabs/markets.svg" },
  { label: "Cards", icon: "/icons/tabs/cards.svg" },
  { label: "Settings", icon: "/icons/tabs/settings.svg" },
];

/** Bottom tab navigation for the main app screens. */
export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="pb-tabbar shrink-0 overflow-hidden border-t-[0.5px] border-tab-border px-5 pt-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] frame:pb-[11px]">
      <ul className="flex w-full items-center justify-between">
        {tabs.map((tab) => {
          const icon = <img src={tab.icon} alt="" width={32} height={32} />;
          return (
            <li key={tab.label}>
              {tab.href ? (
                <Link
                  href={tab.href}
                  aria-label={tab.label}
                  aria-current={pathname === tab.href ? "page" : undefined}
                  className="block active:opacity-70"
                >
                  {icon}
                </Link>
              ) : (
                <button type="button" aria-label={tab.label} className="block active:opacity-70">
                  {icon}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
