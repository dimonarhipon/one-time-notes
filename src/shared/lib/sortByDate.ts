import NoteType from './NoteType';

export enum SortByDate {
	early = 'early',
	late = 'late',
	default = 'default',
}

type SortOptions = {
	userNotes:NoteType[],
	sortByDate:SortByDate,
	setSearchNotes:(array:NoteType[]) => void,
	setSortByDate:(sortByDate:SortByDate) => void,
};

export const sortNotesByDate = ({userNotes, sortByDate, setSearchNotes, setSortByDate}: SortOptions): void => {
	if(sortByDate === SortByDate.late){
		setSearchNotes(userNotes);
		setSortByDate(SortByDate.default);
	}

	const dateArray = [...userNotes];
	// 1. Преобразование даты из ISO в miliseconds
	dateArray.map((note) => {
		note.noteDate = new Date(note.noteDate).getTime().toString();
	});

	// 2. Сортировка по ранней дате
	if(sortByDate === SortByDate.default){
		dateArray.sort((a, b) => (+a.noteDate > +b.noteDate ? 1 : -1));
		setSortByDate(SortByDate.early);
	}
	if(sortByDate === SortByDate.early){
		dateArray.sort((a, b) => (+a.noteDate < +b.noteDate ? 1 : -1));
		setSortByDate(SortByDate.late);
	}

	// 3. Преобразование обратно в ISO
	dateArray.map((note) => {
		note.noteDate = new Date(+note.noteDate).toISOString();
	});
	setSearchNotes(dateArray);
};


