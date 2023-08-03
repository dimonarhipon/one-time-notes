import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalTitle.module.scss';
import { Status } from '@/shared/lib/EnumStatus';

export const ModalTitle = ({ noteState }: TModalProps) => {
	const getModalTitle = () => {
		switch (noteState){
			case Status.Get:
				return 'Заметка получена';
			case Status.Open:
				return 'Заметка будет удалена';
			case Status.Delete:
				return 'Заметка удалена';
		}
	};
		return <div className={styles.modalTitle}>
			{getModalTitle()}
		</div>;
	};
