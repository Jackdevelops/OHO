import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";
import ContactUsForm from "@/components/forms/ContactUsForm";

// Contact Us Page used for users to contact myself via email if needed
// Uses the ContactUsForm component
const ContactUs = () => {
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
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Contact</h2>
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
      <div className="flex flex-1">
        <div className="common-container">
          <div className="max-w-5xl mx-auto flex items-center justify-center w-full h-full">
            <div className="flex-start gap-3 justify-start">
              <img
                src="/assets/icons/chat.svg"
                width={36}
                height={36}
                alt="add"
              />
              <h2 className="h3-bold md:h2-bold text-left w-full">
                Fill out the Form Below!
              </h2>
            </div>
          </div>

          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
