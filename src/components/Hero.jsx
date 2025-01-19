import React from "react";
import Button from "./elements/Button";

const Hero = () => {
  return (
    <section className="relative">
      {/* hero image */}
      <img src="/img/Hero.png" alt="hero image" />
      <div className="absolute max-w-[1440px] w-full bottom-0 left-0 px-5 sm:px-20">
        {/* hero text */}
        <div className="max-w-[668px] w-full">
          <h4 className="text-2xl md:text-5xl">Duty After School</h4>
          <div className="">
            <p className=" text-xs md:text-lg line-clamp-2 lg:line-clamp-none my-3 lg:mb-10">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>
          </div>
        </div>
        {/* hero button */}
        <div className="flex items-center justify-between mb-0 sm:mb-20">
          {/* left */}
          <div className="flex items-center justify-center gap-2 text-xs">
            <Button label="Mulai" bgColor="bg-[#0F1E93]" />
            <Button label="Selengkapnya" bgColor="bg-[#22282A]" />
            <button className="h-6 sm:h-10 p-1 sm:p-2 text-[#C1C2C4] border border-[#C1C2C4] rounded-full flex items-center justify-center">
              18+
            </button>
          </div>
          {/* right */}
          <button className="h-6 w-6 sm:h-10 sm:w-10 p-1 sm:p-2 border border-[#C1C2C4] rounded-full flex items-center justify-center">
            <img
              src="/img/mute.png"
              alt="volume control"
              className="w-3 h-3 sm:w-5 sm:h-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
