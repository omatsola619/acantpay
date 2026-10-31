/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const buttonBase =
  "flex h-12 min-w-0 flex-1 items-center justify-center rounded-lg px-6 py-3 font-nunito text-[16px] leading-5 font-semibold transition active:scale-[0.98]";

export default function LogOutScreen() {
  return (
    <div data-screen-bg="darkest" className="flex min-h-full flex-col px-4 pt-[21px] pb-6">
      <Link href="/settings" aria-label="Back" className="-m-2 self-start p-2 active:opacity-60">
        <img src="/icons/deposit/arrow-up-24.svg" alt="" width={24} height={24} className="-rotate-90" />
      </Link>

      <div className="mt-8 flex flex-col items-center gap-8">
        <img src="/icons/settings/triangle-warning.svg" alt="" width={48} height={48} />
        <div className="flex w-full flex-col gap-3 text-center">
          <h1 className="font-display text-[20px] leading-7 font-medium tracking-[-0.02px] text-on-primary">
            Are you sure you want to
            <br />
            Logout?
          </h1>
          <p className="font-body text-[14px] leading-[22px] font-light text-sub-heading">You can always log back in anytime</p>
        </div>
        <div className="flex w-full items-center justify-center gap-4 p-2">
          <Link href="/settings" className={`${buttonBase} bg-[rgba(134,134,135,0.12)] text-text-subtle`}>
            Cancel
          </Link>
          <Link href="/" className={`${buttonBase} border border-[#e94056] bg-on-primary text-[#e94056]`}>
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}
