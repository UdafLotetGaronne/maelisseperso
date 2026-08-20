import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost-light";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={clsx(
          "group inline-flex items-center gap-2 font-sans text-sm font-semibold text-title transition-colors hover:text-rose-900",
          className,
        )}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:scale-x-0" />
        </span>
        <span aria-hidden className="transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:translate-x-1">
          →
        </span>
      </Link>
    );
  }

  if (variant === "ghost-light") {
    return (
      <Link
        href={href}
        className={clsx(
          "inline-flex items-center justify-center rounded-full border border-cream-100/40 px-7 py-3.5 font-sans text-sm font-semibold text-cream-50 transition-colors hover:border-cream-50 hover:bg-cream-50/10",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2.5 rounded-full bg-rose-700 px-7 py-3.5 font-sans text-sm font-semibold text-cream-50 transition-all duration-300 ease-[var(--ease-editorial)] hover:bg-rose-900 hover:pr-6",
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-[var(--ease-editorial)] group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
