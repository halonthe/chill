import React, { useState } from "react";
import { FaCheck, FaChevronDown, FaPlay } from "react-icons/fa6";
import PopUpDetails from "./PopUpDetails";

const HoverSeries = ({ outHover, src, showDetail }) => {
  return (
    <div
      onMouseLeave={outHover}
      className="absolute -left-14 w-[410px] h-[495px] z-10 flex flex-col"
    >
      {/* img */}
      <div className="h-1/2 w-full">
        <img src={src} alt="" className="object-cover w-full h-full" />
      </div>
      {/* details */}
      <div className="h-1/2 w-full p-7 flex flex-col justify-between gap-4 bg-[#181A1C]">
        {/* button */}
        <div className="flex justify-between">
          {/* play */}
          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-full bg-white cursor-pointer text-black items-center justify-center flex">
              <FaPlay className="w-6 h-6" />
            </div>
            <div className="w-14 h-14 rounded-full border border-white text-white items-center justify-center flex cursor-pointer">
              <FaCheck className="w-6 h-6" />
            </div>
          </div>
          {/* more */}
          <div
            onClick={showDetail}
            className="w-14 h-14 rounded-full border border-white text-white items-center justify-center flex cursor-pointer"
          >
            <FaChevronDown className="w-6 h-6" />
          </div>
        </div>
        {/* episode */}
        <div className="text-xl">“Episode 1”</div>
        {/* progress */}
        <div className="w-full flex items-center justify-between">
          {/* bar */}
          <div className="relative w-[80%]">
            <div className="absolute top-0 left-0 bg-[#3D4142] w-full h-2 rounded-3xl"></div>
            <div className="absolute top-0 left-0 bg-[#3254FF] w-[20%] h-2 rounded-3xl"></div>
          </div>
          {/* time */}
          <div className="text-lg">2j 33m</div>
        </div>
        {/* genre */}
        <div className="flex items-center justify-between">
          <span>Misteri</span>
          <span>•</span>
          <span>Kriminal</span>
          <span>•</span>
          <span>Fantasi</span>
        </div>
      </div>
    </div>
  );
};

export default HoverSeries;
