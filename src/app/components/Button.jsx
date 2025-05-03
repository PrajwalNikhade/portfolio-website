import React from "react";

const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-2xl p-2 border-2 w-fit hover:border-0 hover:bg-[#FDC435] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;