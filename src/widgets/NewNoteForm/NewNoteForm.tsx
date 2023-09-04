import { useState, FormEvent } from 'react';

import NewNoteFormTitle from '../NewNoteFormTitle/NewNoteFormTitle';
import NewNoteFormBody from '../NewNoteFormBody/NewNoteFormBody';
import ButtonCreate from '@/features/ButtonCreate/ButtonCreate';
import ButtonClose from '@/features/ButtonClose/ButtonClose';

import styles from './NewNoteForm.module.scss';

const NewNoteForm = ({setIsCreated}) => {
    const [newNoteTitle, setNewNoteTitle] = useState('');
    const [newNoteBody, setNewNoteBody] = useState('');

    const formData = {
        newNoteTitle: newNoteTitle,
        newNoteBody: newNoteBody,
    };

    //фенкция для теста
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('https://64afe6dcc60b8f941af4d580.mockapi.io/one-times-notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setNewNoteTitle('');
                setNewNoteBody('');
                setIsCreated(true);
                console.log('Данные успешно отправлены в MockAPI');
            } else {
                console.error('Ошибка при отправке данных в MockAPI');
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    };

	return (
		<form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
			<ButtonClose/>
			<NewNoteFormTitle newNoteTitle={newNoteTitle} setNewNoteTitle={setNewNoteTitle}/>
			<NewNoteFormBody newNoteBody={newNoteBody} setNewNoteBody={setNewNoteBody}/>
			<ButtonCreate text='Создать'/>
		</form>
	);
};



export default NewNoteForm;
