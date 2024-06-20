import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserSignup from './views/UserSignup';
import UserLogin from './views/UserLogin';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<UserSignup/>}/>
                <Route path="/login" element={<UserLogin/>}/>
            </Routes>
        </Router>
    );
};

export default App;
