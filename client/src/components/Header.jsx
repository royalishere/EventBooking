import React from 'react';
import logo from '../../public/events_logo.jpeg';
import '../styles/header.css';

const Header = () => {
    return (
        <header>
            <div class="header-container">
                <div class="logo">
                    <a href="/"><img src={logo} alt="EventBox Logo"/></a>
                </div>

                <div class= "wrapper">
                    <div class="search-bar">
                        <input type="text" placeholder="Bạn tìm gì hôm nay?"/>
                        <button type="submit">
                            <span>Tìm kiếm</span>
                        </button>
                    </div>

                    <a href="/createEvent" class="create-btn"> Tạo sự kiện</a>

                    <a href="/myticket" class="myticket-btn"> <i class="bi bi-ticket-detailed"></i> Vé đã mua</a>

                    <div class="login-options">
                        <a href="/login">Đăng nhập | Đăng ký</a>
                    </div>
                </div>

                
            </div>
        </header>
/*
import events_logo from '/events_logo.jpeg';
import shiba from '/shibainu.png';

const Header = () => {
    return (
        <div className="header p-3 mb-4">
            <div className="col-12 d-flex justify-content-center align-items-center m-2">
                <img src={events_logo} alt="logo" className="logo"/>
                <h4 className="text-light fw-bold mx-2">Xin chào!</h4>
                <img src={shiba} alt="shiba" className="shiba"/>
            </div>
        </div>
*/
    );
}

export default Header;