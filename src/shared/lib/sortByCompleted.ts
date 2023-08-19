import NoteType from './NoteType';

export enum SortByCompleted {
	read = 'read',
	unread = 'unread',
	default = 'default',
}

type TSortOptions = {
	userNotes: NoteType[];
	sortByCompleted: SortByCompleted;
	setSearchNotes: (array: NoteType[]) => void;
	setSortByCompleted: (SortByCompleted: SortByCompleted) => void;
};

export const sortNotesByCompleted = ({
	userNotes,
	sortByCompleted,
	setSearchNotes,
	setSortByCompleted,
}: TSortOptions): void => {
	const sortArray = [...userNotes];

	// Сортировка
	switch (sortByCompleted) {
		case SortByCompleted.default:
			sortArray.sort((note) => (note.noteStatus ? 1 : -1));
			setSortByCompleted(SortByCompleted.read);
			setSearchNotes(sortArray);
			break;

		case SortByCompleted.read:
			sortArray.sort((note) => (!note.noteStatus ? 1 : -1));
			setSortByCompleted(SortByCompleted.unread);
			setSearchNotes(sortArray);
			break;

		case SortByCompleted.unread:
			setSearchNotes(userNotes);
			setSortByCompleted(SortByCompleted.default);
			break;

		default:
			setSearchNotes(userNotes);
			setSortByCompleted(SortByCompleted.default);
			break;
	}
};
