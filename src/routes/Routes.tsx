import React from 'react';
import { Routes as DomRoutes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/shared/layout/Layout';
import PrivateRoute from './PrivateRoute';
import Login from '../components/pages/login/Login';
import Albums from '../components/pages/albums/Albums';
import Album from '../components/pages/album/Album';
import BackButton from '../components/shared/backButton/BackButton';
import CreateAlbum from '../components/pages/createAlbum/CreateAlbum';
import CloseButton from '../components/shared/closeButton/CloseButton';

function Routes() {

    const privateRoutes = [
        { element: <Navigate to="/albums"/>, path: '/' },
        { element: <Albums/>, path: '/albums' },
        { element: <Album/>, path: '/albums/:id', leftButton: <BackButton/> },
        { element: <CreateAlbum/>, path: '/create', leftButton: <CloseButton/> },
    ];

    return (
        <DomRoutes>
            <Route path="/login" element={<Layout><Login/></Layout>}/>
            {
                privateRoutes.map((route, index) =>
                    <Route key={index} path={route.path} element={
                        <PrivateRoute/>

                    }>
                        <Route path={route.path}
                               element={<Layout leftButton={route.leftButton}>{route.element}</Layout>}/>
                    </Route>,
                )
            }
            <Route path="/*" element={<p>404</p>}/>
        </DomRoutes>

    );
}

export default Routes;
