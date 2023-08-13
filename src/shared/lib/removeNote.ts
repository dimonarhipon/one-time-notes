import myFetch from '@/shared/api/myFetch';
import TNoteType from './NoteType';

type TRemoveNoteOptions = {
	id: string;
	db_url: string;
	notes: TNoteType[];
	setUserNotes: (array: TNoteType[]) => void;
	assignNotesInRedux: (notes: TNoteType[]) => void;
};

export const removeNote = async ({
	id,
	db_url,
	notes,
	setUserNotes,
	assignNotesInRedux,
}: TRemoveNoteOptions) => {
	myFetch.delete(`${db_url}api/notes/${id}`);

	const resultNotes = notes.filter((note) => note._id !== id);

	setUserNotes(resultNotes);
	assignNotesInRedux(resultNotes);
	// TASK обработка ошибки, вызов модального окна
};
