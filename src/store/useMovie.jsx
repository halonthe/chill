import { create } from "zustand";

const useMovie = create((set) => ({
  movie: {
    title: "",
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
  setMovie: (newMovie) => set({ movie: newMovie }),
}));

export default useMovie;
