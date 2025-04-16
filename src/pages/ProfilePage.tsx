
import { Settings, Bell, HelpCircle, LogOut } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-oulu-dark mb-4">Profile</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-oulu-primary flex items-center justify-center text-white text-xl font-bold mr-4">
            MK
          </div>
          <div>
            <h2 className="text-lg font-semibold">Matti Korhonen</h2>
            <p className="text-oulu-gray text-sm">Oulu, Finland</p>
            <button className="text-oulu-secondary text-sm font-medium mt-1">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md divide-y">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">My Interests</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-oulu-light text-oulu-primary px-3 py-1 rounded-full text-sm">Outdoor Activities</span>
            <span className="bg-oulu-light text-oulu-primary px-3 py-1 rounded-full text-sm">Cultural Events</span>
            <span className="bg-oulu-light text-oulu-primary px-3 py-1 rounded-full text-sm">Technology</span>
            <span className="bg-oulu-light text-oulu-primary px-3 py-1 rounded-full text-sm">Food</span>
            <span className="bg-oulu-light text-oulu-secondary px-3 py-1 rounded-full text-sm">+ Add More</span>
          </div>
        </div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">Saved Places</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Oulu Market Square</h3>
                <p className="text-xs text-oulu-gray">Public Place</p>
              </div>
              <button className="text-oulu-secondary">
                View
              </button>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">Nallikari Beach</h3>
                <p className="text-xs text-oulu-gray">Nature</p>
              </div>
              <button className="text-oulu-secondary">
                View
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-1">Settings</h2>
          <div className="space-y-4 mt-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Settings size={20} className="text-oulu-gray mr-3" />
                <span>App Settings</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-oulu-gray" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell size={20} className="text-oulu-gray mr-3" />
                <span>Notifications</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-oulu-gray" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <HelpCircle size={20} className="text-oulu-gray mr-3" />
                <span>Help & Support</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-oulu-gray" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center justify-between text-red-500">
              <div className="flex items-center">
                <LogOut size={20} className="mr-3" />
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
