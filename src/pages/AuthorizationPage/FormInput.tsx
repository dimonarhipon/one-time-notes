import styles from '../../app/styles/Registration.module.scss';
import { inputFormTypes } from './type';

const FormInput = (props: inputFormTypes) => {
    return (
        <div>
            <input 
                className={styles.fromInput} 
                name={props.name} 
                type={props.type} 
                placeholder={props.placeholder}
                onChange={e => props.setInputParam(e.target.value)}
            />
        </div>
    );
};

export default FormInput;