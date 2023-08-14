import { fetchMethods } from '../api/fetchMethods';
import { fetchNotes } from '../api/fetchNotes';
import NoteType from './NoteType';

type TRemoveNoteOptions = {
	noteId: string;
	mockApiNotesUrl: string;
	userNotes: NoteType[];
	setUserNotes: (array: NoteType[]) => void;
	setSearchNotes: (array: NoteType[]) => void;
};

export const removeNote = ({
	noteId,
	mockApiNotesUrl,
	userNotes,
	setUserNotes,
	setSearchNotes,
}: TRemoveNoteOptions) => {
	fetchNotes(`${mockApiNotesUrl}/${noteId}`, fetchMethods.delete).then(() => {
		const resultNotes = userNotes.filter((note) => note.noteId !== noteId);

		setUserNotes(resultNotes);
		setSearchNotes(resultNotes);
	});
	// TASK обработка ошибки, вызов модального окна
};
