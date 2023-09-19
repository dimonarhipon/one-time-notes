import styles from './PopupLang.module.scss';
import { useTranslation } from 'react-i18next';

type TPopupLang = {
	open: boolean;
};

enum Lang {
	RU = 'ru',
	EN = 'en'
}

export const PopupLang = ({ open }: TPopupLang) => {
  const { i18n } = useTranslation();

	const onSwitchLangClick = (language: string) => {
    i18n.changeLanguage(language);
  };
	return (
		<dialog className={styles.popup} open={open}>
			<div className={styles.title}>
				Выберите язык
			</div>
			<ul className={styles.list}>
				<li className={`${styles.listItem}`}>
					<button className={`${styles.button} ${i18n.language === Lang.RU ? styles.active: ''}`} onClick={() => onSwitchLangClick(Lang.RU)}>
						Русский язык
					</button>
				</li>
				<li className={styles.listItem}>
					<button className={`${styles.button} ${i18n.language === Lang.EN ? styles.active: ''}`} onClick={() => onSwitchLangClick(Lang.EN)}>
						English language
					</button>
				</li>
			</ul>
		</dialog>
	);
};
