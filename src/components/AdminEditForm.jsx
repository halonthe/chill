import { doc, updateDoc } from "firebase/firestore";
import InputForm from "../components/elements/InputForm";
import { db } from "../services/api/firebaseConfig";
import useAdminForm from "../store/useAdminForm";
import { useState } from "react";

const AdminEditForm = () => {
  const { setOpenForm, setOpenList, setOpenEdit, editMovie } = useAdminForm();
  const [title, setTitle] = useState(editMovie.title);
  const [poster, setPoster] = useState(editMovie.poster);
  const [banner, setBanner] = useState(editMovie.banner);
  const [year, setYear] = useState(editMovie.year);
  const [plot, setPlot] = useState(editMovie.plot);
  const [chillRating, setChillRating] = useState(editMovie.chillRating);
  const [actors, setActors] = useState(editMovie.actors);
  const [genre, setGenre] = useState(editMovie.genre);
  const [writer, setWriter] = useState(editMovie.writer);

  const handleEditmovie = async (e) => {
    e.preventDefault();

    // get data dari input form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const title = data.Title;
    const poster = data["Link-Poster"];
    const banner = data["Link-Banner"];
    const year = data.Year;
    const rated = data.Rated || "18+";
    const plot = data.Plot;
    const chillRating = data["Chill-Rating"];
    const actors = data.Actors;
    const genre = data.Genre;
    const writer = data.Writer;
    const type = data.Type;
    const isPremium = data.isPremium === "true" || false;

    if (
      !title ||
      !poster ||
      !year ||
      !rated ||
      !plot ||
      !actors ||
      !genre ||
      !writer ||
      !type
    ) {
      alert("form tidak boleh kosong!");
      return;
    }

    try {
      await updateDoc(doc(db, "movies", editMovie.id), {
        Title: title,
        Images: { banner: banner, potrait: poster, landscape: banner },
        Year: year,
        Rated: rated,
        Plot: plot,
        ChillRating: chillRating,
        Actors: actors,
        Genre: genre,
        Writer: writer,
        Type: type,
        Premium: isPremium,
      });
      alert("sukses edit!");
    } catch (error) {
      console.log(error);
    } finally {
      setOpenForm(false);
      setOpenEdit(false);
      setOpenList(true);
    }
  };
  return (
    <div className="mt-5 sm:mt-9">
      <form onSubmit={handleEditmovie}>
        <label htmlFor="Type" className="mt-9">
          Type
        </label>
        <div className="flex gap-5">
          <div className="flex gap-1">
            <input type="radio" name="Type" value="film" />
            <label>film</label>
          </div>
          <div className="flex gap-1">
            <input type="radio" name="Type" value="series" />
            <label>series</label>
          </div>
        </div>
        <input type="checkbox" name="isPremium" value={true} />
        <label htmlFor="isPremium">Premium</label>
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
          inputType="text"
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
