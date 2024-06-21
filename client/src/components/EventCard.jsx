// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({event}) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.title}/>
            <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>Từ {event.price}</p>
                <button className="btn btn-primary">Xem Chi Tiết</button>
            </div>
        </div>
    );
};

export default EventCard;
