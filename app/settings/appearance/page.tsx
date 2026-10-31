"use client";

/* eslint-disable @next/next/no-img-element */
import { appearanceLabels, useSettings, type Appearance } from "@/components/settings/SettingsProvider";
import BackHeader from "@/components/ui/BackHeader";
import ListRow from "@/components/ui/ListRow";

const options: { id: Appearance; icon: string; iconSize: number }[] = [
  { id: "default", icon: "/icons/settings/mobile.svg", iconSize: 24 },
  { id: "light", icon: "/icons/settings/light-up.svg", iconSize: 20 },
  { id: "dark", icon: "/icons/settings/dark-mode.svg", iconSize: 24 },
];

// Only this screen has a light-mode design so far; the rest of the app stays dark.
export default function AppearanceScreen() {
  const { appearance, update } = useSettings();
  const light = appearance === "light";
  const tone = light ? "light" : "dark";

  return (
    <div data-screen-bg={light ? "light" : "darkest"} className="flex min-h-full flex-col px-4 pt-[21px] pb-6">
      <BackHeader title="Appearance" backHref="/settings" tone={tone} />

      <div className="mt-8 flex flex-col gap-4" role="radiogroup" aria-label="Appearance">
        {options.map((o) => {
          const checked = appearance === o.id;
          return (
            <ListRow
              key={o.id}
              tone={tone}
              icon={o.icon}
              iconSize={o.iconSize}
              label={appearanceLabels[o.id]}
              onClick={() => update({ appearance: o.id })}
              trailing={
                <img
                  role="radio"
                  aria-checked={checked}
                  aria-label={appearanceLabels[o.id]}
                  src={`/icons/settings/radio-${checked ? "checked" : "unchecked"}${light ? "-light" : ""}.svg`}
                  width={24}
                  height={24}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
}
