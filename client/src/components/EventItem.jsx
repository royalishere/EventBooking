import React from 'react';
import {Link} from 'react-router-dom';
import anh from '../../public/anh.png';

const eventItem = ({event}) => {
    return (
        <div className="event-container">
            <a href={`/event/getById/${event.id}`}>
                <div width="100%" className="event-wrap">
                    <div className="image-section">
                            <span>
                                <img src={anh} alt=""/>
                            </span>
                    </div>
                    <div className="info-section">
                        <div className="container-flex-column">
                            <span className="tilte">{event.title}</span>
                            <span className="price">Từ {event.price}</span>
                            <span className="time"><i className="bi bi-calendar2"></i>{event.date}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    );
}

export default eventItem;