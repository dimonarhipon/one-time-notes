import NewNoteForm from '../NewNoteForm/NewNoteForm';
import ButtonClose from '../ButtonClose/ButtonClose';

import styles from './NewNoteModal.module.scss';

const NewNoteModal = () => {
    return (
        <div className={styles.modal}>
            <ButtonClose/>
            
            <NewNoteForm/>
        </div>
    );
};

export default NewNoteModal;