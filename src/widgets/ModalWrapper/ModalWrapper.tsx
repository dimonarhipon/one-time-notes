import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ModalWrapper.module.scss';

export const ModalWrapper = ({children} : TModalProps) => {
    return <div className={styles.modal_wrapper}>
        {children}
    </div>;
};