import styles from './Header.module.scss';
import { IconTheme, IconLang } from '../../shared/assets/icons';

const H1_NAME = 'Одноразовые заметки';
const LABEL_THEME = 'Переключить тему';
const LABEL_LANGUAGE = 'Выбрать язык из списка';

type THeaderProps = {
	className?: string;
};

const Header = ({ className }: THeaderProps) => {
	return (
		<header className={`${styles.header} ${className}`} role='banner'>
			<h1 className={styles.title}>{H1_NAME}</h1>

			<div className={styles.appControl}>
				<button className={styles.button} aria-label={LABEL_THEME}>
					<IconTheme />
				</button>
				<button className={styles.button} aria-label={LABEL_LANGUAGE}>
					<IconLang />
				</button>
			</div>
		</header>
	);
};

export default Header;
