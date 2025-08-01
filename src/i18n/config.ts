import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslation from '../locales/ar/translation.json';
import enTranslation from '../locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: arTranslation },
      en: { translation: enTranslation }
    },
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: { escapeValue: false }
  });

export default i18n;
