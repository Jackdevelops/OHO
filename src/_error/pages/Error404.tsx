import React from "react";
import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";

// 404 Error Page for when an unrecognised page is loaded
const Error404: React.FC = () => {
  return (
    <div>
      <Topbar />
      <div style={{ height: "100px" }} />
      <img
        src="/assets/images/404.png"
        alt="Page Not Found"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "right",
        }}
      />

      <Footer />
    </div>
  );
};

export default Error404;
