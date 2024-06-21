import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import UserSignup from './views/UserSignup';
import UserLogin from './views/UserLogin'
import LoginHeader from './components/LoginHeader'
import Footer from './components/Footer'
import Header from './components/Header'
import ForgotPassword from './views/ForgotPassword';

const App = () => {
    return (
/*
        <>
            <Header/>
            <Footer/>

        </>
    )
};
*/
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/signup"/>}/>
                <Route path="/signup" element={<UserSignup/>}/>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
        </Router>
    );
};

export default App;
