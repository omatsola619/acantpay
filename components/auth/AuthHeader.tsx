/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/** Back arrow and screen title shared by the auth screens. */
export default function AuthHeader({ title, backHref = "/" }: { title: string; backHref?: string }) {
  return (
    <div className="flex flex-col gap-8 pt-[21px]">
      <Link href={backHref} aria-label="Back" className="-m-2 self-start p-2 active:opacity-60">
        <img src="/icons/auth/arrow-left.svg" alt="" width={24} height={24} />
      </Link>
      <h1 className="font-display text-[20px] leading-7 font-medium tracking-[-0.02px] text-white">{title}</h1>
    </div>
  );
}
