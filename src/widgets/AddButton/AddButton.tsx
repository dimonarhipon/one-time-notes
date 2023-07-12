import styles from './addButton.module.scss';
import addIcon from './img/addNote.svg';

type AddButtonProps = {
	callback: () => void;
};

const AddButton = ({ callback }: AddButtonProps) => {
	return (
		<div className={styles.add} onClick={callback}>
			<img src={addIcon} alt='Добавить заметку' />
		</div>
	);
};

export default AddButton;
