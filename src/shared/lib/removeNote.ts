import { fetchNotes } from '../api/fetchNotes';
import NoteType from './NoteType';

type RemoveNoteOptions = {
	event: any,
	mockApiNotesUrl: string,
	userNotes: NoteType[],
	setUserNotes: (array:NoteType[]) => void,
	setSearchNotes: (array:NoteType[]) => void,
};

export const removeNote = ({ event, mockApiNotesUrl, userNotes, setUserNotes, setSearchNotes}:RemoveNoteOptions) => {

	const thisNoteId: string = event.currentTarget.parentElement.parentElement.id;

	fetchNotes(`${mockApiNotesUrl}/${thisNoteId}`, 'DELETE').then(() => {
		const resultNotes = userNotes.filter((note) => note.noteId !== thisNoteId);

		setUserNotes(resultNotes);
		setSearchNotes(resultNotes);
	});
	// TASK обработка ошибки, вызов модального окна
	};
