import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalLink.module.scss';

export const ModalLink = ({ children, callback, path }: TModalProps) => {
	return (
		<a className={styles.modalLink} onClick={callback} href={path}>
			{children}
		</a>
	);
};
