import React, {createContext, useContext, useEffect, useState} from 'react';
import {auth} from '../firebase/firebase';
import {onAuthStateChanged} from 'firebase/auth';
import {getUserByEmail} from '../api/user';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setLoading(true); // Bắt đầu tải dữ liệu
            if (user) {
                try {
                    const userData = await getUserByEmail(user.email);
                    setCurrentUser({...user, SID: userData.data.id});
                    setIsAuthenticated(true);
                } catch (error) {
                    console.log("Error fetching user data", error);
                    setIsAuthenticated(false);
                    setCurrentUser(null);
                }
            } else {
                setIsAuthenticated(false);
                setCurrentUser(null);
            }
            setLoading(false); // Kết thúc tải dữ liệu
        });
        return () => unsubscribe();
    }, []);

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
