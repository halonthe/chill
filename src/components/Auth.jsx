import React from "react";
import InputForm from "./elements/InputForm";
import { Link } from "react-router";

const Auth = ({ type }) => {
  return (
    <div className="flex items-center justify-center font-lato bg-[url('/img/bg-login.png')] w-full h-screen bg-no-repeat bg-cover bg-center">
      {/* container */}
      <div className="flex flex-col items-center justify-center w-[306px] h-auto p-6 bg-[#181A1C]/85 rounded-lg text-white text-[10px] sm:w-[529px] sm:p-10 sm:text-base">
        {/* logo */}
        <img
          className="w-[94px] h-6 sm:w-[163px] sm:h-[44px]"
          src="/img/Logo-Text.png"
          alt="logo"
        />
        {/* heading */}
        <div className="mt-5 flex flex-col items-center justify-center sm:mt-9">
          <h1 className="text-lg sm:text-2xl font-bold capitalize">{type}</h1>
          <p className=" text-[#C1C2C4]">
            {type === "masuk" ? "Selamat datang kembali!" : "Selamat datang!"}
          </p>
        </div>
        {/* form */}
        <form action="/" className="w-full m-0">
          <InputForm
            label="username"
            placeholder="Masukkan username"
            inputType="text"
          />
          <InputForm
            label="kata sandi"
            placeholder="Masukkan kata sandi"
            inputType="password"
          />
          {type === "daftar" && (
            <InputForm
              label="konfirmasi kata sandi"
              placeholder="Masukkan kata sandi"
              inputType="password"
            />
          )}
          <div className="text-[#C1C2C4] mt-1 flex justify-between">
            {type === "masuk" ? (
              <span>
                Belum punya akun?{" "}
                <Link to="/register" className="text-white cursor-pointer">
                  Daftar
                </Link>
              </span>
            ) : (
              <span>
                Sudah punya akun?{" "}
                <Link to="/login" className="text-white cursor-pointer">
                  Masuk
                </Link>
              </span>
            )}
            <Link to="/reset-password" className="text-white cursor-pointer">
              {type === "masuk" && "Lupa kata sandi?"}
            </Link>
          </div>
          <div className="mt-5 sm:mt-9">
            <button
              type="submit"
              className="w-full p-2 text-white bg-[#3D4142] rounded-[24px] border border-[#3D4142] sm:h-12 capitalize"
            >
              {type}
            </button>
          </div>
        </form>
        {/* google button */}
        <div className="flex flex-col items-center justify-center w-full">
          <span className="my-1 sm:my-3 text-[#C1C2C4]">Atau</span>
          <button className=" flex items-center justify-center gap-1 w-full p-2 text-white bg-transparent border border-[#3D4142] rounded-[24px] sm:gap-3 sm:h-12">
            <img
              src="/img/google.png"
              alt="google"
              className="w-[10px] h-[10px] sm:w-[18px] sm:h-[18px]"
            />{" "}
            Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
