import { useState } from 'react';
import styles from '../../app/styles/Registration.module.scss';
import FormInput from './FormInput';

export const AuthorizationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.container}>
            <form className={styles.registrationForm}>
                <FormInput 
                    name='username' 
                    type='text' 
                    placeholder='Логин'
                    setInputParam={setUsername}
                />
                <FormInput 
                    name='password'  
                    type='password' 
                    placeholder='Пароль'
                    setInputParam={setPassword}
                />
                <button className={styles.formButton} type='submit'>Регистрация</button>
                <button className={styles.formButton} type='submit'>Войти</button>
            </form>
        </div>
    );
};

