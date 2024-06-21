// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({event}) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.title}/>
            <div className="event-info">
                <h5 className="fw-bold">{event.title}</h5>
                <p>{event.date}</p>
                <p>Từ {event.price}</p>
            </div>
            <button className="btn btn-primary">Xem Chi Tiết</button>
        </div>
    );
};

export default EventCard;
