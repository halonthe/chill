import React from "react";
import { Link } from "react-router";
import Navbar from "./elements/Navbar";

const Header = () => {
  return (
    <header className="max-w-[1440px] w-full h-[56px] fixed z-50 flex justify-between items-center px-5 bg-[#181A1C] sm:px-20 sm:h-[94px]">
      {/* Navbar */}
      <Navbar />
      {/* Profile */}
      <div className="flex items-center justify-center cursor-pointer">
        <img
          src="/img/profile.png"
          alt="profile picture"
          className="w-6 h-6 sm:w-10 sm:h-10"
        />
        <img
          src="/img/KeyboardArrowDown.png"
          alt="open profile"
          className="w-4 h-4 sm:w-7 sm:h-7"
        />
      </div>
    </header>
  );
};

export default Header;
