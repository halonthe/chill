import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaStar, FaUser } from "react-icons/fa6";

const DropDownProfile = () => {
  return (
    <div className="absolute w-[113px] h-[104px] sm:w-[156px] sm:h-[128px] top-10 right-5 bg-[#181A1C] sm:top-20 sm:right-8 flex flex-col items-center justify-around rounded-md drop-shadow-sm">
      <div className="w-full flex items-center gap-2 px-3 py-2 text-xs sm:text-sm  text-white hover:text-[#3254FF] cursor-pointer">
        <FaUser className="w-3 h-3 sm:w-4 sm:h-4" />
        Profil Saya
      </div>
      <div className="w-full flex items-center gap-2 px-3 py-2 text-xs sm:text-sm  text-white hover:text-[#3254FF] cursor-pointer">
        <FaStar className="w-3 h-3 sm:w-4 sm:h-4" />
        Ubah Premium
      </div>
      <div className="w-full flex items-center gap-2 px-3 py-2 text-xs sm:text-sm  text-white hover:text-[#3254FF] cursor-pointer">
        <FaSignOutAlt className="w-3 h-3 sm:w-4 sm:h-4" />
        Keluar
      </div>
    </div>
  );
};

export default DropDownProfile;
