import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import UserSignup from './views/UserSignup';
import UserLogin from './views/UserLogin'
import Home from './views/Home';
import ForgotPassword from './views/ForgotPassword';
import Profile from './views/Profile';
import EventDetail from './views/EventDetail';
import MyTicket from './views/MyTicket';
import SelectTicket from './views/SelectTicket';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signup" element={<UserSignup/>}/>
                    <Route path="/login" element={<UserLogin/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    <Route path="/event-detail" element={<EventDetail/>}/>
                    <Route path="/my-ticket" element={<MyTicket/>}/>
                    <Route path="/select-ticket" element={<SelectTicket/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
