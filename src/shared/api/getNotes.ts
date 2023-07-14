export const getNotes = async (url:string) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;

	} catch (error) {
		throw new Error('Ошибка при получении заметок');
	}
};
