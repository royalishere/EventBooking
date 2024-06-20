import React from 'react';
import events_logo from '../../public/events_logo.jpeg';
import shiba from '../../public/shibainu.png';
import '../styles/Login.css';

const LoginHeader = () => {
    return (
        <div className="login-header p-3 mb-4">
            <div className="col-12 d-flex justify-content-center align-items-center m-2">
                <img src={events_logo} alt="logo" className="logo"/>
                <h4 className="text-light fw-bold mx-2">Xin chào!</h4>
                <img src={shiba} alt="shiba" className="shiba"/>
            </div>
        </div>
    );
}

export default LoginHeader;