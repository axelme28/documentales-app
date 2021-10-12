import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { DOCUMENTALES_VIEW, REGISTRAR_DOCUMENTAL,LOG_IN } from '../constants/routes.constants';
import { RegistrarScreen } from '../views/Registrar.Screen';
import DocumentalesScreen from '../views/Documentales.Screen';
<<<<<<< HEAD
import {  LoginScreen} from '../views/LogInScreen';
=======
import MainLayout from '../layout/MainLayout';
>>>>>>> 07494d10d8a86078c77e4470ab8265cea5670e0a

export const IndexRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route
						exact
						path={DOCUMENTALES_VIEW}
						component={DocumentalesScreen}
					/>

					<Route
						exact
						path={REGISTRAR_DOCUMENTAL}
						component={RegistrarScreen}
					/>
					<Route 
						exact 
						path={LOG_IN} 
						component={LoginScreen} 
					/>

					<Redirect to={DOCUMENTALES_VIEW} />
				</Switch>
			</BrowserRouter>
		</>
	);
};
