import styles from './Header.module.scss';
import { SvgIcon } from '@/shared/SvgIcon';
import { useState } from 'react';
import { IconName, Theme } from '@/shared/contants';

const H1_NAME = 'Одноразовые заметки';
const LABEL_THEME = 'Переключить тему';
const LABEL_LANGUAGE = 'Выбрать язык из списка';

type THeaderProps = {
	className?: string;
};

const Header = ({ className }: THeaderProps) => {
	const [darkTheme, setDarkTheme] = useState<boolean>(true);
	return (
		<header className={`${styles.header} ${className}`} role='banner'>
			<h1 className={styles.title}>{H1_NAME}</h1>

			<div className={styles.appControl}>
				<button className={styles.button} aria-label={LABEL_THEME} onClick={() => setDarkTheme(!darkTheme)}>
					<SvgIcon name={darkTheme ? IconName.ThemeLight : IconName.ThemeDark} width='31' height='31' />
				</button>
				<button className={styles.button} aria-label={LABEL_LANGUAGE}>
					<SvgIcon name='translate' width='31' height='31' stroke={Theme.Light} />
				</button>
			</div>
		</header>
	);
};

export default Header;
