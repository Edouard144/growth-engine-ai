import { useApp } from "@/contexts/AppContext";
import type { Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "hi", label: "HI" },
];

export function LanguageToggle() {
  const { lang, setLang } = useApp();
  return (
    <div className="inline-flex items-center rounded-full border border-border/60 bg-card/80 p-1 shadow-[var(--shadow-card)] backdrop-blur-md">
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className={
              "rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition " +
              (active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}