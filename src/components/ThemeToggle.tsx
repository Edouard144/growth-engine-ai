import { Moon, Sun } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useApp();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-[var(--shadow-card)] backdrop-blur-md transition-all duration-300 hover:bg-card hover:shadow-[var(--shadow-float)] dark:hover:shadow-[0_0_20px_oklch(0.6_0.15_270/0.2)]"
    >
      <Sun
        className={
          "absolute h-4 w-4 transition-all duration-300 " +
          (isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0")
        }
      />
      <Moon
        className={
          "absolute h-4 w-4 transition-all duration-300 " +
          (isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100")
        }
      />
    </button>
  );
}
