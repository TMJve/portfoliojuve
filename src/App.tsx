import React, { useEffect, useState } from 'react';
import LoadingAnimation from './components/LoadingAnimation';

import './App.css';
import Homepage from './components/Homepage';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingAnimation /> 
      ) : (
        <>
          <Homepage title="Hello! I'm Juve!" />
          <AboutMe />
          <Skills />
          <Certifications />
          <Projects />
        </>
      )}
    </div>
  );
}

export default App;
