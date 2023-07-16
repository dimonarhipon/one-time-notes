import { fetchNotes } from '../api/fetchNotes';
import { Note } from './NoteClass';
import NoteType from './NoteType';

type AddNoteOptions = {
	userNotes: NoteType[];
	mockApiNotesUrl: string;
	setUserNotes: (array:NoteType[]) => void;
	setSearchNotes: (array:NoteType[]) => void;
	setLoading: (array:boolean) => void;
};

export const addNote = async ({userNotes, setUserNotes, setSearchNotes, setLoading, mockApiNotesUrl}:AddNoteOptions) => {
	setLoading(true);
	const postNote = new Note();

	const response = await fetchNotes(mockApiNotesUrl, 'POST', postNote);
	console.log(response);

	const copyUserNotes = [...userNotes];
	await copyUserNotes.unshift(response);

	setSearchNotes(copyUserNotes);
	setUserNotes(copyUserNotes);
	setLoading(false);
};
