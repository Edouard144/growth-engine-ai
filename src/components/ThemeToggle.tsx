import { Moon, Sun } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useApp();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground shadow-[var(--shadow-card)] backdrop-blur-md transition hover:bg-card"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
