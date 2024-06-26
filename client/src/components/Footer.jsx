import React from 'react';
import fb_icon from '/facebook-icon.png';
import ig_icon from '/instagram-icon.png';

const Footer = React.memo(() => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>EventBox</h4>
                    <p>EventBox là hệ thống quản lý và phân phối vé sự kiện. Ứng dụng phục vụ đồ án môn Ứng dụng phân
                        tán.</p>
                </div>
                <div className="footer-section">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p><i className="bi bi-geo-alt-fill"></i> 227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh</p>
                    <p><i className="bi bi-envelope-fill"></i> support@eventbox.vn</p>
                    <p><i className="bi bi-telephone-fill"></i> +84 123 456 789</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-icons">
                        <li><a href="#"><img src={fb_icon} alt="Facebook"/></a></li>
                        <li><a href="#"><img src={ig_icon} alt="Instagram"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>

    );
})

export default Footer;