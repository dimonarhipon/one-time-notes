import styles from './PasswordSecurity.module.scss'; // Подключение стилей

type TPasswordSecurityProps = {
    password: string | undefined;
};

const PasswordSecurity: React.FC<TPasswordSecurityProps> = ({ password }) => {
    const pass = password || '';
    let strength = 0;
    const regexArr = [/.{6,}/, /[a-z]+/, /[0-9]+/, /[A-Z]+/, /[!@#$%^&*]+/];

    regexArr.forEach((regexp) => {
        if (pass.match(regexp)) {
            strength++;
        }
    });

    return (
        <>
            <meter value={strength} max={5} low={4} optimum={5}  className={styles.passwordMeter}></meter>
        </>
    );
};

export default PasswordSecurity;
