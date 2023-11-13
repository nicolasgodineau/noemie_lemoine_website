import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import FR from "./fr.json"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Vos traductions en anglais
      },
    },
    fr: {
      translation: FR,
    },
  },
  lng: "fr", // Langue par défaut
  fallbackLng: "en", // Langue de secours
  interpolation: {
    escapeValue: false, // Pas besoin d'échapper les valeurs
  },
})

export default i18n
