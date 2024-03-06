import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import PT from './translation/pt/pt.json'
import RU from './translation/ru/ru.json'
import EN from './translation/en/en.json'

const resources = {
    pt: {
        translation: PT,
    },
    ru: {
        translation: RU,
    },
    en:{
       translation:EN,
    }
}

await i18next.use(initReactI18next).init({
    resources,
    lng: 'pt',
    fallbackLng:['ru']
});

export default i18next
