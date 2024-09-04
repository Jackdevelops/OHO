import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

interface SocialIconProps {
  icon: React.ElementType;
  link?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#00df9a]"
  >
    <Icon className="social-icon" size={30} />
  </a>
);

// This component is used for the footer section on the 4 landing pages (Landing, about, help & contact)
/*
   It includes the following features:
        - Logo
        - Short synopsis of web app
        - Social Media Links
        - More section Menu including links to:
                  > About
                  > Contact Us
                  > Help
        - Get Started section Menu including links to:
                  > Log In
                  > Sign Up
*/
const Footer: React.FC = () => {
  const sections = [
    {
      title: "More",
      items: [
        { label: "About", link: "/about" },
        { label: "Contact Us", link: "/contact" },
        { label: "Help", link: "/help" },
      ],
    },
    {
      title: "Get Started",
      items: [
        { label: "Log In", link: "/sign-in" },
        { label: "Sign Up", link: "/sign-up" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <Link to="/landing" className="flex gap-3 items-center">
          <img
            src="/assets/images/OHO.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        <p className="py-4">
          Whether you're someone looking to help others, someone in need, or an
          organisation striving to make a difference, you are welcome to OHO.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          {[
            {
              type: "icon",
              icon: FaFacebookSquare,
              link: "https://www.facebook.com/profile.php?id=61556158721464",
            },
            {
              type: "icon",
              icon: FaInstagram,
              link: "https://www.facebook.com/profile.php?id=61556158721464",
            },
          ].map(
            (item, index) =>
              item.type === "icon" && (
                <SocialIcon key={index} icon={item.icon} link={item.link} />
              )
          )}
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col lg:flex-row mt-6 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="flex-1">
            <h6 className="font-medium text-gray-100 text-xl">
              {section.title}
            </h6>
            <ul>
              {section.items?.map((item, subIndex) => (
                <li key={subIndex} className="py-2 text-sm">
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
