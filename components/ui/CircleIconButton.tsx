/* eslint-disable @next/next/no-img-element */

type Props = { icon: string; label: string; onClick: () => void; rotate?: boolean };

/** 32px frosted round button (close / back inside cards); Figma rotates its 14.4px icons by 90°. */
export default function CircleIconButton({ icon, label, onClick, rotate = true }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(153,153,153,0.08)_100%)] active:opacity-60"
    >
      <img src={icon} alt="" width={14.4047} height={14.4047} className={rotate ? "rotate-90" : undefined} />
    </button>
  );
}
