import { useState } from 'react';
import styles from './Input.module.scss';
import type { TInput } from '@/shared/Types/AuthTypes';
import { IconEye, IconEyeSlash } from '@/shared/assets/icons';

const Input: React.FC<TInput> = ({ label, errorMessage, onChange, type, ...inputProps }) => {
    
    const [typeInput, setTypeInput] = useState(type);
    const [focused, setFocused] = useState(false);

    const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
    };

    const onHidePassword = () => {
        typeInput === 'password' ? setTypeInput('text') : setTypeInput('password');
    };


    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}
                <input
                    className={styles.input}
                    {...inputProps}
                    onChange={onChange}
                    onBlur={onInputFocus}
                    type={typeInput}
                    onFocus={() =>inputProps.name === 'confirmPassword' && setFocused(true)
                    }
                    focused={focused.toString()}
                />
                <p className={styles.error}>{errorMessage}</p>
            </label>
            
            {type === 'password' && 
                <div 
                    onClick={onHidePassword} 
                    className={styles.passwordHide}>
                    {typeInput === 'password' ? <IconEye /> : <IconEyeSlash/>} 
                </div>
            }
        </div>
    );
};

export default Input;