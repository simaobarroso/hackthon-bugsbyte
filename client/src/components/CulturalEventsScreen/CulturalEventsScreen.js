import React from 'react';
import CulturalEvent from '../CulturalEvent/CulturalEvent'; // Import CulturalEvent component

const CulturalEventsScreen = () => {
    // Sample data for cultural events
    const culturalEvents = [
        {
            title: 'Concert in the Park',
            description: 'Enjoy an evening of live music in the park.',
            date: 'April 10, 2024',
            location: 'Vila Nova de Famalicão, Braga',
        },
        {
            title: 'Art Exhibition Opening',
            description: 'Discover new artworks by local artists.',
            date: 'April 15, 2024',
            location: 'Vila Nova de Famalicão, Braga',
        },
        // Add more events as needed
    ];

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
