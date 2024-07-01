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
import {getStorage, ref, getDownloadURL} from "firebase/storage";

const Home = () => {
    const firebaseStorage = getStorage();
    const [listEvents, setListEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const getImgList = async (events) => {
        const promises = events.map((event) => {
            const imgRef = ref(firebaseStorage, `events/event_${event.id}.jpg.webp`);
            return getDownloadURL(imgRef);
        });
        return Promise.all(promises);
    };

    const handleEvents = async () => {
        try {
            const ListEvents = await getAllEvents();
            if (ListEvents && ListEvents.data) {
                const image_urls = await getImgList(ListEvents.data);
                const updatedEvents = ListEvents.data.map((event, index) => ({
                    ...event,
                    image: image_urls[index],
                    price: "500.000đ"
                }));
                setListEvents(updatedEvents);
            }
        } catch (error) {
            console.log("Error", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleEvents();
    }, []);

    const specialEvents = listEvents.slice(0, 4);

    return (
        <div className="home-page">
            <Header/>
            <NavBar/>
            {loading ? (
                <div className="spinner-grow text-success" role="status"></div>
            ) : (
                <>
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
                </>
            )}
            <Footer/>
        </div>
    );
};

export default Home;
