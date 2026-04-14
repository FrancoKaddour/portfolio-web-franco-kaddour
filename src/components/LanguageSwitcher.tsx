import { useTranslation } from "react-i18next";

const langs = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1.5">
      {langs.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1.5">
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`text-[11px] tracking-[0.1em] uppercase cursor-pointer transition-opacity ${
              i18n.language === lang.code
                ? "text-foreground font-bold"
                : "text-foreground/40 hover:text-foreground"
            }`}
          >
            {lang.label}
          </button>
          {i < langs.length - 1 && (
            <span className="text-foreground/25 text-[11px]">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
