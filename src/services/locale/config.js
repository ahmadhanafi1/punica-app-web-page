import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';
// import dayjs from 'dayjs';
// import 'dayjs/locale/tr';
// import 'dayjs/locale/en';

const preferedLang = Cookies.get('__LANG');

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    lng: preferedLang || 'en',
    fallbackLng: preferedLang || 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translations: require('./languages/en.json'),
      },
      tr: {
        translations: require('./languages/tr.json'),
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    fallbackNS: 'translations',
  });

i18n.languages = ['en', 'tr'];
i18n.on('languageChanged', (lng) => {
  // dayjs.locale(lng);
  window.location.reload();
});

export default i18n;
