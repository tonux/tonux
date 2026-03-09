import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const isLink = variant === "link";

  const base = isLink
    ? "inline-flex items-center gap-1 font-medium underline underline-offset-4 decoration-content/30 transition-all duration-300 hover:decoration-content text-content"
    : "inline-flex items-center justify-center font-medium rounded-[12px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-content/30 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  const variants = {
    primary: "bg-content text-surface hover:opacity-80",
    secondary:
      "border border-surface-border-strong bg-surface text-content hover:bg-surface-elevated",
    ghost: "text-content-secondary hover:text-content hover:bg-surface-alt",
    link: "",
  };

  const sizes = isLink
    ? { sm: "text-sm", md: "text-sm", lg: "text-base" }
    : {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      };

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    disabled && "opacity-40 cursor-not-allowed",
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
