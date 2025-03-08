import { useEffect, useState } from "react";

export const useFetchMovie = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch("/movieDatabase.json");
        const data = await response.json();
        setDataMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [dataMovie]);

  return { dataMovie, loading };
};
