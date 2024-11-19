import React, { useState, useEffect } from "react";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-container bg-black text-white flex items-center justify-center fixed inset-0 z-50">
      <div className="glitch" data-text="JUVE">
        Jv.
      </div>
    </div>
  );
};

export default LoadingAnimation;
