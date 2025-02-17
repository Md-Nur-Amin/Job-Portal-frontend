import  { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { authContext } from '../Layout/Provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading } = useContext(authContext)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    return (
        <Navigate to="/login" ></Navigate>
    );
};

export default PrivateRoute;