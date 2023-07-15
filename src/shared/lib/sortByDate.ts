import NoteType from './NoteType';

export enum SortBy {
	early = 'early',
	late = 'late',
	read = 'read',
	unread = 'unread',
	default = 'default',
}

type SortOptions = {
	userNotes:NoteType[],
	sortBy:SortBy,
	setSearchNotes:(array:NoteType[]) => void,
	setSortBy:(SortBy:SortBy) => void,
};

export const sortByDate = ({userNotes, sortBy, setSearchNotes, setSortBy}: SortOptions): void => {
	if(sortBy === SortBy.late){
		setSearchNotes(userNotes);
		setSortBy(SortBy.default);
	}

	const dateArray = [...userNotes];
	// 1. Преобразование даты из ISO в miliseconds
	dateArray.map((note) => {
		note.noteDate = new Date(note.noteDate).getTime().toString();
	});

	// 2. Сортировка по ранней дате
	if(sortBy === SortBy.default){
		dateArray.sort((a, b) => (+a.noteDate > +b.noteDate ? 1 : -1));
		setSortBy(SortBy.early);
	}
	if(sortBy === SortBy.early){
		dateArray.sort((a, b) => (+a.noteDate < +b.noteDate ? 1 : -1));
		setSortBy(SortBy.late);
	}

	// 3. Преобразование обратно в ISO
	dateArray.map((note) => {
		note.noteDate = new Date(+note.noteDate).toISOString();
	});
	setSearchNotes(dateArray);
};


