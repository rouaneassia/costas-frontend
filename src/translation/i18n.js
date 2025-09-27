import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';

// Import JSON translation files
import global_en from './en/global.json';
import global_fr from './fr/global.json';
import global_ar from './ar/global.json';

const storedLang = Cookies.get('lang') || 'fr'; // Default to 'fr'

i18next
  .use(initReactI18next) // Passes i18next to react-i18next
  .init({
    resources: {
      en: { translation: global_en },
      fr: { translation: global_fr },
      ar: { translation: global_ar },
    },
    lng: storedLang,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18next;