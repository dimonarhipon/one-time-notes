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
          'h1': 'One time notes',
					'h2': 'My notes',
					'сhooseLang': 'Choose language',
					'placeholderSearch': 'Find note...',
					'noNotes': 'No notes yet',
					'noSearch': 'The search has not given any results',
					'filterDate': 'Date',
					'filterColor': 'Color',
					'placeholderTextarea': 'Write your secret here...'
        }
      },
			ru: {
				translation: {
					'h1': 'Одноразовые заметки',
					'h2': 'Мои заметки',
					'сhooseLang': 'Выберите язык',
					'placeholderSearch': 'Найти заметку...',
					'noNotes': 'Заметок пока нет',
					'noSearch': 'Поиск не дал результатов',
					'filterDate': 'По дате',
					'filterColor': 'По цвету',
					'placeholderTextarea': 'Напиши свой секрет здесь...'
				}
			}
    }
  });

export default i18n;
