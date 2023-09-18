import styles from './Header.module.scss';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';
import { SelectLang } from '../SelectLang/SelectLang';

const H1_NAME = 'Одноразовые заметки';

type THeaderProps = {
	className?: string;
};

const Header = ({ className }: THeaderProps) => {
	return (
		<header className={`${styles.header} ${className}`} role='banner'>
			<h1 className={styles.title}>{H1_NAME}</h1>

			<div className={styles.appControl}>
				<SwitchTheme />
				<SelectLang />
			</div>
		</header>
	);
};

export default Header;
