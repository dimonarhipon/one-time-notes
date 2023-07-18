import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalTemplate.module.scss';

export const ModalTemplate = ({ active, children }: TModalProps) => {

    return <div className={active ? `${styles.modal} ${styles.modal_active}` : `${styles.modal} `}>
        <div className={styles.modal_content}>
            {children}
        </div>
    </div>;
};