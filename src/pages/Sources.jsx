import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Sources = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className="text-6xl font-bold">
          Environmental Protection Movement
        </h1>
        <h6 className="text-sadd-grey">
          By Cyrus Guest,{" "}
          <Link to="/sources" className="underline">
            Sources
          </Link>
        </h6>
        <hr className="divide-sadd-blue"></hr>
        <div className="flex flex-col gap-10 text-lg mx-5">
          <h3 className="text-3xl text-sadd-blue font-bold">Sources</h3>
          <p>https://www.britannica.com/science/environmentalism</p>
          <p>https://browercenter.org/about/who-was-david-brower/</p>
          https://www.aldoleopold.org/about/aldo-leopold/
          <p>
            https://rachelcarson.org/Bio.aspx https://www.earthday.org/history/
          </p>
          <p>
            https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sources;
