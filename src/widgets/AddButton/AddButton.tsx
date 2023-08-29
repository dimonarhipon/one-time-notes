import styles from './AddButton.module.scss';

type TAddButtonProps = {
	addNote: () => void;
};

const addText = 'Добавить заметку';

const AddButton = ({ addNote }: TAddButtonProps) => {
	return (
		<button className={styles.add} onClick={addNote}>
			<svg className={styles.svg} width='45' height='45' viewBox='0 0 45 45' aria-label={addText}>
				<rect width='45' height='45' rx='12' className={styles.rect} />
				<path
					d='M28.25 23.2188H16.75C16.3571 23.2188 16.0312 22.8929 16.0312 22.5C16.0312 22.1071 16.3571 21.7812 16.75 21.7812H28.25C28.6429 21.7812 28.9688 22.1071 28.9688 22.5C28.9688 22.8929 28.6429 23.2188 28.25 23.2188Z'
					fill='black'
				/>
				<path
					d='M22.5 28.9688C22.1071 28.9688 21.7812 28.6429 21.7812 28.25V16.75C21.7812 16.3571 22.1071 16.0312 22.5 16.0312C22.8929 16.0312 23.2188 16.3571 23.2188 16.75V28.25C23.2188 28.6429 22.8929 28.9688 22.5 28.9688Z'
					fill='black'
				/>
			</svg>
		</button>
	);
};

export default AddButton;
