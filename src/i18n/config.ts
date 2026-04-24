import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';
import pt from './locales/pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      pt: { translation: pt },
    },
    lng: localStorage.getItem('language') || 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

// Sync <html lang> attribute with active language
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem('language', lng);
});

// Set initial lang attribute
document.documentElement.lang = i18n.language || 'es';

export default i18n;
