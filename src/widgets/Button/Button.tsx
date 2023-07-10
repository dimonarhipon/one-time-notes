import styles from './button.module.scss';

const Button = () => {
    return (
        <button
            className={styles.button}
            onClick={() => console.log('created')}
        >
            Создать
        </button>
    )
}

export default Button;