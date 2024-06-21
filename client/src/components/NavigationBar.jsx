// src/components/Header.jsx
import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <ul className="nav-links">
                <li><Link to="/">Nhạc sống</Link></li>
                <li><Link to="/">Sân khấu & Nghệ thuật</Link></li>
                <li><Link to="/">Thể Thao</Link></li>
                <li><Link to="/">Khác</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
