import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/shared/layout/Layout';
import PrivateRoute from './PrivateRoute';
import Login from '../components/pages/login/Login';
import Albums from '../components/pages/albums/Albums';
import Album from '../components/pages/album/Album';
import BackButton from '../components/shared/backButton/BackButton';
import CreateAlbum from '../components/pages/createAlbum/CreateAlbum';
import CloseButton from '../components/shared/closeButton/CloseButton';

function AllRoutes() {

    const privateRoutes = [
        { element: <Navigate to="/albums"/>, route: '/', exact: true},
        { element: <Albums/>, route: '/albums', exact: true },
        { element: <Album/>, route: '/albums/:id', leftButton: <BackButton/>  },
        { element: <CreateAlbum/>, route: '/create', leftButton: <CloseButton/>  },
    ];

    return (
        <Routes>
            <Route path="/login" element={<Layout><Login/></Layout>}/>
            {
                privateRoutes.map((route, index) =>
                    <Route key={index} path={route.route} element={
                        <PrivateRoute>
                            <Layout leftButton={route.leftButton}>{route.element}</Layout>
                        </PrivateRoute>
                    }/>,
                )
            }
            <Route path="/*" element={<p>404</p>}/>
        </Routes>

    );
}

export default AllRoutes;
