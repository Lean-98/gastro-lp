import React from 'react';
import { ButtonInterface } from '../../../interfaces/button.interface';

export const Button: React.FC<ButtonInterface> = ({ text, className }) => {
  return (
    <button
      className={`${className} px-8 py-2 text-base font-medium leading-6 text-center text-white bg-orange-500 rounded shadow ripple hover:shadow-lg hover:bg-transparent hover:text-orange-500 hover:border-orange-500 hover:border-2 focus:outline-none transition-all`}
    >
      {text}
    </button>
  );
};
