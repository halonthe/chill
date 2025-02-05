import Hero from "../components/Hero";
import Poster from "../components/elements/Poster";
import MovieSlide from "../components/MovieSlide";
import { useEffect, useRef, useState } from "react";
import PopUpDetails from "../components/elements/PopUpDetails";

const HomePage = () => {
  // call database.json
  const [data, setData ] = useState([]);
    useEffect(() => {
      try {   
        fetch("/database.json")
          .then(res => res.json())
          .then(data => setData(data));
      } catch (error) {
        console.log(error);
      }
    }, []);
  
    // show details movie pop-up
  const [openDetails, setOpenDetails] = useState(false);
  const popUpRef = useRef()
  const handlePopUpDetails = () => {
    setOpenDetails(true);
    popUpRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <div ref={popUpRef}>
        {openDetails && (
          <PopUpDetails onCloseBtnClick={() => setOpenDetails(!openDetails)} />
        )}
      </div>

      {/* Hero */}
      {data.map((item,index) => item.Title === "Duty After School" && <Hero title={item.Title} bg={item.Images.banner} desc={item.Plot} onMoreBtnClick={() => setOpenDetails(!openDetails)} showGenre={false} key={index}/>)}

      {/* Recent */}
      <MovieSlide title="Melanjutkan Tonton Film">
        {data.map(
          (item, index) => <Poster key={index} title={item.Title} oriented="landscape" src={item.Images.landscape} rating={item.ChillRating} newEpisode={false} topTen={false} showDetail={() => handlePopUpDetails()} />
        )}
      </MovieSlide>

      {/* Top Rating dan Series Hari ini */}
      <MovieSlide title="Top Rating dan Series Hari ini">
        {data.map(
          (item, index) => <Poster key={index} title={item.Title} src={item.Images.potrait} rating={item.ChillRating} newEpisode={false} topTen={false} showDetail={() => handlePopUpDetails()} />
        )}
      </MovieSlide>
      
      {/* Film Trending */}
      <MovieSlide title="Film Trending">
        {data.map(
          (item, index) => <Poster key={index} title={item.Title} src={item.Images.potrait} rating={item.ChillRating} newEpisode={false} topTen={false} showDetail={() => handlePopUpDetails()} />
        )}
      </MovieSlide>
      
      {/* Rilis Baru */}
      <MovieSlide title="Rilis Baru">
        {data.map(
          (item, index) => <Poster key={index} title={item.Title} src={item.Images.potrait} rating={item.ChillRating} newEpisode={false} topTen={false} showDetail={() => handlePopUpDetails()} />
        )}
      </MovieSlide>

    </>
  );
};

export default HomePage;
