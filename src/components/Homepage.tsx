import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Button from './Button'; 
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ReactTyped } from 'react-typed';

interface HomepageProps {
  title: string;
  subtitle?: string;
}

const Homepage: React.FC<HomepageProps> = ({ title, subtitle }) => {
  const [fadeIn, setFadeIn] = useState(false);

  
  useEffect(() => {
    setFadeIn(false); 
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 10);

    // Clean up timer on unmount
    return () => clearTimeout(timer);
  }, [title, subtitle]);

  return (
    <>
      <Navbar />
      <div
        className={`${
          fadeIn ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-1000 bg-black text-center text-amber-500 min-h-screen flex flex-col justify-center px-4 sm:px-6 relative`}
      >
        <h1 className="text-4xl sm:text-5xl font-title">{title}</h1>
        <h2 className="text-3xl sm:text-4xl mt-2 text-white">
          <ReactTyped 
              strings={[
                "A Cybersecurity Practicioner.",
                "A Security Analyst.",
                "A Pentester.",
                "A Developer."
              ]} 
              typeSpeed={100}
              backSpeed={100} 
              loop={true} 
            />
        </h2>
        {subtitle && (
          <h3 className="text-xl sm:text-2xl text-gray-300 mt-2 font-body">
            {subtitle}
          </h3>
        )}
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-body text-sm sm:text-base">
          Welcome to my portfolio website! Dive into my projects, skills, and contact details.
        </p>

        {/* Button Container */}
        <div className="mt-3 mb-20 flex justify-center gap-6">
          {/* Get To Know Me Button */}
          <Button text="Get To Know Me" link="#aboutme" />

          {/* Download CV Button */}
          {/* <a
            href="/path/to/your/cv.pdf" // Replace with the actual path to your CV file
            download="Your_Name_CV.pdf" // Replace with the desired download filename
            className="bg-black text-amber-500 border-amber-500 py-2 px-6 border-2 font-body text-lg sm:text-xl hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 flex items-center gap-2"
          >
            <FaDownload size={20} />
            <span>Download CV</span>
          </a> */}
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-8 text-amber-500">
        <a
          href="https://www.linkedin.com/in/steven-juve-suryanata-b5110921a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="mailto:suryanatajuve@gmail.com"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <HiOutlineMail size={40} />
        </a>
        <a
          href="https://github.com/TMJve"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub size={40} />
        </a>
      </div>
    </>
  );
};

export default Homepage;
