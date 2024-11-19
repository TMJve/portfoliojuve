import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "R4mpart-Arsenale",
    description:
      "This project is an ongoing personal endeavor where I am developing a Command-Line Interface (CLI) framework tailored specifically for reconnaissance and bug bounty activities. Currently, it is designed for personal use as it reflects my unique approach and workflow for conducting recon. Since methodologies can vary significantly depending on individual preferences, this tool is primarily focused on optimizing the steps I typically follow, but it has the potential to be adapted for broader use in the future.",
    image: "/images/r4.png",
    link: "https://github.com/TMJve/r4mpart_arsenal",
  },
  {
    title: "Wazuh Lab",
    description:
      "An interactive dashboard for monitoring security events. Installed Wazuh to an Ubuntu server, for practicing Security Analysis.",
    image: "/images/wazuhlab.png",
    link: "#",
  },
  {
    title: "ATMA JIUJITSU ID",
    description:
      "A full-stack Web-app, an E-Academy platform for a Brazillian Jiujitsu Gym with many features like authorization and authentication, admin panel, and video-based learning system.",
    image: "/images/atma.png",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="bg-black text-white py-16 px-6 overflow-x-hidden">
      {/* Section Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-title text-center text-amber-500 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      {/* Projects List */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col sm:flex-row items-center bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ${
              index % 2 === 1 ? "sm:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Adjusted offset
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image Section */}
            <div className="sm:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-100 object-cover sm:rounded-l-lg sm:rounded-none"
              />
            </div>

            {/* Content Section */}
            <div className="sm:w-1/2 p-8 sm:py-12 sm:px-10">
              <h2 className="text-3xl font-bold text-amber-500">{project.title}</h2>
              <p className="text-gray-400 mt-4 leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-amber-500 hover:text-amber-300 transition-colors duration-300"
              >
                Learn More &rarr;
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gradient Divider */}
      <div className="mt-16 h-1 bg-gradient-to-r from-amber-500 via-red-500 to-blue-500 max-w-xs mx-auto"></div>
    </div>
  );
};

export default Projects;
