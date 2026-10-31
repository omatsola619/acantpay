/* eslint-disable @next/next/no-img-element */
import BackHeader from "./BackHeader";

type ComingSoonProps = { title: string; icon: string; description: string };

/** Placeholder for tab screens that aren't designed yet; mirrors the status screen's ring and type styles. */
export default function ComingSoon({ title, icon, description }: ComingSoonProps) {
  return (
    <div data-screen-bg="darkest" className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pt-[21px] [scrollbar-width:none]">
      <BackHeader title={title} />

      <div className="flex flex-1 flex-col items-center justify-center gap-[27px] pb-10">
        <div className="relative size-[127.985px]">
          <div className="bg-primary-gradient absolute inset-0 rounded-full opacity-[0.21]" />
          <div className="absolute inset-[15.99px] flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#0c1426_0%,#0e011b_50%,#170c26_100%)]">
            <span className="bg-primary-gradient flex size-14 items-center justify-center rounded-full">
              <img src={icon} alt="" width={32} height={32} className="brightness-0 invert" />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <span className="rounded-full bg-white/5 px-3 py-1 font-body text-[12px] leading-4 font-light text-accent ring-[0.5px] ring-white/10 ring-inset">
            In development
          </span>
          <h2 className="font-display text-[24px] leading-8 font-bold tracking-[-0.02px] text-heading">Coming Soon</h2>
          <p className="max-w-[280px] font-body text-[16px] leading-[22px] font-light text-sub-heading">{description}</p>
        </div>
      </div>
    </div>
  );
}
