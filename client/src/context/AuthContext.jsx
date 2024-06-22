import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth} from '../firebase/firebase';
import {onAuthStateChanged} from 'firebase/auth';

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    });

    async function initializeUser(user) {
        if (user) {
            setIsAuthenticated(true);
            setCurrentUser({...user});
        } else {
            setIsAuthenticated(false);
            setCurrentUser(null);
        }
        setLoading(false);
    }

    const value = {
        isAuthenticated,
        currentUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
