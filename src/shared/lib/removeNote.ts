import { fetchNotes } from '../api/fetchNotes';
import NoteType from './NoteType';

type RemoveNoteOptions = {
	event: any,
	mockApiNotesUrl: string,
	userNotes: NoteType[],
	setUserNotes: (array:NoteType[]) => void,
	setSearchNotes: (array:NoteType[]) => void,
	setLoading: (value:boolean) => void,
};

export const removeNote = ({ event, mockApiNotesUrl, userNotes, setUserNotes, setSearchNotes, setLoading }:RemoveNoteOptions) => {

	const thisNoteId: string = event.currentTarget.parentElement.parentElement.id;
	setLoading(true);

	fetchNotes(`${mockApiNotesUrl}/${thisNoteId}`, 'DELETE').then(() => {
		const resultNotes = userNotes.filter((note) => note.noteId !== thisNoteId);

		setLoading(false);
		setUserNotes(resultNotes);
		setSearchNotes(resultNotes);
	});
	// TASK обработка ошибки, вызов модального окна
	};
