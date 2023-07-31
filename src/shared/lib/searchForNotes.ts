import { ChangeEvent } from 'react';
import NoteType from './NoteType';

type SearchOptions = {
	event: ChangeEvent<HTMLInputElement>;
	userNotes: NoteType[];
	searchNotes: NoteType[];
	setSearchNotes: (array: NoteType[]) => void;
};

export const searchForNotes = ({
	event,
	userNotes,
	searchNotes,
	setSearchNotes,
}: SearchOptions) => {
	// TASK исправить баг с русскими буквами
	const searchValue = event.target.value;

	if (!searchValue.length) {
		setSearchNotes(searchNotes);
		return;
	}
	const resultArray: NoteType[] = [];

	userNotes.map((note: NoteType) => {
		if (note.noteTitle.toLowerCase().includes(searchValue.toLowerCase())) {
			resultArray.push(note);
		} else if (note.noteDate.includes(searchValue)) {
			resultArray.push(note);
		} else if (note.noteText.includes(searchValue)) {
			resultArray.push(note);
		}
	});

	setSearchNotes(resultArray);
};
