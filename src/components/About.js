import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-6 bg-black">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Interested in knowing more about me
      </h2>

      {/* Subtext */}
      <p className="text-xl text-gray-400 mb-16">
        What I offer
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Frontend Development Card */}
        <div className="bg-[#403E3E] rounded-lg p-8 hover:scale-105 transition-transform duration-300">
          <img src="/frontend.png" alt="Frontend Development" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            Frontend Development
          </h3>
          <p className="text-gray-300">
            Building clean, responsive websites and apps with modern frameworks like React and Tailwind CSS.
          </p>
        </div>

        {/* UI/UX Design Card */}
        <div className="bg-[#403E3E] rounded-lg p-8 hover:scale-105 transition-transform duration-300">
          <img src="/uiux.png" alt="UI/UX Design" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            UI/UX Design
          </h3>
          <p className="text-gray-300">
            Designing intuitive and enjoyable interfaces that enhance user experience and engagement.
          </p>
        </div>

        {/* Marketing and Outreach Card */}
        <div className="bg-[#403E3E] rounded-lg p-8 hover:scale-105 transition-transform duration-300">
          <img src="/marketing.png" alt="Marketing and Outreach" className="w-16 h-16 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-white mb-2">
            Marketing and Outreach
          </h3>
          <p className="text-gray-300">
            Promoting digital products through effective marketing strategies and community outreach initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
