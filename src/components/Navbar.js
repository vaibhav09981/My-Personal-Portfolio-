import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-black/50 z-50 px-8 py-3">
      <div className="flex justify-center items-center">
        {/* Desktop Nav Links */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          <a href="#home" className="text-white hover:text-white/90 transition-colors duration-200 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-white hover:text-white/90 transition-colors duration-200 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="text-white hover:text-white/90 transition-colors duration-200 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-white hover:text-white/90 transition-colors duration-200 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-white/90 transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="text-white hover:text-white/90 transition-colors duration-200" onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className="text-white hover:text-white/90 transition-colors duration-200" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" className="text-white hover:text-white/90 transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#resume" className="bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 px-4 py-2 rounded-lg hover:bg-cyan-500/30 transition-colors duration-200 inline-block" onClick={() => setIsOpen(false)}>Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
