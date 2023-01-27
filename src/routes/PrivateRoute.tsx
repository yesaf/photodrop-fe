import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/checkLoggedIn';
import authService from '../api/services/auth';

interface IPrivateRouteProps {
    children: React.ReactNode;
}

function PrivateRoute({ children }: IPrivateRouteProps) {
    const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (!isLoggedIn()) {
            setLoggedIn(false);
        } else {
            authService.checkToken().then(() => {
                setLoggedIn(true);
            }).catch(() => {
                setLoggedIn(false);
            });
        }
    }, []);

    return (
        <>
            {
                 typeof loggedIn == 'undefined' || loggedIn ?
                    children :
                    <Navigate to="/login"/>
            }
        </>
    );
}

PrivateRoute.defaultProps = {
    exact: false,
};

export default PrivateRoute;
