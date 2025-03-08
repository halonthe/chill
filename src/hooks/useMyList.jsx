import { useEffect, useState } from "react";

export const useMyList = () => {
  // get my list data
  const [myListData, setMyListData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyList = () => {
      try {
        const data = JSON.parse(localStorage.getItem("myList"));
        setMyListData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyList();
  }, []);

  // add to my list
  const addToMyList = (movie) => {
    const newList = [...myListData, movie];
    localStorage.setItem("myList", JSON.stringify(newList));
  };

  // remove from my list
  const removeFromMyList = (movie) => {
    const newList = myListData.filter((item) => item.title !== movie.title);
    localStorage.setItem("myList", JSON.stringify(newList));
  };

  return { loading, myListData, addToMyList, removeFromMyList };
};
