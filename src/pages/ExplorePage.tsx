
import { MapPin, Calendar, Store, Building, Search } from "lucide-react";

const categories = [
  { name: "Places", icon: MapPin, color: "bg-blue-500" },
  { name: "Events", icon: Calendar, color: "bg-green-500" },
  { name: "Businesses", icon: Store, color: "bg-orange-500" },
  { name: "Services", icon: Building, color: "bg-purple-500" },
];

const featuredPlaces = [
  {
    id: 1,
    name: "Oulu Market Square",
    type: "Public Place",
    image: "https://placehold.co/400x250/F4F9FF/0A56A3?text=Market+Square",
  },
  {
    id: 2,
    name: "Nallikari Beach",
    type: "Nature",
    image: "https://placehold.co/400x250/F4F9FF/0A56A3?text=Nallikari+Beach",
  },
  {
    id: 3,
    name: "Oulu Cathedral",
    type: "Historic Site",
    image: "https://placehold.co/400x250/F4F9FF/0A56A3?text=Oulu+Cathedral",
  },
];

const ExplorePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-oulu-dark mb-4">Explore Oulu</h1>
      
      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for places, events and services..."
          className="w-full bg-white border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-oulu-secondary"
        />
        <Search className="absolute left-3 top-2.5 text-oulu-gray" size={20} />
      </div>
      
      {/* Categories */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="flex flex-col items-center p-2"
          >
            <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center text-white mb-1`}>
              <category.icon size={20} />
            </div>
            <span className="text-xs text-center">{category.name}</span>
          </div>
        ))}
      </div>
      
      {/* Featured Places */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-oulu-dark">Featured Places</h2>
          <a href="#" className="text-oulu-secondary text-sm">See all</a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {featuredPlaces.map((place) => (
            <div key={place.id} className="min-w-[160px] bg-white rounded-lg shadow overflow-hidden">
              <img src={place.image} alt={place.name} className="w-full h-24 object-cover" />
              <div className="p-2">
                <h3 className="font-medium text-sm">{place.name}</h3>
                <p className="text-xs text-oulu-gray">{place.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Upcoming Events */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-oulu-dark">Upcoming Events</h2>
          <a href="#" className="text-oulu-secondary text-sm">See all</a>
        </div>
        <div className="bg-white rounded-lg shadow divide-y">
          <div className="p-3 flex gap-3">
            <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
              <span className="block text-xs">APR</span>
              <span className="block text-lg font-bold">15</span>
            </div>
            <div>
              <h3 className="font-medium">Oulu Day Festival</h3>
              <p className="text-xs text-oulu-gray">Market Square, 12:00 - 18:00</p>
            </div>
          </div>
          <div className="p-3 flex gap-3">
            <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
              <span className="block text-xs">APR</span>
              <span className="block text-lg font-bold">17</span>
            </div>
            <div>
              <h3 className="font-medium">Art Exhibition Opening</h3>
              <p className="text-xs text-oulu-gray">Cultural Center, 17:00 - 20:00</p>
            </div>
          </div>
          <div className="p-3 flex gap-3">
            <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
              <span className="block text-xs">APR</span>
              <span className="block text-lg font-bold">18</span>
            </div>
            <div>
              <h3 className="font-medium">Local Food Festival</h3>
              <p className="text-xs text-oulu-gray">Rotuaari, 10:00 - 16:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
