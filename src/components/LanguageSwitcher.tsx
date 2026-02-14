import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="flex gap-1 items-center text-[10px] font-mono">
      {['es', 'en', 'pt'].map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-1.5 py-0.5 rounded transition-colors text-xs ${
            i18n.language === lang
              ? 'bg-primary text-primary-foreground font-bold'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          title={lang === 'es' ? 'Español' : lang === 'en' ? 'English' : 'Português'}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
