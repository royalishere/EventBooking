import React from 'react';
import logo from '../../public/events_logo.jpeg';
import {useAuth} from '../context/AuthContext';
import {logout} from '../api/auth';

const Header = () => {

    const {isAuthenticated} = useAuth();

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

                    {isAuthenticated ? (
                        <div className="dropdown">
                            <button className="dropbtn">Tài khoản <i className="bi bi-caret-down-square-fill"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="/my-events"><i className="bi bi-calendar2-event"></i> Sự kiện của tôi</a>
                                <a href="/profile"><i className="bi bi-person-circle"></i> Trang cá nhân</a>
                                <button onClick={logout}><i className="bi bi-box-arrow-right"></i> Đăng xuất</button>
                            </div>
                        </div>) : (
                        <div className="login-options">
                            <a href="/login">Đăng nhập | Đăng ký</a>
                        </div>)}
                </div>


            </div>
        </header>

    );
}

export default Header;