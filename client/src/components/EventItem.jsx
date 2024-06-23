import React from 'react';

const eventItem = ({event}) => {
    return (
        <div className="event-container">
            <a href={`/event-detail?eventId=${event.id}`}>
                <div width="100%" className="event-wrap">
                    <div className="image-section">
                            <span>
                                <img src={event.image} alt=""/>
                            </span>
                    </div>
                    <div className="info-section">
                        <div className="container-flex-column">
                            <span className="tilte">{event.name}</span>
                            <span className="price">Từ {event.price} </span>
                            <span className="time"><i className="bi bi-calendar2"></i>{event.time}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    );
}

export default eventItem;