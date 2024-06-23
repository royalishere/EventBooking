import React, {useEffect, useState} from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import TicketEmpty from '../components/TicketEmpty.jsx';
import '../styles/_my_ticket.scss';
import logo from '../../public/events_logo.jpeg';

       

const MyTicket = () => {

  
  const items = document.querySelectorAll('.tab-wrapper a');
  items.forEach(item => {
    item.addEventListener('click', () => {
        items.forEach(i => i.classList.replace('clicked','tab'));
        item.classList.replace('tab','clicked');
    });
  }); 

  return (
    <div class="My-ticket">
        <Header/>
        <div class="my-ticket-container">
           <div class="breadcumb-wrapper">
              <a href="/" target="_blank" class="">Trang chủ<i class="bi bi-arrow-right"></i> </a>
              <span class="Breadcrumbs-current"> Vé đã mua</span>
           </div>

           <div class="container-flex">
              <nav class="nav-wrapper">
                <div class="nav-account">
                  <img src={logo} class="account-avarta"/>
                  <div class="account-name">
                    <span class="account-name-text">Tài khoản của</span>
                    <span class="account-name-value">Võ Minh Hiếu</span>
                  </div>
                </div>

                <ul class="nav-menu">
                    <li>
                      <a href="/profile">
                        <span><i class="bi bi-person-fill"></i>&ensp; Thông tin cá nhân</span>
                      </a>
                    </li>
                    <li>
                        <a href="/my-ticket">
                            <span id="current-page"><i className="bi bi-ticket-detailed"></i>&ensp; Vé đã mua</span>
                        </a>
                    </li>
                    <li>
                        <a href="/organizer/event">
                            <span><i class="bi bi-calendar2-week-fill"></i>&ensp; Sự kiện của tôi</span>
                        </a>
                    </li>
                </ul>
              </nav>

              <div class="page-container">
                  <div class="page-header">Vé đã mua</div>
                  <div class="divider"></div>
                  <div class="tab-wrapper">
                      <a title="Tất cả" class="clicked">Tất cả</a>
                      <a title="Thành công" class="tab">Thành công</a>
                      <a title="Đang xử lý" class="tab">Đang xử lý</a>
                      <a title="Đã hủy" class="tab">Đã hủy</a>
                  </div>
                  <TicketEmpty/>
              </div>

           </div>
        </div>
        <Footer/>
    </div>
  );
}

export default MyTicket;