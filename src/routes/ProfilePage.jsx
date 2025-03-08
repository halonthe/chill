import { useRef, useState } from "react";
import { FaRegFileImage } from "react-icons/fa6";
import { Link } from "react-router";
import Poster from "../components/elements/Poster";
// import CardRegular from "../components/elements/CardRegular";
import CardPremium from "../components/elements/CardPremium";
import PopUpDetails from "../components/elements/PopUpDetails";
import useDetailMovie from "../store/useDetailMovie";
import InputFormProfile from "../components/elements/InputFormProfile";
import { useMyList } from "../hooks/useMyList";

const ProfilePage = () => {
  // form focus
  const avatarRef = useRef();

  // update profile
  const [avatar, setAvatar] = useState(null);
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // get data dari input form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const usernameInput = data.username;
    const passwordInput = data.password;
    let profileObj = {};

    // update current user data
    const currentUser = userData.filter((user) => user.username === token);
    profileObj = {
      username: usernameInput || currentUser[0].username,
      password: passwordInput || currentUser[0].password,
    };

    // kalau username diedit, token diganti
    if (usernameInput) {
      localStorage.removeItem("token");
      localStorage.setItem("token", usernameInput);
    }

    // simpan perubahan ke localstorage
    const filteredUser = userData.filter((user) => user.username !== token);
    const editedUser = [...filteredUser, profileObj];
    localStorage.setItem("user", JSON.stringify(editedUser));
  };

  // pop up detail movie
  const [openDetails, setOpenDetails] = useState(false);
  const { setDetailMovie } = useDetailMovie();

  // my-list data
  const { myListData } = useMyList();
  return (
    <>
      {openDetails && (
        <PopUpDetails onCloseBtnClick={() => setOpenDetails(!openDetails)} />
      )}

      <section className="max-w-[1440px] w-full px-5 sm:px-20 py-5 sm:py-10">
        {/* profile */}
        <div className="flex flex-col md:flex-row-reverse w-full md:gap-0 gap-5">
          <div className="w-full md:w-1/2">
            {/* card */}
            <CardPremium />
          </div>
          {/* update profile */}
          <div className="w-full md:w-1/2">
            {/* form */}
            {userData.map(
              (user, index) =>
                user.username === token && (
                  <form key={index} onSubmit={handleUpdateProfile}>
                    <h3 className="text-xl sm:text-3xl">Profile Saya</h3>
                    {/* picture */}
                    <div className="flex items-center my-5 md:my-8 gap-6">
                      <img
                        src={avatar ? avatar : "/img/icons/profile.png"}
                        alt=""
                        className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] object-cover rounded-full"
                      />
                      <div className="flex flex-col gap-2">
                        {/* upload */}
                        <input
                          type="file"
                          ref={avatarRef}
                          hidden
                          onChange={(e) =>
                            setAvatar(URL.createObjectURL(e.target.files[0]))
                          }
                        />
                        <span
                          className="text-[#3254FF] cursor-pointer border border-[#3254FF] rounded-3xl px-3 py-2 w-[120px] text-center text-base"
                          onClick={() => avatarRef.current.click()}
                        >
                          Ubah Foto
                        </span>
                        <span className="flex items-center">
                          <FaRegFileImage /> Maksimal 2MB
                        </span>
                      </div>
                    </div>
                    {/* username*/}
                    <InputFormProfile
                      type="username"
                      placeholder={user.username}
                    />
                    {/* field email*/}
                    <InputFormProfile
                      type="email"
                      placeholder="yudhadwi@restika.id"
                    />
                    {/* field password*/}
                    <InputFormProfile type="password" />

                    {/* submit button */}
                    <button className="px-4 py-2 bg-[#0F1E93] rounded-3xl text-base w-full md:w-[106px] md:h-[42px]">
                      Simpan
                    </button>
                  </form>
                )
            )}
          </div>
        </div>
        {/* mylist */}
        <div className="w-full py-5 sm:py-10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-3xl">Daftar Saya</h3>
            <Link to="/daftar-saya">
              <span className="text-[#9D9EA1] hover:text-[#3254FF]">
                Lihat Semua
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap md:grid md:grid-flow-col md:overflow-x-auto gap-4 md:gap-7 mt-5">
            {myListData.map((item, index) => (
              <Poster
                key={index}
                title={item.title}
                oriented="potrait"
                src={item.poster}
                showDetail={() => {
                  setDetailMovie({
                    title: item.title,
                    poster: item.poster,
                    banner: item.banner,
                    year: item.year,
                    rated: item.rated,
                    plot: item.plot,
                    actors: item.actors,
                    genre: item.genre,
                    writer: item.writer,
                    type: item.type,
                    isPremium: item.isPremium,
                  });
                  setOpenDetails(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
