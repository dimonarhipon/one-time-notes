import { IconCopy } from '@/shared/assets/icons';

import styles from './ButtonCopy.module.scss';

const ButtonCopy = ({copyToClick}) => {
	return (
		<button className={styles.buttonCopy} onClick={(event) => copyToClick(event.target.textContent)}>
			<IconCopy/>
		</button>
	);
};

export default ButtonCopy;
