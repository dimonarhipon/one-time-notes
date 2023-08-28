import NoteType from './NoteType';

export enum SortByDate {
	early = 'early',
	late = 'late',
	default = 'default',
}

type TSortOptions = {
	notes: NoteType[];
	sortByDate: SortByDate;
	setUserNotes: (array: NoteType[]) => void;
	setSortByDate: (sortByDate: SortByDate) => void;
};

export const sortNotesByDate = ({
	notes,
	sortByDate,
	setUserNotes,
	setSortByDate,
}: TSortOptions): void => {
	if (sortByDate === SortByDate.early) {
		setUserNotes(notes);
		setSortByDate(SortByDate.default);
		return;
	}

	const dateArray = notes.slice(0);


	// TASK пофиксить ошибку

	// 1. Преобразование даты из ISO в miliseconds
	dateArray.map((note) => {
		note.updatedAt = new Date(note.updatedAt).getTime().toString();
	});

	// 2. Сортировка по ранней дате
	if (sortByDate === SortByDate.default) {
		dateArray.sort((a, b) => (+a.updatedAt < +b.updatedAt ? 1 : -1));
		setSortByDate(SortByDate.late);

		// Преобразование обратно в ISO
		dateArray.map((note) => {
			note.updatedAt = new Date(+note.updatedAt).toISOString();
		});
		setUserNotes(dateArray);
		return;
	}

	// 3. Сортировка по поздней дате
	if (sortByDate === SortByDate.late) {
		dateArray.sort((a, b) => (+a.updatedAt > +b.updatedAt ? 1 : -1));
		setSortByDate(SortByDate.early);

		// Преобразование обратно в ISO
		dateArray.map((note) => {
			note.updatedAt = new Date(+note.updatedAt).toISOString();
		});
		setUserNotes(dateArray);
		return;
	}

	return setUserNotes(dateArray);
};
