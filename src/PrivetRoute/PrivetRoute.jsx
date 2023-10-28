import { useContext } from "react";
import { AuthContext } from "../AuthCotext/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loader}= useContext(AuthContext);
    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivetRoute;