import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-5 text-xs font-medium md:gap-20 md:text-lg">
      <Link to="/">
        <div className="flex flex-row items-center gap-2 text-3xl font-bold font-londriana md:after:content-['CHILL']">
          <img src="/img/Logo.png" alt="logo" width="25px" height="22px" />
        </div>
      </Link>
      <Link
        to="/series"
        className="text-white hover:text-[#3254FF] active:text-[#3254FF]"
      >
        Series
      </Link>
      <Link
        to="/film"
        className="text-white hover:text-[#3254FF] active:text-[#3254FF]"
      >
        Film
      </Link>
      <Link
        to="/daftar-saya"
        className="text-white hover:text-[#3254FF] active:text-[#3254FF]"
      >
        Daftar Saya
      </Link>
    </nav>
  );
};

export default Navbar;
