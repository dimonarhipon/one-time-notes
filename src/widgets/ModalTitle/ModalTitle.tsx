import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalTitle.module.scss';

export const ModalTitle = ({ children }: TModalProps) => {
	return <div className={styles.modalTitle}>{children}</div>;
};
