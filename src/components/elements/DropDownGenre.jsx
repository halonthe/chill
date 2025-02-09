import { useState } from "react";

const DropDownGenre = () => {
  const data = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller",
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="hidden lg:block w-[392px] h-[296px]">
      {/* button */}
      <div
        className="bg-[#22282A] active:bg-[#3D4142] w-[115px] h-[44px] rounded-lg flex items-center justify-between px-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>Genre</span>
        <img src="/img/icons/KeyboardArrowDown.png" alt="" />
      </div>
      {/* show genre list*/}
      {open && (
        <div className="bg-[#22282A] w-full rounded-lg">
          <ul className="grid grid-rows-7 grid-flow-col">
            {data.map((item, index) => (
              <li
                className="hover:bg-[#3D4142] hover:rounded-lg px-3 py-2 w-[196px] text-sm cursor-pointer"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownGenre;
