import React from 'react';
import Header from '../components/Header';
import ToastContainer from "../components/Toast";
import '../styles/_select_ticket.scss';

const EventDetail = () => {
    return (
        <div class="select-ticket">
            <ToastContainer/>
            <Header/>
            <div class="container">
                <div class="container-style">
                    <div class="left-col">
                        <div class="ticket-wrapper">
                            <div class="title">
                                <div class="back-page">
                                    <a href="javascript:history.back()"><span><i class="bi bi-arrow-left"></i>Trở về</span></a>
                                    <div class="text">Chọn vé</div>
                                </div>
                            </div>

                            <div class="ticket-container">
                                <div class="ticket-row-style">
                                    <div class="tbox-col-lg-2 "></div>
                                    <div class="tbox-col-md-12 tbox-col-lg-8">
                                        <div class="ticket-container-style">
                                            <div class="ticket-header">
                                                <div class="tbox-col-lg-8">
                                                    <span>Loại vé</span>
                                                </div>

                                                <div class="tbox-col-lg-4">
                                                    <span>Số lượng</span>
                                                </div>
                                            </div>

                                            <div class="ticket-row">
                                                <div class="tbox-col-md-9 ">
                                                    <p class="ticket-type">Vé loại A</p>
                                                    <p clasS="ticket-price">1.700.000</p>
                                                </div>

                                                <div class="tbox-col-md-3">
                                                    <div class="count-ticket"> 
                                                        <input  class="count" type="number" value="0"/>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="ticket-row">
                                                <div class="tbox-col-md-9 ">
                                                    <p class="ticket-type">Vé loại B</p>
                                                    <p clasS="ticket-price">1.100.000</p>
                                                </div>

                                                <div class="tbox-col-md-3">
                                                    <span>Hết vé</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tbox-col-lg-2 "></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="right-col">
                        <div class="right-col-style">
                            <div class="info-title">
                                <span>[BẾN THÀNH] Đêm nhạc Lân Nhã - Phương Linh</span>
                            </div>

                            <div class="info-content">
                                <span class="time"> <i class="bi bi-calendar-minus"></i> 20:00, 27 tháng 6, 2024</span>
                                <span class="address"> <i class="bi bi-geo-alt-fill"></i> Lầu 3, Nhà hát Bến Thành</span>
                            </div>

                            <div class="divider"></div>

                            <div class="price-list">
                                <div class="price-list-header">
                                    <div class="price-list-title">Giá vé</div>
                                </div>
                                <div class="price-list-content">
                                    <ul class="list-item">
                                        <li>
                                            <div class="tag-name">Vé loại A</div>
                                            <div class="item-price">1.700.000 đ</div>
                                        </li>

                                        <li>
                                            <div class="tag-name">Vé loại B</div>
                                            <div class="item-price">1.100.000 đ</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="btn-wrapper">
                                <button>Tiếp tục</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EventDetail;
