import { useState } from 'react';
import styles from './Input.module.scss';
import { IInput } from '../../shared/Types/AuthTypes';

const Input: React.FC<IInput> = ({ label, errorMessage, onChange, type, ...inputProps }) => {

    const imgPath= {
        eye: '/eye.svg',
        eyeSlash: '/eyeslash.svg',
    };
    const [typeInput, setTypeInput] = useState(type);
    const [focused, setFocused] = useState(false);

    const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
    };

    const hidePassword = () => {
        typeInput === 'password' ? setTypeInput('text') : setTypeInput('password');
    };

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                {...inputProps}
                onChange={onChange}
                onBlur={onFocus}
                type={typeInput}
                onFocus={() =>
                    inputProps.name === 'confirmPassword' && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className={styles.span}>{errorMessage}</span>
            {type === 'password' && <div onClick={hidePassword} className={styles.passwordHide}><img src={typeInput === 'password' ? imgPath.eye : imgPath.eyeSlash} alt='eyePassword' /></div>}
        </div>
    );
};

export default Input;