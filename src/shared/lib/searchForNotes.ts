import { ChangeEvent } from 'react';
import NoteType from './NoteType';

type TSearchOptions = {
	event: ChangeEvent<HTMLInputElement>;
	notes: NoteType[];
	setUserNotes: (array: NoteType[]) => void;
};

export const searchForNotes = ({ event, notes, setUserNotes }: TSearchOptions) => {
	const searchValue = event.target.value;

	if (searchValue.length === 0) {
		setUserNotes(notes);
		return;
	}
	const resultArray: NoteType[] = [];

	notes.map((note: NoteType) => {
		// 1. поиск по title
		if (note.title.toLowerCase().includes(searchValue.toLowerCase())) {
			resultArray.push(note);
			// 2. поиск по контенту
		} else if (note.content.includes(searchValue)) {
			resultArray.push(note);
		}
	});
	setUserNotes(resultArray);
};
