import React from "react";

const VideoPlayer = () => {
  return (
    <section className="w-screen h-screen relative">
      <img
        src="/video/video.png"
        alt=""
        className="w-screen h-screen object-cover"
      />
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/img/icons/pause-circle-outline.png" alt="" />
      </div>
      <div className="absolute bottom-0 w-full h-[96px] bg-[#181A1C]/[0.6]"></div>
    </section>
  );
};

export default VideoPlayer;
