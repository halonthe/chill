import React from "react";

const CardPrice = ({ plan, price, totalAccount, quality, onClick }) => {
  return (
    <div className="p-6 min-w-[236px]  bg-gradient-to-br from-[#5370D4] to-[#192DB7] rounded-xl flex flex-col justify-between">
      <div className="mb-9">
        <span className="px-5 py-[10px] bg-[#3D4142] rounded-3xl text-lg">
          {plan}
        </span>
        <div className="my-6 text-sm">
          <p>Mulai dari Rp{price}/bulan</p>
          <p>{totalAccount} Akun</p>
        </div>
        <ul className="list-image-[url('/img/icons/check.png')] list-inside text-sm flex flex-col gap-2">
          <li>
            <span className="ml-2">Tidak ada iklan</span>
          </li>
          <li>
            <span className="ml-2">Kualitas {quality}</span>
          </li>
          <li>
            <span className="ml-2">Download konten pilihan</span>
          </li>
        </ul>
      </div>
      <hr className="border-[#E7E3FC]/[0.23]" />
      <div className="flex flex-col items-center justify-center text-center gap-1 mt-9">
        <button
          className="bg-white cursor-pointer text-[#0F1E93] text-base w-full py-[10px] rounded-full"
          onClick={onClick}
        >
          Langganan
        </button>
        <p className="text-xs">Syarat dan Ketentuan Berlaku</p>
      </div>
    </div>
  );
};

export default CardPrice;
