import CardPrice from "../components/elements/CardPrice";
import { useNavigate } from "react-router";

const SubscribePage = () => {
  let navigate = useNavigate();
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
          <CardPrice
            plan="Individual"
            price="49.990"
            totalAccount="1"
            quality="720p"
            onClick={() => {
              navigate("/payments");
            }}
          />
          <CardPrice
            plan="Berdua"
            price="79.990"
            totalAccount="2"
            quality="1080p"
            onClick={() => {
              navigate("/payments");
            }}
          />
          <CardPrice
            plan="Keluarga"
            price="159.990"
            totalAccount="5-7"
            quality="4K"
            onClick={() => {
              navigate("/payments");
            }}
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

export default SubscribePage;
