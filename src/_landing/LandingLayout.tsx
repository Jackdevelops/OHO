import { Outlet } from "react-router-dom";

// Layout page for design of Landing pages

const LandingLayout = () => {
  return (
    <div className="w-full md:flex">
      <section className=" flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
};

export default LandingLayout;
