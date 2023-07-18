import styles from './SmallLink.module.scss';

type ButtonProps = {
	callback: () => void;
	children: React.ReactNode;
};

export const SmallLink = ({ children, callback }: ButtonProps) => {
	return (
		<a className={styles.small_link} onClick={callback}>
			{children}
		</a>
	);
};
