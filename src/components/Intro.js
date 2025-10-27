import React from 'react';

const Intro = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 bg-zinc-900 flex items-center justify-center z-[100] transition-transform duration-1000 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <h1 className="text-white text-6xl md:text-8xl font-bold">
        Hola Amigo!
      </h1>
    </div>
  );
};

export default Intro;
