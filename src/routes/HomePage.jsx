import React from "react";
import Hero from "../components/Hero";
import Poster from "../components/elements/Poster";
import MovieSlide from "../components/MovieSlide";

const HomePage = () => {
  // Movie data
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

  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Recent */}
      <MovieSlide title="Melanjutkan Tonton Film">
        {data.map(
          (item, index) =>
            item.group.includes("recent") && <Poster key={index} {...item} />
        )}
      </MovieSlide>
      {/* Mix Trending and New Release */}
      <MovieSlide title="Top Rating dan Series Hari ini">
        {data.map(
          (item, index) =>
            item.group.includes("mix") && <Poster key={index} {...item} />
        )}
      </MovieSlide>
      {/* Trending */}
      <MovieSlide title="Film Trending">
        {data.map(
          (item, index) =>
            item.group.includes("trending") && <Poster key={index} {...item} />
        )}
      </MovieSlide>
      {/* New Realese */}
      <MovieSlide title="Rilis Baru">
        {data.map(
          (item, index) =>
            item.group.includes("new") && <Poster key={index} {...item} />
        )}
      </MovieSlide>
    </>
  );
};

export default HomePage;
