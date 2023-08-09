import myFetch from '@/shared/api/myFetch';
import NoteType from './NoteType';

type TRemoveNoteOptions = {
	id: string;
	db_url: string;
	userNotes: NoteType[];
	setUserNotes: (array: NoteType[]) => void;
	setSearchNotes: (array: NoteType[]) => void;
};

export const removeNote = ({
	id,
	db_url,
	userNotes,
	setUserNotes,
	setSearchNotes,
}: TRemoveNoteOptions) => {
	myFetch.delete(`${db_url}api/notes/${id}`).then(() => {
		const resultNotes = userNotes.filter((note) => note._id !== id);

		setUserNotes(resultNotes);
		setSearchNotes(resultNotes);
	});
	// TASK обработка ошибки, вызов модального окна
};
