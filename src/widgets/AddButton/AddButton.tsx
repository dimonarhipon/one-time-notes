import styles from './addButton.module.scss';
import addIcon from './img/addNote.svg';

interface AddButtonProps {
	callback: () => void;
}

const AddButton = (props: AddButtonProps) => {
	return (
		<div className={styles.add} onClick={props.callback}>
			<img src={addIcon} alt='Добавить заметку' />
		</div>
	);
};

export default AddButton;
