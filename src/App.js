import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 310); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black w-full m-0 p-0 font-poppins">
      <Intro isVisible={showIntro} />
      {!showIntro && (
        <>
          <Navbar />
          <Hero />
          <About />
        </>
      )}
    </div>
  );
}

export default App;
