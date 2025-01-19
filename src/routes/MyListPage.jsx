import React from "react";
import MovieList from "../components/MovieList";
import Poster from "../components/elements/Poster";

const MyListPage = () => {
  const data = [
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
      title: "Jurassic World",
      rating: "4.4",
      src: "/img/poster/potrait/mix-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
  ];
  return (
    <>
      <MovieList title="Daftar Saya">
        {data.map((item, index) => (
          <Poster key={index} {...item} />
        ))}
      </MovieList>
    </>
  );
};

export default MyListPage;
