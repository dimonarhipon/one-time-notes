import NoteType from './NoteType';

export enum SortByDate {
	early = 'early',
	late = 'late',
	default = 'default',
}

type TSortOptions = {
	userNotes: NoteType[];
	sortByDate: SortByDate;
	setSearchNotes: (array: NoteType[]) => void;
	setSortByDate: (sortByDate: SortByDate) => void;
};

export const sortNotesByDate = ({
	userNotes,
	sortByDate,
	setSearchNotes,
	setSortByDate,
}: TSortOptions): void => {
	if (sortByDate === SortByDate.early) {
		setSearchNotes(userNotes);
		setSortByDate(SortByDate.default);
		return;
	}

	const dateArray = [...userNotes];

	// 1. Преобразование даты из ISO в miliseconds
	dateArray.map((note) => {
		note.noteDate = new Date(note.noteDate).getTime().toString();
	});

	// 2. Сортировка по ранней дате
	if (sortByDate === SortByDate.default) {
		dateArray.sort((a, b) => (+a.noteDate < +b.noteDate ? 1 : -1));
		setSortByDate(SortByDate.late);

		// 3. Преобразование обратно в ISO
		dateArray.map((note) => {
			note.noteDate = new Date(+note.noteDate).toISOString();
		});
		setSearchNotes(dateArray);
		return;
	}
	if (sortByDate === SortByDate.late) {
		dateArray.sort((a, b) => (+a.noteDate > +b.noteDate ? 1 : -1));
		setSortByDate(SortByDate.early);

		// 3. Преобразование обратно в ISO
		dateArray.map((note) => {
			note.noteDate = new Date(+note.noteDate).toISOString();
		});
		setSearchNotes(dateArray);
		return;
	}

	return setSearchNotes(dateArray);
};
