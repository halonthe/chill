export const useMyList = () => {
  // get my list data
  const myListData = JSON.parse(localStorage.getItem("myList")) || [];

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

  return { myListData, addToMyList, removeFromMyList };
};
