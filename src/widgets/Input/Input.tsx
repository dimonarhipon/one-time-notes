import { useState } from 'react';
import styles from './Input.module.scss';
import type { TInput } from '@/shared/Types/AuthTypes';
import { IconEye, IconEyeSlash } from '@/shared/assets/icons';

const Input: React.FC<TInput> = ({id, label, errorMessage, onChange, type, pattern, ...inputProps }) => {
    
    const [typeInput, setTypeInput] = useState(type);
    const [focused, setFocused] = useState(false);

    const onInputFocus = () => {
        setFocused(true);
    };

    const onInputBlur = () => {
        setFocused(false);
    };

    const onHidePassword = () => {
        setTypeInput(prevType => prevType === 'password' ? 'text' : 'password');
    };

    const inputAttrs = {
        id: id.toString(),
        onChange,
        onFocus: onInputFocus,
        onBlur: onInputBlur,
        type: typeInput,
        pattern: pattern instanceof RegExp ? pattern.source : pattern,
        focused: focused.toString(),
        ...inputProps, // Включаем остальные свойства
    };

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}
                <input
                    className={styles.input}
                    {...inputAttrs}
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
