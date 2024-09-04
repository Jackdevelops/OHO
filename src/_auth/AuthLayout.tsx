import { Button } from "@/components/ui/button";
import { Outlet, Navigate, Link } from "react-router-dom";

// Layout page for design of Auth pages
const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <Link to="/landing" className="absolute top-4 left-4 z-10">
            <Button variant="ghost" className="shad-button_ghost">
              <img src="/assets/icons/back.svg" alt="Back" />
              <p className="small-medium lg:base-medium">Back</p>
            </Button>
          </Link>

          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="assets/images/charity.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
