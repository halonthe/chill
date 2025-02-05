import React, { useState } from "react";

const Footer = () => {
  const genre = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller",
  ];
  const bantuan = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];
  const [openHelp, setOpenHelp] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  return (
    <footer className="max-w-[1440px] w-full p-5 sm:px-20 border-t-[#C1C2C4] border-t md:flex md:items-center md:justify-between">
      {/* companys */}
      <div className="mb-5 flex flex-col gap-3">
        <img
          src="/img/icons/Logo-Text.png"
          alt="chill"
          className="w-20 h-6 sm:w-40 sm:h-11"
        />
        <p className="text-xs sm:text-base text-[#C1C2C4]">
          @2023 Chill All Rights Reserved
        </p>
      </div>

      {/* genres */}
      <div className="flex flex-col">
        <div
          className="cursor-pointer sm:cursor-default flex justify-between mb-4"
          onClick={() => setOpenGenre(!openGenre)}
        >
          <p>Genre</p>
          <img src="/img/chevron-right.png" className="w-6 h-6 sm:hidden" />
        </div>
        <ul className="hidden sm:grid grid-cols-3 gap-1 md:gap-x-3 sm:grid-cols-4 ">
          {genre.map((item) => (
            <li key={item} className="text-[#C1C2C4]">
              {item}
            </li>
          ))}
        </ul>
        {openGenre && (
          <ul className="grid grid-cols-3 gap-1 md:gap-x-3 sm:grid-cols-4 ">
            {genre.map((item) => (
              <li key={item} className="text-[#C1C2C4]">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* helps */}
      <div className="flex flex-col">
        <div
          className="cursor-pointer flex justify-between mb-4"
          onClick={() => setOpenHelp(!openHelp)}
        >
          <p>Bantuan</p>
          <img src="/img/chevron-right.png" className="w-6 h-6 sm:hidden" />
        </div>
        <ul className="hidden sm:grid gap-1">
          {bantuan.map((item) => (
            <li key={item} className="text-[#C1C2C4]">
              {item}
            </li>
          ))}
        </ul>
        {openHelp && (
          <ul className="grid gap-1">
            {bantuan.map((item) => (
              <li key={item} className="text-[#C1C2C4]">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
};

export default Footer;
