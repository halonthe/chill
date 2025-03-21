import Button from "./elements/Button";
import DropDownGenre from "./elements/DropDownGenre";
import { useNavigate } from "react-router";

const Hero = ({ title, bg, showGenre, desc, onMoreBtnClick }) => {
  const navigate = useNavigate();
  return (
    <section className="relative">
      {/* hero image */}
      <img src={`${bg}`} alt="hero image" />
      {/* genre dropdown */}
      {showGenre && (
        <div className="absolute top-0 left-0 px-5 sm:px-20 py-5 sm:py-10 z-10">
          <DropDownGenre />
        </div>
      )}
      <div className="absolute max-w-[1440px] w-full bottom-0 left-0 px-5 sm:px-20">
        {/* hero details */}
        <div className="max-w-[668px] w-full">
          <h4 className="text-2xl md:text-5xl">{title}</h4>
          <div className="">
            <p className=" text-xs md:text-lg line-clamp-2 lg:line-clamp-none my-3 lg:mb-10">
              {desc}
            </p>
          </div>
        </div>
        {/* hero button */}
        <div className="flex items-center justify-between mb-0 sm:mb-20">
          {/* left */}
          <div className="flex items-center justify-center gap-2 text-xs">
            <Button
              label="Mulai"
              bgColor="bg-[#0F1E93]"
              onClick={() =>
                navigate(
                  `/watch/${title
                    .toLowerCase()
                    .replace(/\s/g, "-")
                    .replace(/[^a-zA-Z0-9\-]/g, "")}`
                )
              }
            />
            <Button
              label="Selengkapnya"
              bgColor="bg-[#22282A]"
              onClick={onMoreBtnClick}
            />
            <button className="h-6 sm:h-10 p-1 sm:p-2 text-[#C1C2C4] border border-[#C1C2C4] rounded-full flex items-center justify-center">
              18+
            </button>
          </div>
          {/* right */}
          <button className="h-6 w-6 sm:h-10 sm:w-10 p-1 sm:p-2 border border-[#C1C2C4] rounded-full flex items-center justify-center">
            <img
              src="/img/icons/mute.png"
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
