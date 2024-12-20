import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(result => { })
            .catch(error => { })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const userInfo = {
        user,
        googleSignIn,
        logOut,
        loading
    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;