import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "auto" swaps with the theme, "light"/"dark" force a variant. */
  theme?: "auto" | "light" | "dark";
  className?: string;
  priority?: boolean;
};

/**
 * TonuxCorp lockup — bracket-T symbol + wordmark.
 * The two PNGs are keyed to transparency, so they sit on any surface.
 * Light/dark swapping is done in CSS (not JS) to avoid a flash on hydration.
 */
export function Logo({ theme = "auto", className, priority = false }: LogoProps) {
  const base = cn("h-8 w-auto lg:h-9", className);

  if (theme !== "auto") {
    return (
      <Image
        src={`/tonuxcorp-lockup-${theme}.png`}
        alt="TonuxCorp"
        width={845}
        height={188}
        priority={priority}
        className={base}
      />
    );
  }

  return (
    <>
      <Image
        src="/tonuxcorp-lockup-light.png"
        alt="TonuxCorp"
        width={845}
        height={188}
        priority={priority}
        className={cn(base, "block dark:hidden")}
      />
      <Image
        src="/tonuxcorp-lockup-dark.png"
        alt="TonuxCorp"
        width={845}
        height={188}
        priority={priority}
        aria-hidden="true"
        className={cn(base, "hidden dark:block")}
      />
    </>
  );
}
