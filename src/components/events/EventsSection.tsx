
import React from 'react';
import CollapsibleSection from '../collapsible/CollapsibleSection';
import EventCard from './EventCard';

const EventsSection = () => {
  // Main visible event
  const mainEvent = {
    month: 'APR',
    day: '15',
    title: 'Oulu Day Festival',
    location: 'Market Square',
    time: '12:00 - 18:00',
    tags: ['Family', 'Outdoor'],
    mapLocation: '65.013826,25.464782'
  };
  
  // Additional events for collapsible content
  const additionalEvents = [
    {
      month: 'APR',
      day: '17',
      title: 'Art Exhibition Opening',
      location: 'Cultural Center',
      time: '17:00 - 20:00',
      tags: ['Arts', 'Indoor'],
      mapLocation: '65.012052,25.470384'
    },
    {
      month: 'APR',
      day: '18',
      title: 'Local Food Festival',
      location: 'Rotuaari',
      time: '10:00 - 16:00',
      tags: ['Food', 'Outdoor'],
      mapLocation: '65.011932,25.471068'
    }
  ];
  
  return (
    <CollapsibleSection 
      title="Events near you" 
      collapsibleContent={
        <>
          {additionalEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </>
      }
    >
      <EventCard {...mainEvent} />
    </CollapsibleSection>
  );
};

export default EventsSection;
