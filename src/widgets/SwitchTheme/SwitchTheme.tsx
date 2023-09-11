import { useTheme } from './utils';
import { SvgIcon } from '@/shared/SvgIcon';
import { IconName } from '@/shared/contants';
import styles from './SwitchTheme.module.scss';

const LABEL_THEME = 'Переключить тему';

export const SwitchTheme = () => {
	const {theme, setTheme} = useTheme();

	const currentTheme = (theme: string) => {
		switch(theme) {
			case (IconName.ThemeLight):
				return IconName.ThemeDark;
			case (IconName.ThemeDark):
				return IconName.ThemeLight;
			default:
				IconName.ThemeDark;
		}
	};

	const onSwithThemeClick = () => {
		const newTheme = theme === IconName.ThemeLight ? IconName.ThemeDark : IconName.ThemeLight;
		setTheme(newTheme);
	};

	return (
		<button className={styles.button} aria-label={LABEL_THEME} onClick={onSwithThemeClick}>
			<SvgIcon name={currentTheme(theme)} width='24' height='24' />
		</button>
	);
};
