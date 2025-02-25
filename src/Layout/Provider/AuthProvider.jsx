import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    updateProfile, // ✅ Import updateProfile function
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

    // ✅ Create New User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // ✅ Update User Profile (Name & Photo)
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        }).then(() => {
            // Update local state after Firebase update
            setUser((prevUser) => ({
                ...prevUser,
                displayName: name,
                photoURL: photoURL,
            }));
        });
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
        return sendPasswordResetEmail(auth, email);
    };

    const logOut = () => {
        return signOut(auth);
    };

    // for Auth State Changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("User state changed:", currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    // Provide All Auth Functions in Context
    const authInfo = {
        user,
        createUser,
        updateUserProfile, //  updateProfile function
        logIn,
        logOut,
        signUpWithGoogle,
        signUpWithGithub,
        resetPassword,
    };

    return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
};

export default AuthProvider;
