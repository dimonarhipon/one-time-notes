import myFetch from '../api/myFetch';
import { Note } from './NoteClass';
import NoteType from './NoteType';

type TAddNoteOptions = {
	userNotes: NoteType[];
	db_url: string;
	setUserNotes: (array: NoteType[]) => void;
	setSearchNotes: (array: NoteType[]) => void;
};

export const addNote = async ({
	userNotes,
	setUserNotes,
	setSearchNotes,
	db_url,
}: TAddNoteOptions) => {
	const postNote = new Note();

	myFetch.post(`${db_url}api/notes`, postNote).then((response) => {
		const copyUserNotes = [...userNotes];
		copyUserNotes.unshift(response);

		setSearchNotes(copyUserNotes);
		setUserNotes(copyUserNotes);
	});

};
