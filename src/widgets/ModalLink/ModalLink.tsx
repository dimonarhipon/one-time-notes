import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalLink.module.scss';

export const ModalLink = ({ children, callback }: TModalProps) => {
	return (
		<a className={styles.modalLink} onClick={callback}>
			{children}
		</a>
	);
};
