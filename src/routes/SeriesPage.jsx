import Hero from "../components/Hero";
import Poster from "../components/elements/Poster";
import MovieSlide from "../components/MovieSlide";
import { useState } from "react";
import PopUpDetails from "../components/elements/PopUpDetails";
import useDetailMovie from "../store/useDetailMovie";
import { useMovie } from "../hooks/useMovie";

const SeriesPage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const { setDetailMovie } = useDetailMovie();
  const { dataMovie } = useMovie();

  return (
    <>
      {openDetails && (
        <PopUpDetails onCloseBtnClick={() => setOpenDetails(!openDetails)} />
      )}

      {/* Hero */}
      {dataMovie.map(
        (item) =>
          item.Title === "Happiness" && (
            <Hero
              title={item.Title}
              bg={item.Images.banner}
              desc={item.Plot}
              onMoreBtnClick={() => {
                setDetailMovie({
                  title: item.Title,
                  poster: item.Images.potrait,
                  banner: item.Images.landscape,
                  year: item.Year,
                  rated: item.Rated,
                  plot: item.Plot,
                  actors: item.Actors,
                  genre: item.Genre,
                  writer: item.Writer,
                  type: item.Type,
                  isPremium: item.Premium,
                });
                setOpenDetails(true);
              }}
              showGenre={true}
              key={item.id}
            />
          )
      )}

      {/* Recent */}
      <MovieSlide title="Melanjutkan Tonton Series">
        {dataMovie.map(
          (item) =>
            item.Type === "series" && (
              <Poster
                key={item.id}
                title={item.Title}
                oriented="landscape"
                src={item.Images.landscape}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setDetailMovie({
                    title: item.Title,
                    poster: item.Images.potrait,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Series Persembahan Chill */}
      <MovieSlide title="Series Persembahan Chill">
        {dataMovie.map(
          (item) =>
            item.Type === "series" &&
            item.Premium === true && (
              <Poster
                key={item.id}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setDetailMovie({
                    title: item.Title,
                    poster: item.Images.potrait,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Top Rating Series Hari ini */}
      <MovieSlide title="Top Rating Series Hari ini">
        {dataMovie.map(
          (item) =>
            item.Type === "series" &&
            item.ChillRating >= 4.5 && (
              <Poster
                key={item.id}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setDetailMovie({
                    title: item.Title,
                    poster: item.Images.potrait,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Series Trending */}
      <MovieSlide title="Series Trending">
        {dataMovie.map(
          (item) =>
            item.Featured.includes("trending") &&
            item.Type === "series" && (
              <Poster
                key={item.id}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setDetailMovie({
                    title: item.Title,
                    poster: item.Images.potrait,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>

      {/* Rilis Baru */}
      <MovieSlide title="Rilis Baru">
        {dataMovie.map(
          (item) =>
            item.Type === "series" &&
            Number(item.Year) >= 2025 && (
              <Poster
                key={item.id}
                title={item.Title}
                src={item.Images.potrait}
                rating={item.ChillRating}
                premium={item.Premium ? true : false}
                newEpisode={
                  item.Featured.includes("new-episode") ? true : false
                }
                topTen={item.Featured.includes("trending") ? true : false}
                showDetail={() => {
                  setDetailMovie({
                    title: item.Title,
                    poster: item.Images.potrait,
                    banner: item.Images.landscape,
                    year: item.Year,
                    rated: item.Rated,
                    plot: item.Plot,
                    actors: item.Actors,
                    genre: item.Genre,
                    writer: item.Writer,
                    type: item.Type,
                    isPremium: item.Premium,
                  });
                  setOpenDetails(true);
                }}
              />
            )
        )}
      </MovieSlide>
    </>
  );
};

export default SeriesPage;
