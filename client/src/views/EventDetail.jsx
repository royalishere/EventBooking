import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavigationBar';
import event_1 from '../../public/event_1.jpg';
import '../styles/_event_detail.scss';

const EventDetail = () => {
    return (
        <div class="Event-detail">
            <Header/>
            <NavBar/>
            <div id="banner" class="banner-wrapper">
                <div class="container-content">
                    <div class="text-wrapper">
                        <div id="circle1" class="circle"></div>
                        <div id="circle2" class="circle"></div>
                        <div class="text">
                            <div class="info">
                                <p id="title"><strong>[Sân Khấu Quốc Thảo] Nhạc kịch thiếu nhi: Đảo Muôn Màu & Cuộc Thử Thách Sinh Tồn
                                            </strong></p>
                                <p id="date"><span id="date-text"><i class="bi bi-calendar-minus"></i> 19:00 - 20:15, 22 tháng 06, 2024
                                </span></p>
                                <p id="address"><span><i class="bi bi-geo-alt-fill"></i>Sân Khấu Quốc Thảo</span></p>
                                <p id="address-text">55B Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, Hồ Chí Minh</p>
                            </div>
                            <div class="price-tk">
                                <div class="ticket-price">
                                    <span>Giá từ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-wrapper">
                    <img src={event_1} alt="Banner cover"/>
                    </div>
                </div>
            </div>

            <div className="ticket-info">
                <h4>Thông tin vé</h4>
                <div className="ticket-content">
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default EventDetail;
