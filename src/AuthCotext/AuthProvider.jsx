import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);

    // newUser
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //singIn
    const singIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
    const logOut =()=>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser);
            console.log('create User', createUser);
            setLoader(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        loader,
        user,
        createUser,
        singIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;