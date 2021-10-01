import { API } from '../constants/routes.constants';

export const request = async (endpoint = '', method = 'GET', data = {}) => {
	const response = await fetch(`${API}${endpoint}`, {
		method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	return response.json();
};
