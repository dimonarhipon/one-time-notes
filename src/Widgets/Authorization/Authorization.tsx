import { useState } from 'react';
import styles from './Authorization.module.scss';
import FormInput from './FormInput';

export const AuthorizationPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [type, setType] = useState('password');
	const [validForm, setValidForm] = useState({
		username: true,
		password: true,
	});
	const forms = {
		username: {
			name: 'login',
			placeholder: 'Логин',
			type: 'text',
		},
		password: {
			name: 'password',
			placeholder: 'Пароль',
			type: 'password',
		},
	};
	const eyeImg = {
		eye: '/eye.svg',
		eyeSlash: '/eyeslash.svg',
	};

	const erorrMessage = {
		username: 'Логин должен содержать только латинские символы и быть не короче 3 символов',
		password: 'Пароль должен содержать латинские символы и быть не короче 5 символов',
	};

	const isValidForm = (formValue: string, validPattern: RegExp, formName: string) => {
		validPattern.test(formValue)
			? setValidForm({ ...validForm, [formName]: true })
			: setValidForm({ ...validForm, [formName]: false });
	};

	const passwordHide = () => {
		type === 'password' ? setType('text') : setType('password');
	};

	const buttonIsDisabled = () => {
		return !validForm.username || !validForm.password || !username || !password ? true : false;
	};

	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<FormInput
					name={forms.username.name}
					type={forms.username.type}
					placeholder={forms.username.placeholder}
					setInputParam={setUsername}
					isValidForm={isValidForm}
				/>
				{!validForm.username && <p className={styles.validErorr}>{erorrMessage.username}</p>}
				<FormInput
					name={forms.password.name}
					type={type}
					placeholder={forms.password.placeholder}
					setInputParam={setPassword}
					isValidForm={isValidForm}
					passwordHide={passwordHide}
					eyeImg={type === 'password' ? eyeImg.eye : eyeImg.eyeSlash}
				/>
				{!validForm.password && <p className={styles.validErorr}>{erorrMessage.password}</p>}
				<button className={styles.button} type='submit' disabled={buttonIsDisabled()}>
					Регистрация
				</button>
				<button className={styles.button} type='submit' disabled={buttonIsDisabled()}>
					Войти
				</button>
			</form>
		</div>
	);
};
