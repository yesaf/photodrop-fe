import React, { useMemo } from 'react';
import { Routes as DomRoutes, Route } from 'react-router-dom';
import Layout from '../components/shared/layout/Layout';
import PrivateRoute from './PrivateRoute';
import Login from '../components/pages/login/Login';
import privateRoutes from './privateRoutes';

function Routes() {
    const privateRoutesList = useMemo(() => privateRoutes.map((route, index) =>
        <Route key={index} path={route.path} element={
            <PrivateRoute/>

        }>
            <Route path={route.path}
                   element={<Layout leftButton={route.leftButton}>{route.element}</Layout>}/>
        </Route>,
    ), []);

    return (
        <DomRoutes>
            <Route path="/login" element={<Layout><Login/></Layout>}/>
            {privateRoutesList}
        </DomRoutes>

    );
}

export default Routes;
