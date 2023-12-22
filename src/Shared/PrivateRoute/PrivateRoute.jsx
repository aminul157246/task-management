import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../AuthProvider/AuthProvider";



const PrivateRoute = ({children}) => {


    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);

    if(loader){
            return <span className="loading loading-bars loading-lg"></span>
    }


    if(!user?.email){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
        
    }
    return  children
};


PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;