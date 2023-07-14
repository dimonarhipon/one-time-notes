import Form from '../../widgets/Form/Form';
import { useState } from 'react';
import { IInput } from '../../shared/Types/AuthTypes';

const Register = () => {

    const [InputValues, setInputValues] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const InputProps: Array<IInput> = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Имя пользователя должно состоять из 3-16 символов и не должно содержать никаких специальных знаков!',
            label: 'Username',
            pattern: '^[A-Za-z0-9]{3,16}$',
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
        {
            id: 3,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: 'Пароли не совпадают!',
            label: 'Confirm Password',
            pattern: InputValues.password,
            required: true,
        },
    ];

    return (
        <div>
            <Form
                InputProps={InputProps}
                InputValues={InputValues}
                setInputValues={setInputValues}
                buttonText='Зарегистрироваться'
                linkTo='/login'
                pText='Войти'
            />
        </div>
    );
};

export default Register;