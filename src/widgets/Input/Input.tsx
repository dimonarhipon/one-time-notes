import { useState } from 'react';
import styles from './Input.module.scss';
import { IInput } from '../../shared/Types/AuthTypes';

const Input: React.FC<IInput> = ({ label, errorMessage, onChange, ...inputProps }) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
    };

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.input}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === 'confirmPassword' && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span className={styles.span}>{errorMessage}</span>
        </div>
    );
};

export default Input;