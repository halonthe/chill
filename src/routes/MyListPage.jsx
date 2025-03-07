import { useState } from "react";
import PopUpDetails from "../components/elements/PopUpDetails";
import MovieList from "../components/MovieList";
import Poster from "../components/elements/Poster";
import useDetailMovie from "../store/useDetailMovie";
import { useMyList } from "../hooks/useMyList";

const MyListPage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const { setDetailMovie } = useDetailMovie();
  const { myListData } = useMyList();
  return (
    <>
      {openDetails && (
        <PopUpDetails onCloseBtnClick={() => setOpenDetails(!openDetails)} />
      )}

      <MovieList title="Daftar Saya">
        {myListData.map((item, index) => (
          <Poster
            key={index}
            title={item.title}
            oriented="potrait"
            src={item.poster}
            showDetail={() => {
              setDetailMovie({
                title: item.title,
                poster: item.poster,
                banner: item.banner,
                year: item.year,
                rated: item.rated,
                plot: item.plot,
                actors: item.actors,
                genre: item.genre,
                writer: item.writer,
                type: item.type,
                isPremium: item.isPremium,
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
