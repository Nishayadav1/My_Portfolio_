import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={`relative px-5 py-2 rounded-md font-semibold bg-gradient-to-r from-gray-400 via-gray-500 to-blue-400 text-white shadow-md border border-gray-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 hover:scale-105 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;