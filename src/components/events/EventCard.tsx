
import React from 'react';
import { Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button";

type EventCardProps = {
  month: string;
  day: string;
  title: string;
  location: string;
  time: string;
  tags: string[];
  mapLocation: string;
};

const EventCard = ({ month, day, title, location, time, tags, mapLocation }: EventCardProps) => {
  const openInMaps = (location: string) => {
    const url = `https://maps.google.com/maps?q=${location}`;
    window.open(url, '_blank');
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-2">
      <div className="p-3">
        <div className="flex gap-3">
          <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
            <span className="block text-xs">{month}</span>
            <span className="block text-lg font-bold">{day}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{title}</h3>
            <p className="text-xs text-oulu-gray">{location}, {time}</p>
            <div className="flex justify-between items-center mt-1">
              <div>
                {tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full mr-1">
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-0 h-auto text-oulu-secondary"
                onClick={() => openInMaps(mapLocation)}
              >
                <Navigation size={14} className="mr-1" />
                <span className="text-xs">Map</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
