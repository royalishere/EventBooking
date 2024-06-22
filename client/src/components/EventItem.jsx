import React from 'react';

const eventItem = ({event}) => {
    return (
        <div class="event-container">
            <a href={`/eventdetail`}>
                <div width="100%" class="event-wrap">
                    <div class="image-section">
                            <span>
                                <img src={event.image} alt=""/>
                            </span>
                    </div>
                    <div class="info-section">
                        <div class="container-flex-column">
                            <span class="tilte">{event.title}</span>
                            <span class="price">Từ {event.price} </span>
                            <span class="time"><i class="bi bi-calendar2"></i>{event.date}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    );
}

export default eventItem;