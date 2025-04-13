import { addDoc, collection } from "firebase/firestore";
import InputForm from "../components/elements/InputForm";
import { db } from "../services/api/firebaseConfig";
import useAdminForm from "../store/useAdminForm";

const AdminAddForm = () => {
  const { setOpenForm, setOpenList, setOpenEdit } = useAdminForm();
  const handleAddmovie = async (e) => {
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
      const res = await addDoc(collection(db, "movies"), {
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
      console.log(res.id);
      setOpenForm(false);
      setOpenList(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5 sm:mt-9">
      <form onSubmit={handleAddmovie}>
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
        <InputForm inputType="text" label="Title" placeholder="Judul Film" />
        <InputForm
          inputType="text"
          label="Link Poster"
          placeholder="https://xxx.com/xxx.jpg"
        />
        <InputForm
          inputType="text"
          label="Link Banner"
          placeholder="https://xxx.com/xxx.jpg"
        />
        <InputForm inputType="number" label="Year" placeholder="1945" />
        <InputForm
          inputType="text"
          label="Plot"
          placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur ad ratione sit, quaerat quidem dolorem odio nisi repudiandae, rem tempora nostrum cupiditate veniam voluptate, quia maxime saepe? Maxime, expedita!"
        />
        <InputForm inputType="text" label="Chill Rating" placeholder="X/5" />
        <InputForm
          inputType="text"
          label="Actors"
          placeholder="Masukkan nama aktor, pisahkan dengan koma"
        />
        <InputForm
          inputType="text"
          label="Genre"
          placeholder="Masukkan genre, pisahkan dengan koma"
        />
        <InputForm
          inputType="text"
          label="Writer"
          placeholder="Masukkan pengarang, pisahkan dengan koma"
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

export default AdminAddForm;
