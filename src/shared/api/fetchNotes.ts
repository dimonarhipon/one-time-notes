export const fetchNotes = async (url:string, fetchMethod?:string, postData?:object) => {
	try {
		if(fetchMethod){
			const response = await fetch(url, {
				method: fetchMethod,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(postData),
			})
			.catch((error) => {
				throw new Error(error);
			});
			const data = await response.json();
			return data;
		}
		const response = await fetch(url);
		const data = await response.json();
		return data;

	} catch (error) {
		throw new Error('Ошибка при отправке или получении запроса');
	}
};
