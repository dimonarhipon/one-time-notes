import { useState } from 'react';

import ButtonCreate from '@/widgets/ButtonCreate/ButtonCreate';
import { useTranslation } from 'react-i18next';
import styles from './NewNoteForm.module.scss';

const newTitlePlaceholder = 'Новая заметка';

const NewNoteForm = () => {
	const { t } = useTranslation();
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
				placeholder={t('placeholderTextarea')}
			/>

			<ButtonCreate text='Создать' />
		</form>
	);
};

export default NewNoteForm;
