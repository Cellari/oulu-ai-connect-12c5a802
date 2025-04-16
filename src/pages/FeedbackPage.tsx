
import { Camera, MapPin } from "lucide-react";

const FeedbackPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-oulu-dark mb-2">Report & Feedback</h1>
      <p className="text-oulu-gray mb-6">Help improve Oulu by sharing your feedback</p>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Report an Issue</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Issue Type</label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-oulu-secondary">
            <option>Road Maintenance</option>
            <option>Public Facility</option>
            <option>Safety Concern</option>
            <option>Suggestion</option>
            <option>Other</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea 
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-oulu-secondary"
            placeholder="Please describe the issue..."
            rows={3}
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Address or location description"
              className="w-full border border-gray-300 rounded-md p-2 pl-9 focus:outline-none focus:ring-2 focus:ring-oulu-secondary"
            />
            <MapPin className="absolute left-2 top-2.5 text-oulu-gray" size={18} />
          </div>
          <div className="mt-2 h-32 bg-gray-100 rounded-md flex items-center justify-center">
            <p className="text-oulu-gray text-sm">Map location selector would appear here</p>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Add Photo</label>
          <button className="w-full border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-oulu-gray hover:bg-gray-50">
            <Camera size={24} className="mb-2" />
            <span className="text-sm">Tap to add photo</span>
          </button>
        </div>
        
        <button className="w-full bg-oulu-primary hover:bg-oulu-secondary text-white py-2 rounded-md">
          Submit Report
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-500 pl-3 py-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Pothole on Torikatu</h3>
                <p className="text-xs text-oulu-gray">Submitted: April 10, 2025</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
            </div>
          </div>
          
          <div className="border-l-4 border-green-500 pl-3 py-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Broken Street Light</h3>
                <p className="text-xs text-oulu-gray">Submitted: April 5, 2025</p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Resolved</span>
            </div>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-3 py-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Suggestion for Bike Rack</h3>
                <p className="text-xs text-oulu-gray">Submitted: April 2, 2025</p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Under Review</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
