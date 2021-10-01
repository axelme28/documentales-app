import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { DOCUMENTALES_VIEW, REGISTRAR_DOCUMENTAL } from '../constants/routes.constants';
import { RegistrarScreen } from '../views/Registrar.Screen';
import { DocuentalesScreen } from '../views/Docuentales.Screen';

export const IndexRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path={DOCUMENTALES_VIEW} component={DocuentalesScreen} />

					<Route
						exact
						path={REGISTRAR_DOCUMENTAL}
						component={RegistrarScreen}
					/>
					<Redirect to={REGISTRAR_DOCUMENTAL} />
				</Switch>
			</BrowserRouter>
		</>
	);
};
