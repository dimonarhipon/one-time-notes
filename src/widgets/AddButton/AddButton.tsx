import styles from './AddButton.module.scss';
import addIcon from './img/addNote.svg';

type AddButtonProps = {
	callback: () => void;
};

const AddButton = ({ callback }: AddButtonProps) => {
	const altAddImg = 'Добавить заметку';

	return (
		<div className={styles.add} onClick={callback}>
			<img src={addIcon} alt={altAddImg} />
		</div>
	);
};

export default AddButton;
