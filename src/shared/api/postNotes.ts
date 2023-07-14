import NoteType from '../lib/NoteType';

export const postNotes = async (url:string, noteObject: NoteType) => {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
      'Content-Type': 'application/json',
    },
		body: JSON.stringify(noteObject),
	});
	console.log(response);

	return response.json();
};
