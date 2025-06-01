import React from "react";

const Button = ({ children, className, onClick, type = "button", disabled, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-2xl p-2 border-2 w-fit hover:border-0 hover:bg-[#FDC435] ${className} md:bg-white bg-[#FDC435] ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;