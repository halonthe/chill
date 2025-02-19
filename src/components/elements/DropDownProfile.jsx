import { FaSignOutAlt } from "react-icons/fa";
import { FaStar, FaUser } from "react-icons/fa6";
import { Link } from "react-router";

const DropDownProfile = ({ onClick }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="absolute w-[113px] h-[104px] sm:w-[156px] sm:h-[128px] top-10 right-5 bg-[#181A1C] sm:top-20 sm:right-8 flex flex-col items-center justify-around rounded-md drop-shadow-sm">
      {/* profile saya */}
      <Link to="/profile" className="w-full">
        <div
          className="w-full flex items-center gap-2 px-3 py-2 text-xs sm:text-sm  text-white hover:text-[#3254FF] cursor-pointer"
          onClick={onClick}
        >
          <FaUser className="w-3 h-3 sm:w-4 sm:h-4" />
          Profil Saya
        </div>
      </Link>
      {/* ubah premium */}
      <Link to="/subscribe" className="w-full">
        <div
          className="w-full flex items-center gap-2 px-3 py-2 text-xs sm:text-sm  text-white hover:text-[#3254FF] cursor-pointer"
          onClick={onClick}
        >
          <FaStar className="w-3 h-3 sm:w-4 sm:h-4" />
          Ubah Premium
        </div>
      </Link>
      {/* keluar */}
      <div
        onClick={handleLogout}
        className="w-full flex items-center gap-2 px-3 py-2 text-xs sm:text-sm  text-white hover:text-[#3254FF] cursor-pointer"
      >
        <FaSignOutAlt className="w-3 h-3 sm:w-4 sm:h-4" onClick={onClick} />
        Keluar
      </div>
    </div>
  );
};

export default DropDownProfile;
