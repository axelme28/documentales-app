import { GET_VER_DOCUMENTALES, POST_REGISTRAR_DOCUMENTAL } from '../constants/routes.constants';
import { request } from './requestClient.api';

export const _postRegistrarDocumental = async data => {
	return await request(POST_REGISTRAR_DOCUMENTAL, 'POST', data);
};
// SE GENERA SEGUNDA FUNCION PARA OBTENER DOCUMENTALES 

export const _verDocumentales = async() => {
	return await request(GET_VER_DOCUMENTALES, 'GET');
}

