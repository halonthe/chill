import React from "react";
import CardPrice from "../components/elements/CardPrice";

const ConfirmPaymentPage = () => {
  return (
    <section className="max-w-[1440px] w-full px-5 sm:px-20 py-5 sm:py-10">
      <div className="w-full text-center p-6 bg-[#22282A] flex flex-col gap-2 md:gap-4 rounded-xl">
        <p>Lakukan Pembayaran Sebelum</p>
        <div className="flex justify-center gap-2 md:gap-4 text-xl">
          <div>
            <span className="align-bottom text-base md:text-2xl">00</span>
            <span className="align-top text-[#C1C2C4] text-xs md:text-lg">
              {" "}
              jam
            </span>
          </div>
          <span>:</span>
          <div>
            <span className="align-bottom text-base md:text-2xl">14</span>
            <span className="align-top text-[#C1C2C4] text-xs md:text-lg">
              {" "}
              menit
            </span>
          </div>
          <span>:</span>
          <div>
            <span className="align-bottom text-base md:text-2xl">58</span>
            <span className="align-top text-[#C1C2C4] text-xs md:text-lg">
              {" "}
              detik
            </span>
          </div>
        </div>
      </div>
      <h3 className="text-xl sm:text-3xl my-5 md:my-10">
        Ringkasan Pembayaran
      </h3>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
        {/* card */}
        <div>
          
          <CardPrice
            plan="Individual"
            price="49,990"
            totalAccount="1"
            quality="720p"
          />
        </div>
        {/* confirm payment */}
        <div className="w-full flex flex-col gap-4">
          {/* method */}
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <p className="text-lg">Metode Pembayaran</p>
            <div className="flex w-full h-12 gap-2 px-[10px] py-1 border border-[#E0E0E0] rounded-md items-center text-sm">
              <input type="radio" id="va" name="va" value="va" />
              <img src="/img/icons/bca.png" alt="" />
              <label>BCA Virtual Account</label>
            </div>
            <div className="flex justify-between text-xs md:text-base">
              <p className="text-[#C1C2C4]">Tanggal Pembelian</p>
              <p>08 Juni 2023</p>
            </div>
            <div className="flex justify-between text-xs md:text-base">
              <p className="text-[#C1C2C4]">Kode Pembayaran</p>
              <div className="flex items-center gap-2">
                <p>3KDJ5XFOV</p>
                <img
                  src="/img/icons/ContentCopy.png"
                  alt=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* ringkasan transaksi */}
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <p className="text-lg">Ringkasan Transaksi</p>
            <div className="flex flex-col w-full">
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
          {/* tata cara pembayaran */}
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <p className="text-lg">Tata Cara Pembayaran</p>

            <ol className="list-decimal list-inside text-[#C1C2C4]">
              <li>
                Buka aplikasi BCA Mobile Banking atau akses BCA Internet
                Banking.
              </li>
              <li>
                Login ke akun Anda. Pilih menu "Transfer" atau "Pembayaran".
              </li>
              <li>
                Pilih opsi "Virtual Account" atau "Virtual Account Number".
              </li>
              <li>
                Masukkan nomor virtual account dan jumlah pembayaran, lalu
                konfirmasikan pembayaran.
              </li>
            </ol>
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

export default ConfirmPaymentPage;
