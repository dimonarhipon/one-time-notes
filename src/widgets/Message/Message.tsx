import styles from './Message.module.scss';

export const Message = ({ children, title }: { children: string | React.ReactNode, title?: string }) => {
	return <div className={styles.messege}>
		<div className={styles.messegeTitle}>{title}</div>
		<div className={styles.messegeContent}>{children}</div>
	</div>;
};

