import React from "react";
import CardPrice from "../components/elements/CardPrice";
import { useNavigate } from "react-router";

const PaymentPage = () => {
  let navigate = useNavigate();
  return (
    <section className="max-w-[1440px] w-full px-5 sm:px-20 py-5 sm:py-10">
      <h3 className="text-xl sm:text-3xl mb-5 md:mb-10">
        Ringkasan Pembayaran
      </h3>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
        {/* card */}
        <CardPrice
          plan="Individual"
          price="49,990"
          totalAccount="1"
          quality="720p"
        />
        {/* payment */}
        <div className="flex flex-col gap-4 w-full">
          {/* method */}
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <p className="text-lg">Metode Pembayaran</p>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <div className="flex w-full h-12 gap-2 px-[10px] py-1 border border-[#E0E0E0] rounded-md items-center text-sm">
                <input type="radio" id="card" name="card" value="card" />
                <img src="/img/icons/visa.png" alt="" />
                <img src="/img/icons/mastercard.png" alt="" />
                <img src="/img/icons/jcb.png" alt="" />
                <img src="/img/icons/american_express.png" alt="" />
                <label>Kartu Debit/Kredit</label>
              </div>
              <div className="flex w-full h-12 gap-2 px-[10px] py-1 border border-[#E0E0E0] rounded-md items-center text-sm">
                <input type="radio" id="va" name="va" value="va" />
                <img src="/img/icons/bca.png" alt="" />
                <label>BCA Virtual Account</label>
              </div>
            </div>
          </div>
          {/* voucher */}
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <p className="text-lg">Kode Voucher (Jika ada)</p>
            <div className="flex gap-2 md:gap-4 w-full">
              <input
                type="text"
                className="w-full h-12 bg-transparent outline-none border border-[#C8CCD0] px-[10px] py-1 rounded-md placeholder-[#6C717A]"
                placeholder="Masukkan kode voucher"
              />
              <button className="rounded-full bg-[#2F3334] px-6 py-3">
                Gunakan
              </button>
            </div>
          </div>
          {/* ringkasan transaksi */}
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <p className="text-lg">Ringkasan Transaksi</p>
            <div className="flex flex-col w-full lg:w-1/2">
              <div className="flex w-full justify-between">
                <p className="text-[#C1C2C4]">Paket Premium Individual</p>
                <p>Rp.49,000</p>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-[#C1C2C4]">Biaya Admin</p>
                <p>Rp.3,000</p>
              </div>
              <div className="flex w-full justify-between text-lg">
                <p className="text-[#C1C2C4]">Total Pembayaran</p>
                <p>Rp.52,000</p>
              </div>
            </div>
          </div>
          {/* bayar */}
          <div>
            <button
              className="px-7 py-[10px] bg-[#09147A] rounded-full"
              onClick={() => {
                navigate("/payments/bca-virtual-account");
              }}
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
