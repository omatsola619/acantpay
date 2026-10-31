import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

const base =
  "flex h-12 w-full items-center justify-center rounded-lg px-6 py-3 font-display text-[16px] leading-[22px] font-bold tracking-[0.5px] text-on-primary transition active:scale-[0.98] active:opacity-90";

const variants = {
  primary: "bg-primary-gradient [filter:drop-shadow(0_4px_2px_rgba(0,0,0,0.25))_drop-shadow(0_4px_2px_rgba(0,0,0,0.25))]",
  outline: "border-[0.5px] border-on-primary",
};

/** Figma "primary button" component (Default and outline variants). */
export default function Button({ children, variant = "primary", href, type = "button", onClick, className = "" }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
