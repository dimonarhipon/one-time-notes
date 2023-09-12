import styles from './Header.module.scss';
import { SvgIcon } from '@/shared/SvgIcon';
import { IconName, Theme } from '@/shared/contants';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';

const H1_NAME = 'Одноразовые заметки';
const LABEL_LANGUAGE = 'Выбрать язык из списка';

type THeaderProps = {
	className?: string;
};

const Header = ({ className }: THeaderProps) => {
	return (
		<header className={`${styles.header} ${className}`} role='banner'>
			<h1 className={styles.title}>{H1_NAME}</h1>

			<div className={styles.appControl}>
				<SwitchTheme />
				<button className={styles.button} aria-label={LABEL_LANGUAGE}>
					<SvgIcon name={IconName.Translate} width='24' height='24' className={styles.langIcon}  />
				</button>
			</div>
		</header>
	);
};

export default Header;
