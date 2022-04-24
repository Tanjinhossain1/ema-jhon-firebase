import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;