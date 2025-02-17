// import { createContext, useEffect, useState } from "react";
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     GoogleAuthProvider,
//     GithubAuthProvider
// } from "firebase/auth";
// import app from "../Auth/firebase.config";

// export const authContext = createContext(null);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const logIn = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     const signUpWithGoogle = () => {
//         return signInWithPopup(auth, googleProvider);
//     };

//     const signUpWithGithub = () => {
//         return signInWithPopup(auth, githubProvider);
//     };

//     const logOut = () => {
//         return signOut(auth);
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             console.log("User in the auth state change", currentUser);
//             setUser(currentUser);
//         });

//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         user,
//         createUser,
//         logIn,
//         logOut,
//         signUpWithGoogle,
//         signUpWithGithub
//     };

//     return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
// };

// export default AuthProvider;


import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail, // ✅ Import reset function
    GoogleAuthProvider,
    GithubAuthProvider
} from "firebase/auth";
import app from "../Auth/firebase.config";

export const authContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signUpWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email); // ✅ Add Reset Password Function
    };

    const logOut = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("User in the auth state change", currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        signUpWithGoogle,
        signUpWithGithub,
        resetPassword, // ✅ Add resetPassword to context
    };

    return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
};

export default AuthProvider;
