import styles from './Loader.module.scss';

type TLoaderProps = {
	isDark?: boolean;
};

export const Loader = ({ isDark = false }: TLoaderProps) => {
	const modificator = isDark ? styles.loaderDark : styles.loaderWhite;

	return (
		<div className={styles.preloader}>
			<div className={`${styles.loader} ${modificator}`}></div>
		</div>
	);
};
