import { useState } from 'react';

import ButtonCreate from '@/widgets/ButtonCreate/ButtonCreate';

import styles from './NewNoteForm.module.scss';

const newTitlePlaceholder = 'Новая заметка';
const newTextareaPlaceholder = 'Напиши свой секрет здесь...';

const NewNoteForm = () => {
	const [noteTitle, setNoteTitle] = useState('');
	const [noteBody, setNoteBody] = useState('');

	return (
		<form className={styles.form}>
			<input
				value={noteTitle}
				onChange={(event) => setNoteTitle(event.target.value)}
				className={styles.title}
				placeholder={newTitlePlaceholder}
			/>
			<textarea
				value={noteBody}
				onChange={(event) => setNoteBody(event.target.value)}
				className={styles.textarea}
				placeholder={newTextareaPlaceholder}
			/>

			<ButtonCreate text='Создать' />
		</form>
	);
};

export default NewNoteForm;
