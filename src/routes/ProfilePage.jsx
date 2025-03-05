import { useRef, useState } from "react";
import { FaPen, FaRegFileImage } from "react-icons/fa6";
import { Link } from "react-router";
import Poster from "../components/elements/Poster";
// import CardRegular from "../components/elements/CardRegular";
import CardPremium from "../components/elements/CardPremium";
import PopUpDetails from "../components/elements/PopUpDetails";
import { useMyList } from "../hooks/useMyList";
import useDetailMovie from "../store/useDetailMovie";

const ProfilePage = () => {
  // form focus
  const avatarRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // update profile
  const [avatar, setAvatar] = useState(null);

  const handleUpdateProfile = (e) => {
    console.log(e);
  };

  // pop up detail movie
  const [openDetails, setOpenDetails] = useState(false);
  const { setDetailMovie } = useDetailMovie();

  // my-list data
  const { loading, myListData } = useMyList();
  if (loading) return <div>Loading...</div>;

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
            {/* field username*/}
            <div className="mb-8">
              <div className="w-full bg-[#22282A] flex justify-between items-center px-4 py-2 rounded-md border border-[#E7E3FC]/[.23]">
                {/* input */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="username"
                    className="text-base text-[#9D9EA1]"
                  >
                    Nama Pengguna
                  </label>
                  <input
                    type="text"
                    className="text-lg bg-transparent w-full border-none outline-none"
                    placeholder="username"
                    required
                    disabled
                    id="username"
                    name="username"
                    ref={usernameRef}
                  />
                </div>
                <FaPen
                  className="cursor-pointer w-6 h-6"
                  onClick={() => {
                    usernameRef.current.disabled = false;
                    usernameRef.current.focus();
                  }}
                />
              </div>
              {/* hint */}
              <span className="text-[#747674] text-xs">
                this is a hint text to help user
              </span>
            </div>
            {/* field email*/}
            <div className="mb-8">
              <div className="w-full bg-[#22282A] flex justify-between items-center px-4 py-2 rounded-md border border-[#E7E3FC]/[.23]">
                {/* input */}
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="text-base text-[#9D9EA1]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="text-lg bg-transparent w-full border-none outline-none"
                    placeholder="yudhadwi@restika.id"
                    required
                    disabled
                    ref={emailRef}
                  />
                </div>
              </div>
            </div>
            {/* field password*/}
            <div className="mb-8">
              <div className="w-full bg-[#22282A] flex justify-between items-center px-4 py-2 rounded-md border border-[#E7E3FC]/[.23]">
                {/* input */}
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="text-base text-[#9D9EA1]">
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    className="text-lg bg-transparent w-full border-none outline-none"
                    placeholder="****************"
                    required
                    disabled
                    ref={passwordRef}
                  />
                </div>
                <FaPen
                  className="cursor-pointer w-6 h-6"
                  onClick={() => {
                    passwordRef.current.disabled = false;
                    passwordRef.current.focus();
                  }}
                />
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={handleUpdateProfile}
              className="px-4 py-2 bg-[#0F1E93] rounded-3xl text-base w-full md:w-[106px] md:h-[42px]"
            >
              Simpan
            </button>
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
            {myListData.length > 0 ? (
              myListData.map((item, index) => (
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
              ))
            ) : (
              <div>Tidak ada data</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
