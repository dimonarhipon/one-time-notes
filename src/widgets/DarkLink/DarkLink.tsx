import styles from './DarkLink.module.scss';

type ButtonProps = {
    callback: () => void,
    children: React.ReactNode,
};

export const DarkLink = ({ children, callback }: ButtonProps) => {
    return <a className={styles.darklink} onClick={callback}>
        {children}
    </a>;
};