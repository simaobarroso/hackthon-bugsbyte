import React from 'react';
import CulturalEvent from '../CulturalEvent/CulturalEvent'; // Import CulturalEvent component

const CulturalEventsScreen = (culturalEvents) => {
    console.log(culturalEvents)
    return (
        <div className="events-screen-container">
            <h1>Cultural Events</h1>
            <div className="events-list">
                {culturalEvents.map((event, index) => (
                    <CulturalEvent key={index} event={event} />
                ))}
            </div>
        </div>
    );
};

export default CulturalEventsScreen;
