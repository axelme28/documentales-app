import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {
	DOCUMENTALES_VIEW,
	REGISTRAR_DOCUMENTAL,
	LOG_IN,
} from '../constants/routes.constants';
import { RegistrarScreen } from '../views/Registrar.Screen';
import DocumentalesScreen from '../views/Documentales.Screen';
import { LoginScreen } from '../views/LogInScreen';
import MainLayout from '../layout/MainLayout';

export const IndexRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<MainLayout>
						<>
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
							<Route exact path={LOG_IN} component={LoginScreen} />

							{/* <Redirect path={LOG_IN} /> */}
						</>
					</MainLayout>
				</Switch>
			</BrowserRouter>
		</>
	);
};
