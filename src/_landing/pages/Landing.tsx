import React, { useState, useEffect } from "react";
import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";
import Loader from "@/components/shared/Loader";
import LandingPostCard from "@/components/shared/LandingPostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

// Initial Landing page which allows users to get an overview of the website and includes log in link
const Counter = ({
  target,
  index,
  duration,
  sentence,
  image,
}: {
  target: number;
  index: number;
  duration: number;
  sentence: string;
  image: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;

    const animateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        const progress = (elapsedTime / duration) * target;
        setCount(Math.min(progress, target));
        requestAnimationFrame(animateCounter);
      } else {
        setCount(target);
      }
    };

    startTime = Date.now();
    animateCounter();

    return () => {
      setCount(target);
    };
  }, [target, duration]);

  const formattedCount =
    index === 2
      ? `${Math.round(count)}%`
      : index === 1
      ? numberWithCommas(Math.round(count))
      : Math.round(count);

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="text-center mb-8">
      <div className="bg-2F3846 rounded-lg p-4 text-white inline-block">
        <img
          src={image}
          alt={`Image ${index}`}
          className="w-32 h-32 object-cover rounded-md mb-4 mx-auto"
        />
        <p className="text-4xl md:text-6xl font-bold">{formattedCount}</p>
        <p className="text-sm">{sentence}</p>
      </div>
    </div>
  );
};

const CounterSection = () => {
  const duration = 3000; // 3 seconds
  const counterTargets = [828, 25000, 10];
  const counterSentences = [
    "Million people go to bed hungry",
    "People die each day from hunger",
    "World's population is malnourished",
  ];

  const counterImages = [
    "/assets/images/bed.png",
    "/assets/images/hunger.png",
    "/assets/images/world.png",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-40">
      {counterTargets.map((target, index) => (
        <Counter
          key={index}
          target={target}
          index={index}
          duration={duration}
          sentence={counterSentences[index]}
          image={counterImages[index]}
        />
      ))}
    </div>
  );
};

const Slideshow = ({ children }: { children: React.ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 < React.Children.count(children) ? prevIndex + 1 : 0
      );
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [children]);

  return (
    <div className="slideshow-container flex justify-center overflow-x-auto">
      {React.Children.toArray(children)
        .slice(currentIndex, currentIndex + 3)
        .map((child, index) => (
          <div key={index} className="slide flex-shrink-0">
            {child}
          </div>
        ))}
    </div>
  );
};

const Landing = () => {
  const howItWorksData = [
    {
      title: "Sign up",
      description: "Create an account",
      image: "/assets/images/signup.png",
    },
    {
      title: "Find Food",
      description: "Find what you need",
      image: "/assets/images/search.png",
    },
    {
      title: "Request",
      description: "Request from donor",
      image: "/assets/images/request.png",
    },
    {
      title: "Message",
      description: "Arrange transfer",
      image: "/assets/images/message.png",
    },
    {
      title: "Donate",
      description: "Share what you can",
      image: "/assets/images/donate.png",
    },
  ];

  const { data: posts, isPending: isPostLoading } = useGetRecentPosts();

  return (
    <div className="relative flex flex-col">
      <Topbar />
      <div className="home-video mt-20 relative max-w-screen w-full h-[500px] overflow-hidden">
        <video
          src="/assets/videos/background.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 to-transparent opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to </h2>
          <div className="flex justify-center items-center">
            <img
              src="/assets/images/OHO.svg"
              alt="logo"
              width={255}
              height={54}
            />
          </div>
          <p className="text-lg">Hello, 你好, Hola!</p>
        </div>
      </div>
      <div className="home-content p-4 text-center">
        <h2 className="h3-bold md:h2-bold text-center mt-8 mb-4">
          Why We Do What We Do
        </h2>
        <CounterSection />
        <h2 className="h3-bold md:h2-bold text-center mt-8 mb-4">
          Recent Donations{" "}
        </h2>
        <div className="flex flex-col gap-8">
          <div className="lg:hidden">
            {Array.isArray(posts?.documents) &&
              posts?.documents.map((post: Models.Document) => (
                <LandingPostCard post={post} key={post.caption} />
              ))}
          </div>
          <div className="hidden lg:block">
            <Slideshow>
              {Array.isArray(posts?.documents) &&
                posts?.documents.map((post: Models.Document) => (
                  <LandingPostCard post={post} key={post.caption} />
                ))}
            </Slideshow>
          </div>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="h3-bold md:h2-bold text-center mt-8 mb-4">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row gap-20 justify-center items-center">
            {howItWorksData.map((data, index) => (
              <div
                key={index}
                className="bg-2F3846 rounded-lg p-4 text-white flex flex-col items-center md:text-left"
              >
                <img
                  src={data.image}
                  alt={`How It Works ${index + 1}`}
                  className="w-32 h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{data.title}</h3>
                <p className="text-gray-600">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
        <h2 className="h3-bold md:h2-bold text-center mt-8 mb-4">
          Other Places to Donate Near You{" "}
        </h2>
        <div className="h-96 bg-gray-300">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d297088.16018309834!2d-6.020447405544378!3d54.427611303448806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfood%20donation%20centres%20near%20me!5e0!3m2!1sen!2suk!4v1704216919908!5m2!1sen!2suk"
          ></iframe>
        </div>
      </div>
      {isPostLoading && <Loader />}
      <Footer />
    </div>
  );
};

export default Landing;
