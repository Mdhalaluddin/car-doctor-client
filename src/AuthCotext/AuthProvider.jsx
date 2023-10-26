import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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

    // google singIn
    const googleSingIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
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
        googleSingIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;