import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalTemplate.module.scss';

export const ModalTemplate = ({ children }: TModalProps) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>{children}</div>
		</div>
	);
};
