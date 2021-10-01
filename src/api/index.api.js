import { POST_REGISTRAR_DOCUMENTAL } from '../constants/routes.constants';
import { request } from './requestClient.api';

export const _postRegistrarDocumental = async data => {
	return await request(POST_REGISTRAR_DOCUMENTAL, 'POST', data);
};
