import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './Message.module.scss';

export const Message = ({ children }: TModalProps) => {
	return <div className={styles.scrollContainer}>{children}</div>;
};

//TODO  Доделать отображение абзацей
