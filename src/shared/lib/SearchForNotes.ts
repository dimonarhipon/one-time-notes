import { ChangeEvent } from 'react';
import NoteType from './NoteType';

type SearchOptions = {
	event: ChangeEvent<HTMLInputElement>,
	userNotes:NoteType[],
	searchNotes:NoteType[],
	setSearchNotes:(array:NoteType[]) => void,
};

export const SearchForNotes = ({event, userNotes, searchNotes, setSearchNotes}: SearchOptions) => {
	const searchValue = event.target.value;

	if (!searchValue) {
		setSearchNotes(searchNotes);
		return;
	}
	const resultArray: NoteType[] = [];

	userNotes.map((note:NoteType) => {
		if (note.noteTitle.toLowerCase().includes(searchValue.toLowerCase())) {
			resultArray.push(note);
		} else if (note.noteDate.includes(searchValue)) {
			resultArray.push(note);
			// TASK: добавить поиск по тексту заметки
		}
	});

	setSearchNotes(resultArray);
};
