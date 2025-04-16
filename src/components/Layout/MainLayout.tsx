
import { Outlet } from "react-router-dom";
import { BottomNavigation } from "./BottomNavigation";

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-oulu-light">
      <main className="flex-1 pb-16">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
}
