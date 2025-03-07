import { useState } from "react";
import HoverSeries from "./HoverSeries";

const Poster = ({
  oriented,
  title,
  rating,
  src,
  premium,
  newEpisode,
  topTen,
  showDetail,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      {hover && (
        <HoverSeries
          outHover={() => setHover(!hover)}
          src={src}
          showDetail={showDetail}
          top={top}
        />
      )}
      <div
        className={`relative ${
          oriented === "landscape"
            ? "w-[302px] h-[162px] "
            : "w-[95px] h-[145px] sm:w-[234px] sm:h-[365px]"
        }  cursor-pointer rounded-md overflow-hidden`}
      >
        {/* img */}
        <img
          src={src}
          alt={title}
          onClick={showDetail}
          className={` ${
            oriented === "landscape"
              ? "w-[302px] h-[162px]"
              : "w-[95px] h-[145px] sm:w-[234px] sm:h-[365px]"
          } object-cover`}
        />
        {/* title and rating */}
        {oriented === "landscape" && (
          <div
            className="absolute bottom-0 flex justify-between items-center w-full p-4"
            onClick={showDetail}
          >
            <p className="text-sm sm:text-lg line-clamp-1">{title}</p>
            <div className="flex items-center gap-1">
              <img src="/img/icons/star.png" alt="rating" />
              <p className="text-sm sm:text-md">{rating}/5</p>
            </div>
          </div>
        )}

        {/* label: new episode */}
        {newEpisode && !premium && (
          <div className="absolute top-0 left-0 m-1 sm:m-3 h-4 sm:h-7 bg-[#0F1E93] p-2 sm:p-3 rounded-3xl flex items-center justify-center">
            <p className="text-[6px] sm:text-sm">Episode Baru</p>
          </div>
        )}
        {/* label: premium */}
        {premium && (
          <div className="absolute top-0 left-0 m-1 sm:m-3 h-4 sm:h-7 bg-[#B7A207] p-2 sm:p-3 rounded-3xl flex items-center justify-center">
            <p className="text-[6px] sm:text-sm">Premium</p>
          </div>
        )}
        {/* label: top 10 */}
        {topTen && (
          <div className="absolute top-0 right-0 w-4 h-6 sm:w-8 sm:h-12 mx-1 sm:mx-3 flex justify-center items-center gap-2 bg-[#B71F1D] p-2 rounded-tr-md rounded-bl-md">
            <p className="text-[6px] sm:text-sm text-center">Top 10</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Poster;
