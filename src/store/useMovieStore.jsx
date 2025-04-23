import { create } from "zustand";

const useMovieStore = create((set) => ({
  dataMovie: [],
  setDataMovie: (newMovies) => set({ dataMovie: newMovies }),
}));

export default useMovieStore;
