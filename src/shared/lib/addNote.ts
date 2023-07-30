import { fetchNotes } from '../api/fetchNotes';
import { Note } from './NoteClass';
import NoteType from './NoteType';

type AddNoteOptions = {
	userNotes: NoteType[];
	mockApiNotesUrl: string;
	setUserNotes: (array:NoteType[]) => void;
	setSearchNotes: (array:NoteType[]) => void;
};

export const addNote = async ({userNotes, setUserNotes, setSearchNotes, mockApiNotesUrl}:AddNoteOptions) => {
	const postNote = new Note();

	const response = await fetchNotes(mockApiNotesUrl, 'POST', postNote);

	const copyUserNotes = [...userNotes];
	await copyUserNotes.unshift(response);

	setSearchNotes(copyUserNotes);
	setUserNotes(copyUserNotes);
};
