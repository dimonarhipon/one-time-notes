import styles from './PopupLang.module.scss';

type TPopupLang = {
	open: boolean;
};

export const PopupLang = ({ open }: TPopupLang) => {
	return (
		<dialog className={styles.popup} open={open}>
			<div className={styles.title}>
				Выберите язык
			</div>
			<ul className={styles.list}>
				<li className={`${styles.listItem} ${styles.active}`}>
					<button className={`${styles.button}`}>
						Русский язык
					</button>
				</li>
				<li className={styles.listItem}>
					<button className={`${styles.button}`}>
						English language
					</button>
				</li>
			</ul>
		</dialog>
	);
};
