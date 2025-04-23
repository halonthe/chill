import InputForm from "../components/elements/InputForm";
import useAdminForm from "../store/useAdminForm";
import { useMovie } from "../hooks/useMovie";

const AdminAddForm = () => {
  const { setOpenForm, setOpenList, setOpenEdit } = useAdminForm();
  const { addMovie } = useMovie();

  return (
    <div className="mt-5 sm:mt-9">
      <form onSubmit={addMovie}>
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
              <input type="checkbox" name="isPremium" value={true} />
              <label htmlFor="isPremium">Premium</label>
            </div>
            <div>
              <input type="checkbox" name="new" value="new-episode" />
              <label htmlFor="new">New</label>
            </div>
            <div>
              <input type="checkbox" name="trending" value="trending" />
              <label htmlFor="trending">Trending</label>
            </div>
          </div>
        </div>
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
        <InputForm inputType="number" label="Chill Rating" placeholder="1.0" />
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
