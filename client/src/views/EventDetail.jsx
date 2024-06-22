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
                                    <span>Giá từ </span>
                                    <a href="/payment"><button class="buy-ticket">Mua vé</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="img-wrapper">
                    <img src={event_1} alt="Banner cover"/>
                    </div>
                </div>
            </div>

            <div class="intro">
                <h4>Giới thiệu</h4>
                <div class="intro-content">
                    <div class="intro-content-wrapper">
                        <div class="content-style">
                            <p>"Truyện Thần Tiên 2" là câu chuyện "Mễ Cốc Phiêu Lưu Ký" được viết và dàn dựng bởi nghệ sĩ Việt Hương và đạo diễn trẻ Thạch Thảo.&nbsp;</p>
                            <div>&nbsp;</div>
                            <div>🌈 Mễ Cốc là Hoàng tử tại Xứ Sở Ngũ Cốc, một tiểu vương quốc tuy nhỏ bé nhưng lại màu mỡ và trù phú với ngành nông nghiệp lúa gạo phát triển, Mễ Cốc tuy tài giỏi nhưng lại hơi ương ngạnh hiếu thắng. Mễ Cốc đã chọc giận Thần Lúa Nước. Vì lẽ đó Thần Lúa Nước đã trừng phạt xứ sở Ngũ Cốc. Cuộc phiêu lưu của Mễ Cốc trải qua nhiều gian nan cùng sự quấy phá của thế lực tâm tối. Cuối cùng, Mễ Cốc sẽ làm gì và đi đâu để có thể tìm lại sự yên bình của xứ sở Ngũ cốc?&nbsp;</div>
                            <div>&nbsp;</div>
                            <p>Vở diễn với sự góp mặt của các diễn viên: NSƯT Minh Nhí, Việt Hương, Cát Phượng, Hứa Minh Đạt, Gia Bảo, Mạc Văn Khoa, Quỳnh Lam, Su Su, Bảo Bảo, Năm Chà, Di Dương, Quỳnh Hồ, Chenco, Võ Minh Khải, Trung Tín, Quách Thành Nhân, Song Duy, Thiết Yến, Minh Khánh, Thành Thuận, Bảo Khanh, Tuyết Nhung, Duy Lĩnh, Hoàng Hải, Minh Huy và các diễn viên trẻ của Sân khấu Nghệ thuật Trương Hùng Minh.</p>
                            <p>&nbsp;</p>
                            <p>- TÁC GIẢ: VIỆT HƯƠNG - THẠCH THẢO</p>
                            <p>- ĐẠO DIỄN: VIỆT HƯƠNG</p>
                            <p>- PHÓ ĐẠO DIỄN: THẠCH THẢO</p>
                            <p>- CỐ VẤN NGHỆ THUẬT: NSND TRẦN NGỌC GIÀU</p>
                            <p>- THIẾT KẾ SÂN KHẤU: TRẦN HỒNG VÂN</p>
                            <p>- PHỤC TRANG: HƯƠNG NAM PRODUCTION - ĐINH HOÀNG&nbsp;</p>
                            <p>- BIÊN ĐẠO MÚA: HẢI ÂU - CHENCO</p>
                            <p>- THIẾT KẾ POSTER: TIẾN SỸ</p>
                            <p>- ĐƠN VỊ SẢN XUẤT: CÔNG TY TNHH PVH STAR</p>
                            <p>&nbsp;</p>
                            <p>+ Theo quy định của sân khấu, các bé từ 5 tuổi trở lên sẽ mua vé. Trẻ dưới 5 tuổi được miễn phí vé nhưng cần sử dụng chung chỗ ngồi của phụ huynh. Nếu khách hàng muốn bé được ngồi chỗ riêng, thì hành khách cần mua vé trẻ em riêng.</p>
                            <p>&nbsp;</p>
                            <p>+ CHỈ MANG VÀO THỨC ĂN VÀ ĐỒ UỐNG MUA TẠI RẠP</p>
                            <p>&nbsp;&nbsp;+ KHÔNG HÚT THUỐC</p>
                            <p>&nbsp;&nbsp;+ KHÔNG QUAY PHIM VÀ CHỤP ẢNH</p>
                            <p>&nbsp;&nbsp;+ KHÔNG NÓI CHUYỆN ỒN ÀO</p>
                            <p>&nbsp;&nbsp;+ NHỚ TẮC CHUÔNG ĐIỆN THOẠI VÀ KHÔNG MỞ ĐÈN FLASH ĐIỆN THOẠI NHA</p>
                            <p>TRÂN TRỌNG CẢM ƠN QUÝ KHÁN GIẢ!</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default EventDetail;
