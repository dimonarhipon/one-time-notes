import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalWrapper.module.scss';

export const ModalWrapper = ({ children, active }: TModalProps) => {
    return <div className={active ? `${styles.modalWrapper} ${styles.wrapperActive}` : styles.modalWrapper}>
        <div className={styles.displayBlock}>
            {children}
        </div>
    </div>;
};