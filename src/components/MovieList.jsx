import React from "react";

const MovieList = ({ title, children }) => {
  return (
    <section className="max-w-[1440px] w-full my-10 sm:my-20 px-5 sm:px-20 py-5 sm:py-10">
      <div className="flex flex-col gap-5 sm:gap-8">
        {/* title */}
        <h3 className="text-xl sm:text-3xl">{title}</h3>
        {/* container */}
        <div className="flex flex-auto flex-wrap gap-x-4 gap-y-8">
          {/* poster */}
          {children}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
