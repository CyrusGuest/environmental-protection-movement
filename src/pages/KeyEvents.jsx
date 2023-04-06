import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const KeyEvents = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className="text-6xl font-bold">Key Events</h1>
        <h6 className="text-sadd-grey">
          By Cyrus Guest,{" "}
          <Link to="/sources" className="underline">
            Sources
          </Link>
        </h6>
        <hr className="divide-sadd-blue"></hr>
        <div className="flex flex-col gap-10 text-lg mx-5">
          <h3 className="text-3xl text-sadd-blue font-bold">
            The First Earth Day - On April 22, 1970
          </h3>
          <p>
            Millions of people across the United States came together to
            celebrate the first Earth Day. The event marked the beginning of the
            modern environmental movement, raising awareness about environmental
            issues and pushing for policy change to protect the planet. The
            success of Earth Day demonstrated the power of grassroots activism
            and paved the way for future environmental legislation such as the
            Clean Air Act and Clean Water Act.
          </p>

          <h3 className="text-3xl text-sadd-blue font-bold">
            {" "}
            The signing of the Paris Agreement
          </h3>
          <p>
            In 2015, 196 countries came together to sign the Paris Agreement, a
            global effort to combat climate change by reducing greenhouse gas
            emissions. The agreement set targets for each country to reduce
            their emissions and encouraged international cooperation in
            addressing the issue. The signing of the Paris Agreement was a
            significant accomplishment in the fight for environmental
            protection, as it demonstrated a global commitment to addressing
            climate change and protecting the planet for future generations.
            Read more about it{" "}
            <a
              className="underline text-sadd-blue"
              target="_blank"
              href="https://unfccc.int/process-and-meetings/the-paris-agreement"
            >
              here
            </a>
            .
          </p>

          <h3 className="text-3xl text-sadd-blue font-bold">
            The creation of the Environmental Protection Agency (EPA)
          </h3>
          <p>
            In 1970, President Richard Nixon signed an executive order creating
            the EPA, a federal agency tasked with protecting human health and
            the environment. The creation of the EPA was a significant event in
            the history of the environmental movement, as it gave the federal
            government a central role in enforcing environmental regulations and
            protecting the environment. The EPA has played a key role in
            regulating air and water pollution, hazardous waste, and other
            environmental issues, and its creation demonstrated a growing
            recognition of the importance of environmental protection in
            American society. The EPA's website can be found{" "}
            <a
              className="underline text-sadd-blue"
              target="_blank"
              href="https://www.epa.gov/"
            >
              here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KeyEvents;
