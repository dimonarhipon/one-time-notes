import { useState } from 'react';
import styles from './Input.module.scss';
import type { TInput } from '@/shared/Types/AuthTypes';
import { SvgIcon } from '@/shared/SvgIcon';
import { IconName } from '@/shared/contants';

const enum InputType {
	Text = 'text',
	Password = 'password'
}

const enum PasswordText {
	Show = 'показать пароль',
	Hidden = 'скрыть пароль'
}

const Input: React.FC<TInput> = ({
	id,
	label,
	errorMessage,
	onChange,
	type,
	pattern,
	...inputProps
}) => {
	const [typeInput, setTypeInput] = useState(type);
	const [focused, setFocused] = useState(false);

	const onInputFocus = () => {
		setFocused(true);
	};

	const onInputBlur = () => {
		setFocused(false);
	};

	const onHidePassword = () => {
		setTypeInput((prevType) => (prevType === InputType.Password ? InputType.Text : InputType.Password));
	};

	const inputAttrs = {
		id: id.toString(),
		onChange,
		onFocus: onInputFocus,
		onBlur: onInputBlur,
		type: typeInput,
		pattern: pattern instanceof RegExp ? pattern.source : pattern,
		focused: focused.toString(),
		...inputProps, // Включаем остальные свойства
	};

	return (
		<div className={styles.inputWrapper}>
			<label className={styles.label}>
				{label}
				<input className={styles.input} {...inputAttrs} />
				<p className={styles.error}>{errorMessage}</p>
			</label>

			{type === InputType.Password && (
				<button onClick={onHidePassword} className={styles.passwordHide}>
					<SvgIcon
						width='24'
						height='24'
						name={typeInput === InputType.Password ? IconName.Eye : IconName.EyeSlash}
						ariaLabel={typeInput === InputType.Password ? PasswordText.Show : PasswordText.Hidden} />
				</button>
			)}
		</div>
	);
};

export default Input;
