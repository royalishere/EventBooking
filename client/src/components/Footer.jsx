import React from 'react';
import fb_icon from '../../public/facebook-icon.png';
import ig_icon from '../../public/instagram-icon.png';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-section">
                    <h4>EventBox</h4>
                    <p>EventBox là hệ thống quản lý và phân phối vé sự kiện. Ứng dụng phục vụ đồ án môn Ứng dụng phân tán.</p>
                </div>
                <div class="footer-section">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Contact Us</h4>
                    <p><i class="bi bi-geo-alt-fill"></i> 227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh</p>
                    <p><i class="bi bi-envelope-fill"></i> support@eventbox.vn</p>
                    <p><i class="bi bi-telephone-fill"></i> +84 123 456 789</p>
                </div>

                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <ul class="social-icons">
                        <li><a href="#"><img src={fb_icon} alt="Facebook"/></a></li>
                        <li><a href="#"><img src={ig_icon} alt="Instagram"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>

    );
}

export default Footer;