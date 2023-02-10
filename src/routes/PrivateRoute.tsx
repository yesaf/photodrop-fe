import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { tokenExists } from '../utils/checkLoggedIn';
import authService from '../api/services/auth';


function PrivateRoute() {
    const [loggedIn, setLoggedIn] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        if (!tokenExists()) {
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
                    <Outlet/> :
                    <Navigate to="/login"/>
            }
        </>
    );
}

export default PrivateRoute;
