import { SvgIcon } from '@/shared/SvgIcon';
import { IconName } from '@/shared/contants';
import styles from './SelectLang.module.scss';

const LABEL_LANGUAGE = 'Выбрать язык из списка';

export const SelectLang = () => {
	return (
		<button className={styles.button} aria-label={LABEL_LANGUAGE}>
			<SvgIcon name={IconName.Translate} width='24' height='24' className={styles.langIcon}  />
		</button>
	);
};
