import { fetchMethods } from './fetchMethods';

const myFetch = () => {
	return {
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
		post: async (url: string, body: object) => {
			try {
				const response = await fetch(url, {
					method: fetchMethods.post,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body),
				});
				return response;
			} catch (error) {
				return error;
			}
		},
		put: async (url: string, body: object) => {
			try {
				const response = await fetch(url, {
					method: fetchMethods.put,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body),
				});
				return response;
			} catch (error) {
				return error;
			}
		},
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
