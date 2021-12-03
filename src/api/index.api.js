import {
	GET_VER_DOCUMENTALES,
	POST_REGISTRAR_DOCUMENTAL,
	DELETE_DOCUMENTAL,
	INICIAR_SECION,
	ALTA_UNIVERSIDAD,
	POST_REGISTRAR_USER,
	GET_POST,
	POST_PUBLICACION,
	POST_REGISTRAR_TEAM,
	GET_USER_INFO,
	GET_TEAMS,
	GET_ALL_TASK_BY_USER,
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
	return await request(INICIAR_SECION, 'POST', data);
};

export const _altaUniversidad = async data => {
	return await requestPlataforma(ALTA_UNIVERSIDAD, 'POST', data);
};

export const _altaUsuario = async data => {
	return await requestPlataforma(POST_REGISTRAR_USER, 'POST', data);
};

export const _getPosts = async data => {
	return await requestPlataforma(GET_POST, 'POST', data);
};

export const _sendPublication = async data => {
	return await requestPlataforma(POST_PUBLICACION, 'POST', data);
};

export const _postRegistrarTeam = async data => {
	return await requestPlataforma(POST_REGISTRAR_TEAM, 'POST', data);
};

export const _getUserInfo = async data => {
	return await requestPlataforma(GET_USER_INFO, 'POST', data);
};

export const _getTeams = async data => {
	return await requestPlataforma(GET_TEAMS, 'POST', data);
};

export const _getAllTaskByUser = async data => {
	return await requestPlataforma(GET_ALL_TASK_BY_USER, 'POST', data);
};
