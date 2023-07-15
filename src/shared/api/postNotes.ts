import NoteType from '../lib/NoteType';

// TASK доделать функцию отправки заметки
export const postNotes = async (url:string, noteObject: NoteType) => {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
      'Content-Type': 'application/json',
    },
		body: JSON.stringify(noteObject),
	});

	return response.json();
};
