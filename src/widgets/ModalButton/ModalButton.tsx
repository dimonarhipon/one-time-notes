import { ModalProps } from '@/shared/lib/ModalProps';
import styles from './ModalButton.module.scss';

export const ModalButton = ({ children, callback }: ModalProps) => {
    return <button className={styles.btn} onClick={callback}>
        {children}
    </button>;
};