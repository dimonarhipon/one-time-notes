import NoteType from './NoteType';

export enum SortByCompleted {
	read = 'read',
	unread = 'unread',
	default = 'default',
}

type SortOptions = {
	userNotes:NoteType[],
	sortByCompleted:SortByCompleted,
	setSearchNotes:(array:NoteType[]) => void,
	setSortByCompleted:(SortByCompleted:SortByCompleted) => void,
};

export const sortNotesByCompleted = ({userNotes, sortByCompleted, setSearchNotes, setSortByCompleted}: SortOptions): void => {
	if(sortByCompleted === SortByCompleted.unread){
		setSearchNotes(userNotes);
		setSortByCompleted(SortByCompleted.default);
	}
	const sortArray = [...userNotes];

	// Сортировка
	if(sortByCompleted === SortByCompleted.default){
		sortArray.sort((note) => (note.noteStatus ? 1 : -1));
		setSortByCompleted(SortByCompleted.read);
	}
	if(sortByCompleted === SortByCompleted.read){
		sortArray.sort((note) => (!note.noteStatus ? 1 : -1));
		setSortByCompleted(SortByCompleted.unread);
	}

	setSearchNotes(sortArray);
};


