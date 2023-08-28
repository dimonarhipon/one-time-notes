import { Note } from './NoteClass';
import myFetch from '../api/myFetch';
import TNoteType from './NoteType';

type TAddNoteOptions = {
	notes: TNoteType[];
	db_url: string;
	setUserNotes: (array: TNoteType[]) => void;
	assignNotesInRedux: (note: TNoteType[]) => void;
};


export const addNote = async ({
	notes,
	db_url,
	setUserNotes,
	assignNotesInRedux,
}: TAddNoteOptions) => {
	const lastNote = notes.length - 1;
	if(!notes[lastNote].content) {
		return;
	}
	const postNote = new Note(`Заметка ${notes.length}`);

	const result: any = await myFetch.post(`${db_url}api/notes`, postNote);
	const newNote = await result.json();

	const copyUserNotes = [...notes];
	copyUserNotes.push(newNote);

	setUserNotes(copyUserNotes);
	assignNotesInRedux(copyUserNotes);
};
