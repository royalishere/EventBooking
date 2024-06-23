import React, {useEffect, useState} from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import TicketEmpty from '../components/TicketEmpty.jsx';
import {useAuth} from "../context/AuthContext.jsx";

const MyTicket = () => {

    const {currentUser} = useAuth();

    useEffect(() => {
        const items = document.querySelectorAll('.tab-wrapper a');
        const handleClick = (item) => () => {
            items.forEach(i => i.classList.replace('clicked', 'tab'));
            item.classList.replace('tab', 'clicked');
        };
        items.forEach(item => {
            item.addEventListener('click', handleClick(item));
        });

        // Cleanup event listeners on unmount
        return () => {
            items.forEach(item => {
                item.removeEventListener('click', handleClick(item));
            });
        };
    }, []);

    return (
        <>
            <Header/>
            <div className="my-ticket-container">
                <div className="breadcumb-wrapper">
                    <a href="/" target="_blank" className="">Trang chủ<i className="bi bi-arrow-right"></i> </a>
                    <span className="Breadcrumbs-current"> Vé đã mua</span>
                </div>

                <div className="container-flex">
                    <nav className="nav-wrapper">
                        <div className="nav-account">
                            <img src={currentUser.photoURL} className="account-avartar" alt="avartar"/>
                            <div className="account-name">
                                <span className="account-name-text">Tài khoản của</span>
                                <span className="account-name-value">{currentUser.name}</span>
                            </div>
                        </div>

                        <ul className="nav-menu">
                            <li>
                                <a href="/profile">
                                    <span><i className="bi bi-person-fill"></i>&ensp; Thông tin cá nhân</span>
                                </a>
                            </li>
                            <li>
                                <a href="/my-ticket">
                                    <span id="current-page"><i
                                        className="bi bi-ticket-detailed"></i>&ensp; Vé đã mua</span>
                                </a>
                            </li>
                            <li>
                                <a href="/organizer/event">
                                    <span><i className="bi bi-calendar2-week-fill"></i>&ensp; Sự kiện của tôi</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="page-container">
                        <div className="page-header">Vé đã mua</div>
                        <div className="divider"></div>
                        <div className="tab-wrapper">
                            <a title="Tất cả" className="clicked">Tất cả</a>
                            <a title="Thành công" className="tab">Thành công</a>
                            <a title="Đang xử lý" className="tab">Đang xử lý</a>
                            <a title="Đã hủy" className="tab">Đã hủy</a>
                        </div>
                        <TicketEmpty/>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default MyTicket;