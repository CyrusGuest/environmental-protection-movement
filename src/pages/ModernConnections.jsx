import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const ModernConnections = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <div className="container flex flex-col text-center lg:text-left gap-6 mt-14 lg:mt-20">
        <h1 className="text-6xl font-bold">Modern Connections</h1>
        <h6 className="text-sadd-grey">
          By Cyrus Guest,{" "}
          <Link to="/sources" className="underline">
            Sources
          </Link>
        </h6>
        <hr className="divide-sadd-blue"></hr>
        <div className="flex flex-col gap-10 text-lg mx-5">
          <h3 className="text-3xl text-sadd-blue font-bold">Article #1</h3>
          <p>
            This article discusses the Biden administration's commitment to
            addressing environmental injustice, particularly in communities of
            color and low-income communities that have historically borne the
            brunt of pollution and other environmental harms. The article
            explores the progress that has been made in the movement for
            environmental justice and highlights the challenges that remain,
            including the need for more robust enforcement of environmental
            regulations and greater investment in clean energy and sustainable
            infrastructure.{" "}
          </p>

          <p>
            To learn more about this article, visit it{" "}
            <a
              className="underline text-sadd-blue"
              target="_blank"
              href="https://grist.org/beacon/bidens-new-strategy-for-environmental-justice/"
            >
              here
            </a>
            .
          </p>

          <h3 className="text-3xl text-sadd-blue font-bold">Article #2</h3>
          <p>
            This article highlights the devastating impact of climate change on
            public health, citing a report by The Lancet Countdown on Health and
            Climate Change. The report shows that climate change is already
            affecting the health of millions of people around the world, with
            increased risks of infectious disease, malnutrition, and mental
            health problems. The article underscores the urgent need for action
            on climate change and highlights the ongoing challenges facing the
            environmental movement in addressing this global crisis.
          </p>
          <p>
            To learn more about the article, visit it{" "}
            <a
              className="underline text-sadd-blue"
              target="_blank"
              href="https://www.theguardian.com/environment/2017/oct/30/climate-change-already-damaging-health-of-millions-globally-report-finds"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModernConnections;
