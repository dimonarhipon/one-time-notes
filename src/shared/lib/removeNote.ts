import TNoteType from './NoteType';
import axios from 'axios';

type TRemoveNoteOptions = {
	id: string;
	db_url: string;
	notes: TNoteType[];
	setUserNotes: (array: TNoteType[]) => void;
	assignNotesInRedux: (notes: TNoteType[]) => void;
};

export const removeNote = async ({
	id,
	db_url,
	notes,
	setUserNotes,
	assignNotesInRedux,
}: TRemoveNoteOptions) => {
	const NOTE_URL = `${db_url}api/notes/${id}`;

	try {
		await axios.delete(NOTE_URL);

		const resultNotes = notes.filter((note) => note._id !== id);

		setUserNotes(resultNotes);
		assignNotesInRedux(resultNotes);
	} catch (error) {
		if(axios.isAxiosError(error)){
			throw new Error(`${error.response?.status}, ${error.response?.statusText}`);
		}
	}
};
