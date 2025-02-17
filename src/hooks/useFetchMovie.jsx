import { useEffect, useState } from "react";

export const useFetchMovie = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch("/database.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return { data, loading };
};
