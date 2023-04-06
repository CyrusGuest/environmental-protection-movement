import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sign from "../../images/sign.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <body className="App font-Poppins overflow-x-hidden">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-20">
          {/* Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Environmental Protection Movement
            </h2>
            <p className="text-sadd-grey text-lg text-center lg:text-left mb-6">
              The mid-20th century environmental protection movement was a
              pivotal period in American history, marked by the rise of public
              awareness and activism concerning environmental issues.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link
                className="btn btn-purple hover:bg-sadd-white hover:text-black"
                to="/key-events"
              >
                Key Events
              </Link>
              <a
                href="http://michiganintheworld.history.lsa.umich.edu/environmentalism/exhibits/show/main_exhibit/origins#:~:text=The%20environmental%20movement%20condemned%20the,between%20humans%20and%20their%20environment."
                target="_blank"
              >
                <button className="btn btn-white hover:bg-sadd-blue hover:text-white">
                  Learn More
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="lg:w-full h-full sm:w-3/4 sm:h-3/4 md:w-3/5 md:h-3/5"
              src={Sign}
              alt=""
            />
          </div>

          {/* Rounded Rectangle */}
          <div className="hidden md:block overflow-hidden bg-sadd-blue rounded-l-full absolute md:h-60 lg:h-80 h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </body>
  );
};

export default Landing;
