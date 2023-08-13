import NoteType from './NoteType';

export enum SortByCompleted {
	read = 'read',
	unread = 'unread',
	default = 'default',
}

type TSortOptions = {
	notes: NoteType[];
	setUserNotes: (array: NoteType[]) => void;
	sortByCompleted: SortByCompleted;
	setSortByCompleted: (SortByCompleted: SortByCompleted) => void;
};

export const sortNotesByCompleted = ({
	notes,
	setUserNotes,
	sortByCompleted,
	setSortByCompleted,
}: TSortOptions): void => {
	const sortArray = [...notes];

	// Сортировка
	switch (sortByCompleted) {

		case SortByCompleted.default:
			sortArray.sort((note) => (note.status ? 1 : -1));
			setSortByCompleted(SortByCompleted.read);
			setUserNotes(sortArray);
			break;

		case SortByCompleted.read:
			sortArray.sort((note) => (!note.status ? 1 : -1));
			setSortByCompleted(SortByCompleted.unread);
			setUserNotes(sortArray);
			break;

		case SortByCompleted.unread:
			setUserNotes(notes);
			setSortByCompleted(SortByCompleted.default);
			break;

		default:
			setUserNotes(notes);
			setSortByCompleted(SortByCompleted.default);
			break;
	}
};
