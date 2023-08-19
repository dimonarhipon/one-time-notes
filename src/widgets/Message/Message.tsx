import styles from './Message.module.scss';

type MessageProps = {
	children: string | React.ReactNode, title?: string
};

export const Message = ({ children, title }: MessageProps ) => {
	return <div className={styles.messege}>
		<div className={styles.messegeTitle}>{title}</div>
		<div className={styles.messegeContent}>{children}</div>
	</div>;
};

