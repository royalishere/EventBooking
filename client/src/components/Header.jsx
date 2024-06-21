import React from 'react';
import logo from '../../public/events_logo.jpeg';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <a href="/"><img src={logo} alt="EventBox Logo"/></a>
                </div>

                <div className="wrapper">
                    <div className="search-bar">
                        <input type="text" placeholder="Bạn tìm gì hôm nay?"/>
                        <button type="submit">
                            <span>Tìm kiếm</span>
                        </button>
                    </div>

                    <a href="/create-event" className="create-btn"> Tạo sự kiện</a>

                    <a href="/my-ticket" className="myticket-btn"> <i className="bi bi-ticket-detailed"></i> Vé đã
                        mua</a>

                    <div className="login-options">
                        <a href="/login">Đăng nhập | Đăng ký</a>
                    </div>
                </div>


            </div>
        </header>

    );
}

export default Header;