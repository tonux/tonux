"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      aria-label={`Switch to ${locale === "fr" ? "English" : "Francais"}`}
      className="rounded-lg px-3 py-1.5 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800"
    >
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}
