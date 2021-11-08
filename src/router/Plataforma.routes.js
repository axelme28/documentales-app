import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { REGISTRAR_ADMINISTRADOR, REGISTRAR_ALUMNOS, REGISTRAR_PROFESOR, REGISTRAR_UNIVERSIDAD } from '../constants/routes.constants';
import { RegistrarAdmiscreen } from '../views/RegistrarAdmi.screen';
import { RegistroAlum } from '../views/RegistroAlum.screen';
import { RegistroProfescreen } from '../views/RegistroProfe.screen';
import { RegistroUniscreen } from '../views/RegistroUni.screen';

export const Plataformaroutes = () => {
    return (
		<>
			<BrowserRouter>
				<Switch>
						<>
							<Route
								exact
								path={REGISTRAR_ADMINISTRADOR}
								component={RegistrarAdmiscreen}
							/>

							<Route
								exact
								path={ REGISTRAR_ALUMNOS}
								component={RegistroAlum}
							/>
							

							<Route
							     	exact
									 path = { REGISTRAR_PROFESOR}
									 component = {RegistroProfescreen }
									 />

                           <Route
							     	exact
									 path = {REGISTRAR_UNIVERSIDAD} 
									 component = { RegistroUniscreen}
									 />

							{/* <Redirect path={LOG_IN} /> */}
						</>
				</Switch>
			</BrowserRouter>
		</>
	);
}