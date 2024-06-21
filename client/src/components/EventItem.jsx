import React from 'react';
import { Link } from 'react-router-dom';
import anh from '../../public/anh.png';
import '../styles/event_item.css';

const eventItem = ({event}) => {
    return (
        <Link to={`/event/getById/${event.id}`} className="event-item">
            <div class="event-container">
                <a href="/event/getById/${event.id}" >
                    <div  width="100%" class="event-wrap">
                    <div class="image-section">
                            <span>
                                <img src={anh} alt=""/>
                            </span>
                    </div>
                    <div class="info-section">
                            <div class="container-flex-column">
                                <span class="tilte">{event.name}</span>
                                <span class="price">Gọi hàm để lấy giá vé</span>
                                <span class="time"><i class="bi bi-calendar2"></i>{event.time}</span> 
                            </div>
                    </div>
                    </div>
                </a>
            </div>
        </Link>
        
    );
}

export default eventItem;