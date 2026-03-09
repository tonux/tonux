"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
      className="rounded-lg p-2 text-primary-600 transition-colors hover:bg-primary-100 dark:text-primary-300 dark:hover:bg-primary-800"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
