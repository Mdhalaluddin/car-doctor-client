import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
const AuthContext = createContext();


const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        setLoader(false)
    },[])

    const authInfo = {
        loader,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;