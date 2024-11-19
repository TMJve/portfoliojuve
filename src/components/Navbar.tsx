import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-amber-500 p-4 sticky top-0 z-50 shadow-md font-title">
      {/* Desktop and Tablet View */}
      <ul className="hidden md:flex justify-center space-x-8">
        <li>
          <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
        </li>
        {/* Smaller Download CV Button */}
      </ul>

      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden flex justify-between items-center">
        <button onClick={toggleMenu} className="text-amber-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} text-center mt-4`}>
        <ul>
          <li>
            <a href="#home" className="block py-2 hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="block py-2 hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 hover:text-teal-400 transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          {/* Smaller Download CV Button for Mobile */}
          <li className="mt-4">
            <a
              href="/path/to/your/cv.pdf" // Replace with the actual path to your CV
              download="Steven_Juve_CV.pdf" // File name for download
              className="bg-black border-amber-500 text-white py-2 px-4 rounded-md font-body text-sm hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
