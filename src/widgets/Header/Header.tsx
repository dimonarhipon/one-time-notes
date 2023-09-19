import styles from './Header.module.scss';
import { SwitchTheme } from '../SwitchTheme/SwitchTheme';
import { SelectLang } from '../SelectLang/SelectLang';
import { useTranslation } from 'react-i18next';

type THeaderProps = {
	className?: string;
};

const Header = ({ className }: THeaderProps) => {
  const { t } = useTranslation();

	return (
		<header className={`${styles.header} ${className}`} role='banner'>
			<h1 className={styles.title}>{t('h1')}</h1>

			<div className={styles.appControl}>
				<SwitchTheme />
				<SelectLang />
			</div>
		</header>
	);
};

export default Header;
