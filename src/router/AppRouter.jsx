import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {
	ADMINISTRADOR_DOCUMENTALES_VIEW,
	ADMINISTRADOR_REGISTRAR_DOCUMENTAL,
	PLATAFORMA_REGISTRAR_UNIVERSIDAD,
	PLATAFORMA_REGISTRAR_ADMINISTRADOR,
	PLATAFORMA_REGISTRAR_PROFESOR,
	PLATAFORMA_REGISTRAR_ALUMNOS,
	LOG_IN,
	PLATAFORMA_GALERIA,
	PLATAFORMA_PUBLICACIONES,
	PLATAFORMA_NUEVO_EQUIPO,
	PLATAFORMA_NUEVA_TAREA,
	PLATAFORMA_TAREA,
	PLATAFORMA_CALIFICACIONES,
} from '../constants/routes.constants';
import { LoginScreen } from '../views/LogInScreen';
import DocumentalesScreen from '../views/Documentales.Screen';
import { RegistrarScreen } from '../views/Registrar.Screen';
import { RegistroUniscreen } from '../views/RegistroUni.screen';
import { RegistrarAdmiscreen } from '../views/RegistrarAdmi.screen';
import { RegistroProfescreen } from '../views/RegistroProfe.screen';
import { RegistroAlum } from '../views/RegistroAlum.screen';
import { Vistagaleriascreen } from '../views/Vistagaleria.screen';
import { PostsScreen } from '../views/Posts.Screen';
import { NewTeamScreen } from '../views/NewTeamScreen';
import { NewTaskScreen } from '../views/NewTaskScreen';
import { AllTasksScreen } from '../views/AllTasksScreen';
import { RecordingsScreen } from '../views/RecordingsScreen';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				{/* ROUTER PARA ADMINISTRADOR DE DOCUMENTALES */}
				<Route
					exact
					path={ADMINISTRADOR_DOCUMENTALES_VIEW}
					component={DocumentalesScreen}
				/>
				<Route
					path={ADMINISTRADOR_REGISTRAR_DOCUMENTAL}
					component={RegistrarScreen}
				/>

				{/* ROUTER PARA PLATAFORMA */}
				<Route
					path={PLATAFORMA_REGISTRAR_UNIVERSIDAD}
					component={RegistroUniscreen}
				/>
				<Route
					path={PLATAFORMA_REGISTRAR_ADMINISTRADOR}
					component={RegistrarAdmiscreen}
				/>
				<Route
					path={PLATAFORMA_REGISTRAR_PROFESOR}
					component={RegistroProfescreen}
				/>
				<Route path={PLATAFORMA_REGISTRAR_ALUMNOS} component={RegistroAlum} />
				<Route path={PLATAFORMA_GALERIA} component={Vistagaleriascreen} />

				<Route path={LOG_IN} component={LoginScreen} />

				<Route path={PLATAFORMA_PUBLICACIONES} component={PostsScreen} />

				<Route path={PLATAFORMA_NUEVO_EQUIPO} component={NewTeamScreen} />

				{/* TODO: poner una ruta que redireccione a un componente nuevo llamado <NewTaskSceen/> */}

				<Route path={PLATAFORMA_NUEVA_TAREA} component={NewTaskScreen} />

				{/* TODO: poner otra ruta para ver las tareas asignadas por el profesor y que redireccione a un nuevo componente llamado <AllTasksScreen/> */}
				<Route path={PLATAFORMA_TAREA} component={AllTasksScreen} />

				<Route path={PLATAFORMA_CALIFICACIONES} component={RecordingsScreen} />

				<Redirect to={LOG_IN} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
