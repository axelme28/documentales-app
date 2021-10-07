import { API } from '../constants/routes.constants';

export const request = async (endpoint = '', method = 'GET', data = {}) => {
	if(method === 'GET'){
		const response = await fetch(`${API}${endpoint}`, {
			method,
			headers: { 'Content-Type': 'application/json' },
		});
		return response.json();

	}
	const response = await fetch(`${API}${endpoint}`, {
		method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	return response.json();
};
