import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'ru',
		detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          'h1': 'One time notes'
        }
      },
			ru: {
				translation: {
					'h1': 'Одноразовые заметки'
				}
			}
    }
  });

export default i18n;
