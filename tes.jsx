const { dataMovie, setDataMovie } = useMovieStore();

const fetchData = onSnapshot(
  collection(db, "movies"),
  (snapShot) => {
    let list = [];
    snapShot.docs.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setDataMovie(list);
  },
  (error) => {
    console.log(error);
  }
);
