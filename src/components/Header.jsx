import React, { useState } from "react";
import Navbar from "./elements/Navbar";
import DropDownProfile from "./elements/DropDownProfile";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="max-w-[1440px] w-full h-[56px] fixed z-50 flex justify-between items-center px-5 bg-[#181A1C] sm:px-20 sm:h-[94px]">
      {/* Navbar */}
      <Navbar />
      {/* Profile */}
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        <img
          src="/img/icons/profile.png"
          alt="profile picture"
          className="w-6 h-6 md:w-10 md:h-10"
        />
        <img
          src="/img/KeyboardArrowDown.png"
          alt="open profile"
          className="w-4 h-4 md:w-7 md:h-7"
        />
      </div>
      {/* dropdown */}
      {open && <DropDownProfile />}
    </header>
  );
};

export default Header;
