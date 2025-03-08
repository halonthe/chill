import { useRef } from "react";
import { FaPen } from "react-icons/fa6";

const InputFormProfile = ({ placeholder, type }) => {
  const inputRef = useRef();
  return (
    <div className="mb-8">
      <div className="w-full bg-[#22282A] flex justify-between items-center px-4 py-2 rounded-md border border-[#E7E3FC]/[.23]">
        {/* input */}
        <div className="flex flex-col w-full">
          <label htmlFor={type} className="text-base text-[#9D9EA1]">
            {type === "username" && "Nama Pengguna"}
            {type === "email" && "Email"}
            {type === "password" && "Kata Sandi"}
          </label>
          <input
            type={type === "password" ? "password" : "text"}
            className="text-lg bg-transparent w-full border-none outline-none"
            placeholder={type === "password" ? "**********" : placeholder}
            disabled
            name={type}
            ref={inputRef}
          />
        </div>
        <FaPen
          className="cursor-pointer w-6 h-6"
          onClick={() => {
            inputRef.current.disabled = false;
            inputRef.current.focus();
          }}
        />
      </div>
      {/* hint */}
      {/* <span className="text-[#747674] text-xs">
        this is a hint text to help user
      </span> */}
    </div>
  );
};

export default InputFormProfile;
