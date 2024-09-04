import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";

// Help page which shows users how to get their Facebook Messenger link
const Help = () => {
  return (
    <div>
      <Topbar />
      <div className="home-video mt-20 relative max-w-screen w-full h-[300px] overflow-hidden">
        <video
          src="/assets/videos/background.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 to-transparent opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Help</h2>
          <div className="flex justify-center items-center">
            <img
              src="/assets/images/OHO.svg"
              alt="logo"
              width={255}
              height={54}
            />
          </div>
        </div>
      </div>

      <div className="about-us-content p-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Help
        </h1>

        <div style={{ height: "70px" }} />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          How to Get Your Facebook Messenger Link
        </h1>
        <div style={{ height: "25px" }} />
        <div className="flex flex-row items-center">
          <div className="w-1/2 pr-8 ">
            <h1 className="text-3xl lg:text-6xl font-bold">Steps</h1>
            <div style={{ height: "25px" }} />

            <ol
              className="text-gray-600 text-base lg:text-lg pl-22 lg:pl-52"
              style={{ textAlign: "left" }}
            >
              <li>1. Go to Facebook</li>
              <li>2. Locate settings</li>
              <li>3. Locate search bar</li>
              <li>4. Search "Username"</li>
              <li>5. Click "Username" from options</li>
              <li>6. Copy or Create Username</li>
              <li>7. Paste in your profile settings page</li>
              <li>8. Use this format: https://m.me/USERNAME</li>
            </ol>
          </div>

          <div className="w-1/2 relative">
            <video
              src="/assets/videos/Facebook_Messenger_Link_Tutorial.mp4"
              className="rounded-md"
              style={{ width: "50%", height: "auto" }}
              controls
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;
