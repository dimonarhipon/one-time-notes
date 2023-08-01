import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalTemplate.module.scss';

export const ModalTemplate = ({ active, children }: TModalProps) => {
	return (
		<div className={active ? `${styles.modal} ${styles.modalActive}` : styles.modal}>
			<div className={styles.modalContent}>{children}</div>
		</div>
	);
};
