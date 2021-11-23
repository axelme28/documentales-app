/*
 * Aqui pertenece las rutas de la app (Router)
 */

export const ADMINISTRADOR_DOCUMENTALES_VIEW = '/administrador/documentales';
export const ADMINISTRADOR_REGISTRAR_DOCUMENTAL = '/administrador/registrar-documental';

export const PLATAFORMA_REGISTRAR_UNIVERSIDAD = '/administrador/alta-universidad';
export const PLATAFORMA_REGISTRAR_ADMINISTRADOR = '/administrador/alta-administrador-uni';

export const PLATAFORMA_REGISTRAR_PROFESOR = '/plataforma/alta-profesor';
export const PLATAFORMA_REGISTRAR_ALUMNOS = '/plataforma/alta-alumno';
export const LOG_IN = '/plataforma/log-in';
/*
 * Aqui pertenece los endpoints de la API REST
 */

export const API = 'http://localhost:8080';

//rutas de el administrador de documentales

export const POST_REGISTRAR_DOCUMENTAL = '/registrar-documentales';
export const GET_VER_DOCUMENTALES = '/ver-documentales';
export const DELETE_DOCUMENTAL = '/eliminar-documental';
export const INICIAR_SECION = '/plataforma/log-in';

//Rutas de la plataforma

export const POST_REGISTRAR_USER = '/alta-usuario';
export const ALTA_UNIVERSIDAD = '/alta-universidad';
export const ALTA_EQUIPO = '/alta-equipo';
export const GET_POST = '/publicaciones';
export const POST_PUBLICACION = '/crear-publicacion';
export const POST_REGISTRAR_TEAM = '/alta-equipo';
