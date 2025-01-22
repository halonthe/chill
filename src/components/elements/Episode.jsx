import React from "react";

const Episode = ({ progress, thumbnail, title, desc, duration, number }) => {
  return (
    <div className="w-full h-[52px] md:h-[137px] flex items-center gap-x-2 md:gap-x-6 group hover:bg-[#424242] px-2 py-1 md:px-6 md:py-4 cursor-pointer text-xs md:text-lg rounded-md">
      {/* number */}
      <span>{number}</span>
      {/* thumbnail */}
      <div className="relative md:w-[170px] md:h-[96px] w-[58px] h-[33px]">
        <img
          src={`${thumbnail}`}
          className="w-[58px] h-[33px] md:w-[170px] md:h-[96px]  object-cover"
        />
        {/* progress */}
        <span
          className={`absolute bottom-0 ${progress} h-1 bg-red-500 z-10`}
        ></span>
      </div>

      {/* title & time & desc*/}
      <div className="flex flex-col justify-between h-full w-[185px] md:w-[496px] py-1 md:py-2">
        <div className="flex justify-between">
          <h4>{title}</h4>
          <span className="text-[#C1C2C4] group-hover:text-white">
            {duration}
          </span>
        </div>
        <p className="text-[#C1C2C4] line-clamp-1 md:line-clamp-2">{desc}</p>
      </div>
    </div>
  );
};

export default Episode;
