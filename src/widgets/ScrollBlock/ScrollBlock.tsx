import { ModalProps } from '@/shared/lib/ModalProps';
import styles from './ScrollBlock.module.scss';

export const ScrollBlock = ({ children }: ModalProps) => {
    return <div className={styles.scroll}>
        {children}
    </div>;
};

//TODO  Доделать отображение абзацей 