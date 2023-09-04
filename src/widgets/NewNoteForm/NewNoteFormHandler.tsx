import { useContext } from 'react';
import { NewNoteFormContext } from '../NewNoteModal/NewNoteModalContext';

const HandleSubmit = async (event) => {
    const formData = useContext(NewNoteFormContext);

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
            // Обработка успешной отправки данных
            console.log('Данные успешно отправлены в MockAPI');
        } else {
            // Обработка ошибки при отправке данных
            console.error('Ошибка при отправке данных в MockAPI');
        }
    } catch (error) {
        // Обработка ошибки сети или других ошибок
        console.error('Произошла ошибка:', error);
    }
};

export default HandleSubmit;