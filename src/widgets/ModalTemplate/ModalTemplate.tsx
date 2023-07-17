import { ModalProps } from '@/shared/lib/ModalProps';
import styles from './ModalTemplate.module.scss';

export const ModalTemplate = ({ active, children }: ModalProps) => {

    return <div className={active ? `${styles.modal} ${styles.modal_active}` : `${styles.modal} `}>
        <div className={styles.modal_content}>
            {children}
        </div>
    </div>;
};