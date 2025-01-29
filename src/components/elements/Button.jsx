import React from "react";

const Button = ({ label, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-6 px-3 md:h-10 md:px-6 ${bgColor} rounded-[48px] flex items-center justify-center text-xs md:text-base`}
    >
      {label}
    </button>
  );
};

export default Button;
