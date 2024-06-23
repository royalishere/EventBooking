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

    const [listEvents, setListEvents] = useState([]);

    const handleEvents = async () => {
        try {
            const ListEvents = await getAllEvents();
            if (ListEvents && ListEvents.data) {
                const updatedEvents = ListEvents.data.map((event, index) => ({
                    ...event,
                    image: `/event_${index + 1}.jpg`,
                    price: "500.000đ"
                }));
                setListEvents(updatedEvents);
            }
        } catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        handleEvents();
    }, []);

    const specialEvents = listEvents.slice(0, 4);

    return (
        <div className="home-page">
            <Header/>
            <NavBar/>
            <Carousel slides={specialEvents}/>
            <h5 className="fw-bold ms-4">Sự kiện đặc biệt</h5>
            <EventPooling Component={EventCard} events={specialEvents}/>

            <h5 className="fw-bold ms-4">Nhạc sống</h5>
            <EventPooling Component={EventItem} events={listEvents}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <h5 className="fw-bold ms-4">Sân khấu & nghệ thuật</h5>
            <EventPooling Component={EventItem} events={listEvents}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <h5 className="fw-bold ms-4">Thể thao</h5>
            <EventPooling Component={EventItem} events={[]}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <h5 className="fw-bold ms-4">Khác</h5>
            <EventPooling Component={EventItem} events={[]}/>
            <p className="text-end me-4"><a href="/events" className="more-detail">Xem thêm <i
                className="bi bi-arrow-right-square"></i></a>
            </p>
            <Footer/>
        </div>
    );
};

export default Home;
