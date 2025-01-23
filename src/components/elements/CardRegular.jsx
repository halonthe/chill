import React from "react";

const CardRegular = () => {
  return (
    <div className="flex bg-[#3D4142] md:ml-[5%] rounded-lg p-6 md:mt-9">
      <img alt="" src="/img/icons/Warning.png" className="w-[78px] h-[78px]" />
      <div className="flex flex-col justify-between ml-3">
        <div className="flex flex-col gap-3">
          <p className="text-lg md:text-2xl font-bold">
            Saat ini anda belum berlangganan
          </p>
          <p className="text-sm md:text-lg">
            Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
          </p>
        </div>
        <div className="relative mt-10">
          <span className="bg-[#2F3334] absolute right-0 bottom-0 rounded-3xl px-4 py-1 text-xs lg:text-base cursor-pointer">
            Mulai Berlangganan
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardRegular;
