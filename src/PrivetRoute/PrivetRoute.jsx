import { useContext } from "react";
import { AuthContext } from "../AuthCotext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user, loader}= useContext(AuthContext);
    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivetRoute;