import styles from './Message.module.scss';

type TMessageProps = {
	children: string | React.ReactNode, title?: string
};

export const Message = ({ children, title }: TMessageProps ) => {
	return <div className={styles.messege}>
		<div className={styles.messegeTitle}>{title}</div>
		<div className={styles.messegeContent}>{children}</div>
	</div>;
};

