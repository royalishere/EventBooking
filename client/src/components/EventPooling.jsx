// src/components/SpecialEvents.jsx
import React from 'react';

const EventPooling = ({Component, events}) => {
    return (
        <div className="events-pooling">
            {events.map((event, index) => (
                <Component key={index} event={event}/>
            ))}
        </div>
    );
};

export default EventPooling;
