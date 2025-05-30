import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import english from './en/translation.json'
import japanese from './ja/translation.json'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next.use(initReactI18next).use(LanguageDetector).init({
    debug: false,
    resources: {
        en: {
            translation: english
        },
        ja: {
            translation: japanese
        }

    },
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
})

export default i18next
