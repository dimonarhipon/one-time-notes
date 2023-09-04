import { IconClose } from '@/shared/assets/icons';

import styles from './ButtonClose.module.scss';

const ButtonClose = () => {
	return (
		<button className={styles.buttonClose}>
			<IconClose/>
		</button>
	);
};

export default ButtonClose;
