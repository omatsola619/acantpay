/* eslint-disable @next/next/no-img-element */

/** Greeting pill with the user's initial, and the notifications bell. */
export default function HomeHeader({ name, unread }: { name: string; unread: number }) {
  return (
    <div className="flex h-12 w-full items-center justify-between">
      <div className="relative flex items-center gap-3 rounded-full py-1 pr-2 pl-0.5">
        {/* Shadow on its own layer: a filter on the wrapper would isolate the saturation blend below */}
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full shadow-[2px_2px_2px_rgba(0,0,0,0.12)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full mix-blend-saturation backdrop-blur-[4px]"
          style={{ backgroundImage: "linear-gradient(180deg, #26033a 0%, #27003d 45.282%, #200132 90.545%)" }}
        />
        <div className="relative flex size-8 items-center justify-center rounded-full bg-avatar [filter:drop-shadow(0_4px_2px_rgba(0,0,0,0.25))]">
          <span className="font-display text-[18px] leading-[26px] font-medium tracking-[-0.02px] text-white">{name[0]}</span>
        </div>
        <span className="relative font-nunito text-[14px] leading-[18px] font-semibold tracking-[0.14px] text-on-primary">
          Hello {name}
        </span>
      </div>

      <button
        type="button"
        aria-label={`Notifications, ${unread} unread`}
        className="relative flex size-8 items-center justify-center rounded-full bg-chip shadow-[0_4px_4px_rgba(0,0,0,0.25)] active:opacity-70"
      >
        <img src="/icons/home/bell.svg" alt="" width={32} height={32} />
        {unread > 0 && (
          <span className="absolute top-[9px] right-[7.59px] flex w-[10.409px] items-center justify-center rounded-[8.922px] bg-badge px-[2.974px] py-[1.487px] font-lato text-[5.948px] leading-normal text-on-primary">
            {unread}
          </span>
        )}
      </button>
    </div>
  );
}
