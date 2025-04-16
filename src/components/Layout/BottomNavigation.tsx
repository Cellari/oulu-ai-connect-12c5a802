
import { Link, useLocation } from "react-router-dom";
import { Home, MapPin, AlertCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Explore", path: "/explore", icon: MapPin },
  { name: "Report", path: "/feedback", icon: AlertCircle },
  { name: "Profile", path: "/profile", icon: User },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-10">
      {navigationItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full",
              isActive
                ? "text-oulu-primary"
                : "text-oulu-gray hover:text-oulu-secondary"
            )}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
