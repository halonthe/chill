import React from "react";

const SubscribePage = () => {
  return (
    <section className="max-w-[1440px] w-full px-5 sm:px-20 py-5 sm:py-10">
      {/* benefits */}
      <div className="flex flex-col items-center md:px-20 md:py-10">
        <p className="text-xl md:text-3xl">Kenapa Harus Berlangganan?</p>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full mb-5 mt-6 md:mt-16 gap-3 md:gap-10">
          <BenefitContent icon="download" content="Download konten pilihan" />
          <BenefitContent icon="ads-off" content="Tidak ada iklan" />
          <BenefitContent icon="movie-roll" content="Tonton semua konten" />
          <BenefitContent
            icon="video-4k-box"
            content="kualitas maksimal sampai dengan 4K"
          />
          <BenefitContent
            icon="tablet-cellphone"
            content="Tonton di Tv, Tablet, Mobile, dan Laptop"
          />
          <BenefitContent
            icon="subtitle"
            content="Subtitle Untuk Konten Pilihan"
          />
        </div>
      </div>
      {/* pilih paket */}
      <div className="w-full bg-[#22282A] flex flex-col items-center justify-center gap-10 px-20 py-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-4xl font-bold">Pilih Paketmu</p>
          <p className="text-lg">Temukan paket sesuai kebutuhanmu!</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-[72px]">
          <PriceCard
            plan="Individual"
            price="49.990"
            totalAccount="1"
            quality="720p"
          />
          <PriceCard
            plan="Berdua"
            price="79.990"
            totalAccount="2"
            quality="1080p"
          />
          <PriceCard
            plan="Keluarga"
            price="159.990"
            totalAccount="5-7"
            quality="4K"
          />
        </div>
      </div>
    </section>
  );
};

const BenefitContent = ({ icon, content }) => {
  return (
    <div className="flex flex-col items-center gap-6 capitalize">
      <img src={`/img/icons/${icon}.png`} alt={`${icon} icon`} />
      <span className="max-w-[150px] text-center">{content}</span>
    </div>
  );
};

const PriceCard = ({ plan, price, totalAccount, quality }) => {
  return (
    <div className="p-6 min-w-[236px] bg-gradient-to-br from-[#5370D4] to-[#192DB7] rounded-xl flex flex-col justify-between">
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
        <button className="bg-white cursor-pointer text-[#0F1E93] text-base w-full py-[10px] rounded-full">
          Langganan
        </button>
        <p className="text-xs">Syarat dan Ketentuan Berlaku</p>
      </div>
    </div>
  );
};

export default SubscribePage;
