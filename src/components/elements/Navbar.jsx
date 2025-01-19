import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-5 text-xs font-medium sm:gap-20 sm:text-lg">
      <Link to="/">
        <div className="flex flex-row items-center gap-2 text-3xl font-bold font-londriana sm:after:content-['CHILL']">
          <img src="/img/Logo.png" alt="logo" width="25px" height="22px" />
        </div>
      </Link>
      <Link
        to="/series"
        className="text-[#C1C2C4] hover:text-white active:text-white"
      >
        Series
      </Link>
      <Link
        to="/film"
        className="text-[#C1C2C4] hover:text-white active:text-white"
      >
        Film
      </Link>
      <Link
        to="/daftar-saya"
        className="text-[#C1C2C4] hover:text-white active:text-white"
      >
        Daftar Saya
      </Link>
    </nav>
  );
};

export default Navbar;
