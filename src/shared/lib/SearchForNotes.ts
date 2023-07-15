import { ChangeEvent } from 'react';
import NoteType from './NoteType';

type SearchOptions = {
	event: ChangeEvent<HTMLInputElement>;
	userNotes: NoteType[];
	notesData: NoteType[];
	setSearchNotes: (array: NoteType[]) => void;
};

export const SearchForNotes = ({ event, userNotes, notesData, setSearchNotes }: SearchOptions) => {
	const searchValue = event.target.value;

	if (!searchValue) {
		setSearchNotes(notesData);
		return;
	}
	const resultArray: NoteType[] = [];

	userNotes.map((note: NoteType) => {
		if (note.noteTitle.toLowerCase().includes(searchValue.toLowerCase())) {
			resultArray.push(note);
		} else if (note.noteDate.includes(searchValue)) {
			resultArray.push(note);
			// TASK: добавить поиск по тексту заметки
		}
	});

	setSearchNotes(resultArray);
};
