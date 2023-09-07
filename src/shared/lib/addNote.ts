import { Note } from './NoteClass';
import TNoteType from './NoteType';
import axios from 'axios';

type TAddNoteOptions = {
	notes: TNoteType[];
	backendUrl: string;
	setUserNotes: (array: TNoteType[]) => void;
	assignNotesInRedux: (note: TNoteType[]) => void;
};

export const addNote = async ({
	notes,
	backendUrl,
	setUserNotes,
	assignNotesInRedux,
}: TAddNoteOptions) => {
	const NOTES_URL = `${backendUrl}api/notes`;

	// Проверка на контент последней заметки
	const lastNote = notes.length - 1;
	if (!notes[lastNote].content) {
		return;
	}

	const postNote = new Note(`Заметка ${notes.length}`);

	try {
		const result = await axios.post(NOTES_URL, postNote);
		const newNote = await result.data;

		const copyUserNotes = [...notes];
		copyUserNotes.push(newNote);

		setUserNotes(copyUserNotes);
		assignNotesInRedux(copyUserNotes);
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(`${error.response?.status}, ${error.response?.statusText}`);
		}
	}
};
