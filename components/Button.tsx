import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="mt-3 w-full bg-black text-white py-2 rounded-md 
      transition-colors duration-300 hover:bg-gray-400 active:scale-95 focus:bg-black focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
