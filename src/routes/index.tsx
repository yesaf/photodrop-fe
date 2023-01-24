import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/shared/layout/Layout';
import PrivateRoute from './PrivateRoute';
import Login from '../components/pages/login/Login';
import Albums from '../components/pages/albums/Albums';
import Album from '../components/pages/album/Album';

function AllRoutes() {

    const privateRoutes = [
        { element: <Navigate to="/albums"/>, route: '/', exact: true },
        { element: <Albums/>, route: '/albums', exact: true },
        { element: <Album/>, route: '/albums/:id' },
    ];

    return (
        <Routes>
            <Route path="/login" element={<Layout><Login/></Layout>}/>
            {
                privateRoutes.map((route, index) =>
                    <Route key={index} path={route.route} element={
                        <PrivateRoute>
                            <Layout>{route.element}</Layout>
                        </PrivateRoute>
                    }/>,
                )
            }
            <Route path="/*" element={<p>404</p>}/>
        </Routes>

    );
}

export default AllRoutes;
