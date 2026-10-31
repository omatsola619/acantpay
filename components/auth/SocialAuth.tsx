/* eslint-disable @next/next/no-img-element */

/** "or" divider followed by the Apple and Google sign-in buttons. */
export default function SocialAuth() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <img src="/icons/auth/divider-line.svg" alt="" width={140} height={0.5} />
        <span className="font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-sub-heading">or</span>
        <img src="/icons/auth/divider-line.svg" alt="" width={140} height={0.5} />
      </div>
      <div className="flex w-full gap-4">
        <button
          type="button"
          aria-label="Continue with Apple"
          className="flex flex-1 items-center justify-center rounded-lg bg-white px-6 py-3 transition active:scale-[0.98] active:opacity-90"
        >
          <img src="/icons/auth/apple.svg" alt="" width={24} height={24} />
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className="flex flex-1 items-center justify-center rounded-lg bg-white px-6 py-3 transition active:scale-[0.98] active:opacity-90"
        >
          <img src="/icons/auth/google.svg" alt="" width={24} height={24} />
        </button>
      </div>
    </>
  );
}
