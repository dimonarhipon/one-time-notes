import { useState } from 'react';
import { SvgIcon } from '@/shared/SvgIcon';
import { IconName } from '@/shared/contants';
import styles from './SelectLang.module.scss';
import { PopupLang } from '../PopupLang/PopupLang';

const LABEL_LANGUAGE = 'Выбрать язык из списка';

export const SelectLang = () => {
	const [popupStatus , setStatusPopup] = useState<boolean>(false);

	return (
		<div className={styles.wrap}>
			<button
				className={styles.button}
				aria-label={LABEL_LANGUAGE}
				onClick={() => setStatusPopup(!popupStatus)}
			>
				<SvgIcon name={IconName.Translate} width='24' height='24' className={styles.langIcon}  />
			</button>

			<PopupLang open={popupStatus} />
		</div>
	);
};
