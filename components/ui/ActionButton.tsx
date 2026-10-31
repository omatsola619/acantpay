import Link from "next/link";

type ActionButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
};

const base = "flex h-12 w-[327px] max-w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-nunito text-[16px] leading-5 font-semibold transition";

/** Figma "Secondary button": grey when disabled, brand gradient when it can be pressed. Sits in a 16px/8px padded row. */
export default function ActionButton({ children, disabled, href, onClick }: ActionButtonProps) {
  const className = `${base} ${disabled ? "bg-button-disabled text-subtitle" : "bg-primary-gradient text-on-primary active:scale-[0.98]"}`;
  return (
    <div className="flex w-full flex-col items-center px-4 py-2">
      {href && !disabled ? (
        <Link href={href} className={className}>
          {children}
        </Link>
      ) : (
        <button type="button" disabled={disabled} onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </div>
  );
}
