import { useRef } from "react";

const MovieSlide = ({ children, title }) => {
  const sliderRef = useRef();

  const handleNext = () =>
    (sliderRef.current.scrollLeft += sliderRef.current.offsetWidth);

  const handlePrev = () =>
    (sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth);

  return (
    <section className="max-w-[1440px] w-full px-5 sm:px-20 py-5 sm:py-10">
      <div className="flex flex-col gap-5 sm:gap-8">
        {/* title */}
        <h3 className="text-xl sm:text-3xl">{title}</h3>
        {/* slider */}
        <div className="relative w-full h-full items-center flex justify-center flex-nowrap">
          <div
            ref={sliderRef}
            className="items-center grid grid-flow-col gap-6 overflow-x-auto scroll-smooth transition-all"
          >
            {/* poster */}
            {children}
          </div>
          {/* prev & next */}
          <img
            src="/img/icons/prev.png"
            alt="previous navigation button"
            className="hidden sm:block absolute -left-5 cursor-pointer"
            onClick={handlePrev}
          />
          <img
            src="/img/icons/next.png"
            alt="next navigation button"
            className="hidden sm:block absolute -right-5 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  );
};

export default MovieSlide;
