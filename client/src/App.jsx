import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import UserSignup from './views/UserSignup';
import UserLogin from './views/UserLogin'
import Home from './views/Home';
import ForgotPassword from './views/ForgotPassword';
import Profile from './views/Profile';

const App = () => {
    return (

        <Router>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/signup" element={<UserSignup/>}/>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>  
    );
};

export default App;
