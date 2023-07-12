import styles from './Authorization.module.scss';
import { inputFormTypes } from './type';

const validPattern = {
    username: /^[A-Za-z0-9]{3,16}$/,
    password: /^[A-Za-z0-9]{5,200}$/,
};


const FormInput = (props: inputFormTypes) => {

    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.input}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={(event) => props.setInputParam(event.target.value)}
                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => props.isValidForm(event.target.value, validPattern[props.name], props.name)}
            />
            {props.name === 'password' && <div onClick={props.passwordHide} className={styles.passwordHide}><img src={props.eyeImg} alt='eyePassword' /></div>}
        </div>
    );
};

export default FormInput;