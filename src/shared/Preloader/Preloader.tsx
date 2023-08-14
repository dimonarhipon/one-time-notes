import styles from './Preloader.module.scss';

const Preloader = () => {
	return (
		<div className={styles.preloader}>
			{/* Временный лоадер */}
			<div className={styles.loader}></div>
		</div>
	);
};

export default Preloader;
