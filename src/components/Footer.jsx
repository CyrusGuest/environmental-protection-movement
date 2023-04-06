import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 mt-24 w-full">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <ul className="flex text-sadd-blue uppercase gap-12 text-xs">
            <Link to="/club" className="cursor-pointer">
              Key Figures
            </Link>
            <Link to="/initiatives" className="cursor-pointer">
              Modern Connections
            </Link>
            <Link to="/safe-driving" className="cursor-pointer">
              Key Events
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
