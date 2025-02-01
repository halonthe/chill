import React, { useRef, useState } from "react";
import Hero from "../components/Hero";
import MovieSlide from "../components/MovieSlide";
import Poster from "../components/elements/Poster";
import PopUpDetails from "../components/elements/PopUpDetails";

const SeriesPage = () => {
  const data = [
    // continue watching
    {
      title: "Don't Look Up",
      rating: "4.5",
      src: "/img/poster/landscape/recent-1.png",
      type: "landscape",
      newEpisode: false,
      topTen: false,
      group: ["recent"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "All of us are Dead",
      rating: "4.2",
      src: "/img/poster/landscape/recent-2.png",
      type: "landscape",
      newEpisode: false,
      topTen: false,
      group: ["recent"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Blue Lock",
      rating: "4.6",
      src: "/img/poster/landscape/recent-3.png",
      type: "landscape",
      newEpisode: true,
      topTen: false,
      group: ["recent", "new_episode"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "A Man Called Otto",
      rating: "4.4",
      src: "/img/poster/landscape/recent-4.png",
      type: "landscape",
      newEpisode: false,
      topTen: false,
      group: ["recent"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    // mix
    {
      title: "Suzume",
      rating: "4.4",
      src: "/img/poster/potrait/mix-1.png",
      type: "potrait",
      newEpisode: true,
      topTen: false,
      group: ["mix", "new_episode"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Jurassic World",
      rating: "4.4",
      src: "/img/poster/potrait/mix-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Sonic",
      rating: "4.4",
      src: "/img/poster/potrait/mix-3.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "All of us are Dead",
      rating: "4.4",
      src: "/img/poster/potrait/mix-4.png",
      type: "potrait",
      newEpisode: true,
      topTen: false,
      group: ["mix", "new_episode"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Big Hero 6",
      rating: "4.4",
      src: "/img/poster/potrait/mix-5.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    // trending
    {
      title: "The Tomorrow War",
      rating: "4.4",
      src: "/img/poster/potrait/trending-1.png",
      type: "potrait",
      newEpisode: false,
      topTen: true,
      group: ["trending", "top_ten"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Quantumania",
      rating: "4.4",
      src: "/img/poster/potrait/trending-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: true,
      group: ["trending", "top_ten"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Guardian of the Galaxy",
      rating: "4.4",
      src: "/img/poster/potrait/trending-3.png",
      type: "potrait",
      newEpisode: false,
      topTen: true,
      group: ["trending", "top_ten"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "A Man Called Otto",
      rating: "4.4",
      src: "/img/poster/potrait/trending-4.png",
      type: "potrait",
      newEpisode: false,
      topTen: true,
      group: ["trending", "top_ten"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "The Little Mermaid",
      rating: "4.4",
      src: "/img/poster/potrait/trending-5.png",
      type: "potrait",
      newEpisode: false,
      topTen: true,
      group: ["trending", "top_ten"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    // new release
    {
      title: "The Little Mermaid",
      rating: "4.4",
      src: "/img/poster/potrait/trending-5.png",
      type: "potrait",
      newEpisode: false,
      topTen: true,
      group: ["trending", "new"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Duty After School",
      rating: "4.4",
      src: "/img/poster/potrait/new-2.png",
      type: "potrait",
      newEpisode: true,
      topTen: false,
      group: ["new", "new_episode"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Big Hero 6",
      rating: "4.4",
      src: "/img/poster/potrait/new-3.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["new"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "All of us are Dead",
      rating: "4.4",
      src: "/img/poster/potrait/new-4.png",
      type: "potrait",
      newEpisode: true,
      topTen: false,
      group: ["new", "new_episode"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Missinf",
      rating: "4.4",
      src: "/img/poster/potrait/new-5.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["new"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
  ];
  const hero = [
    {
      title: "Happiness",
      bg: "/img/poster/hero/happiness.png",
      showGenre: true,
      desc: "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.",
    },
  ];
  const [openHoverSeries, setOpenHoverSeries] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  const handleHover = () => {
    setOpenHoverSeries(!openHoverSeries);
  };
  const handleDetails = () => {
    setOpenDetails(!openDetails);
  };
  return (
    <div className="relative">
      <>{openDetails && <PopUpDetails onCloseBtnClick={handleDetails} />}</>
      {/* hero */}
      <Hero {...hero[0]} onMoreBtnClick={handleDetails} />
      {/* melanjutkan tonton series */}
      <MovieSlide title="Melanjutkan Tonton Series">
        {data.map(
          (item, index) =>
            item.group.includes("recent") && (
              <Poster
                key={index}
                {...item}
                onHover={handleHover}
                showDetail={handleDetails}
              />
            )
        )}
      </MovieSlide>

      {/* series persembahan chill */}
      <MovieSlide title="Series Persembahan Chill">
        {data.map(
          (item, index) =>
            item.group.includes("mix") && (
              <Poster
                key={index}
                {...item}
                onHover={handleHover}
                showDetail={handleDetails}
              />
            )
        )}
      </MovieSlide>
      {/* top rating series hari ini */}
      <MovieSlide title="Top Rating Series Hari ini">
        {data.map(
          (item, index) =>
            item.group.includes("trending") && (
              <Poster
                key={index}
                {...item}
                onHover={handleHover}
                showDetail={handleDetails}
              />
            )
        )}
      </MovieSlide>
      {/* series trending */}
      <MovieSlide title="Series Trending">
        {data.map(
          (item, index) =>
            item.group.includes("trending") && (
              <Poster
                key={index}
                {...item}
                onHover={handleHover}
                showDetail={handleDetails}
              />
            )
        )}
      </MovieSlide>
      {/* rilis baru */}
      <MovieSlide title="Rilis Baru">
        {data.map(
          (item, index) =>
            item.group.includes("new") && (
              <Poster
                key={index}
                {...item}
                onHover={handleHover}
                showDetail={handleDetails}
              />
            )
        )}
      </MovieSlide>
    </div>
  );
};

export default SeriesPage;
