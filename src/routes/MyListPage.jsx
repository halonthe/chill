import { useEffect, useState } from "react";
import PopUpDetails from "../components/elements/PopUpDetails";
import MovieList from "../components/MovieList";
import Poster from "../components/elements/Poster";

const MyListPage = () => {
  // fetch data dari file ./public/database.json
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch("/database.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // state modal atau pop-up
  const [openDetails, setOpenDetails] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentBanner, setCurrentBanner] = useState("");
  const [currentYears, setCurrentYears] = useState("");
  const [currentRated, setCurrentRated] = useState("");
  const [currentPlot, setCurrentPlot] = useState("");
  const [currentActors, setCurrentActors] = useState("");
  const [currentGenre, setCurrentGenre] = useState("");
  const [currentWritter, setCurrentWritter] = useState("");
  const [currentType, setCurrentType] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  // menampilakn pop-up
  const handlePopUpDetails = () => {
    setOpenDetails(true);
  };

  return (
    <>
      {openDetails && (
        <PopUpDetails
          title={currentTitle}
          banner={currentBanner}
          years={currentYears}
          rated={currentRated}
          plot={currentPlot}
          actors={currentActors}
          genre={currentGenre}
          writter={currentWritter}
          type={currentType}
          isPremium={isPremium}
          onCloseBtnClick={() => setOpenDetails(!openDetails)}
        />
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
              setCurrentTitle(item.Title);
              setCurrentBanner(item.Images.landscape);
              setCurrentYears(item.Year);
              setCurrentRated(item.Rated);
              setCurrentPlot(item.Plot);
              setCurrentActors(item.Actors);
              setCurrentGenre(item.Genre);
              setCurrentWritter(item.Writer);
              setCurrentType(item.Type);
              setIsPremium(item.Premium);
              handlePopUpDetails();
            }}
          />
        ))}
      </MovieList>
    </>
  );
};

export default MyListPage;
