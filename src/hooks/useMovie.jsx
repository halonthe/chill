import { useEffect } from "react";
import { db } from "../services/api/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import useMovieStore from "../store/useMovieStore";
import useAdminForm from "../store/useAdminForm";

export const useMovie = () => {
  const { setOpenForm, setOpenList, setOpenEdit, editState } = useAdminForm();
  const { dataMovie, setDataMovie } = useMovieStore();

  // fetch data from firebase
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

    // fecth Real Time Database
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

    return () => {
      fetchData();
    };
  }, []);

  // handle add movie to firestrore
  const addMovie = async (e) => {
    e.preventDefault();

    // get data dari input form
    const formData = new FormData(e.target);
    const dataInput = Object.fromEntries(formData.entries());
    console.log(dataInput);
    const data = {
      Title: dataInput.Title,
      Images: {
        banner: dataInput["Link-Banner"],
        potrait: dataInput["Link-Poster"],
        landscape: dataInput["Link-Banner"],
      },
      Year: dataInput.Year,
      Rated: dataInput.Rated || "18+",
      Plot: dataInput.Plot,
      ChillRating: Number(dataInput["Chill-Rating"]),
      Actors: dataInput.Actors,
      Genre: dataInput.Genre,
      Writer: dataInput.Writer,
      Type: dataInput.Type,
      Premium: dataInput.isPremium === "true" || false,
      Featured: [dataInput.new || "", dataInput.trending || ""],
    };

    if (
      !dataInput.Title ||
      !dataInput["Link-Poster"] ||
      !dataInput["Link-Banner"] ||
      !dataInput.Year ||
      !dataInput["Chill-Rating"] ||
      !dataInput.Plot ||
      !dataInput.Actors ||
      !dataInput.Genre ||
      !dataInput.Writer ||
      !dataInput.Type
    ) {
      alert("form tidak boleh kosong!");
      return;
    }

    try {
      await addDoc(collection(db, "movies"), data);
    } catch (error) {
      console.log(error);
    } finally {
      alert("data berhasil ditambahkan!");
      setOpenForm(false);
      setOpenList(true);
    }
  };

  // handle delete movie from firestrore
  const deleteMovie = async (id) => {
    const answer = window.confirm(
      "Apakah anda yakin ingin menghapus data ini?"
    );
    if (answer) {
      try {
        await deleteDoc(doc(db, "movies", id));
      } catch (error) {
        console.log(error);
      } finally {
        alert("data berhasil dihapus!");
      }
    }
  };

  // handle edit movie from firestrore
  const editMovie = async (e) => {
    e.preventDefault();

    // get data dari input form
    const formData = new FormData(e.target);
    const dataInput = Object.fromEntries(formData.entries());
    const data = {
      Title: dataInput.Title,
      Images: {
        banner: dataInput["Link-Banner"],
        potrait: dataInput["Link-Poster"],
        landscape: dataInput["Link-Banner"],
      },
      Year: dataInput.Year,
      Rated: dataInput.Rated || "18+",
      Plot: dataInput.Plot,
      ChillRating: Number(dataInput["Chill-Rating"]),
      Actors: dataInput.Actors,
      Genre: dataInput.Genre,
      Writer: dataInput.Writer,
      Type: dataInput.Type,
      Premium: dataInput.isPremium === "true" || false,
      Featured: [dataInput.new || "", dataInput.trending || ""],
    };

    if (
      !dataInput.Title ||
      !dataInput["Link-Poster"] ||
      !dataInput["Link-Banner"] ||
      !dataInput.Year ||
      !dataInput["Chill-Rating"] ||
      !dataInput.Plot ||
      !dataInput.Actors ||
      !dataInput.Genre ||
      !dataInput.Writer ||
      !dataInput.Type
    ) {
      alert("form tidak boleh kosong!");
      return;
    }

    try {
      await updateDoc(doc(db, "movies", editState.id), data);
      alert("sukses edit!");
    } catch (error) {
      console.log(error);
    } finally {
      setOpenForm(false);
      setOpenEdit(false);
      setOpenList(true);
    }
  };

  return { dataMovie, addMovie, deleteMovie, editMovie };
};
