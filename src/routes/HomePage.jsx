import { useState } from "react";
import Hero from "../components/Hero";
import Poster from "../components/elements/Poster";
import MovieSlide from "../components/MovieSlide";
import PopUpDetails from "../components/elements/PopUpDetails";
import useDetailMovie from "../store/useDetailMovie";
import { useFetchMovie } from "../hooks/useFetchMovie";

const HomePage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const { setDetailMovie } = useDetailMovie();
  const { dataMovie, loading } = useFetchMovie();

  if (loading) return <div>Loading...</div>;
  return (
    <>
      {openDetails && (
        <PopUpDetails onCloseBtnClick={() => setOpenDetails(!openDetails)} />
      )}

      {/* Hero */}
      {dataMovie.map(
        (item, index) =>
          item.Title === "Duty After School" && (
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
              showGenre={false}
              key={index}
            />
          )
      )}

      {/* Recent */}
      <MovieSlide title="Melanjutkan Tonton Film">
        {dataMovie.map((item, index) => (
          <Poster
            key={index}
            title={item.Title}
            oriented="landscape"
            src={item.Images.landscape}
            rating={item.ChillRating}
            premium={item.Premium ? true : false}
            newEpisode={item.Featured.includes("new-episode") ? true : false}
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
        ))}
      </MovieSlide>

      {/* Top Rating dan Series Hari ini */}
      <MovieSlide title="Top Rating Film dan Series Hari ini">
        {dataMovie.map(
          (item, index) =>
            item.ChillRating >= 4.5 && (
              <Poster
                key={index}
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

      {/* Film Trending */}
      <MovieSlide title="Film Trending">
        {dataMovie.map(
          (item, index) =>
            item.Featured.includes("trending") && (
              <Poster
                key={index}
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
          (item, index) =>
            Number(item.Year) >= 2025 && (
              <Poster
                key={index}
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

export default HomePage;
