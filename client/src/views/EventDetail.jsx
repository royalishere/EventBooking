import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavigationBar';
import {getById} from '../api/event';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

const EventDetail = () => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const firebaseStorage = getStorage();
    const location = useLocation();
    const navigate = useNavigate();

    // Hàm để lấy eventId từ URL
    const getEventIdFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('eventId');
    };

    useEffect(() => {
        const fetchEvent = async () => {
            const eventId = getEventIdFromQuery();
            if (eventId) {
                try {
                    const response = await getById(eventId);
                    if (response.data === "Event not found") {
                        navigate('/error'); // Điều hướng đến trang lỗi nếu không tìm thấy sự kiện
                    }
                    const image_url = await getDownloadURL(ref(firebaseStorage, `events/event_${eventId}.jpg.webp`));
                    setEvent(event => ({
                        ...response.data,
                        image: image_url,
                    }));
                    setLoading(false);
                } catch (error) {
                    console.log("Error fetching event:", error);
                }
            } else {
                navigate('/error'); // Điều hướng đến trang lỗi nếu eventId không hợp lệ
            }
        };

        fetchEvent();
    }, [location.search]);

    if (!event) {
        return;
    }
    return (
        <div className="Event-detail">
            <Header/>
            <NavBar/>
            {loading ? (
                <div className="spinner-grow text-success" role="status"></div>
            ) : (
                <div id="banner" className="banner-wrapper">
                    <div className="container-content">
                        <div className="text-wrapper">
                            <div id="circle1" className="circle"></div>
                            <div id="circle2" className="circle"></div>
                            <div className="text">
                                <div className="info">
                                    <p id="title"><strong>{event.name}</strong></p>
                                    <p id="date"><span id="date-text"><i
                                        className="bi bi-calendar-minus"></i> {event.time}</span>
                                    </p>
                                    <p id="address"><span><i className="bi bi-geo-alt-fill"></i> {event.address}</span>
                                    </p>
                                </div>
                                <div className="price-tk">
                                    <div className="ticket-price">
                                        <span>Giá từ {event.price}</span>
                                        <a href="/payment">
                                            <button className="buy-ticket">Mua vé</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-wrapper">
                            <img src={event.image} alt="Banner cover"/>
                        </div>
                    </div>
                </div>
            )}
            <div className="intro">
                <h4>Giới thiệu</h4>
                <div className="intro-content">
                    <div className="intro-content-wrapper">
                        <div className="content-style">
                            {event.description}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default EventDetail;
