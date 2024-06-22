import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import UserSignup from './views/UserSignup';
import UserLogin from './views/UserLogin'
import Home from './views/Home';
import ForgotPassword from './views/ForgotPassword';

const App = () => {
    return (

        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signup" element={<UserSignup/>}/>
                    <Route path="/login" element={<UserLogin/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
