
import styles from './NewNoteFormBody.module.scss';

const newTextareaPlaceholder = 'Напиши свой секрет здесь...';

    const NewNoteFormTextarea = ({newNoteBody, setNewNoteBody}) => {

    return (
        <textarea
            value={newNoteBody}
            onChange={(event) => setNewNoteBody(event.target.value)}
            className={styles.textarea}
            placeholder={newTextareaPlaceholder}
        />
    );
};

export default NewNoteFormTextarea;