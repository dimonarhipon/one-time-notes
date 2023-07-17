import { ModalProps } from '@/shared/lib/ModalProps';
import styles from './ModalTitle.module.scss';

export const ModalTitle = ({ children }: ModalProps) => {
    return <div className={styles.title}>
        {children}
    </div>;
};