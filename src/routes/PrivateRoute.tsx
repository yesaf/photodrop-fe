import React from 'react';
import { Navigate } from 'react-router-dom';

interface IPrivateRouteProps {
    children: React.ReactNode;
}

function PrivateRoute({ children }: IPrivateRouteProps) {
    const isAuth = true;

    return (
        <>
            {
                isAuth ? children : <Navigate to="/login"/>
            }
        </>
    );
}

PrivateRoute.defaultProps = {
    exact: false,
}

export default PrivateRoute;
