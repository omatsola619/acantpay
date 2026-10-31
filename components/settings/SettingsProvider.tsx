"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Appearance = "default" | "light" | "dark";

type Settings = {
  notifications: boolean;
  currency: string;
  appearance: Appearance;
};

type SettingsContextValue = Settings & { update: (patch: Partial<Settings>) => void };

const defaults: Settings = { notifications: true, currency: "USD", appearance: "default" };
const STORAGE_KEY = "acantpay-settings";

const SettingsContext = createContext<SettingsContextValue | null>(null);

/** App preferences from the Settings tab, remembered on this device. */
export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState(defaults);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring saved prefs after hydration
      if (saved) setSettings({ ...defaults, ...JSON.parse(saved) });
    } catch {
      // Storage unavailable (private mode etc.); fall back to defaults
    }
  }, []);

  const update = (patch: Partial<Settings>) =>
    setSettings((s) => {
      const next = { ...s, ...patch };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore: preferences just won't persist
      }
      return next;
    });

  return <SettingsContext.Provider value={{ ...settings, update }}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
}

export const appearanceLabels: Record<Appearance, string> = {
  default: "Default",
  light: "Light Mode",
  dark: "Dark Mode",
};
