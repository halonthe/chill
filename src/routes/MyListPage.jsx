import { useState } from "react";
import PopUpDetails from "../components/elements/PopUpDetails";
import MovieList from "../components/MovieList";
import Poster from "../components/elements/Poster";
import useMovie from "../store/useMovie";
import { useFetchMovie } from "../hooks/useFetchMovie";

const MyListPage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const { setMovie } = useMovie();
  const { data, loading } = useFetchMovie();

  if (loading) return <div>Loading...</div>;
  return (
    <>
      {openDetails && (
        <PopUpDetails onCloseBtnClick={() => setOpenDetails(!openDetails)} />
      )}
      <MovieList title="Daftar Saya">
        {data.map((item, index) => (
          <Poster
            key={index}
            title={item.Title}
            oriented="potrait"
            src={item.Images.potrait}
            rating={item.ChillRating}
            showDetail={() => {
              setMovie({
                title: item.Title,
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
      </MovieList>
    </>
  );
};

export default MyListPage;
