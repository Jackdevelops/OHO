import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// This component is used for the header section on the 4 landing pages (Landing, about, help & contact)
/*
   It includes the following features:
        - Logo
        - Responsive (Hamburger Menu on mobile) Menu including links to:
                  > About
                  > Contact Us
                  > Help
        - Button for:
                  > Log In
*/
const Topbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSigninClick = () => {
    navigate("/sign-in");
    setMenuOpen(false);
  };

  // Toggle for Hamburger Menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // This ensures that when the user scrolls, the header background turns transparent
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const scrollPosition = window.scrollY;
      scrollPosition > 0
        ? navbar.classList.add("bg-opacity-90")
        : navbar.classList.remove("bg-opacity-90");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-10 bg-gray-800 p-4 text-white transition-all duration-300"
      style={{ zIndex: 1000 }}
    >
      <div className="flex items-center justify-between">
        <Link to="/landing" className="flex gap-3 items-center">
          <img
            src="/assets/images/OHO.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/landing" className="text-white hover:opacity-80">
            <Button type="button" className="text-lg">
              Home
            </Button>
          </Link>

          <Link to="/about" className="text-white hover:opacity-80">
            <Button type="button" className="text-lg">
              About
            </Button>
          </Link>

          <Link to="/help" className="text-white hover:opacity-80">
            <Button type="button" className="text-lg">
              Help
            </Button>
          </Link>

          <Link to="/contact" className="text-white hover:opacity-80">
            <Button type="button" className="text-lg">
              Contact Us
            </Button>
          </Link>

          <Button
            type="button"
            className="shad-button_primary px-4 hover:opacity-80"
            onClick={handleSigninClick}
          >
            Log In
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col gap-4 mt-4">
            <Link
              to="/landing"
              className="text-white hover:opacity-80"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:opacity-80"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:opacity-80"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              type="button"
              className="shad-button_primary px-4 hover:opacity-80"
              onClick={handleSigninClick}
            >
              Log In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
