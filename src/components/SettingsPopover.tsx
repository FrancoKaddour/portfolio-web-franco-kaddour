import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SettingsPopover() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button 
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center p-1 rounded hover:bg-accent/50 transition-colors cursor-pointer relative z-50" 
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent side="right" align="end" className="w-auto p-2 z-50">
        <div className="flex flex-col gap-1">
          <div className="text-xs font-semibold text-muted-foreground px-2 py-1">Language</div>
          {['es', 'en', 'pt'].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`px-3 py-1.5 rounded text-sm transition-colors text-left whitespace-nowrap ${
                i18n.language === lang
                  ? 'bg-primary text-primary-foreground font-semibold'
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              {lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Português'}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
