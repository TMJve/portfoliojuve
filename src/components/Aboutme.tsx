import React from "react";
import { FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const AboutMe: React.FC = () => {
  return (
    <div id="aboutme" className="bg-white text-black min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
      {/* Section Title */}
      <h1 className="text-4xl sm:text-5xl font-title mb-4 mt-8 sm:mt-5">About Me</h1>
      
      {/* Short Introduction */}
      <p className="text-lg sm:text-xl text-gray-700 font-body mb-8 max-w-3xl text-center">
        Hello! I'm Juve, a passionate Cybersecurity Practitioner who started as a backend programmer and now joined the security field. It was an adventure of actually finding my passion, I specialize in 
        <span className="bg-red-500 text-white px-2">Penetration Testing</span>, and 
        <span className="bg-blue-500 text-white px-2">Security Analysis</span>. My goal is to continuously
        learn and contribute to the field of cybersecurity.
      </p>
      
      {/* Additional Info */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 mb-4 font-body text-sm sm:text-base">
          I'm always eager to collaborate on challenging projects that help
          strengthen security and mitigate risks. Whether it's vulnerability
          assessment, secure software development, or incident response, I thrive
          in dynamic environments where I can apply my skills and grow professionally.
        </p>
        
        <div className="mt-8 text-center">
          <a
            href="/images/cv.pdf"
            download="Steven_Juve_Suryanata_cv.pdf" 
            className="bg-amber-500 text-white border-amber-500 py-2 px-4 border-2 font-body text-lg sm:text-xl hover:bg-white hover:text-black hover:border-black transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaDownload size={20} /> 
            <span>Download CV</span>
          </a>
        </div>

        <img
          src="/images/juve.png" 
          alt="Steven"
          className="rounded-md w-32 h-32 object-cover mt-8 sm:h-48 sm:w-48"
        />
      </div>
    </div>
  );
};

export default AboutMe;
