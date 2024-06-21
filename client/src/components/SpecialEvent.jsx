// src/components/SpecialEvents.jsx
import React from 'react';
import EventCard from './EventCard';

const SpecialEvent = ({events}) => {
    return (
        <div className="special-events">
            {events.map((event, index) => (
                <EventCard key={index} event={event}/>
            ))}
        </div>
    );
};

export default SpecialEvent;
