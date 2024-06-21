// src/views/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavigationBar';
import Carousel from '../components/Carousel';
import SpecialEvent from '../components/SpecialEvent';

const Home = () => {

    const specialEvents = [
        {
            image: '/event_1.jpg',
            title: "Sự kiện đặc biệt 1",
            date: "22 tháng 06, 2024",
            price: "250.000đ",
        },
        {
            image: "../event_2.jpg",
            title: "Sự kiện đặc biệt 2",
            date: "13 tháng 07, 2024",
            price: "1.000.000đ",
        },
        {
            image: "../event_3.jpg",
            title: "Sự kiện đặc biệt 3",
            date: "30 tháng 08, 2024",
            price: "500.000đ",
        },
        {
            image: "../event_4.jpg",
            title: "Sự kiện đặc biệt 4",
            date: "05 tháng 09, 2024",
            price: "750.000đ",
        },
    ];

    return (
        <div className="home-page">
            <Header/>
            <NavBar/>
            <Carousel slides={specialEvents}/>
            <h5 className="fw-bold ms-5">Sự kiện đặc biệt</h5>
            <SpecialEvent events={specialEvents}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <h5 className="fw-bold ms-5">Nhạc sống</h5>
            <SpecialEvent events={specialEvents}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <h5 className="fw-bold ms-5">Sân khấu & nghệ thuật</h5>
            <SpecialEvent events={specialEvents}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <Footer/>
        </div>
    );
};

export default Home;
