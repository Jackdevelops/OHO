import React from "react";
import { Link, useLocation } from "react-router-dom";

import { bottombarLinks } from "@/constants";
import { useUserContext } from "@/context/AuthContext";

// The bottom bar is the responsive menu for mobile devices, it changes the left side bar to the bottom when the screen size changes
/*
   It Includes the follwoing links:
        - Home
        - Explore
        - Donate
        - People
        - Users Profile
*/
const Bottombar = () => {
  const { user } = useUserContext();
  const { pathname } = useLocation();

  // Profile Button with users profile picture
  const profileButtonLink = {
    imgURL: user.imageUrl || "/assets/icons/profile-placeholder.svg",
    route: `/profile/${user.id}`,
  };

  const linksWithProfileButtonLink = [...bottombarLinks, profileButtonLink];

  return (
    <section className="bottom-bar">
      {linksWithProfileButtonLink.map((link, index) => {
        const isActive = pathname === link.route;
        const isProfileButton = index === linksWithProfileButtonLink.length - 1;

        return (
          <Link
            key={`bottombar-${index}`}
            to={link.route}
            className={`${
              isActive && "rounded-[10px] "
            } flex-center flex-col gap-1 p-2 transition`}
          >
            <img
              src={link.imgURL}
              alt=""
              width={16}
              height={16}
              className={`${
                isProfileButton ? "h-10 w-10" : "h-6 w-6"
              } rounded-full`}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
