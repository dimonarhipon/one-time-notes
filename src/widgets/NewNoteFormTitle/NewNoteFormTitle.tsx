import styles from './NewNoteFormTitle.module.scss';

const newTitlePlaceholder = 'Новая заметка';

const NewNoteFormInput = ({newNoteTitle, setNewNoteTitle}) => {

    return(
        <input
            value={newNoteTitle}
            onChange={(event) => setNewNoteTitle(event.target.value)}
            className={styles.title}
            placeholder={newTitlePlaceholder}
        />
    );
};

export default NewNoteFormInput;