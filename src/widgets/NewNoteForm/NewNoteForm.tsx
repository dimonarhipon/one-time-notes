import { useState } from 'react';

import ButtonCreate from '@/widgets/ButtonCreate/ButtonCreate';

import styles from './NewNoteForm.module.scss';

const NewNoteForm = () => {    
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');

    return (
        <form className={styles.form}>
            <input
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                className={styles.title}
                placeholder='Новая заметка'
            />
            <textarea
                value={noteBody}
                onChange={(e) => setNoteBody(e.target.value)}
                className={styles.textarea}
                placeholder='Напиши свой секрет здесь... '
            />

            <ButtonCreate/>
        </form> 
    );
};

export default NewNoteForm;