import React from 'react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiSqlite, SiHtml5 } from 'react-icons/si';

const Projects = () => {
  const logos = [
    <SiReact key="react" className="text-white w-12 h-12 mx-4" />,
    <SiNextdotjs key="next" className="text-white w-12 h-12 mx-4" />,
    <SiTailwindcss key="tailwind" className="text-white w-12 h-12 mx-4" />,
    <SiJavascript key="js" className="text-white w-12 h-12 mx-4" />,
    <SiSqlite key="sql" className="text-white w-12 h-12 mx-4" />,
    <SiHtml5 key="html" className="text-white w-12 h-12 mx-4" />,
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-6 bg-black">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        My Projects
      </h2>

      {/* Explore Text */}
      <p className="text-xl text-gray-400 mb-8">
        Explore my projects here :-
      </p>

      {/* Explore Button */}
      <a
        href="https://github.com/vaibhav09981"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition-all duration-200 mb-16 active:scale-95"
      >
        Explore Projects
      </a>

      {/* Tech Stack Text */}
      <p className="text-xl text-gray-400 mb-8">
        Tech stack I use
      </p>

      {/* Infinite Carousel */}
      <div className="overflow-hidden w-full max-w-4xl">
        <div className="flex animate-scroll whitespace-nowrap w-[200%]">
          {[...logos, ...logos]} {/* Duplicate for seamless loop */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
