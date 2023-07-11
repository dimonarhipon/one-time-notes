import { useState } from 'react';
import styles from './Registration.module.scss';
import FormInput from './FormInput';

export const AuthorizationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validForm, setValidForm] = useState({
        username: true,
        password: true,
    });
    
    const isValidForm = (formValue:string , validPattern:RegExp, formName: string) => {

        validPattern.test(formValue) ? setValidForm({...validForm, [formName]: true}) : setValidForm({...validForm, [formName]: false});
        console.log(validForm);
    };

    return (
        <div className={styles.container}>
            <form className={styles.registrationForm}>
                <FormInput 
                    name='username' 
                    type='text' 
                    placeholder='Логин'
                    setInputParam={setUsername}
                    isValidForm={isValidForm}
                />
                {!validForm.username && <span className={styles.validErorrSpan}>Логин должен содержать только латинские символы и быть не короче 3 символов</span>  }
                <FormInput 
                    name='password'  
                    type='password' 
                    placeholder='Пароль'
                    setInputParam={setPassword}
                    isValidForm={isValidForm}
                />
                {!validForm.password && <span className={styles.validErorrSpan}>Пароль должен содержать латинские символы и быть не короче 5 символов</span> }
                <button className={styles.formButton} type='button'>Регистрация</button>
                <button className={styles.formButton} type='submit'>Войти</button>
            </form>
        </div>
    );
};

