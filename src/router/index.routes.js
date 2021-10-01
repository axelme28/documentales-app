import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";

import {DOCUMENTALES_VIEW,REGISTRAR_DOCUMENTAL} from '../constants/routes.constants'
import { RegistrarScreen } from '../views/Registrar.Screen';
import {DocuentalesScreen} from '../views/Docuentales.Screen';


export const IndexRoutes = () => {
    return (
        <>
            <Switch>

                <Route exact path = {DOCUMENTALES_VIEW} component = {DocuentalesScreen}/>

                <Route exact path = {REGISTRAR_DOCUMENTAL} component = {RegistrarScreen}/>

            </Switch>
        </>
    )
}
