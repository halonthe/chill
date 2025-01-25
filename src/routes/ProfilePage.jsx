import React, { useRef, useState } from "react";
import { FaPen, FaRegFileImage } from "react-icons/fa6";
import { Link } from "react-router";
import MovieList from "../components/MovieList";
import Poster from "../components/elements/Poster";
import CardRegular from "../components/elements/CardRegular";
import CardPremium from "../components/elements/CardPremium";

const ProfilePage = () => {
  const data = [
    {
      title: "Jurassic World",
      rating: "4.4",
      src: "/img/poster/potrait/mix-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Jurassic World",
      rating: "4.4",
      src: "/img/poster/potrait/mix-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Jurassic World",
      rating: "4.4",
      src: "/img/poster/potrait/mix-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Jurassic World",
      rating: "4.4",
      src: "/img/poster/potrait/mix-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Jurassic World",
      rating: "4.4",
      src: "/img/poster/potrait/mix-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
    {
      title: "Jurassic World",
      rating: "4.4",
      src: "/img/poster/potrait/mix-2.png",
      type: "potrait",
      newEpisode: false,
      topTen: false,
      group: ["mix"],
      category: ["Action", "Drama", "Sci-Fi"],
    },
  ];
  const [picture, setPicture] = useState(null);
  const img = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  return (
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
              src={picture ? picture : "/img/icons/profile.png"}
              alt=""
              className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] object-cover rounded-full"
            />
            <div className="flex flex-col gap-2">
              {/* upload */}
              <input
                type="file"
                ref={img}
                hidden
                onChange={(e) =>
                  setPicture(URL.createObjectURL(e.target.files[0]))
                }
              />
              <span
                className="text-[#3254FF] cursor-pointer border border-[#3254FF] rounded-3xl px-3 py-2 w-[120px] text-center text-base"
                onClick={() => img.current.click()}
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
                <label htmlFor="username" className="text-base text-[#9D9EA1]">
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
                  ref={username}
                />
              </div>
              <FaPen
                className="cursor-pointer w-6 h-6"
                onClick={() => {
                  username.current.disabled = false;
                  username.current.focus();
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
                  ref={email}
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
                  ref={password}
                />
              </div>
              <FaPen
                className="cursor-pointer w-6 h-6"
                onClick={() => {
                  password.current.disabled = false;
                  password.current.focus();
                }}
              />
            </div>
          </div>
          {/* submit button */}
          <button className="px-4 py-2 bg-[#0F1E93] rounded-3xl text-base w-full md:w-[106px] md:h-[42px]">
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
          {data.map((item, index) => (
            <Poster key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
