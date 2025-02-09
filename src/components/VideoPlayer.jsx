import React, { useState } from "react";
import { useNavigate } from "react-router";

const VideoPlayer = () => {
  const [subtitle, setSubtitle] = useState(false);
  const [nextEpisode, setNextEpisode] = useState(false);
  const [speed, setSpeed] = useState(false);
  const [list, setList] = useState(false);
  const [isPremium, setIsPremium] = useState(true);

  return (
    <section className="w-screen h-screen relative font-lato">
      {/* video */}
      <img
        src="/video/video.png"
        alt=""
        className="w-screen h-screen object-cover"
      />
      {/* play / pause */}
      <div className="absolute w-screen h-screen flex justify-center items-center bottom-[66px] left-0">
        <img
          className="cursor-pointer"
          src="/img/icons/pause-circle-outline.png"
          alt=""
        />
      </div>
      {/* skip intro */}
      <div className="absolute bottom-28 right-12 cursor-pointer lg:px-5 lg:py-2 px-3 py-1 bg-white text-[#3A3541] rounded-full text-center lg:text-base text-xs font-bold">
        {" "}
        Lewati Intro
      </div>
      {/* controls */}
      <div className="absolute bottom-0 w-full h-[96px] bg-[#181A1C]/[0.6] flex justify-between items-center px-10 py-7">
        {/* left controls */}
        <div className="flex gap-6 items-center">
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
            src="/img/icons/play.png"
            alt="play button"
          />
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
            src="/img/icons/rewind-10.png"
            alt="rewind button"
          />
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
            src="/img/icons/fast-forward-10.png"
            alt="fast-forward button"
          />
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
            src="/img/icons/volume.png"
            alt="volume button"
          />
        </div>
        {/* title */}
        <div>
          <p className="text-sm lg:text-lg font-semibold text-center font-lato line-clamp-1">
            TED Lasso Episode 1: The Good, the Bad, and the Ugly
          </p>
        </div>
        {/* right controls */}
        <div className="flex gap-6 items-center">
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
            src="/img/icons/skip.png"
            alt="next button"
            onMouseEnter={() => setNextEpisode(true)}
            onMouseLeave={() => setNextEpisode(false)}
          />
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
            src="/img/icons/list.png"
            alt="list button"
            onClick={() => setList(!list)}
          />
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
            src="/img/icons/subtitle.png"
            alt="subtitle button"
            onClick={() => setSubtitle(!subtitle)}
          />
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
            src="/img/icons/speedometer.png"
            alt="speed button"
            onClick={() => setSpeed(!speed)}
          />
          <img
            className="cursor-pointer w-7 h-7 lg:w-10 lg:h-10"
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
      {/* upgrade to premium */}
      {!isPremium && <UpgradeToPremium />}
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

const UpgradeToPremium = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black/70 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 lg:gap-16">
        <div className="text-center">
          <p className="text-2xl lg:text-3xl font-bold">Layanan Premium🌟</p>
          <p className="text-base lg:text-lg">
            Tingkatkan paket anda untuk dapat menonton video ini.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-base lg:text-lg">Kenapa harus berlangganan?</p>
          <div className="grid grid-cols-3 w-[600px]">
            <BenefitContent icon="download" content="Download konten pilihan" />
            <BenefitContent icon="ads-off" content="Tidak ada iklan" />
            <BenefitContent icon="movie-roll" content="Tonton semua konten" />
            <BenefitContent
              icon="video-4k-box"
              content="kualitas maksimal sampai dengan 4K"
            />
            <BenefitContent
              icon="tablet-cellphone"
              content="Tonton di Tv, Tablet, Mobile, dan Laptop"
            />
            <BenefitContent
              icon="subtitle"
              content="Subtitle Untuk Konten Pilihan"
            />
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/subscribe");
          }}
          className="px-7 py-3 rounded-full bg-[#09147A]"
        >
          Ubah Jadi Premium
        </button>
      </div>
    </div>
  );
};

const BenefitContent = ({ icon, content }) => {
  return (
    <div className="flex flex-col items-center gap-6 capitalize">
      <img src={`/img/icons/${icon}.png`} alt={`${icon} icon`} />
      <span className="max-w-[150px] text-center text-[#C1C2C4]">
        {content}
      </span>
    </div>
  );
};

export default VideoPlayer;
