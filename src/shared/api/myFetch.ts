import { fetchMethods } from './fetchMethods';

const myFetch = () => {
	return {
		/**
		 * Метод отправляет GET запрос на указанный адрес
		 * @param {string} url адрес
		 * @returns {object | Error} объект не в json формате или ошибка
		 */
		get: async (url: string) => {
			try {
				const response = await fetch(url, {
					method: fetchMethods.get,
				});
				return response;
			} catch (error) {
				return error;
			}
		},

		/**
		 * Метод отправляет POST запрос на указанный адрес
		 * @param {string} url адрес
		 * @param {object} body отправляемый объект не в json формате
		 * @returns {object | Error} объект не в json формате или ошибка
		 */
		post: async (url: string, body: object) => {
			try {
				const response = await fetch(url, {
					method: fetchMethods.post,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(body),
				});

				return response;
			} catch (error) {
				return error;
			}
		},

		/**
		 * Метод отправляет PUT запрос на указанный адрес
		 * @param {string} url адрес
		 * @param {object} body объект не в json формате
		 * @returns {object | Error} объект не в json формате или ошибка
		 */
		put: async (url: string, body: object) => {
			try {
				const response = await fetch(url, {
					method: fetchMethods.put,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(body),
				});
				return response;
			} catch (error) {
				return error;
			}
		},

		/**
		 * Метод отправляет DELETE запрос на указанный адрес
		 * @param {string} url адрес
		 * @returns {object | Error} объект не в json формате или ошибка
		 */
		delete: async (url: string) => {
			try {
				const response = await fetch(url, {
					method: fetchMethods.delete,
				});
				return response;
			} catch (error) {
				return error;
			}
		},
	};
};

export default myFetch();
