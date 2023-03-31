import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslation from './locales/en/enTranslation.json';
import bgTranslation from './locales/bg/bgTranslation.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    bg: {
        translation: bgTranslation,
    },
};

const browserLanguage = navigator.language.slice(0, 2);

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
