import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certifications = [
  {
    title: "Certified AppSec Practicioner (CAP)",
    description: "An Entry-level certification for application security from The SecOps Group.",
    imageUrl: "/images/cap.png",
  },
  {
    title: "SOC Analyst L1",
    description: "An Entry-level certification for SOC Analysts from JadiHacker.",
    imageUrl: "/images/soc.png",
  }
];

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<null | typeof certifications[0]>(null);

  return (
    <div id="certifications" className="bg-gray-900 text-white py-16 px-6">
      <h1 className="text-4xl sm:text-5xl text-amber-500 font-title text-center mb-10">Certifications</h1>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedCert(cert)} 
            whileHover={{ scale: 1.05 }}
          >
            <img src={cert.imageUrl} alt={cert.title} className="rounded-md mb-4 w-full h-40 object-cover" />
            <h2 className="text-xl font-title">{cert.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-lg p-6 max-w-lg w-full relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              >
                ✕
              </button>

              {/* Modal Content */}
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full rounded-md mb-4"
              />
              <h2 className="text-2xl font-title mb-2">{selectedCert.title}</h2>
              <p className="text-gray-700">{selectedCert.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-12 sm:mt-16 h-1 bg-gradient-to-r from-amber-500 via-red-500 to-blue-500 max-w-xs sm:max-w-md mx-auto"></div>
    </div>   
  );
};

export default Certifications;
