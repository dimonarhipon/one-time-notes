import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalButton.module.scss';

export const ModalButton = ({ children, callback }: TModalProps) => {
	return (
		<button className={styles.modal_button} onClick={callback}>
			{children}
		</button>
	);
};
