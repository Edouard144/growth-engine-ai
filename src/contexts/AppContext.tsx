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
  joinedWaitlist: boolean;
  setJoinedWaitlist: (joined: boolean) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("en");
  const [joinedWaitlist, setJoinedWaitlistState] = useState(false);

  useEffect(() => {
    const storedTheme = (typeof window !== "undefined" &&
      localStorage.getItem("pluto-theme")) as Theme | null;
    const storedLang = (typeof window !== "undefined" &&
      localStorage.getItem("pluto-lang")) as Lang | null;
    const storedJoined =
      (typeof window !== "undefined" && localStorage.getItem("pluto-joined")) === "true";
    if (storedTheme === "dark" || storedTheme === "light") setThemeState(storedTheme);
    if (storedLang === "en" || storedLang === "fr" || storedLang === "hi") setLangState(storedLang);
    setJoinedWaitlistState(storedJoined);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("pluto-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("pluto-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value: AppContextValue = {
    theme,
    setTheme: setThemeState,
    toggleTheme: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    lang,
    setLang: setLangState,
    t: (k) => translations[lang][k] ?? translations.en[k] ?? k,
    joinedWaitlist,
    setJoinedWaitlist: (joined: boolean) => {
      setJoinedWaitlistState(joined);
      if (typeof window !== "undefined") {
        localStorage.setItem("pluto-joined", joined.toString());
      }
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
