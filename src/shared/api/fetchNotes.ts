export const fetchNotes = async (url:string, fetchMethod?:string) => {
	try {
		if(fetchMethod){
			fetch(url, {
				method: fetchMethod,
			})
			.catch((error) => {
				throw new Error(error);
			});
		}
		const response = await fetch(url);
		const data = await response.json();
		return data;

	} catch (error) {
		throw new Error('Ошибка при отправке или получении запроса');
	}
};
