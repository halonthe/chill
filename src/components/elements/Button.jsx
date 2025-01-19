import React from "react";

const Button = ({ label, bgColor }) => {
  return (
    <button
      className={`h-6 px-3 sm:h-10 sm:px-6 ${bgColor} rounded-[48px] flex items-center justify-center sm:text-base`}
    >
      {label}
    </button>
  );
};

export default Button;
