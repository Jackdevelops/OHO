import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";

import { Outlet } from "react-router-dom";

// Layout page for design of Root pages
// Includes LeftSidebar for desktop devices
// Includes Bottombar for mobile devices

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
};

export default RootLayout;
