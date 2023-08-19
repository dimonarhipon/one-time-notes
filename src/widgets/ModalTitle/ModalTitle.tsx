import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalTitle.module.scss';

const titleContent = {
	'get': 'Заметка получена',
	'open': 'Заметка будет удалена',
	'delete': 'Заметка удалена',
};

export const ModalTitle = ({ noteState }: TModalProps) => {
	const getModalTitle = () => {
		return noteState ? titleContent[noteState] : '' ;
	};
	return <div className={styles.modalTitle}>
		{getModalTitle()}
	</div>;
};
