import styles from './Registration.module.scss';
import { inputFormTypes } from './type';

const validPattern = {
    username: /^[A-Za-z0-9]{3,16}$/,
    password: /^[A-Za-z0-9]{5,200}$/,
};

const FormInput = (props: inputFormTypes) => {

    // const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     props.setInputParam(e.target.value);
    //     props.isValidForm(e.target.value, validPattern[props.name])
    // };

    return (
        <div>
            <input 
                className={styles.fromInput} 
                name={props.name} 
                type={props.type} 
                placeholder={props.placeholder}
                onChange={(e) => props.setInputParam(e.target.value)}
                onBlur={(e:React.ChangeEvent<HTMLInputElement>) => props.isValidForm(e.target.value, validPattern[props.name], props.name)}
            />
        </div>
    );
};

export default FormInput;