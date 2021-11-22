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
} from '../constants/routes.constants';
import { LoginScreen } from '../views/LogInScreen';
import DocumentalesScreen from '../views/Documentales.Screen';
import { RegistrarScreen } from '../views/Registrar.Screen';
import { RegistroUniscreen } from '../views/RegistroUni.screen';
import { RegistrarAdmiscreen } from '../views/RegistrarAdmi.screen';
import { RegistroProfescreen } from '../views/RegistroProfe.screen';
import { RegistroAlum } from '../views/RegistroAlum.screen';
import { Vistagaleriascreen } from '../views/Vistagaleria.screen';
import { Sidebar } from '../components/Sidebar';
import { PostsScreen } from '../views/Posts.Screen';
import { NewTeamScreen } from '../views/NewTeamScreen';

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

				<Route path={'/videos'} component={Vistagaleriascreen} />

				<Route path='/sidebar' component={Sidebar} />

				<Route path={LOG_IN} component={LoginScreen} />

				<Route path='/publicaciones' component={PostsScreen} />

				<Route path='/nuevo-equipo' component={NewTeamScreen} />
				<Redirect to={LOG_IN} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
