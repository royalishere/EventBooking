// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({event}) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.name}/>
            <div className="event-info">
                <h5 className="fw-bold">{event.name}</h5>
                <p><i className="bi bi-calendar2"></i> {event.time}</p>
                <p className="price">Từ {event.price}</p>
            </div>
            <a href={`event-detail?eventId=${event.id}`} className="btn btn-primary">
                Xem Chi Tiết
            </a>
        </div>
    );
};

export default EventCard;
