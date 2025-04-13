import { useEffect, useState } from "react";
import { db } from "../services/api/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export const useFetchMovie = () => {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    // const fetchMovie = async () => {
    // let list = [];
    // try {
    //   const querySnapshot = await getDocs(collection(db, "movies"));
    //   querySnapshot.forEach((doc) => {
    //     list.push({ id: doc.id, ...doc.data() });
    //   });
    //   setDataMovie(list);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
    // };
    // fetchMovie();

    // Real Time Database
    const unsub = onSnapshot(
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

    return () => {
      unsub();
    };
  }, []);

  return { dataMovie };
};
