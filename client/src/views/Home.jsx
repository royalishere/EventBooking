// src/views/Home.jsx
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavigationBar';
import Carousel from '../components/Carousel';
import EventPooling from '../components/EventPooling.jsx';
import EventItem from "../components/EventItem.jsx";
import EventCard from "../components/EventCard.jsx";
import {getAllEvents} from "../api/event.js";

const Home = () => {

    const specialEvents = [
        {
            id: 1,
            image: '/event_1.jpg',
            title: "Sự kiện đặc biệt 1",
            date: "22 tháng 06, 2024",
            price: "250.000đ",
        },
        {
            id: 2,
            image: "../event_2.jpg",
            title: "Sự kiện đặc biệt 2",
            date: "13 tháng 07, 2024",
            price: "1.000.000đ",
        },
        {
            id: 3,
            image: "../event_3.jpg",
            title: "Sự kiện đặc biệt 3",
            date: "30 tháng 08, 2024",
            price: "500.000đ",
        },
        {
            id: 4,
            image: "../event_4.jpg",
            title: "Sự kiện đặc biệt 4",
            date: "05 tháng 09, 2024",
            price: "750.000đ",
        },
    ];

    const [data, setData] = useState({});

    const getALlEvents = async () => {
        try{
            const { data } = await getAllEvents();
            setData(data);
            console.log(data);
        }
        catch (error){
            console.log("Error", error);
        }
    }

    useEffect(() => {
        getALlEvents();
    }, []);

    return (
        <div className="home-page">
            <Header/>
            <NavBar/>
            <Carousel slides={specialEvents}/>
            <h5 className="fw-bold ms-4">Sự kiện đặc biệt</h5>
            <EventPooling Component={EventCard} events={specialEvents}/>

            <h5 className="fw-bold ms-4">Nhạc sống</h5>
            <EventPooling Component={EventItem} events={specialEvents}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <h5 className="fw-bold ms-4">Sân khấu & nghệ thuật</h5>
            <EventPooling Component={EventItem} events={specialEvents}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <Footer/>
        </div>
    );
};

export default Home;
