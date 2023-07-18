import { TModalProps } from '@/shared/lib/TModalProps';
import styles from './ScrollBlock.module.scss';

export const ScrollBlock = ({ children }: TModalProps) => {
    return <div className={styles.scroll_container}>
        {children}
    </div>;
};

//TODO  Доделать отображение абзацей 