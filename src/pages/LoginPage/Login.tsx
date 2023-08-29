import { useState } from 'react';
import Form from '@/widgets/Form/Form';
import type { TInput } from '@/shared/Types/AuthTypes';

const Login = () => {

    const InputProps: Array<TInput> = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Имя пользователя должно состоять из 3-20 символов и не должно содержать никаких специальных знаков!',
            label: 'Username',
            pattern: '^[A-Za-z0-9]{3,20}$',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Пароль должен состоять из 8-20 символов и включать как минимум 1 букву, 1 цифру и 1 специальный знак!',
            label: 'Password',
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true,
        },
    ];

    const FormProps = {
        buttonText: 'Войти',
        linkTo: '/one-time-notes/register',
        pText: 'Зарегистрируйтесь'
    };

    const [inputValues, setInputValues] = useState({
            username: localStorage.getItem('username') || '',
            password: localStorage.getItem('password') || '',
    });


    return (
        <Form
            InputProps={InputProps}
            InputValues={inputValues}
            setInputValues={setInputValues}
            buttonText={FormProps.buttonText}
            linkTo={FormProps.linkTo}
            pText={FormProps.pText}
        />
    );
};

export default Login;
