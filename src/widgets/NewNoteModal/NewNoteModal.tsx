import { useState } from 'react';

import NewNoteForm from '../NewNoteForm/NewNoteForm';
import NoteCreatedModal from '../NoteCreatedModal/NoteCreatedModal';
import NoteCopyedModal from '../NoteCopyedModal/NoteCopyedModal';

import styles from './NewNoteModal.module.scss';


const NewNoteModal = () => {
	const [isCreated, setIsCreated] = useState(false);
	const [isCopyed, setIsCopyed] = useState(false);
	
	const content = isCopyed ? <NoteCopyedModal/> : isCreated ? <NoteCreatedModal setIsCopyed={setIsCopyed}/> : <NewNoteForm setIsCreated={setIsCreated}/>;

	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				{content}
			</div>
		</div>
	);
};

export default NewNoteModal;