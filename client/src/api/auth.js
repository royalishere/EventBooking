import {auth} from "../firebase/firebase";
import {
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";

export const registerWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const loginWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
}

export const logout = async () => {
    return await signOut(auth);
}

export const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
}