import { create } from "zustand";

const useDetailMovie = create((set) => ({
  detailMovie: {
    title: "",
    poster:"",
    banner: "",
    year: "",
    rated: "",
    plot: "",
    actors: "",
    genre: "",
    writer: "",
    type: "",
    isPremium: false,
  },
  setDetailMovie: (newDetailMovie) => set({ detailMovie: newDetailMovie }),
}));

export default useDetailMovie;
