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
        <div>
            <Header/>
            <NavBar/>
            <Carousel slides={specialEvents}/>
            <h2>Sự kiện đặc biệt</h2>
            <SpecialEvent events={specialEvents}/>
            <Footer/>
        </div>
    );
};

export default Home;
