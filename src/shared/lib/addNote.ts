import { fetchMethods } from '../api/fetchMethods';
import { fetchNotes } from '../api/fetchNotes';
import { Note } from './NoteClass';
import NoteType from './NoteType';

type TAddNoteOptions = {
	userNotes: NoteType[];
	mockApiNotesUrl: string;
	setUserNotes: (array: NoteType[]) => void;
	setSearchNotes: (array: NoteType[]) => void;
};

export const addNote = async ({
	userNotes,
	setUserNotes,
	setSearchNotes,
	mockApiNotesUrl,
}: TAddNoteOptions) => {
	const postNote = new Note();

	const response = await fetchNotes(mockApiNotesUrl, fetchMethods.post, postNote);

	const copyUserNotes = [...userNotes];
	await copyUserNotes.unshift(response);

	setSearchNotes(copyUserNotes);
	setUserNotes(copyUserNotes);
};
