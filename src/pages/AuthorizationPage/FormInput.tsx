import styles from './AuthorizationPage.module.scss';
import { inputFormTypes } from './type';

type ValidPattern = {
	[key: string]: RegExp;
};

const validPattern: ValidPattern = {
	username: /^[A-Za-z0-9]{3,16}$/,
	password: /^[A-Za-z0-9]{5,200}$/,
};

const FormInput = (props: inputFormTypes) => {
	return (
		<div className={styles.inputWrapper}>
			<input
				className={styles.input}
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
				onChange={(event) => props.setInputParam(event.target.value)}
				onBlur={(event: React.ChangeEvent<HTMLInputElement>) =>
					props.isValidForm(event.target.value, validPattern[props.name] || /^$/, props.name)
				}
			/>
			{props.name === 'password' && (
				<div onClick={props.passwordHide} className={styles.passwordHide}>
					{props.eyeImg}
				</div>
			)}
		</div>
	);
};

export default FormInput;
