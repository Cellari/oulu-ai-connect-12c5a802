
import { Link } from "react-router-dom";
import { MapPin, MessageCircle, Calendar, AlertCircle, ChevronRight } from "lucide-react";

const Index = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-oulu-dark">Welcome to Oulu</h1>
          <p className="text-oulu-gray">{formattedDate}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-oulu-primary flex items-center justify-center text-white font-medium">
          MK
        </div>
      </div>

      {/* Quick access section */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Link to="/chat" className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-oulu-primary mb-1">
            <MessageCircle size={24} />
          </div>
          <span className="text-xs text-center">AI Chat</span>
        </Link>
        <Link to="/explore" className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">
            <MapPin size={24} />
          </div>
          <span className="text-xs text-center">Explore</span>
        </Link>
        <Link to="/explore" className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-1">
            <Calendar size={24} />
          </div>
          <span className="text-xs text-center">Events</span>
        </Link>
        <Link to="/feedback" className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-1">
            <AlertCircle size={24} />
          </div>
          <span className="text-xs text-center">Report</span>
        </Link>
      </div>

      {/* AI Assistant Card */}
      <div className="bg-gradient-to-r from-oulu-primary to-oulu-secondary rounded-xl text-white p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Oulu AI Assistant</h2>
        <p className="text-sm mb-3">Get personalized recommendations and answers to your questions about Oulu.</p>
        <Link to="/chat" className="inline-flex items-center bg-white text-oulu-primary px-3 py-1.5 rounded-full text-sm font-medium">
          Ask me anything <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>

      {/* Featured Content */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-oulu-dark">Events near you</h2>
          <Link to="/explore" className="text-oulu-secondary text-sm">See all</Link>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex gap-3">
              <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
                <span className="block text-xs">APR</span>
                <span className="block text-lg font-bold">15</span>
              </div>
              <div>
                <h3 className="font-medium">Oulu Day Festival</h3>
                <p className="text-xs text-oulu-gray">Market Square, 12:00 - 18:00</p>
                <div className="mt-1">
                  <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full">Family</span>
                  <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full ml-1">Outdoor</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex gap-3">
              <div className="bg-oulu-light rounded text-center p-2 min-w-[50px]">
                <span className="block text-xs">APR</span>
                <span className="block text-lg font-bold">17</span>
              </div>
              <div>
                <h3 className="font-medium">Art Exhibition Opening</h3>
                <p className="text-xs text-oulu-gray">Cultural Center, 17:00 - 20:00</p>
                <div className="mt-1">
                  <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full">Arts</span>
                  <span className="inline-block bg-oulu-light text-oulu-primary text-xs px-2 py-0.5 rounded-full ml-1">Indoor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Reports */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-oulu-dark">Recent Reports</h2>
          <Link to="/feedback" className="text-oulu-secondary text-sm">See all</Link>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y">
            <div className="p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Pothole on Torikatu</h3>
                  <p className="text-xs text-oulu-gray">Reported April 10</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">In Progress</span>
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Broken Street Light</h3>
                  <p className="text-xs text-oulu-gray">Reported April 5</p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Resolved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
