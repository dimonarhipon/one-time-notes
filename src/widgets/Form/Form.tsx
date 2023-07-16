import { IForm } from '../../shared/Types/AuthTypes';
import Input from '../Input/Input';
import styles from './Form.module.scss';
import { Link } from 'react-router-dom';

const Form: React.FC<IForm> = ({ InputProps, InputValues, setInputValues, buttonText, linkTo, pText }) => {

    const onUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({ ...InputValues, [event.target.name]: event.target.value });
        localStorage.setItem(event.target.name, event.target.value);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                {InputProps.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        value={InputValues[input.name]}
                        onChange={onUserChange}
                    />
                ))}
                <button className={styles.button}>{buttonText}</button>
                <p>
                    <Link to={linkTo}>{pText}</Link>
                </p>
            </form>
        </div>
    );
};

export default Form;