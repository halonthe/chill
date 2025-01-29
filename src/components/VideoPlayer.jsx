import React, { useState } from "react";

const VideoPlayer = () => {
  const [subtitle, setSubtitle] = useState(false);
  const [nextEpisode, setNextEpisode] = useState(false);
  const [speed, setSpeed] = useState(false);
  const [list, setList] = useState(false);

  return (
    <section className="w-screen h-screen relative font-lato">
      {/* video */}
      <img
        src="/video/video.png"
        alt=""
        className="w-screen h-screen object-cover"
      />
      {/* play / pause */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          className="cursor-pointer"
          src="/img/icons/pause-circle-outline.png"
          alt=""
        />
      </div>
      {/* skip intro */}
      <div className="absolute bottom-28 right-12 cursor-pointer px-5 py-2 bg-white text-[#3A3541] rounded-full text-center text-base font-bold">
        {" "}
        Lewati Intro
      </div>
      {/* controls */}
      <div className="absolute bottom-0 w-full h-[96px] bg-[#181A1C]/[0.6] flex justify-between items-center px-10 py-7">
        {/* left controls */}
        <div className="flex gap-6 items-center">
          <img
            className="cursor-pointer"
            src="/img/icons/play.png"
            alt="play button"
          />
          <img
            className="cursor-pointer"
            src="/img/icons/rewind-10.png"
            alt="rewind button"
          />
          <img
            className="cursor-pointer"
            src="/img/icons/fast-forward-10.png"
            alt="fast-forward button"
          />
          <img
            className="cursor-pointer"
            src="/img/icons/volume.png"
            alt="volume button"
          />
        </div>
        {/* title */}
        <div>
          <p className="text-lg font-semibold text-center font-lato">
            TED Lasso Episode 1: The Good, the Bad, and the Ugly
          </p>
        </div>
        {/* right controls */}
        <div className="flex gap-6 items-center">
          <img
            className="cursor-pointer"
            src="/img/icons/next.png"
            alt="next button"
            onMouseEnter={() => setNextEpisode(true)}
            onMouseLeave={() => setNextEpisode(false)}
          />
          <img
            className="cursor-pointer"
            src="/img/icons/list.png"
            alt="list button"
            onClick={() => setList(!list)}
          />
          <img
            className="cursor-pointer w-10 h-10"
            src="/img/icons/subtitle.png"
            alt="subtitle button"
            onClick={() => setSubtitle(!subtitle)}
          />
          <img
            className="cursor-pointer"
            src="/img/icons/speedometer.png"
            alt="speed button"
            onClick={() => setSpeed(!speed)}
          />
          <img
            className="cursor-pointer"
            src="/img/icons/fullscreen.png"
            alt="fullscreen button"
          />
        </div>
      </div>
      {/* subtitile */}
      {subtitle && <TextAndAudio />}
      {/* next episode */}
      {nextEpisode && <NextEpisode />}
      {/* speedometer */}
      {speed && <Speedometer />}
      {/* list */}
      {list && <List />}
    </section>
  );
};

const TextAndAudio = () => {
  return (
    <div className="flex justify-around absolute bottom-20 right-10 bg-[#22282A] rounded-lg px-3 py-2 gap-3 w-[392px]">
      {/* audio */}
      <div>
        <p className="font-bold text-base">Audio</p>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center">
            <div className="w-5">
              <img src="/img/icons/check.png" alt="" className="" />
            </div>
            <p className="text-sm cursor-pointer">Bahasa Inggris</p>
          </div>
        </div>
      </div>
      {/* translate */}
      <div>
        <p className="font-bold text-base">Terjemahan</p>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center">
            <div className="w-5">
              <img src="/img/icons/check.png" alt="" className="" />
            </div>
            <p className="text-sm cursor-pointer">Bahasa Indonesia</p>
          </div>
          <div className="flex items-center">
            <div className="w-5">
              <img src="/img/icons/check.png" alt="" className="hidden" />
            </div>
            <p className="text-sm cursor-pointer">Bahasa inggris</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextEpisode = () => {
  return (
    <div className="absolute bottom-[78px] right-[112px] w-[457px] h-[165px] bg-[#22282A] flex flex-col gap-3 rounded-lg">
      <div className="bg-[#3D4142] px-3 py-2 w-full font-bold rounded-t-lg">
        <p>Episode Selanjutnya</p>
      </div>
      <div className="flex px-3 py-2 gap-3 w-full h-full">
        {/* poster */}
        <img
          src="/img/poster/landscape/ted-lasso.png"
          alt=""
          className="w-[170px] h-[96px] object-cover"
        />
        {/* title and description */}
        <div className="w-full h-full flex flex-col justify-around">
          <p className="text-sm font-bold">Episode 2: Biscuits</p>
          <p className="line-clamp-3 items-center text-sm">
            It’s Ted’s first day of coaching, and fans aren’t happy. He makes
            little headway but remains undeterred as the team play their first
            match.
          </p>
        </div>
      </div>
    </div>
  );
};

const Speedometer = () => {
  return (
    <div className="w-[196px] h-[218px] bg-[#22282A] absolute bottom-[78px] right-[40px] flex flex-col justify-around px-3 py-2 text-sm">
      <p className="font-bold text-base">Kecepatan</p>
      <p className="cursor-pointer">0.5x</p>
      <p className="cursor-pointer">0.75x</p>
      <p className="cursor-pointer">1x (Normal)</p>
      <p className="cursor-pointer">1.25x</p>
      <p className="cursor-pointer">1.5x</p>
    </div>
  );
};

const List = () => {
  return (
    <div className="h-[300px] w-[368px] lg:w-[457px] flex flex-col gap-3 absolute right-5 lg:right-10 bottom-[66px] lg:bottom-[78px] bg-[#3D4142] rounded-lg">
      <div className="flex gap-1 px-3 py-2">
        <img src="/img/icons/keyboard-backspace.png" alt="" />
        <p className="font-bold ">Episode Selanjutnya</p>
      </div>
      <div className="overflow-y-auto flex flex-col gap-3">
        <div className="font-semibold w-full px-3 cursor-pointer">
          Episode 1
        </div>
        <div className="font-semibold w-full bg-[#22282A] px-3 py-1 flex flex-col gap-2">
          {/* current episode */}
          <p>Episode 2</p>
          <div className="flex w-full gap-3">
            <img
              src="/img/poster/landscape/ted-lasso.png"
              alt=""
              className="w-[170px] h-[96px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <p className="text-sm font-bold">Biscuits</p>
              <p className="line-clamp-3 text-sm">
                It’s Ted’s first day of coaching, and fans aren’t happy. He
                makes little headway but remains undeterred as the team play
                their first match.
              </p>
            </div>
          </div>
        </div>
        <div className="font-semibold w-full px-3 cursor-pointer">
          Episode 3
        </div>
        <div className="font-semibold w-full px-3 cursor-pointer">
          Episode 4
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
