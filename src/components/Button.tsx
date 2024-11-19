
import React from 'react';

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <div className="mt-10 mb-20">
      <a
        href={link}
        className="bg-amber-500 text-black py-2 px-6 border-2 border-transparent font-body text-lg sm:text-xl hover:bg-black hover:text-amber-500 hover:border-amber-500 transition-all duration-300"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
