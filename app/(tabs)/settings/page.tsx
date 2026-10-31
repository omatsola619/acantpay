"use client";

import Link from "next/link";
import { appearanceLabels, useSettings } from "@/components/settings/SettingsProvider";
import BackHeader from "@/components/ui/BackHeader";
import ListRow from "@/components/ui/ListRow";
import Toggle from "@/components/ui/Toggle";

export default function SettingsScreen() {
  const { notifications, currency, appearance, update } = useSettings();

  return (
    <div data-screen-bg="darkest" className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pt-[21px] [scrollbar-width:none]">
      <BackHeader title="Settings" />

      <div className="mt-8 flex flex-col gap-[7.997px]">
        <ListRow
          icon="/icons/settings/bell.svg"
          label="Notifications"
          trailing={<Toggle checked={notifications} onChange={(v) => update({ notifications: v })} label="Notifications" />}
        />
        <ListRow icon="/icons/settings/currency-dollar.svg" label="Default Currency" value={currency} chevron href="/settings/currency" />
        <ListRow icon="/icons/settings/sun.svg" label="Appearance" value={appearanceLabels[appearance].replace(" Mode", "")} chevron href="/settings/appearance" />
        <ListRow icon="/icons/settings/help-circle.svg" label="Support" chevron />
        <ListRow icon="/icons/settings/shield-tick.svg" label="Terms & Privacy" chevron />
        <ListRow icon="/icons/settings/trash.svg" label="Delete my account" chevron />
      </div>

      <div className="mt-auto flex flex-col items-center px-0 pt-10 pb-2">
        <Link
          href="/settings/logout"
          className="flex h-12 w-[327px] max-w-full items-center justify-center rounded-lg border border-[#e94056] bg-on-primary px-6 py-3 font-nunito text-[16px] leading-5 font-semibold text-[#e94056] transition active:scale-[0.98]"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
}
