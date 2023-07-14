import styles from './ButtonCreate.module.scss';

const ButtonCreate = ({ props }) => {
	return <button className={styles.button}>{props}</button>;
};

export default ButtonCreate;
