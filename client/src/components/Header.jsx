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

                <div class="wrapper">
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

    );
}

export default Header;