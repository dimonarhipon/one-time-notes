import styles from './ButtonCreate.module.scss';

type TButtonCreate = {
	text: string;
};

const ButtonCreate = ({ text }: TButtonCreate) => {
	return <button className={styles.button}>{text}</button>;
};

export default ButtonCreate;


