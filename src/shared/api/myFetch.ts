import { fetchMethods } from './fetchMethods';

const myFetch = () => {
	return {
		get: async (url: string) => {
			try {
				const send = await fetch(url, {
					method: fetchMethods.get,
				});
				const response = await send;
				return response.json();
			} catch (error) {
				return error;
			}
		},
		post: async (url: string, body: object) => {
			try {
				const send = await fetch(url, {
					method: fetchMethods.post,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body),
				});
				const response = await send;
				return response.json();
			} catch (error) {
				return error;
			}
		},
		put: async (url: string, body: object) => {
			try {
				const send = await fetch(url, {
					method: fetchMethods.put,
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body),
				});
				const response = await send;
				return response.json();
			} catch (error) {
				return error;
			}
		},
		delete: async (url: string) => {
			try {
				const send = await fetch(url, {
					method: fetchMethods.delete,
				});
				const response = await send;
				return response.json();
			} catch (error) {
				return error;
			}
		},
	};
};

export default myFetch();
