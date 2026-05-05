import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "@/lib/i18n";

type Theme = "light" | "dark";

interface AppContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: TranslationKey) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const storedTheme = (typeof window !== "undefined" && localStorage.getItem("pluto-theme")) as Theme | null;
    const storedLang = (typeof window !== "undefined" && localStorage.getItem("pluto-lang")) as Lang | null;
    if (storedTheme === "dark" || storedTheme === "light") setThemeState(storedTheme);
    if (storedLang === "en" || storedLang === "fr" || storedLang === "hi") setLangState(storedLang);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("pluto-theme", theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    try { localStorage.setItem("pluto-lang", lang); } catch { /* ignore */ }
  }, [lang]);

  const value: AppContextValue = {
    theme,
    setTheme: setThemeState,
    toggleTheme: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    lang,
    setLang: setLangState,
    t: (k) => translations[lang][k] ?? translations.en[k] ?? k,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}