import { useState } from 'react';
import styles from './AuthorizationWidget.module.scss';
import FormInput from './FormInput';

export const AuthorizationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [validForm, setValidForm] = useState({
        username: true,
        password: true,
    });

    const erorrMessage = {
        username: 'Логин должен содержать только латинские символы и быть не короче 3 символов',
        password: 'Пароль должен содержать латинские символы и быть не короче 5 символов'
    };

    const isValidForm = (formValue: string, validPattern: RegExp, formName: string) => {

        validPattern.test(formValue) ? setValidForm({ ...validForm, [formName]: true }) : setValidForm({ ...validForm, [formName]: false });
        console.log(validForm);
    };

    const passwordHide = () => {
        if (type === 'password') {
            setType('text');
        } else {
            setType('password');
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <FormInput
                    name='username'
                    type='text'
                    placeholder='Логин'
                    setInputParam={setUsername}
                    isValidForm={isValidForm}
                />
                {!validForm.username && <p className={styles.validErorr}>{erorrMessage.username}</p>}
                <FormInput
                    name='password'
                    type={type}
                    placeholder='Пароль'
                    setInputParam={setPassword}
                    isValidForm={isValidForm}
                    passwordHide={passwordHide}
                />
                {!validForm.password && <p className={styles.validErorr}>{erorrMessage.password}</p>}
                <button className={styles.button} type='submit' disabled={!validForm.username || !validForm.password || !username || !password}>Регистрация</button>
                <button className={styles.button} type='submit'>Войти</button>
            </form>
        </div>
    );
};

