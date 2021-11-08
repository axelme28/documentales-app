import {
	GET_VER_DOCUMENTALES,
	POST_REGISTRAR_DOCUMENTAL,
	DELETE_DOCUMENTAL,
	INICIAR_SECION,
	ALTA_UNIVERSIDAD,
	POST_REGISTRAR_USER
} from '../constants/routes.constants';
import { request, requestPlataforma } from './requestClient.api';

export const _postRegistrarDocumental = async data => {
	return await request(POST_REGISTRAR_DOCUMENTAL, 'POST', data);
};
// SE GENERA SEGUNDA FUNCION PARA OBTENER DOCUMENTALES

export const _verDocumentales = async () => {
	return await request(GET_VER_DOCUMENTALES, 'GET');
};

export const _eliminarDocumental = async id => {
	return await request(DELETE_DOCUMENTAL, 'DELETE', id);
};

export const _iniciarSecion = async data => {
	return await request(INICIAR_SECION, 'POST',data);
}

export const _altaUniversidad = async data => {
	return await requestPlataforma(ALTA_UNIVERSIDAD, 'POST', data);
};

export const _altaUsuario = async data => {
	return await requestPlataforma(POST_REGISTRAR_USER, 'POST', data);
}
