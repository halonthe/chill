import { FaPencil, FaTrashCan } from "react-icons/fa6";
import { useFetchMovie } from "../hooks/useFetchMovie";
import AdminAddForm from "../components/AdminAddForm";
import useAdminForm from "../store/useAdminForm";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../services/api/firebaseConfig";
import AdminEditForm from "../components/AdminEditForm";

const AdminPage = () => {
  const {
    openForm,
    setOpenForm,
    openList,
    setOpenList,
    openEdit,
    setOpenEdit,
    setEditMovie,
  } = useAdminForm();
  const { dataMovie } = useFetchMovie();

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "movies", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-[1440px] w-full px-5 sm:px-20 py-5 sm:py-10">
      <h1 className="text-xl sm:text-3xl font-bold">Movie Data</h1>

      {/* list */}
      {openList && (
        <div className="mt-5 sm:mt-9">
          <button
            onClick={() => {
              setOpenList(false);
              setOpenForm(true);
            }}
            className="p-2 text-white bg-[#3D4142] rounded-[24px] border border-[#3D4142] sm:h-12"
          >
            Tambah Movie
          </button>

          {/* tabel */}
          <table className="w-full mt-5 sm:mt-9 justify-center">
            <thead className="text-left text-white">
              <tr>
                <th className="p-2 text-sm max-w-[300px] font-bold">Id</th>
                <th className="p-2 text-sm max-w-[300px] font-bold">Poster</th>
                <th className="p-2 text-sm max-w-[300px] font-bold">Title</th>
                <th className="p-2 text-sm max-w-[300px] font-bold">Year</th>
                <th className="p-2 text-sm max-w-[300px] font-bold">Plot</th>
                <th className="p-2 text-sm max-w-[300px] font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataMovie.map((item, index) => (
                <tr key={item.id}>
                  <td className="p-2 text-sm max-w-[300px]">{index + 1}</td>
                  <td className="p-2 text-sm max-w-[300px]">
                    <img
                      src={item.Images.potrait}
                      alt="poster"
                      width={100}
                      height={150}
                    />
                  </td>
                  <td className="p-2 text-sm max-w-[300px]">{item.Title}</td>
                  <td className="p-2 text-sm max-w-[300px]">{item.Year}</td>
                  <td className="p-2 text-sm max-w-[300px]">
                    <p className="line-clamp-4">{item.Plot}</p>
                  </td>
                  <td className="p-1 text-sm max-w-[300px]">
                    <button
                      className="mx-4"
                      onClick={() => {
                        setEditMovie({
                          id: item.id,
                          title: item.Title,
                          poster: item.Images.potrait,
                          banner: item.Images.landscape,
                          year: item.Year,
                          rated: item.Rated,
                          plot: item.Plot,
                          actors: item.Actors,
                          chillRating: item.ChillRating,
                          genre: item.Genre,
                          writer: item.Writer,
                          type: item.Type,
                          isPremium: item.Premium,
                        });
                        setOpenEdit(true);
                        setOpenForm(false);
                        setOpenList(false);
                      }}
                    >
                      <FaPencil className="text-blue-600" />
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <FaTrashCan className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* form */}
      {openForm && <AdminAddForm />}
      {openEdit && <AdminEditForm />}
    </section>
  );
};

export default AdminPage;
