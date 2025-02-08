import { useEffect, useRef } from "react";
import Button from "./Button";
import Episode from "./Episode";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";

const PopUpDetails = ({
  onCloseBtnClick,
  title,
  years,
  rated,
  plot,
  actors,
  genre,
  writter,
  banner,
  type,
  featured,
}) => {
  const navigate = useNavigate();

  // on start button click
  const handleStartButton = () => {
    navigate(
      `/watch/${title
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/[^a-zA-Z0-9\-]/g, "")}`
    );
  };

  // scroll into view when pop-up open
  const popUpRef = useRef();
  useEffect(() => {
    popUpRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="absolute w-full h-full flex items-center justify-center bg-[#181A1C]/80 overflow-scroll backdrop-blur-sm z-50">
      {/* content */}
      <div
        className="w-[320px] md:w-[933px] bg-[#181A1C] rounded-3xl"
        ref={popUpRef}
      >
        {/* header */}
        <div className="w-full relative">
          {/* gradient effect */}
          <div className="absolute top-0 left-0 w-full h-[554px] bg-gradient-to-b to-[#181A1C] from-transparent"></div>
          {/* image */}
          <img
            src={banner}
            className="object-cover h-[190px] md:h-[554px] w-full rounded-t-3xl"
          />
          {/* close */}
          <div
            className="absolute bg-[#181A1C] flex items-center justify-center top-6 right-6 text-[#C1C2C4] text-lg w-4 h-4 md:w-7 md:h-7 rounded-full cursor-pointer"
            onClick={onCloseBtnClick}
          >
            <IoClose />
          </div>
          {/* button */}
          <div className="absolute w-full bottom-0 left-0 mb-4 md:mb-28">
            <div className="mx-8 md:mx-20">
              <p className="text-base md:text-3xl mb-2 md:mb-6">{title}</p>
              <div className="flex justify-center items-center">
                {/* left */}
                <div className="flex items-center w-full gap-3">
                  <Button
                    bgColor="bg-[#0F1E93]"
                    label="Mulai"
                    onClick={handleStartButton}
                  />
                  <div className="w-6 h-6 md:w-9 md:h-9 rounded-full border border-white flex items-center justify-center text-xs md:text-2xl cursor-pointer">
                    +
                  </div>
                  {featured.includes("premium") && (
                    <div className="bg-[#B7A207] rounded-3xl py-1 px-2 text-[6px] md:text-sm">
                      <p>Premium</p>
                    </div>
                  )}
                </div>
                {/* right */}
                <div className="w-6 h-6 md:w-9 md:h-9 rounded-full border border-white flex items-center justify-center md:text-2xl cursor-pointer">
                  <img src="/img/icons/mute.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="w-full px-8 md:px-20 flex flex-col md:flex-row gap-x-3 gap-y-4">
          {/* text */}
          <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-1">
            <div className="flex gap-1 md:gap-4 text-[#C1C2C4] items-center text-xs md:text-base">
              <span>{years}</span>
              {type === "series" && <span>10 episode</span>}
              <span className="px-1 py-0 md:py-1 rounded-full border border-white flex items-center justify-center text-[5px] md:text-sm">
                {rated}
              </span>
            </div>
            <p className="text-xs md:text-lg">{plot}</p>
          </div>
          {/* table */}
          <div className="table text-xs md:text-lg w-full md:w-1/2">
            <div className="table-row-group">
              <div className="table-row">
                <div className="table-cell  text-[#C1C2C4]">Cast</div>
                <div className="table-cell  text-[#C1C2C4]">:</div>
                <div className="table-cell">{actors}</div>
              </div>
              <div className="table-row">
                <div className="table-cell text-[#C1C2C4]">Genre</div>
                <div className="table-cell text-[#C1C2C4]">:</div>
                <div className="table-cell">{genre}</div>
              </div>
              <div className="table-row">
                <div className="table-cell text-[#C1C2C4]">Pembuat Film</div>
                <div className="table-cell text-[#C1C2C4]">:</div>
                <div className="table-cell">{writter}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto px-8 md:px-20 py-3 md:py-6 mb-2 md:mb-6">
          {type === "series" && (
            <>
              <p className="text-xs md:text-2xl mb-2 md:mb-7">Episode</p>
              {/* episode list*/}
              <Episode
                progress="w-[100%]"
                thumbnail="/img/poster/thumbnail/ted-lasso/eps-1.png"
                title="Pilot"
                desc="American football coach Ted Lasso is hired by a wealthy divorcee to coach the English soccer team AFC Richmond"
                duration="30 min"
                number="1"
              />
              <Episode
                progress="w-[25%]"
                thumbnail="/img/poster/thumbnail/ted-lasso/eps-1.png"
                title="Pilot"
                desc="American football coach Ted Lasso is hired by a wealthy divorcee to coach the English soccer team AFC Richmond"
                duration="30 min"
                number="2"
              />
              <Episode
                progress="w-[50%]"
                thumbnail="/img/poster/thumbnail/ted-lasso/eps-1.png"
                title="Pilot"
                desc="American football coach Ted Lasso is hired by a wealthy divorcee to coach the English soccer team AFC Richmond"
                duration="30 min"
                number="3"
              />
            </>
          )}
          {type === "movie" && (
            <>
              <p className="text-xs md:text-2xl mb-2 md:mb-7">
                Rekomendasi Serupa
              </p>
              <div className="flex gap-3 md:gap-7">
                <img
                  src="/img/poster/potrait/suzume.png"
                  alt=""
                  className="w-[88px] h-[132px] md:w-[234px] md:h-[365px] object-cover"
                />
                <img
                  src="/img/poster/potrait/dilan.png"
                  alt=""
                  className="w-[88px] h-[132px] md:w-[234px] md:h-[365px] object-cover"
                />
                <img
                  src="/img/poster/potrait/megan.png"
                  alt=""
                  className="w-[88px] h-[132px] md:w-[234px] md:h-[365px] object-cover"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpDetails;
