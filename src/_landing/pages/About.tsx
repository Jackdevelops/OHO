import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";

// About Us Page includes info on the website and its purpose
const AboutUs = () => {
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
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About</h2>
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

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Nourishing Communities, One Post at a Time
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Welcome to OHO – where community meets compassion to tackle hunger
              head-on. Our mission is simple: connect surplus food with those in
              need, turning every post into an opportunity to make a difference.
            </p>
          </div>
          <div className="p-4">
            <img
              src="/assets/images/how_it_works.png"
              alt="About OHO"
              className="w-full h-auto md:h-full md:w-auto mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <section>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                Our Story
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-6">
                OHO was born from a shared belief that no one should go to bed
                hungry. We envisioned a platform where individuals can share
                their abundance, fostering relationships and making a positive
                impact on those facing food insecurity.
              </p>
            </section>
          </div>
          <div className="p-4">
            <img
              src="/assets/images/how_it_works.png"
              alt="Our Story"
              className="w-full h-auto md:h-full md:w-auto mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <section>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                Our Mission
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-6">
                OHO is more than an app; it's a network of individuals united by
                the goal of alleviating hunger. Sign up, connect, and be part of
                a compassionate community where every interaction matters.
              </p>
            </section>
          </div>
          <div className="p-4">
            <img
              src="/assets/images/how_it_works.png"
              alt="Our Mission"
              className="w-full h-auto md:h-full md:w-auto mx-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <img
              src="/assets/images/how_it_works.png"
              alt="How It Works"
              className="w-full h-auto md:h-full md:w-auto mx-auto"
            />
          </div>
          <div className="p-4">
            <section>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                How It Works
              </h2>
              <ol className="text-base md:text-lg lg:text-xl mb-6">
                <li>
                  <strong>Sign Up and Connect:</strong> Create an account to
                  join a community that believes in the power of generosity.
                </li>
                <li>
                  <strong>Find Food or Share Your Surplus:</strong> Discover
                  nearby donors or recipients. Share your surplus or find a meal
                  to fill an empty stomach.
                </li>
                <li>
                  <strong>Request and Arrange Transfers:</strong> Request food
                  directly from donors and use our messaging feature for easy
                  coordination.
                </li>
                <li>
                  <strong>Donate and Spread Joy:</strong> Share your surplus
                  after events. Your small act of kindness can spread joy and
                  nourishment.
                </li>
              </ol>
            </section>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <section>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                OHO Community, Your Impact
              </h2>
              <p className="text-base md:text-lg lg:text-xl mb-6">
                OHO is your platform to combat hunger and build a compassionate
                society. Every post, interaction, and donation contributes to a
                stronger community.
              </p>
              <p className="text-base md:text-lg lg:text-xl mb-6">
                Join OHO on this journey of sharing, caring, and making a
                positive impact. Together, let's turn every meal into an
                opportunity to connect, uplift, and nourish.
              </p>
            </section>
          </div>
          <div className="p-4">
            <img
              src="/assets/images/how_it_works.png"
              alt="OHO Community, Your Impact"
              className="w-full h-auto md:h-full md:w-auto mx-auto"
            />
          </div>
        </div>

        <div className="p-4 text-center">
          <p className="text-base md:text-lg lg:text-xl">
            Thank you for being part of the OHO family. Together, we can make
            hunger a thing of the past.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
