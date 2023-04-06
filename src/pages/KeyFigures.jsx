import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const KeyFigures = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className="text-6xl font-bold">Key Figures</h1>
        <h6 className="text-sadd-grey">
          By Cyrus Guest,{" "}
          <Link to="/sources" className="underline">
            Sources
          </Link>
        </h6>
        <hr className="divide-sadd-blue"></hr>
        <div className="flex flex-col gap-10 text-lg mx-5">
          <h3 className="text-3xl text-sadd-blue font-bold">Rachel Carson</h3>
          <p>
            Rachel Carson was a groundbreaking American marine biologist,
            conservationist, and author whose work had a profound impact on the
            environmental protection movement. Born in 1907, she began her
            career as a scientist and writer for the U.S. Bureau of Fisheries
            before turning her focus to writing books about the natural world.
            Her most influential work, "Silent Spring," was published in 1962
            and detailed the devastating effects of indiscriminate pesticide use
            on the environment and human health.
          </p>
          <p>
            Carson's book sparked widespread public concern and led to the
            eventual banning of the pesticide DDT, as well as inspiring stricter
            regulations on pesticide use in the United States. Although she
            faced significant criticism from the chemical industry, her work
            helped to pave the way for the modern environmental movement and the
            establishment of the Environmental Protection Agency. Rachel
            Carson's enduring legacy continues to inspire environmental activism
            and awareness to this day.{" "}
          </p>

          <h3 className="text-3xl text-sadd-blue font-bold">Aldo Leopold</h3>
          <p>
            Aldo Leopold, born in 1887, was a pioneering American ecologist,
            conservationist, and author whose work has had a lasting impact on
            environmental ethics and conservation efforts. Leopold's early
            career included working for the U.S. Forest Service, where he was
            instrumental in developing the first wilderness area in the United
            States.
          </p>
          <p>
            His most famous work, "A Sand County Almanac," was published
            posthumously in 1949 and outlined his philosophy of the "land
            ethic," which emphasized the interconnectedness of all living things
            and the importance of responsible land stewardship. Leopold's ideas
            have helped to shape modern conservation and environmental ethics,
            inspiring generations of environmentalists and natural resource
            managers. Today, Aldo Leopold is remembered as a visionary thinker
            and a foundational figure in the environmental movement.{" "}
          </p>

          <h3 className="text-3xl text-sadd-blue font-bold">David Brower</h3>
          <p>
            David Brower, born in 1912, was a prominent American
            environmentalist and a key figure in the development of the modern
            environmental movement. As the first executive director of the
            Sierra Club, Brower played a significant role in the campaigns to
            establish several national parks and wilderness areas in the United
            States, including the Point Reyes National Seashore and the North
            Cascades National Park.
          </p>
          <p>
            Brower's passionate activism and dedication to protecting the
            environment also led him to create several environmental
            organizations, including Friends of the Earth, the League of
            Conservation Voters, and the Earth Island Institute. Throughout his
            life, Brower fought tirelessly to preserve natural landscapes and
            promote environmental causes, making him one of the most influential
            environmentalists of the 20th century. His dedication and
            accomplishments continue to inspire environmentalists and
            conservationists around the world.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KeyFigures;
