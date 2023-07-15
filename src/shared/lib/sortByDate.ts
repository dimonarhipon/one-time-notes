import NoteType from './NoteType';

export const sortByDate = (arrayNotes:NoteType[]): NoteType[] => {
	// сортировка по ранней дате
	// TASK доделать сортировку по дате
	const dateArray = [...arrayNotes];
	// 1. Преобразование даты из ISO в miliseconds
	dateArray.map((note) => {
		note.noteDate = new Date(note.noteDate).getTime().toString();
	});
	// 2. Сортировка по ранней дате
	dateArray.sort((a, b) => (+a.noteDate > +b.noteDate ? 1 : -1));
	// Преобразование обратно в ISO
	dateArray.map((note) => {
		note.noteDate = new Date(+note.noteDate).toISOString();
	});
	return dateArray;
};
