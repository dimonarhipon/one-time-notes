import Form from '@/widgets/Form/Form';
import { useState } from 'react';
import type { TInput, TInputValues } from '@/shared/Types/AuthTypes';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from?.pathname || '/';
	const REGISTER_URL = 'https://63fdd8c4cd13ced3d7c02d2a.mockapi.io/t/User';
	const USER_REGEX = /^[A-Za-z0-9]{3,16}$/;
	const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
	const errorMessages = {
		valuesError: 'Введенные данные не верны',
		serverError: 'No Server Response',
		usernameTakenError: 'Username Taken',
		registrationError: 'Registration Failed',
	};

	const [InputValues, setInputValues] = useState<TInputValues>({
		username: localStorage.getItem('username') || '',
		password: localStorage.getItem('password') || '',
		confirmPassword: localStorage.getItem('confirmPassword') || '',
	});

	const FormProps = {
		buttonText: 'Зарегистрироваться',
		linkTo: '/one-time-notes/login',
		pText: 'Войти',
	};
	const emailconfirm = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	const InputProps: Array<TInput> = [
		{
			id: 1,
			name: 'username',
			type: 'text',
			placeholder: 'Username',
			errorMessage:
				'Имя пользователя должно состоять из 3-16 символов и не должно содержать никаких специальных знаков!',
			label: 'Username',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: true,
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			placeholder: 'Email',
			errorMessage: '!!!!!',
			label: 'Email',
			pattern: new RegExp(`^${emailconfirm}$`),
			required: true,
		},
		{
			id: 3,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			errorMessage:
				'Пароль должен состоять из 8-20 символов и включать как минимум 1 букву, 1 цифру и 1 специальный знак!',
			label: 'Password',
			pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
			required: true,
		},
		{
			id: 4,
			name: 'confirmPassword',
			type: 'password',
			placeholder: 'Confirm Password',
			errorMessage: 'Пароли не совпадают!',
			label: 'Confirm Password',
			pattern: new RegExp(`^${InputValues.password}$`), // Используем RegExp для создания паттерна
			required: true,
		},
	];

	const onFormSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault();

		const firstCheck = USER_REGEX.test(InputValues.username);
		const secondCheck = PASSWORD_REGEX.test(InputValues.password);

		if (!firstCheck || !secondCheck) {
			alert(errorMessages.valuesError);
			return;
		}
		try {
			axios
				.post(REGISTER_URL, InputValues)
				.then((response) => {
					const token = response.data.token;
					localStorage.setItem('token', token);
					navigate(fromPage); // Используем navigate для перенаправления
				})
				.catch((error) => {
					alert(`Ошибка регистрации: ${error}`);
				});
		} catch (err) {
			if (err) {
				alert('No Server Response');
			}
		}
	};

	return (
		<div>
			<Form
				onSubmit={onFormSubmit}
				InputProps={InputProps}
				InputValues={InputValues}
				setInputValues={setInputValues}
				buttonText={FormProps.buttonText}
				linkTo={FormProps.linkTo}
				pText={FormProps.pText}
			/>
		</div>
	);
};

export default Register;
