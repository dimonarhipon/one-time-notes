import styles from './AddButton.module.scss';
import addIcon from './img/addNote.svg';

type AddButtonProps = {
	addNote: () => void;
};

const AddButton = ({ addNote }: AddButtonProps) => {
	const altAddImg = 'Добавить заметку';

	return (
		<div className={styles.add} onClick={addNote}>
			<img src={addIcon} alt={altAddImg} />
		</div>
	);
};

export default AddButton;
