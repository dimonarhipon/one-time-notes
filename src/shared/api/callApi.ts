import NoteType from '../lib/NoteType';

// TASK доделать функцию
export const callApi = async (url: string): Promise<NoteType[]> => {
	const data = await fetch(url);
	const jsonData = await data.json();
	return jsonData;
};
