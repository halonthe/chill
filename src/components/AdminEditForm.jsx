import InputForm from "../components/elements/InputForm";
import useAdminForm from "../store/useAdminForm";
import { useState } from "react";
import { useMovie } from "../hooks/useMovie";

const AdminEditForm = () => {
  const { setOpenForm, setOpenList, setOpenEdit, editState } = useAdminForm();

  const [title, setTitle] = useState(editState.title);
  const [poster, setPoster] = useState(editState.poster);
  const [banner, setBanner] = useState(editState.banner);
  const [year, setYear] = useState(editState.year);
  const [plot, setPlot] = useState(editState.plot);
  const [chillRating, setChillRating] = useState(editState.chillRating);
  const [actors, setActors] = useState(editState.actors);
  const [genre, setGenre] = useState(editState.genre);
  const [writer, setWriter] = useState(editState.writer);
  const [premium, setPremium] = useState(editState.isPremium);
  const [newEpisode, setNewEpisode] = useState(
    editState.featured.includes("new-episode")
  );
  const [trending, setTrending] = useState(
    editState.featured.includes("trending")
  );

  const { editMovie } = useMovie();

  return (
    <div className="mt-5 sm:mt-9">
      <form onSubmit={editMovie}>
        <div>
          <label htmlFor="Type" className="mt-9">
            Type
          </label>
          <div className="flex gap-5">
            <div className="flex gap-1">
              <input type="radio" name="Type" value="movie" />
              <label>film</label>
            </div>
            <div className="flex gap-1">
              <input type="radio" name="Type" value="series" />
              <label>series</label>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="">Featured</label>
          <div className="flex gap-5">
            <div>
              <input
                type="checkbox"
                name="isPremium"
                value={true}
                checked={premium}
                onChange={(e) => setPremium(e.target.checked)}
              />
              <label htmlFor="isPremium">Premium</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="new"
                value="new-episode"
                checked={newEpisode}
                onChange={(e) => setNewEpisode(e.target.checked)}
              />
              <label htmlFor="new">New</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="trending"
                value="trending"
                checked={trending}
                onChange={(e) => setTrending(e.target.checked)}
              />
              <label htmlFor="trending">Trending</label>
            </div>
          </div>
        </div>
        <InputForm
          inputType="text"
          label="Title"
          placeholder="Judul Film"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputForm
          inputType="text"
          label="Link Poster"
          placeholder="https://xxx.com/xxx.jpg"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <InputForm
          inputType="text"
          label="Link Banner"
          placeholder="https://xxx.com/xxx.jpg"
          value={banner}
          onChange={(e) => setBanner(e.target.value)}
        />
        <InputForm
          inputType="number"
          label="Year"
          placeholder="1945"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <InputForm
          inputType="text"
          label="Plot"
          placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur ad ratione sit, quaerat quidem dolorem odio nisi repudiandae, rem tempora nostrum cupiditate veniam voluptate, quia maxime saepe? Maxime, expedita!"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
        />
        <InputForm
          inputType="number"
          label="Chill Rating"
          placeholder="X/5"
          value={chillRating}
          onChange={(e) => setChillRating(e.target.value)}
        />
        <InputForm
          inputType="text"
          label="Actors"
          placeholder="Masukkan nama aktor, pisahkan dengan koma"
          value={actors}
          onChange={(e) => setActors(e.target.value)}
        />
        <InputForm
          inputType="text"
          label="Genre"
          placeholder="Masukkan genre, pisahkan dengan koma"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <InputForm
          inputType="text"
          label="Writer"
          placeholder="Masukkan pengarang, pisahkan dengan koma"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
        <button
          className="px-4 py-2 mt-5 md:mt-9 bg-[#0F1E93] rounded-3xl text-base w-full md:w-[106px] md:h-[42px]"
          type="submit"
        >
          Simpan
        </button>
        <button
          className="px-4 py-2 mt-5 md:mt-9 bg-[#656566] rounded-3xl text-base w-full md:w-[106px] md:h-[42px] mx-2"
          onClick={() => {
            setOpenEdit(false);
            setOpenForm(false);
            setOpenList(true);
          }}
        >
          Batal
        </button>
      </form>
    </div>
  );
};

export default AdminEditForm;
