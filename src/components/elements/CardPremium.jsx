import React from "react";

const CardPremium = () => {
  return (
    <div className="flex bg-gradient-to-br from-[#5370D4] to-[#192DB7] md:ml-[5%] rounded-lg p-6 md:mt-9">
      <div className="flex flex-col justify-between ml-3">
        <div className="flex flex-col gap-3">
          <button className="bg-[#C1C2C4] text-[#0F1E93] text-base rounded-3xl w-[81px] h-[34px]">
            Aktif
          </button>
          <p className="text-lg md:text-2xl font-bold">
            Akun Premium Individual✨
          </p>
          <p className="text-sm md:text-lg mb-5">
            Saat ini kamu sedang menggunakan akses akun premium
          </p>
          <p className="text-[#C1C2C4]">Berlaku hingga 31 Desember 2023</p>
        </div>
      </div>
    </div>
  );
};

export default CardPremium;
